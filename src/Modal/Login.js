import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { API, setAuthToken } from '../config/Api';
import "../CSS/Loginregis.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useMutation } from "react-query";
import { UserContext } from '../context/userContext';


function Login(props) {
  
  const [state, dispatch] = useContext(UserContext)
  const MySwal = withReactContent(Swal);
  const iniShow = () => props.setLgn(true);
  const iniClose = () => props.setLgn(false);
  const [reload,isReload] = useState(false)

  const [getState, setState] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { email, password } = getState;

  const handleOnChange = (e) => {
    setState({
      ...getState,
      [e.target.name]: e.target.value,
    });
  };


  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      // isReload(true)
      // const parsing = localStorage.getItem('data')
      // const hasilparse = JSON.parse(parsing)
      const response = await API.post("/login", getState);

      console.log("succes", response);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data,
        
      });

      setAuthToken(localStorage.token);

      iniClose(props.lmao(true));
      

      MySwal.fire({
        title: <strong>Yeay</strong>,
        text: "Anda Telah Login",
        icon: "success",
      });
    } catch (error) {
      iniShow(props.lmao(false));
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email atau Password Anda Salah",
      });
    }
  });

  // useEffect(()=>{
  //   if(reload){
  //     window.location.reload();
  //   }
  // },[reload])


  return (
    <>
      <Button onClick={iniShow} type="button" className="logres btn btn-danger btn-sm text-light fw-bold">
        Login
      </Button>

      <Modal show={props.showLgn} onHide={iniClose}>
        <Modal.Body className="bg-dark rounded d-flex flex-column align-center">
          <Modal.Title className="text-light ps-5">Login</Modal.Title>
          <Form className="pt-3 w-75" onSubmit={(e)=> handleOnSubmit.mutate(e)}>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Control className="border border-light bg-secondary border-3 text-light ms-5" type="email" name="email" value={email} onChange={handleOnChange} placeholder="Email" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control className="border border-light bg-secondary border-3 text-light ms-5" type="password" name="password" value={password} onChange={handleOnChange} placeholder="Password" autoFocus />
            </Form.Group>
            <Button type="submit" className="w-100 text-center ms-5 fw-bold border-0" style={{ backgroundColor: "red" }}>
              Login
            </Button>
          </Form>

          <div className="m-auto pe-3 pt-4 d-flex text-secondary">
            <p>Don't have an account ? Klik</p>

            <a
              onClick={() => {
                props.setRegis(true);
                iniClose();
              }}
              className="text-decoration-none text-secondary fw-bold"
              href=""
            >
              Here
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

// onClick={() =>  props.sadge(true) }

export default Login;
