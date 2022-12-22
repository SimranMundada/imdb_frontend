import { useState } from "react";
import "./AdminLogin.css";
import { useDispatch, useSelector } from "react-redux";
// import { LOGGED_IN } from "../../actions/user";
import { useNavigate } from "react-router-dom";
import { AdminLoginApiCall } from "../../actions/authAction";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(" ");
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  console.log(authState);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token && role == "Admin") {
    navigate("/admin/addmovie");
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Admin Login</h3>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control "
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group d-grid gap-2">
            <input
              type="button"
              className="btn btn-outline-warning"
              value="Login"
              name="login"
              onClick={(e) => dispatch(AdminLoginApiCall(email, password))}
            />
          </div>
          <div>{authState.error || ""}</div>
          <div>{authState.message || ""}</div>
          {}
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
