import vinilo1 from "../../img/vinilo1.jpg";
import vinilo2 from "../../img/vinilo2.jpg";
import vinilo3 from "../../img/vinilo3.jpg";
import vinilo4 from "../../img/vinilo4.jpg";



export const Card = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={vinilo1} className="card-img-top" alt="Vinilo 1" />
            <div className="card-body">
              <h5 className="card-title">Vinilo 1</h5>
              <p className="card-text">Descripción del vinilo 1.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={vinilo2} className="card-img-top" alt="Vinilo 2" />
            <div className="card-body">
              <h5 className="card-title">Vinilo 2</h5>
              <p className="card-text">Descripción del vinilo 2.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>


        <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={vinilo3} className="card-img-top" alt="Vinilo 3" />
            <div className="card-body">
              <h5 className="card-title">Vinilo 3</h5>
              <p className="card-text">Descripción del vinilo 3.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={vinilo4} className="card-img-top" alt="Vinilo 4" />
            <div className="card-body">
              <h5 className="card-title">Vinilo 4</h5>
              <p className="card-text">Descripción del vinilo 4.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

