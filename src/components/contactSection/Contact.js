import img1 from "../assests/orange-dish.png"

function Contact() {
    return(
        <section id="contact">
  <div className="container-fluid py-5">
    <div className="row">
      <div className="col-lg-7 col-sm-12 mx-3">
        <h1 className="fw-bold">Contact Us</h1>
        <h5 className="border-bottom border-2 p-1 border-dark">Name</h5>
        <br />
        <h5 className="border-bottom   border-2 p-1 ">Phone Number</h5>
        <br />
        <h5 className="border-bottom border-2 p-1 ">Email</h5>
        <br />
        <br />
        <h5 className="border-bottom border-2 p-1">Message</h5>
        <br />
        <br />
        <br />
        <button
          className="btn button-nav btn-lg px-5 text-white"
          style={{ backgroundColor: "orangered" }}
        >
          Send
        </button>
      </div>
      <div className="container-fluid lemon col-lg-4 col-sm-12 d-flex justify-content-end">
        <img
          src={img1}
          alt="#"
          className="img-fluid w-50 lemon"
        />
      </div>
    </div>
  </div>
</section>

    )
}
export default Contact;