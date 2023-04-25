import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import Login from "../Modal/Login";
import Register from "../Modal/Register";
import profile from "../img/asu.png";
import icprofile from "../img/icon/profile.png";
import filmlogo from "../img/icon/filmlogo.png";
import iclogout from "../img/icon/logout.png";
import polygon from "../img/polygon.png";
import React, { useState } from "react";

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

function Navbaradmin(props) {
  const [isLogout, setIsLogout] = useState(false);

  const handleLogout = () => {
    setIsLogout(true);
  };

  if (isLogout) {
    return <Inilogin loginlagi={props.inivalues} />;
  }

  const width = {
    width: "100%",
  };

  return (
    <div className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <div className="d-flex justify-content-between wrap-navbar" style={width}>
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="nav-buttton d-flex justify-content-between">
            <div className="dropdown position-relative">
              <img type="button" className="w-75 btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" src={profile} />
              <ul class="dropdown-menu bg-black">
                <img className="position-absolute " style={{ bottom: "90px", left: "17px", width: "20px" }} src={polygon} />
                <li>
                  <div className=" d-flex  ms-3 mt-2">
                    <Link className="text-decoration-none" to={"/Profile"}>
                      <img src={filmlogo} style={{ width: "25px" }} />
                      <a class="text-light text-decoration-none ps-2" href="#">
                        Film
                      </a>
                    </Link>
                  </div>
                </li>
                <div className="bg-secondary w-100 mt-2" style={{ padding: "1px" }}></div>
                <li>
                  <div className=" d-flex  ms-3 mt-2">
                    <img onClick={handleLogout} src={iclogout} style={{ width: "25px" }} />
                    <a class="text-light text-decoration-none ps-2" href="">
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbaradmin;
