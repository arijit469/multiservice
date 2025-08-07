import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from "react-router-dom";

import Carousel1 from '../assets/img/register1.jpg';
import { addUser } from './Service/api';

import { Alert } from 'react-bootstrap';

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [isSuccess,setIsSuccess]=useState(false)
  const [successMessage,setSuccessMessage]=useState(false)
  const [isInvalid,setIsInvalid]=useState(false)
  

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const response = await addUser(user);
      const success = response.data.success;
      console.log('Registration successful:', response.data);
      localStorage.setItem("authenticated", true);
      if(success){
        setIsSuccess(true);
        setSuccessMessage(response.data.message)
        setTimeout(() => {
          window.location.reload(true)
        }, 4000);
        history.push('/login');
      }else{
        // alert(response.data.message)
        setIsSuccess(true);
        setIsInvalid(true)
        setSuccessMessage(response.data.message)
      }
    } catch (error) {
      console.log('login failed:', error);
    }
  };

  return (
    <>
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 contact-text py-5 wow fadeIn" style={{height:"100vh",marginTop:"20px"}} data-wow-delay="0.5s">
              <div className="p-lg-5 ps-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Register</h1>
                </div>

                <form onSubmit={submitData}>
                  <div className="row g-3">
                    <div className="col-md-8">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          onChange={onValueChange}
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form-floating">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          onChange={onValueChange}
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="form-floating">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          onChange={onValueChange}
                          id="password"
                          placeholder="Password"
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>
                    <Link to="/Login">Already have an account</Link>
                    <div className="col-8">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Register
                      </button>
                      {isSuccess&&<Alert style={{marginTop:"15px"}}variant={isInvalid?"warning":"success"}>{successMessage}</Alert>}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  src={Carousel1}
                  alt="imgnotfound"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
