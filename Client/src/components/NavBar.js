import React from 'react';
import { NavLink } from 'react-router-dom';

import { useLocation,useHistory } from "react-router-dom";
const NavBar=()=>{
  const history = useHistory();
  const logout=()=>{
    localStorage.clear();
    history.push('/login')
    console.log("hi")
    }

    return(
        <>
        {/* Topbar start */}
    <div className="container-fluid navbar-expand-sm  bg-dark px-5">
        <div className="row gx-4 d-none d-lg-flex">
            <div className="col-lg-6 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <div className="btn-sm-square rounded-circle bg-primary me-2">
                        <small className="fa fa-map-marker-alt text-white"></small>
                    </div>
                    <small>Kolkata ,7000 004</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-3">
                    <div className="btn-sm-square rounded-circle bg-primary me-2">
                        <small className="fa fa-envelope-open text-white"></small>
                    </div>
                    <small>Hand To Help.com</small>
                </div>
            </div>
            <div className="col-lg-6 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <div className="btn-sm-square rounded-circle bg-primary me-2">
                        <small className="fa fa-phone-alt text-white"></small>
                    </div>
                    <small>+91 9932432343</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-3">
                    <div className="btn-sm-square rounded-circle bg-primary me-2">
                        <small className="far fa-clock text-white"></small>
                    </div>
                    <small> 24 X 7 Avalable</small>
                </div>
            </div>
        </div>
    </div>
    
{/* Topbar end */}

  {/* Navbar start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <h2 className="m-0 text-primary">Hand To Help</h2>
        </NavLink>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <NavLink to="/home" exact className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/service" className="nav-link" activeClassName="active">
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">
                About Us
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                More
              </a>
              <ul className="dropdown-menu rounded-0 rounded-bottom m-0">
                <li>
                  <NavLink to="/registerBusiness" className="dropdown-item">
                    Register your Business
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="dropdown-item">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/team" className="dropdown-item">
                    Our Team
                  </NavLink>
                </li>
                <li>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <button onClick={logout} className="nav-link" activeClassName="active">
                Logout
              </button>
            </li>
          </ul>
          
        </div>
      </nav>
      {/* Navbar end */}

        </>
    )
}
export default NavBar