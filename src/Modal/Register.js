import { useState } from "react";
import { useMutation } from "react-query";
import { API } from "../config/Api";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert"
import "../CSS/Loginregis.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Login(props) {
  const MySwal = withReactContent(Swal);

  const [message, setMessage] = useState(null);
  const [regiss, setRegiss] = useState({
    email: '',
    password: '',
    fullname: '',
    gender: '',
    phone: '',
    address: '',
  });

  const {email,password,fullname,gender,phone,address}=regiss

  const handleOnSubmit = useMutation(async(e) => {
    try {
      e.preventDefault();

      const response = await API.post('/register',regiss);
      console.log("register success : ", response)

      const alert = (
        <Alert variant="success" className="py-1">
          Register success!
        </Alert>
      );

      setRegiss({
        email: '',
        password: '',
        fullname: '',
        gender: '',
        phone: '',
        address: '',
      });
      
      thisClose();

    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed to register!
        </Alert>
      );
      setMessage(alert);
      console.log("register failed : ", error);
    }
  });
  const handleChange = (e) => {
    setRegiss({
      ...regiss,
      [e.target.name]: e.target.value,
    });
  };

  const thisShow = () => props.setRegis(true);
  const thisClose = () => props.setRegis(false);

  return (
    <>
      <button onClick={thisShow} type="button" className="logres btn btn-light btn-sm me-2 text-danger fw-bold">
        Register
      </button>

      <Modal show={props.showRgs} onHide={thisClose}>
        <Modal.Body className="bg-dark rounded d-flex flex-column align-center">
          <Modal.Title className="text-light ps-5">Register</Modal.Title>
          {message && message}
          <form className="pt-3 w-75" onSubmit={(e)=> handleOnSubmit.mutate(e)}>
            <Form.Group className="mb-3 " controlId="emailId">
              <input name="email" id="email" value={email} onChange={handleChange} className="border border-light bg-secondary border-3 text-light ms-5 w-100 rounded p-2" type="email" placeholder="Email" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="passId">
              <input name="password" id="password" value={password} onChange={handleChange} className="border border-light bg-secondary border-3 text-light ms-5 w-100 rounded p-2" type="password" placeholder="Password" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fullnameId">
              <input name="fullname" id="fullname" value={fullname} onChange={handleChange} className="border border-light bg-secondary border-3 text-light ms-5 w-100 rounded p-2" type="text" placeholder="Full Name" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="genderId">
              <input  name="gender" id="gender" value={gender} onChange={handleChange} className="border border-light bg-secondary border-3 text-light ms-5 w-100 rounded p-2" type="text" placeholder="Gender" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phoneId">
              <input name="phone" id="phone" value={phone} onChange={handleChange} className="border border-light bg-secondary border-3 text-light ms-5 w-100 rounded p-2" type="text" placeholder="Phone" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="addressId">
              <input name="address" id="address" value={address} onChange={handleChange} className="border border-light bg-secondary border-3 text-light ms-5 w-100 rounded p-2" type="text" placeholder="Address" autoFocus />
            </Form.Group>

            <button
              onClick={() => {
                if (email && password && fullname && gender && phone && address) {
                  thisClose();
                  MySwal.fire({
                    icon: "success",
                    title: "Oops...",
                    text: "Anda Telah Terdaftar Uhuyyy",
                  });
                } else {
                  thisShow();
                  MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Yeee bodo diisi lah",
                  });
                }
              }}
              type="submit"
              className="w-100 btn btn-light text-center ms-5 fw-bold border-0 bg-white text-danger p-2"
            >
              Register
            </button>
          </form>
          <div className="m-auto pe-3 pt-4 d-flex text-secondary">
            <p>Already have an account ? Klik</p>

            <a
              onClick={() => {
                props.setLgn(true);
                thisClose();
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

export default Login;
