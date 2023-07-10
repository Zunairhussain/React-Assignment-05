import img1 from "../assests/1.png";
function Main() {
    return(
        <div>
            <section className="bg-body-tertiary " id="home">
  <div className="container ">
    <div className="row g-lg-5">
      <div className="col-lg-6 col-sm-12 pt-5">
        <h1 className="fw-bold text-main pt-4">Welcome to our Fruits Shop</h1>
        <br />
        <p className="fs-5">
          There are many variation of passages of loremipsum available,but the
          mojarity have suffered alteration in some from, by injected humor,or
          randomised words which don't look even slighty believable.
        </p>
        <br />
        <button
          className="btn button-nav btn-lg"
          style={{ backgroundColor: "orangered" }}
        >
          Shop Now
        </button>
        <button className="btn btn-dark btn-lg rounded-0 ">Contact us</button>
      </div>
      <div className="col-lg-6 col-sm-12 mt-sm-4 d-flex align-items-center justify-content-end">
        <img
          src={img1}
          alt="images not found"
          className="img-fluid w-75 mt-lg-5 mt-sm-5"
        />
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
export default Main;