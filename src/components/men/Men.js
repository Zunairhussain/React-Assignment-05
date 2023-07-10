import img1 from "../assests/client.png"

function Men() {
    return(
        <section>
        <div className="container py-5">
        <div className="row">
          <div className="col text-center py-5">
            <h1 className="fw-bold">Testimonial</h1>
            <p>
              There are many variations of passage of lorem ipsum available,but the
              majority have
            </p>
            <img src={img1} alt="Images not found" className="img-fluid mt-5" />
            <br />
            <h2>Johnhex</h2>
            <p>
              There are many variations of passage of lorem ipsum available,but the
              mojarity have suffered alteration in some from, by injected humor,or
              randomised words which don't look even slighty believable.If you are
              going to use a passage of lorem ipsum, you need to be
            </p>
          </div>
        </div>
      </div>
    </section>
    )
 }
 export default Men;