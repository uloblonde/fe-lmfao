
import { Link } from "react-router-dom"


export default function Addfilm() {
  
  return (
    <>
      <div className="bg-black py-4">
        <div className="ms-4 me-5  d-flex justify-content-between">
          <div className="d-flex justify-content-evenly align-items-center" style={{width:"275px"}}>
            <h2 className="text-light fs-4" style={{width:"200px"}}>List Film</h2>
            <select class=" form-select w-75  bg-dark text-light" aria-label="Default select example">
              <option selected>Categories</option>
              <option value="1">Movies</option>
              <option value="1">TvSeries</option>
            </select>
          </div>
          <div className="">
            <Link className="text-decoration-none" to="/Adminform">
          <button type="button" className="shadow  btn btn-danger fw-bold w-100 py-2">Add Film</button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}
