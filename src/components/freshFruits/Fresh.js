import img1 from "../assests/orange.png"
import img2 from "../assests/grapes.png"
import img3 from "../assests/gauva.png"

function Fresh() {
   return(

    <section id="fruits">
  <div className="container mt-lg-5">
    <div className="row text-center">
      <div className="col">
        <h1 className="fw-bold">Fresh Fruits</h1>
        <p>
          There are many variation of passages of loremipsum available,but the
          mojarity have{" "}
        </p>
      </div>
    </div>
    <div className="row mt-lg-5">
      <div className="col-lg-8 col-sm-12">
        <h1 className="fw-bold">Best Fresh Orange</h1>
        <br />
        <p>
          but the mojarity have suffered alteration in some from, by injected
          humor,or randomised words which don't look even slighty believable.If
          you are going to use a passage of lorem ipsum, you need to be
        </p>
        <br />
        <button className="btn btn-dark rounded-0 btn-lg">Buy Now</button>
      </div>
      <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
        <img
          src={img1}
          alt=""
          className="img-fluid w-70 m-4"
        />
      </div>
    </div>
    <div className="row mt-lg-5">
      <div className="col-lg-8 col-sm-12s mt-5">
        <h1 className="fw-bold">Best Fresh Grapes</h1>
        <br />
        <p>
          but the mojarity have suffered alteration in some from, by injected
          humor,or randomised words which don't look even slighty believable.If
          you are going to use a passage of lorem ipsum, you need to be
        </p>
        <br />
        <button className="btn btn-dark rounded-0 btn-lg">Buy Now</button>
      </div>
      <div className="col-4 d-flex justify-content-center my-5">
        <img
          src={img2}
          alt=""
          className="img-fluid  w-50  image"
        />
      </div>
    </div>
    <div className="row mt-lg-5">
      <div className="col-lg-8 col-sm-12 mt-4">
        <h1 className="fw-bold">Best Fresh Gauva</h1>
        <br />
        <p>
          but the mojarity have suffered alteration in some from, by injected
          humor,or randomised words which don't look even slighty believable.If
          you are going to use a passage of lorem ipsum, you need to be
        </p>
        <br />
        <button className="btn btn-dark rounded-0 btn-lg">Buy Now</button>
      </div>
      <div className="col-4 d-flex justify-content-center my-5">
        <img
          src={img3}
          alt=""
          className="img-fluid w-70  image"
        />
      </div>
    </div>
  </div>
</section>

   ) 
}
export default Fresh;