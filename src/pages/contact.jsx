// Contact.jsx
export default function Contact() {
    return (
      <div className="contact-section min-vh-100" style={{ marginTop: '76px' }}>
        <div className="container py-5">
          <div className="text-center mb-4">
            <h2 className="display-4 fw-bolder" style={{ fontSize:'40px', color:'#2C3E50'}}>CONTACT SECTION</h2>
            
            {/* divider*/}
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
  
          {/* Contact Form */}
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="form-group mb-4">
                  <input 
                    type="text" 
                    className="form-control border-0 border-bottom py-3" 
                    placeholder="userName"
                  />
                </div>
  
                <div className="form-group mb-4">
                  <input 
                    type="number" 
                    className="form-control border-0 border-bottom py-3" 
                    placeholder="userAge"
                  />
                </div>
  
                <div className="form-group mb-4">
                  <input 
                    type="email" 
                    className="form-control border-0 border-bottom py-3" 
                    placeholder="userEmail"
                  />
                </div>
  
                <div className="form-group mb-4">
                  <input 
                    type="password" 
                    className="form-control border-0 border-bottom py-3" 
                    placeholder="userPassword"
                  />
                </div>
  
                <button 
                  type="submit" 
                  className="btn text-white px-4 py-2"
                  style={{ backgroundColor: '#1ABC9C' }}
                >
                  send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }