import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import icclip from "../../img/icon/cliplogo.png";
import "../../CSS/Mainpage.css";
import { useMutation } from "react-query";
import { API } from "../../config/Api";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Addformfilm() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [cat, setCat] = useState([]);
  const [form, setForm] = useState({
    title: "",
    thumbnailFilm: "",
    year: "",
    description: "",
    categoryId: "",
  });

  const getCategories = async () => {
    try {
      const response = await API.get('/caricat')
      setCat(response.data)
      console.log("data asu : ", response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    });
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      console.log(url)
    }
  };
  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/formdata",
        },
      };
      const formData = new FormData();
      formData.set("title", form.title);
      formData.set("thumbnailFilm", form.thumbnailFilm[0], form.thumbnailFilm[0]);
      formData.set("year", form.year);
      formData.set("description", form.description);
      formData.set("categoryId", Number(form.categoryId));

      const response = await API.post("/buatfilm", formData, config);
      console.log("add film success : ", response);
      MySwal.fire({
        title: <strong>Add Film Success</strong>,
        html: <i>You clicked the button!</i>,
        icon: 'success'
      })
      navigate('/Listfilm')
      
    } catch (error) {
      console.log("add film failed : ", error);
      console.log(form);

      MySwal.fire({
        title: <strong>Sadge</strong>,
        icon: 'error'
      })
    }
  });

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className="bg-black" style={{ height: "600px" }}>
      <section id="project-form">
        <div class="container">
          <h2 class=" mb-2 pt-5 text-light" style={{ marginLeft: "140px" }}>
            Add Film
          </h2>
          <form method="post" class="w-75 mx-auto" onSubmit={(e) => handleOnSubmit.mutate(e)}>
            <input type="text" class="d-none" name="id" />
            <div class="mb-3 d-flex align-items-center">
              <input onChange={handleOnChange} value={form.title} type="text" class="bg-dark form-control text-light w-75 h-50" name="title" id="title" placeholder="Title" style={{ color: "white" }} />
              <div className="position-relative">
                <label type="file" for="attachfile" class="form-label fw-bold bg-dark rounded text-secondary border border-light" style={{ width: "150px", padding: "5px", marginTop: "5px", marginLeft: "70px", fontSize: "10pt" }}>
                  Attach Thumbnail
                  <input onChange={handleOnChange}  type="file" id="thumbnailFilm" name="thumbnailFilm" className="position-absolute" style={{ width: "", opacity: "0", left: "70px", bottom: "10px" }} />
                </label>
                <div for="attachfile" className=" position-absolute" style={{ bottom: "14px", left: "200px" }}>
                  <img className="w-75" src={icclip} style={{}} />
                </div>
              </div>
            </div>

            <div class="mb-3">
              <input onChange={handleOnChange} type="number" class="bg-dark form-control text-light w-100 h-50" name="year" id="projectName" placeholder="Year" width={{}} />
            </div>

            <div class="mb-3">
              <select onChange={handleOnChange} name="categoryId" id="categoryId" class="form-select bg-dark text-light" aria-label="Default select example">
                <option >Category</option>
                {cat &&
                  cat.map((item , index) => (
                    <option key={index} className="text-light bg-dark" name={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div class="mb-3">
              <textarea onChange={handleOnChange} class="form-control bg-dark text-light" id="description" name="description" placeholder="Description" required>
                Description
              </textarea>
            </div>
            <button type="submit" class="bg-danger form-control text-light w-25 h-50 float-end border-0 fw-bold" name="projectName" id="projectName" placeholder="LMFAO" width={{}}>
                save
              </button>
            {/* <div class="mb-3 d-flex align-items-center">
              <input type="text" class="bg-dark form-control text-light w-75 h-50" name="projectName" id="projectName" placeholder="Title Episode" width={{}} />
              <div className="position-relative">
                <label type="file" for="attachfile" class="form-label fw-bold bg-dark rounded text-secondary border border-light" style={{ width: "150px", padding: "5px", marginTop: "5px", marginLeft: "70px", fontSize: "10pt" }}>
                  Attach Thumbnail
                  <input type="file" id="fname" name="fname" className="position-absolute" style={{ width: "", opacity: "0", left: "70px", bottom: "10px" }} />
                </label>
                <div for="attachfile" className=" position-absolute" style={{ bottom: "14px", left: "200px" }}>
                  <img className="w-75" src={icclip} style={{}} />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <input type="text" class="bg-dark form-control text-light w-100 h-50" name="projectName" id="projectName" placeholder="Link Film" width={{}} />
            </div>
            <div class="mb-3">
              <input type="text" class="bg-dark form-control text-light w-100 h-50" name="projectName" id="projectName" placeholder="LMFAO" width={{}} />
            </div>
            <div class="pb-5 mt-4">
              
            </div> */}
          </form>
        </div>
      </section>
    </div>
  );
}
