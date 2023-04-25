
import joker from '../img/Tvseries.png'
import React, { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { useMutation } from 'react-query';
import { API } from '../config/Api';




export default function Uplans() {
  const [state] = useContext(UserContext)
    let navigate = useNavigate();

    useEffect(() => {
      //change this to the script source you want to load, for example this is snap.js sandbox env
      const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
      //change this according to your client-key
      const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;
    
      let scriptTag = document.createElement("script");
      scriptTag.src = midtransScriptUrl;
      // optional if you want to set script attribute
      // for example snap.js have data-client-key attribute
      scriptTag.setAttribute("data-client-key", myMidtransClientKey);
    
      document.body.appendChild(scriptTag);
      return () => {
          document.body.removeChild(scriptTag);
      };
    }, []);
    
    const handleBuy = useMutation(async (e) => {
      try {
          const config = {
              headers: {
                  "Content-type": "application/json",
              },
          };
          const data = {
              seller_id: state.user.id,
              price: e.price,
          };
    
          const body = JSON.stringify(data);
    
          const response = await API.post("/membuattrans", body, config);
          console.log("transaction success :", response);
    
          const token = response.data.data.token;
          window.snap.pay(token, {
              onSuccess: function (result) {
                  /* You may add your own implementation here */
                  console.log(result);
                  navigate("/Profile");
              },
              onPending: function (result) {
                  /* You may add your own implementation here */
                  console.log(result);
                  navigate("/Profile");
              },
              onError: function (result) {
                  /* You may add your own implementation here */
                  console.log(result);
                  navigate("/Profile");
              },
              onClose: function () {
                  /* You may add your own implementation here */
                  alert("you closed the popup without finishing the payment");
              },
          });
      } catch (error) {
          console.log("transaction failed : ", error);
      }
    })
  return (
    <>
      <div style={{ height: "650px" }} className="bg-black text-center">
        <div style={{ paddingTop: "80px" }}>
          <div className="d-flex justify-content-evenly align-items-center">
            <div class="card border-0" style={{ width: "25rem"}}>
              <div className="bg-dark rounded" style={{height:"200px"}}>
              <ReactPlayer className="card-img-top rounded" url={'https://www.youtube.com/watch?v=zAGVQLHvwOY'} width={400} height={200} />
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold">Premium</h5>
                <p class="card-text text-start fw-bold">-Rp.290.000,00/Month</p>
                <p class="card-text text-start">-Get 1 Merchandise</p>
                <p class="card-text text-start">-Free Popcorn LMFAO</p>
                <a onClick={() => handleBuy.mutate({ price: 149000,  }) } type="submit" class="btn  btn-danger fw-bold">
                  Subscribe
                 
                </a>
              </div>
            </div>

            <div class="card border-0 bg-dark text-light" style={{ width: "25rem" }}>
              <div className="bg-dark rounded" style={{height:"200px"}}>
              <ReactPlayer className="card-img-top rounded" url={'https://www.youtube.com/watch?v=L9giOct92Js'} width={400} height={200} />
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold">Economy</h5>
                <p class="card-text text-start fw-bold">-Rp.300.000,00/Month</p>
                <p class="card-text text-start">-Get 4 Merchandise</p>
                <p class="card-text text-start">-Free Popcorn LMFAO</p>
                <a onClick={() => handleBuy.mutate({ price: 250000 })} type='submit' class="btn  btn-danger fw-bold">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
