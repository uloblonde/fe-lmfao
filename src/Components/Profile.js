import icprofile from "../img/icon/akunlogo.png";
import icgender from "../img/icon/genderlogo.png";
import iclocation from "../img/icon/locationlogo.png";
import icmail from "../img/icon/maillogo.png";
import ictlp from "../img/icon/tlplogo.png";
import icvideo from "../img/icon/videologo.png";
import iniprofile from "../img/inilmfao.png";
import React, {useContext} from 'react'
import {useQuery} from 'react-query'
import { UserContext } from "../context/userContext";
import { API } from '../config/Api';


function Profile() {

  const [state] = useContext(UserContext)

  let { data: users } = useQuery('profileCache', async () => {
    const response = await API.get('/profile');
    console.log("Hasil Response :",response)
    return response.data.data;
  });

  return (
    <div className="bg-black" style={{ height: "600px" }}>
      <div  style={{ height: "300px", width: "100px", paddingTop: "50px" }}>
        <div className="bg-dark rounded " style={{ width: "750px", height: "500px", marginLeft: "300px" }}>
          <div className="me-4 ms-4">
            <div className="d-flex justify-content-between pt-3">
              <div>
                <h1 className="text-light">Personal Info</h1>
                <div className="d-flex mt-3" style={{ height: "50px" }}>
                  <img src={icprofile} style={{ width: "30px",height:"30px",marginTop:"10px" }} />
                  <div className="ms-3">
                    <h7 className="text-light">{users?.fullName ? users?.fullName : '-'}</h7>
                    <p className="text-secondary">Full name</p>
                  </div>
                </div>
                <div className="d-flex mt-3" style={{ height: "50px" }}>
                  <img src={icgender} style={{ width: "30px",height:"30px",marginTop:"10px" }} />
                  <div className="ms-3">
                    <h7 className="text-light">{users?.gender ? users?.gender : '-'}</h7>
                    <p className="text-secondary">Gender</p>
                  </div>
                </div>
                <div className="d-flex mt-3" style={{ height: "50px" }}>
                  <img src={iclocation} style={{ width: "30px",height:"30px",marginTop:"10px" }} />
                  <div className="ms-3">
                    <h7 className="text-light">{users?.address ? users?.address : '-'}</h7>
                    <p className="text-secondary">Address</p>
                  </div>
                </div>
                <div className="d-flex mt-3" style={{ height: "50px" }}>
                  <img src={icmail} style={{ width: "30px",height:"30px",marginTop:"10px" }} />
                  <div className="ms-3">
                    <h7 className="text-light">{state.user.email}</h7>
                    <p className="text-secondary">Email</p>
                  </div>
                </div>
                <div className="d-flex mt-3" style={{ height: "50px" }}>
                  <img src={ictlp} style={{ width: "30px",height:"30px",marginTop:"10px" }} />
                  <div className="ms-3">
                    <h7 className="text-light">{users?.phone ? users?.phone : '-'}</h7>
                    <p className="text-secondary">Mobile Phone</p>
                  </div>
                </div>
                <div className="d-flex mt-3" style={{ height: "50px" }}>
                  <img src={icvideo} style={{ width: "30px", height:"30px",marginTop:"10px"  }} />
                  <div className="ms-3">
                    <h7 className="text-light">Active</h7>
                    <p className="text-secondary">Status</p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column">
                <img className="rounded mt-4" src={iniprofile}/>
                <button className="btn mt-4 fw-bold text-light p-2 fs-5" style={{background:"red"}}>Change Photo Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
