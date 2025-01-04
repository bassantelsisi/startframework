import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer w-100">
      <div className="container py-4">
        <div className="row text-center py-5">
          <div className="col-md-4 mb-4 mb-md-0">
            <h4>LOCATION</h4>
            <p className="mb-0">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h4>AROUND THE WEB</h4>
            <div className="d-flex justify-content-center gap-3 social-icons">
              <a href="#" className="btn btn-outline-light rounded-circle">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h4>ABOUT FREELANCER</h4>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className="copyright py-3">
        <div className="container text-center">
          <small>Copyright © Your Website 2021</small>
        </div>
      </div>
    </footer>
  )
}