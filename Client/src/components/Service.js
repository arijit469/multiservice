import React from "react";
import Icon6 from "../assets/img/icon/icon-6.png";
import Icon11 from "../assets/img/icon/icon-11.png";
import Icon12 from "../assets/img/icon/icon-12.png";
import Icon13 from "../assets/img/icon/icon-13.png";
import icon9 from "../assets/img/icon/icon-9.png";
import icon17 from "../assets/img/icon/icon-17.png";
import icon4 from "../assets/img/icon/icon-4.png";
import icon16 from "../assets/img/icon/icon-16.png";
import { useLocation, useHistory, NavLink } from "react-router-dom";
import ServiceInsider from "./ServiceInsider";
const Service = () => {
  const history = useHistory();
  const onValueChange = () => {
    history.push("/service");
  };
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h1 className="display-5 mb-5">Our Services</h1>
          </div>

          <div className="row g-0 service-row">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="service-item border h-100 p-5">
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <img className="img-fluid" src={Icon6} alt="Icon" />
                </div>
                <h4 className="mb-3">Find the best CCTV in your area</h4>
                <p className="mb-4">Go for the CCTV to protect your home</p>
                <NavLink to="/service" className="btn">
                  <i className="fa fa-arrow-right text-white me-2"></i>Explore
                  More
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="service-item border h-100 p-5">
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <img className="img-fluid" src={Icon11} alt="Icon" />
                </div>
                <h4 className="mb-3">Best AC service in your area</h4>
                <p className="mb-4">
                  Clean your AC with us for uninterrupted comfort
                </p>
                <NavLink to="/service" className="btn">
                  <i className="fa fa-arrow-right text-white me-2"></i>Explore
                  More
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="service-item border h-100 p-5">
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <img className="img-fluid" src={Icon12} alt="Icon" />
                </div>
                <h4 className="mb-3">Best Car service in your area</h4>
                <p className="mb-4">We take care of your car like your baby</p>
                <NavLink to="/service" className="btn">
                  <i className="fa fa-arrow-right text-white me-2"></i>Explore
                  More
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="service-item border h-100 p-5">
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <img className="img-fluid" src={Icon13} alt="Icon" />
                </div>
                <h4 className="mb-3">Best Motor Bike service in your area</h4>
                <p className="mb-4">Your Bike service is our first priority</p>
                <NavLink to="/service" className="btn">
                  <i className="fa fa-arrow-right text-white me-2"></i>Explore
                  More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 service-row">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="service-item border h-100 p-5">
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <img className="img-fluid" src={icon9} alt="Icon" />
                </div>
                <h4 className="mb-3">Find the best ambulance in your area</h4>
                <p className="mb-4">
                  Go to the nearest hospital. Your life is our first priority
                </p>
                <NavLink to="/service" className="btn">
                  <i className="fa fa-arrow-right text-white me-2"></i>Explore
                  More
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="service-item border h-100 p-5">
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "100px", height: "95px" }}
                >
                  <img className="img-fluid" src={icon16} alt="Icon" />
                </div>
                <h4 className="mb-3">Best clean & pest control in your area</h4>
                <p className="mb-4">
                  Clean your home with us for uninterrupted comfort
                </p>
                <NavLink to="/service" className="btn">
                  <i className="fa fa-arrow-right text-white me-2"></i>Explore
                  More
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="service-item border h-100 p-5">
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <img className="img-fluid" src={icon4} alt="Icon" />
                </div>
                <h4 className="mb-3">
                  Best computer software & hardware service in your area
                </h4>
                <p className="mb-4">
                  We take care of your computer like your baby
                </p>
                <NavLink to="/service" className="btn">
                  <i className="fa fa-arrow-right text-white me-2"></i>Explore
                  More
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="service-item border h-100 p-5">
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img className="img-fluid" src={icon17} alt="Icon" />
                </div>
                <h4 className="mb-3">
                  Best Transportation service in your area
                </h4>
                <p className="mb-4">
                  Your transportation is our first priority
                </p>
                <NavLink to="/service" className="btn">
                  <i className="fa fa-arrow-right text-white me-2"></i>Explore
                  More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
