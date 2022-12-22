import "./App.css";
import AdminSignup from "./components/Admin/AddAdmin";
import AdminLogin from "./components/Admin/AdminLogin";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import AddMovie from "./components/Admin/AddMoive";
import UpdateMovie from "./components/Admin/UpdateMovie";
import MovieList from "./components/MovieRanking/MovieList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./layout/Base";
import MovieDetails from "./components/MovieRanking/Details/MovieDetails";
import MovieCard from "./components/MovieRanking/Details/MovieCard";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-black">
        <Routes>
          {/* Role user */}
          <Route path="/" element={<Base />}>
            <Route index element={<Landing/>}></Route>
            <Route path="/user/signup" element={<SignUp />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/movie/list" element={<MovieList />} />
            <Route path="/user/movie/card" element={<MovieCard />} />
            <Route
              path="/user/movie/details/:movieName"
              element={<MovieDetails />}
            />
            {/* Role Admin */}
            <Route path="/admin/signup" element={<AdminSignup />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/addmovie" element={<AddMovie />} />
            <Route path="/admin/updatemovie" element={<UpdateMovie />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
