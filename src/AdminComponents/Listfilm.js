import { Link } from "react-router-dom";
import { API } from "../config/Api";
import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";

const Listfilm = (props) => {
  const [categories, setCategories] = useState(null);
  const [selectedValue, setSelectedValue] = useState("TV Series");
  const [deleteid, setDelete] = useState(null);

  const getCategory = async () => {
    try {
      const response = await API.get("/caricat");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    const btnvalue = e.target.value;
    setDelete(Number(btnvalue));
  };

  let { data: films, refetch } = useQuery("filmChache", async () => {
    const response = await API.get("/CariFilm");
    console.log("data :", response.data);
    return response.data;
  });

  const deletebyId = useMutation(async (id) => {
    try {
      await API.delete(`/film/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    deletebyId.mutate(deleteid);
  }, [deleteid]);

  const catTv = films?.filter((film) => film.categoryId === 1);
  const catMvs = films?.filter((film) => film.categoryId === 2);

  return (
    <>
      <div className="bg-black py-4">
        <style>{'body { background-color: black; }'}</style>
        <div className="ms-4 me-5  d-flex justify-content-between">
          <div className="d-flex justify-content-evenly align-items-center" style={{ width: "275px" }}>
            <h2 className="text-light fs-4" style={{ width: "200px" }}>
              List Film
            </h2>
            <select value={selectedValue} onChange={handleChange} class=" form-select w-75  bg-dark text-light" aria-label="Default select example">
              {categories?.map((cat) => (
                <option value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div className="d-flex">
            <Link className="text-decoration-none" to="/Adminform">
              <button type="button" className="shadow  btn btn-danger fw-bold w-100 py-2">
                Add Film
              </button>
            </Link>
            <Link className="text-decoration-none ms-5" to="/Adminformepi">
              <button type="button" className="shadow  btn btn-danger fw-bold w-100 py-2">
                Add Episode
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-wrap bg-black global d-flex justify-content-evenly">
        {selectedValue === "TV Series" ? (
          <>
            {catTv?.length !== 0 ? (
              <>
                {catTv?.map((item) => (
                  <div>
                    <Link className="text-decoration-none" to={`/Details/${item.id}`}>
                      <div className="card bg-black">
                        <img src={item.thumbnailFilm} className="" />
                        <h4 className="text-light pt-2">{item.title}</h4>
                        <p className="text-light pt-2">{item.year}</p>
                      </div>
                    </Link>
                    <div className="d-flex justify-content-between">
                      <button onClick={handleDelete} type="buton" className="shadow  btn btn-danger fw-bold  " style={{width:"70px"}} name={item.id} value={item.id}>
                        Delete
                      </button>
                      <Link to={`/Updatefilm/${item.id}`}>

                      <button  type="buton" className="shadow  btn btn-success fw-bold  " style={{width:"70px"}} name={item.id} value={item.id}>
                        Update
                      </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h1 className="text-5xl mx-auto mt-40">Tv Shows Not Found!</h1>
            )}
          </>
        ) : (
          <>
            {catMvs?.length !== 0 ? (
              <>
                {catMvs?.map((item) => (
                  <div>
                    <Link className="text-decoration-none" to={`/Detail/${item.id}`}>
                      <div className="card bg-black">
                        <img src={item.thumbnailFilm} className="" />
                        <h4 className="text-light pt-2">{item.title}</h4>
                        <p className="text-light pt-2">{item.year}</p>
                      </div>
                    </Link>
                    <div className="d-flex justify-content-between">
                      <button onClick={handleDelete} type="buton" className="shadow  btn btn-danger fw-bold  " style={{width:"70px"}} name={item.id} value={item.id}>
                        Delete
                      </button>
                      <button type="buton" className="shadow  btn btn-success fw-bold  " style={{width:"70px"}} name={item.id} value={item.id}>
                        Update
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h1 className="text-5xl mx-auto mt-40">Movies Not Found!</h1>
            )}
          </>
        )}
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

export default Listfilm;
