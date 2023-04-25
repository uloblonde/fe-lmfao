import gambartv from "../img/Player.png";
import cardimg from "../img/card/card4.png";
import carousel1 from "../img/Film.png";
import carousel2 from "../img/Film2.png";
import carousel3 from "../img/Film3.png";

function Tvdetails() {
  return (
    <div className="position-relative ">
      <img className="gambarmain mw-100" src={gambartv} />

      <div className="bg-black h-100 pt-5 pb-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="d-flex" style={{ height: "210px" }}>
              <img src={cardimg} />
              <div className="ms-5 w-50">
                <h2 className="text-light">Money Heist</h2>
                <div className="d-flex pb-2 align-items-center">
                  <p className="pmain text-light pt-3">2019</p>
                  <button type="button" class=" pmain btn btn-outline-light ms-4">
                    TV Series
                  </button>
                </div>
                <p style={{ textAlign: "justify", color: "white" ,fontSize:"10pt" }}>
                Money Heist is a crime drama on Netflix - originally called La Casa de Papel. 
                Money Heist season 3 has just been released by the streaming service. 
                The plot reads: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a 
                criminal mastermind manipulates the police to carry out his plan."
                </p>
              </div>
            </div>
            <div style={{ height: "210px" }}>
              <div id="carouselExampleControlsNoTouching" className="carousel slide w-100" data-bs-touch="false" data-bs-interval="false" style={{ height: "210px" }}>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={carousel1} class="d-block" alt="..."  style={{width:"350px"}}/>
                  </div>
                  <div class="carousel-item">
                    <img src={carousel2} class="d-block" alt="..." style={{width:"350px"}}/>
                  </div>
                  <div class="carousel-item">
                    <img src={carousel3} class="d-block" alt="..." style={{width:"350px"}} />
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
export default Tvdetails;
