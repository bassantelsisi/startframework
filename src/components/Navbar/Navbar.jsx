// Navbar.jsx
import { NavLink } from 'react-router-dom'  // Change this from Link to NavLink
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor: '#2C3E50'}}>
      <div className="container">
        <NavLink className="navbar-brand text-white" to="/" style={{fontSize: '32px'}}>
          START FRAMEWORK
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto py-4">
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-link text-white active-link" : "nav-link text-white"
                } 
                to="/about"
                style={{fontSize: '16px'}}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-link text-white active-link" : "nav-link text-white"
                }
                to="/portfolio"
                style={{fontSize: '16px'}}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-link text-white active-link" : "nav-link text-white"
                }
                to="/contact"
                style={{fontSize: '16px'}}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}