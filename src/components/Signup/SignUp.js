import { useState, useEffect } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import "../Signup/signUp.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UserSignUpApiCall } from "../../actions/signUpAction";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [message, setMessage] = useState(" ");
  const dispatch = useDispatch();
  const signState = useSelector((state) => state.signUp);

  useEffect(() => {
    setMessage(" ");
    const fetchData = async () => {
      try {
        setValid(false);
        if (email !== " " && email.includes("@") && email.includes(".")) {
          const res = await axios.post(
            "http://localhost:2323/api/v1/user/checkEmail",
            {
              email: email,
            }
          );
          if (res.data.success) {
            setValid(true);
            setMessage("Valid");
          } else {
            setValid(false);
          }
        }
      } catch (ex) {
        console.log(ex);
        setMessage("Invalid");
      }
    };
    fetchData();
  }, [email]);

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Create Account</h3>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              className="form-control "
              placeholder="Enter first name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group-signin">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              className="form-control "
              placeholder="Enter last name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group-signin">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control "
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            {email.length > 0 ? (
              <>
                {valid ? (
                  <>
                    <AiFillCheckCircle color="green" fontSize={"20px"} />
                    &nbsp;
                    {message}
                  </>
                ) : (
                  <>
                    <AiFillCloseCircle color="red" />
                    &nbsp;
                    {message}
                  </>
                )}
              </>
            ) : (
              " "
            )}
          </div>
          <div className="form-group-signin">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group-signin d-grid gap-2">
            <input
              type="button"
              className="btn btn-outline-warning"
              value="Signup"
              name="signup"
              onClick={(e) =>
                dispatch(
                  UserSignUpApiCall(firstName, lastName, email, password)
                )
              }
            />
          </div>
          <div>{signState.error || ""}</div>
          <div>{signState.message || ""}</div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
