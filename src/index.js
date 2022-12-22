import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import {combineReducers, configureStore} from "@reduxjs/toolkit"
import authReducer from "./reducer/authReducer";
import signupReducer from "./reducer/signupReducer";
import movieReducer from "./reducer/movieReducer";

const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    signUp: signupReducer,
    movie: movieReducer
  })
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
