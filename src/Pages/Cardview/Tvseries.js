import { Link } from "react-router-dom";
import { API } from "../../config/Api";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

const Tvseries = (props) => {
  let { data: films } = useQuery("tvmvChache", async () => {
    const response = await API.get("/CariFilm");
    return response.data;
  });

  const getTv = films?.filter((item) => item.categoryId === 1);

  return (
    <>
      <div className="wrap bg-black">
        <h2 className="fs-4 text-light ms-4">TV Series</h2>
        <div className="global d-flex justify-content-evenly rounded">
          {getTv?.map((tv) => (
            <Link className="text-decoration-none" to={`/Detail/${tv.id}`}>
              <div className="card bg-black">
                <img src={tv.thumbnailFilm} className="" />
                <h4 className="text-light pt-2">{tv.title}</h4>
                <p className="text-light pt-2">{tv.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

// return(
//     <div className='wrap bg-black'>

//         <h1 className='fs-4 text-light ms-4'>TV Movies</h1>

//         <div className="global d-flex justify-content-evenly rounded">
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//         </div>
//         <h1 className='fs-4 text-light ms-4'>Movies</h1>

//         <div className="global d-flex justify-content-evenly rounded">
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//         </div>
//     </div>

// )

export default Tvseries;
