import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignUpApiCall } from "../../actions/signUpAction";
import "./AddAdmin.css";


const AddAdmin = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signState = useSelector(state=>state.signUp)
  const dispatch = useDispatch();
  return (
    <div className="AddAdmin-container ">
      <form className="AddAdmin-form">
        <div className="AddAdmin-form-content">
          <h3 className="AddAdmin-form-title ">Add New Admin</h3>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              className="form-control "
              placeholder="Enter first name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="AddAdmin-group-signin">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              className="form-control "
              placeholder="Enter last name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="AddAdmin-group-signin">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control "
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="AddAdmin-group-signin">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="AddAdmin-group-signin d-grid gap-2">
            <input
              type="button"
              className="btn btn-outline-warning"
              value="Signup"
              name="signup"
              onClick={(e) =>
                dispatch(SignUpApiCall(firstName, lastName, email, password))
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

export default AddAdmin;
