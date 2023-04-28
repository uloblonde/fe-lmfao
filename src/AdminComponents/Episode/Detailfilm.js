import { useParams } from "react-router-dom";
import React,{useState,useEffect} from "react";
import ReactPlayer from "react-player";
import { useMutation, useQuery } from "react-query";
import { API } from "../../config/Api";


function Detafilm() {
  const { id } = useParams();
  const [deleteid, setDelete] = useState(null);
  const [epis,setEpis] = useState([])
  
  

  let { data: film } = useQuery("filmDetailChache", async () => {
    const response = await API.get(`/film/${id}`);
    console.log("response :", response.data.data);
    return response.data.data;
  });
  let { data: epi,refetch} = useQuery("epiChache", async () => {
    const response = await API.get(`/film/${id}/episode`);
    console.log("console episode: ", response);
    setEpis(response.data.data)
    return response.data.data;
  });

  const handleDelete = (e) => {
    e.preventDefault();
    const btnvalue = e.target.value;
    setDelete(Number(btnvalue));
  };

  const deletebyId = useMutation(async (id) => {
    try {
      await API.delete(`/epi/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    deletebyId.mutate(deleteid);
  }, [deleteid]);

  console.log(id);
  

  return (
    <div className="position-relative ">
      <div style={{ paddingLeft: "350px", backgroundColor: "rgb(30, 30, 30)" }}>
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
            <div style={{ height: "210px" }} className="mb-5">
              <div class="dropdown">
                <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Episode
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  {epis?.map((item,index)=>( 
                    <li>
                    <a key={index} value={item.filmId} class="dropdown-item" href={item.linkFilm}>
                      {item.title}
                    </a>
                    <button  onClick={handleDelete} type="buton" className="ms-3 shadow  btn btn-danger fw-bold py-1" style={{width:"50px", fontSize:"8pt"}} name={item.id} value={item.id}>
                        Delete
                    </button>
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detafilm;
