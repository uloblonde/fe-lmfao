import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import Login from "../Modal/Login";
import Register from "../Modal/Register";
import profile from "../img/asu.png";
import icprofile from "../img/icon/profile.png";
import icpay from "../img/icon/pay.png";
import iclogout from "../img/icon/logout.png";
import polygon from "../img/polygon.png";
import filmlogo from "../img/icon/filmlogo.png";
import React, { useState, useContext } from "react";
import { UserContext } from "../context/userContext";

const Inilogin = (props) => {
  const [getLogin, setLogin] = useState(false);
  const [getRegis, setRegis] = useState(false);

  return (
    <>
      <Register showLgn={getLogin} setLgn={setLogin} showRgs={getRegis} setRegis={setRegis} />
      <Login showRgs={getRegis} setRegis={setRegis} showLgn={getLogin} setLgn={setLogin} lmao={props.loginlagi} />
    </>
  );
};

const Profile = (props) => {
  const [isLogout, setIsLogout] = useState(false);

  // const handleLogout = () => {
  //   setIsLogout(true);
  // }
  const [state, dispatch] = useContext(UserContext);

  let navigate = useNavigate();

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };
  console.log("LMFAO :",state);


  if (isLogout) {
    return <Inilogin loginlagi={props.inivalues} />;
  }

  return (
    <div>
      {/* Si Admin */}
      {state.user.role == "admin" ? (
        <div className="dropdown position-relative">
          <img type="button" className="w-75 btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" src={profile} />
          <ul class="dropdown-menu bg-black">
            <img className="position-absolute " style={{ bottom: "120px", left: "17px", width: "20px" }} src={polygon} />
            <li>
              <div className=" d-flex  ms-3 mt-2">
                <Link className="text-decoration-none" to={"/Listfilm"}>
                  <img src={filmlogo} style={{ width: "25px" }} />
                  <a class="text-light text-decoration-none ps-2" href="#">
                    Film
                  </a>
                </Link>
              </div>
            </li>
            <li>
              <div className=" d-flex  ms-3 mt-2">
                <Link className="text-decoration-none" to={"/Admintable"}>
                  <img src={filmlogo} style={{ width: "25px" }} />
                  <a class="text-light text-decoration-none ps-2" href="#">
                    Table
                  </a>
                </Link>
              </div>
            </li>
            <div className="bg-secondary w-100 mt-2" style={{ padding: "1px" }}></div>
            <li>
              <div className=" d-flex  ms-3 mt-2">
                <img onClick={logout}   src={iclogout} style={{ width: "25px" ,cursor:"pointer"}} />
                <a onClick={logout}  class="text-light text-decoration-none ps-2" href="">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
        // localStorage.removeItem("token")
      ) : (
        <div className="dropdown position-relative">
          <img type="button" className="w-75 btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" src={profile} />
          <ul class="dropdown-menu bg-black">
            <img className="position-absolute " style={{ bottom: "120px", left: "17px", width: "20px" }} src={polygon} />
            <li>
              <div className=" d-flex  ms-3 mt-2">
                <Link className="text-decoration-none" to={"/Profile"}>
                  <img src={icprofile} style={{ width: "25px" }} />
                  <a class="text-light text-decoration-none ps-2" href="#">
                    Profile
                  </a>
                </Link>
              </div>
            </li>
            <li>
              <div className=" d-flex  ms-3 mt-2">
                <Link className="text-decoration-none" to={"/Pay"}>
                  <img src={icpay} style={{ width: "25px" }} />
                  <a class="text-light text-decoration-none ps-2" href="#">
                    Pay
                  </a>
                </Link>
              </div>
            </li>
            <div className="bg-secondary w-100 mt-2" style={{ padding: "1px" }}></div>
            <li>
              <div className=" d-flex  ms-3 mt-2">
                <img src={iclogout} style={{ width: "25px" }} />
                <a onClick={logout} class="text-light text-decoration-none ps-2" href="">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

function Navbar(props) {
  const [state] = useContext(UserContext);

  const width = {
    width: "100%",
  };

  return (
    <div className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <div className="d-flex justify-content-between wrap-navbar" style={width}>
          <div className="navbar-nav">
            {state.user.role == "admin" ? (
              <div className="nav-logo mt-2">
                <Link to="/">
                  <img src={logo} />
                </Link>
              </div>
            ) : (
              <div className="navbar-nav">
                <Link to="/" className="text-decoration-none">
                  <a className="nav-link text-light">Home</a>
                </Link>
                <Link to="/Tvseries" className="text-decoration-none">
                  <a className="nav-link text-light" href="/Tvseries">
                    Tv Show
                  </a>
                </Link>
                <Link to="/Mvs" className="text-decoration-none">
                  <a className="nav-link text-light" href="/Mvs">
                    Movies
                  </a>
                </Link>
              </div>
            )}
          </div>
          {state.user.role == "admin" ?(
            <div>

            </div>
          ):(
          <div className="nav-logo">
            <Link to="/">
              <img className="me-5 pe-4" src={logo} />
            </Link>
          </div>
          )}
          <div className="nav-buttton d-flex justify-content-between ">{state.isLogin ? <Profile /> : <Inilogin loginlagi={props.inivalues} />}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
