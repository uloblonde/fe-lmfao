import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Movies from "./Pages/Movies";
import Home from "./Pages/Home";
import Tvser from "./Pages/Tvser";
import React, { useState, useContext, useEffect } from "react";
import Profile from "./Components/Profile";
import Uplans from "./Components/Uplans";
import Moviesdetail from "./Components/Moviesdetail";
import Addformfilm from "./AdminComponents/Film/Addformfilm";
import Table from "./AdminComponents/Table";
import { API, setAuthToken } from "../src/config/Api";
import { PrivateRouteAdmin, PrivateRouteLogin, PrivateRouteUser } from "./Components/privateroute/PrivateRoute";
import { UserContext } from "./context/userContext";
import Addfilm from "./AdminComponents/Film/Addfilm";
import Listfilm from "./AdminComponents/Listfilm";
import Updatefilm from "./AdminComponents/Film/Updatefilm";
import Addformepi from "./AdminComponents/Episode/Addformepi";
import Detafilm from "./AdminComponents/Episode/Detailfilm";

const App = () => {
  const [isLogin, setLogin] = useState(false);
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      console.log("check user success : ", response);
      let payload = response.data.data;
      payload.token = localStorage.token;
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.log("check user failed : ", error);
      dispatch({
        type: "AUTH_ERROR",
      });
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Redirect Auth but just when isLoading is false
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate("/");
      }
    }
  }, [isLoading]);
  return isLoading ? null : (
    <React.Fragment>
      <Navbar login={isLogin} value={setLogin} inivalues={setLogin} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/TVseries" element={<Tvser />} />
        <Route exact path="/Mvs" element={<Movies />} />
        <Route element={<PrivateRouteLogin />}>
          <Route element={<PrivateRouteUser />}>
            <Route exact path="/TVseries" element={<Tvser />} />
            <Route exact path="/Mvs" element={<Movies />} />
            <Route exact path="/Pay" element={<Uplans />} />
            <Route exact path="/Profile" element={<Profile />} />
            <Route exact path="/Detail/:id" element={<Moviesdetail />} />
          </Route>
          

          <Route element={<PrivateRouteAdmin />}>
            <Route exact path="/Detail/:id" element={<Moviesdetail />} />
            <Route exact path="/Adminform" element={<Addformfilm />} />
            <Route exact path="/Adminformepi" element={<Addformepi />} />
            <Route exact path="/Admintable" element={<Table />} />
            <Route exact path="/Listfilm" element={<Listfilm />} />
            <Route exact path="/Details/:id" element={<Detafilm />} />
            <Route exact path="/Updatefilm/:id" element={<Updatefilm />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
