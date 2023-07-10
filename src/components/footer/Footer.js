import img1 from "../assests/fb.png"
import img2 from "../assests/twitter.png"
import img3 from "../assests/linkedin.png"
import img4 from "../assests/instagram.png"




function Footer(params) {
    return(
        <section className="py-5">
  <div className="container-fluid  py-5">
    <div className="row">
      <div className="col-lg-3 col-sm-12 mx-2">
        <h3>Fruits</h3>
        <p className="w-30">
          randomised words which don't look even slighty believable.If you are
          going to use a passage of lorem ipsum, you need to be
        </p>
      </div>
      <div className="col-lg-3 col-sm-6 mx-2">
        <h3>Services</h3>
        <p className="w-30">
          randomised words which don't look even slighty believable.If you are
          going to use a passage of lorem ipsum, you need to be
        </p>
      </div>
      <div className="col-lg-3 col-sm-6 mx-2">
        <h3>List</h3>
        <p className="w-30">
          randomised words which don't look even slighty believable.If you are
          going to use a passage of lorem ipsum, you need to be
        </p>
      </div>
      <div className="col-lg-2 col-sm-6">
        <h3>Follow Us</h3>
        <br />
        <img
          src={img1}
          alt="images not found"
          className="img-fluid"
        />
        <img
          src={img2}
          alt="images not found"
          className="img-fluid"
        />
        <img
          src={img3}
          alt="images not found"
          className="img-fluid"
        />
        <img
          src={img4}
          alt="images not found"
          className="img-fluid"
        />
        <br />
        <br />
        <h3>Subscribe Now</h3>
        <input type="text" name="" id="" />
        <button
          className="btn button-nav px-5 mt-lg-3 text-white"
          style={{ backgroundColor: "orangered" }}
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</section>

    )
}
export default Footer;