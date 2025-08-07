import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-secondary footer py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Kolkata, 7000 004</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 9932432343</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>Hand To Help.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
                <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">We are Providing</h5>
              <a className="btn btn-link" href="">Any Time Service</a>
              <a className="btn btn-link" href="">Trusted Service Provider</a>
              <a className="btn btn-link" href="">Wide Range of Service</a>
              <a className="btn btn-link" href="">Any Where Get Service</a>
            </div>
           

          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
}

export default Footer;
