import './Home.css'
// Import svg file for the portofolio image
import avatarImage from '../assets/avataaars.svg'  


export default function Home() {
  return (
    <div className="home-section " style={{backgroundColor: '#1ABC9C'}}>
      <div className="container py-5">
        <div className="row justify-content-center text-center text-white min-vh-100 align-items-center">
          <div className="col-md-8">
            <img 
              src={avatarImage} 
              alt="Avatar" 
              className="mb-4" 
              style={{width: "250px"}}
            />
            <h1 className="display-4 fw-bolder mb-4">START FRAMEWORK</h1>
            
             {/* divider */}
             <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line"></div>
              <div className="star mx-3">
                <i className="fas fa-star"></i>
              </div>
              <div className="line"></div>
            </div>
            
            <p className="lead mb-0">Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </div>
  )
}