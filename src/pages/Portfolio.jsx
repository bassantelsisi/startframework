import './Portfolio.css'
// Import images
import cabin from '../assets/poert1.png'
import cake from '../assets/port2.png'
import circus from '../assets/port3.png'

export default function Portfolio() {
  return (
    <div className="portfolio-section min-vh-100" style={{ marginTop: '76px' }}>
      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="display-4 fw-bolder"style={{ fontSize:'40px', color:'#2C3E50'}}>PORTFOLIO COMPONENT</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div style={{
              backgroundColor: '#2C3E50',
              width: '80px',
              height: '4px'
            }}></div>
            <div className="mx-3">
              <i className="fas fa-star" style={{ color: '#2C3E50' }}></i>
            </div>
            <div style={{
              backgroundColor: '#2C3E50',
              width: '80px',
              height: '4px'
            }}></div>
          </div>
        </div>

        <div className="row g-5">
          {/* First Row */}
          <div className="col-md-4">
            <div className="portfolio-item position-relative rounded-3 overflow-hidden">
              <img src={cabin} alt="Cabin" className="w-100 rounded-3" />
              <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                <div className="text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item position-relative rounded-3 overflow-hidden">
              <img src={cake} alt="Cake" className="w-100 rounded-3" />
              <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                <div className="text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item position-relative rounded-3 overflow-hidden">
              <img src={circus} alt="Circus" className="w-100 rounded-3" />
              <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                <div className="text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Repeat the same items */}
          <div className="col-md-4">
            <div className="portfolio-item position-relative rounded-3 overflow-hidden">
              <img src={cabin} alt="Cabin" className="w-100 rounded-3" />
              <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                <div className="text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item position-relative rounded-3 overflow-hidden">
              <img src={cake} alt="Cake" className="w-100 rounded-3" />
              <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                <div className="text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item position-relative rounded-3 overflow-hidden">
              <img src={circus} alt="Circus" className="w-100 rounded-3" />
              <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                <div className="text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}