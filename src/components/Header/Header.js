import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      {!localStorage.getItem("token") ? (
        <div className="imdb-header">
          <div id="logo" onClick={props.onLogoClick}>
            <img
              id="imdb-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
              alt="IMDB LOGO"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div id="title">IMDB Clone</div>
          <div id="button">
            <input
              type="button"
              name="signup"
              value="Admin Login"
              onClick={() => {
                navigate("/admin/login");
              }}
              className="header-buttons"
            />
            <input
              type="button"
              name="login"
              value="Login"
              className="header-buttons "
              onClick={() => {
                navigate("/user/login");
              }}
            />
          </div>
        </div>
      ) : (
        <div className="imdb-header">
          <div id="logo">
            <img
              id="imdb-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
              alt="IMDB LOGO"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div id="title">IMDB Clone</div>
          <div id="button">
            <input
              type="button"
              name="login"
              value="Log Out"
              className="header-buttons"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                navigate("/");
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
