import "../Login/Login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginApiCall } from "../../actions/authAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  console.log(authState);
  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role")
  const navigate= useNavigate()
  if (token && role=="User") {
    navigate("/user/movie/card");
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">User Login</h3>
          <div className="form-group">
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
            />
          </div>
          <div className="form-group">
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
            />
          </div>
          <div className="form-group d-grid gap-2">
            <input
              type="button"
              className="btn btn-outline-warning"
              value="Login"
              name="login"
              onClick={(e) => dispatch(LoginApiCall(email, password))}
            />
          </div>
          <div>{authState.error || ""}</div>
          <div>{authState.message || ""}</div>
        </div>
      </form>
    </div>
  );
};

export default Login;
