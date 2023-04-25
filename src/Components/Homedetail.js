import gambarh from "../img/Player2.png";
import cardh from "../img/card/card3.png";
import crs1 from "../img/Film.png";
import crs2 from "../img/Film2.png";
import crs3 from "../img/Film3.png";

function Homedetail() {
  return (
    <div className="position-relative ">
      <img className="gambarmain mw-100" src={gambarh} />

      <div className="bg-black h-100 pt-5 pb-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="d-flex" style={{ height: "210px" }}>
              <img src={cardh} />
              <div className="ms-5 w-50">
                <h2 className="text-light">The Witcher</h2>
                <div className="d-flex pb-2 align-items-center">
                  <p className="pmain text-light pt-3">2019</p>
                  <button type="button" class=" pmain btn btn-outline-light ms-4">
                    Movies
                  </button>
                </div>
                <p style={{ textAlign: "justify", color: "white" ,fontSize:"11pt" }}>
                It is based on the book series of the same name by Polish writer Andrzej Sapkowski.
                 The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to
                 find his place in a world where people often prove more wicked than monsters and beasts.
                </p>
              </div>
            </div>
            <div style={{ height: "210px" }}>
              <div id="carouselExampleControlsNoTouching" className="carousel slide w-100" data-bs-touch="false" data-bs-interval="false" style={{ height: "210px" }}>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={crs1} class="d-block" alt="..."  style={{width:"350px"}}/>
                  </div>
                  <div class="carousel-item">
                    <img src={crs2} class="d-block" alt="..." style={{width:"350px"}}/>
                  </div>
                  <div class="carousel-item">
                    <img src={crs3} class="d-block" alt="..." style={{width:"350px"}} />
                  </div>
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
export default Homedetail;
