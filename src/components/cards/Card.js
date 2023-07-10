import card1 from '../assests/card-item-1.png'
import card2 from '../assests/card-item-2.png'
import card3 from '../assests/card-item-3.png'


function Card() {
    return(
        <div>
            <div className="row mt-4">
  <div className="col-lg-4 col-sm-12 text-center d-flex justify-content-center">
    <div className="card" style={{ width: "20rem" }}>
      <div className="card-body mb-3 text-center">
        <h5 className="card-title">
          <img
            src={card1}
            alt="images not found"
            className="img-fluid"
          />
        </h5>
        <h3 className="card-subtitle mb-2 text-muted text-color mt-3">
          Orange
        </h3>
        <p className="card-text">
          There are many variation of passages of loremipsum available,but the
          mojarity have suffered alteration in some from, by injected humor,or
          randomised words which don't look even slighty believable.
        </p>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
    <div className="card my-3" style={{ width: "20rem" }}>
      <div className="card-body text-center">
        <h5 className="card-title">
          <img
            src={card2}
            alt="images not found"
            className="img-fluid"
          />
        </h5>
        <h3
          className="card-subtitle mb-2 text-muted text-color mt-3"
          style={{ color: "orangered" }}
        >
          Grapes
        </h3>
        <p className="card-text">
          There are many variation of passages of loremipsum available,but the
          mojarity have suffered alteration in some from, by injected humor,or
          randomised words which don't look even slighty believable.{" "}
        </p>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
    <div className="card" style={{ width: "20rem" }}>
      <div className="card-body text-center">
        <h5 className="card-title">
          <img
            src={card3}
            alt="images not found"
            className="img-fluid"
          />
        </h5>
        <h3
          className="card-subtitle mb-2 text-muted text-color mt-3"
          style={{ color: "orange" }}
        >
          Gauva
        </h3>
        <p className="card-text">
          There are many variation of passages of loremipsum available,but the
          mojarity have suffered alteration in some from, by injected humor,or
          randomised words which don't look even slighty believable.
        </p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
export default Card;