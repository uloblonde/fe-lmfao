
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import { API } from "../config/Api";

function Moviesdetail() {
  
  const { id } = useParams()
  const [epis,setEpis] = useState([])

  let { data: film } = useQuery('filmDetailChache', async () => {
    const response = await API.get(`/film/${id}`)
    console.log("response :",response)
    return response.data.data
  })
  let { data: epi } = useQuery("epiChache", async () => {
    const response = await API.get(`/film/${id}/episode`);
    console.log("console episode: ", response);
    setEpis(response.data.data)
    return response.data.data;
  });

  console.log(id);

  return (
    <div className="position-relative ">
      <div style={{ paddingLeft: "350px", backgroundColor:"rgb(30, 30, 30)" }}>
      {epi && (
        <ReactPlayer className="z-2" url={epi[0]?.linkFilm}  />
      )}
      </div>
      <div className="bg-black h-100 pt-5 pb-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="d-flex" style={{ height: "210px" }}>
              <img src={film?.thumbnailFilm} />
              <div className="ms-5 w-50">
                <h2 className="text-light">{film?.title}</h2>
                <div className="d-flex pb-2 align-items-center">
                  <p className="pmain text-light pt-3">{film?.year}</p>
                  <button type="button" class=" pmain btn btn-outline-light ms-4">
                    {film?.category.name}
                  </button>
                </div>
                <p style={{ textAlign: "justify", color: "white", fontSize: "11pt" }}>{film?.description}</p>
              </div>
            </div>
            <div style={{ height: "210px" }}>
              <div id="carouselExampleControlsNoTouching" className="carousel slide w-100" data-bs-touch="false" data-bs-interval="false" style={{ height: "210px" }}>
                <div class="carousel-inner">
                {epi?.map((item,i)=>(

                  <div 
                    key={i}
                   class={i === 0 ?"carousel-item relative active" : "carousel-item relative"}>
                    <ReactPlayer url={item.linkFilm} class="d-block" alt="..." width={370} height={218} light={item.thumbnailFilm} />
                    {/* <img className="rounded pointer" src={`http://localhost:5000/uploads/${item.thumbnailFilm}`} style={{maxWidth:"400px"}} /> */}
                    <p className="text-light">Episode : {item.title}</p>
                  </div>
                ))}
                 
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Moviesdetail;
