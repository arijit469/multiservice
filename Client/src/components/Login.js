import React, { useState } from 'react';
import { useLocation, useHistory, Link } from "react-router-dom";
import Carousel1 from '../assets/img/login1.jpg';
import Register from './Register';
import { verify } from './Service/api';
import { toast } from 'react-toastify';
import { Alert } from 'react-bootstrap';


// import { ToastContainer, toast } from 'react-toastify' ;
// import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const history = useHistory();
  const [user, verifyUser] = useState({
    email: '',
    password: '',
  });
  const onValueChange = (e) => {
    verifyUser({ ...user, [e.target.name]: e.target.value });
  };
  //bootstrap-alert
  const [isSuccess,setIsSuccess]=useState(false)
  const [successMessage,setSuccessMessage]=useState(false)
  const [isInvalid,setIsInvalid]=useState(false)
  
  const submitData = async (e) => {

    e.preventDefault();

    try {
      const response = await verify(user);
      const success = response.data.success;
      console.log('login successful:', response.data);

      toast.success(response.data.success);
      localStorage.setItem("authenticated", true);
     // localStorage.setItem("userData", JSON.stringify(result.data[0]));
      if(success){
        setIsSuccess(true);
        setSuccessMessage(response.data.message)
        setTimeout(() => {
          history.push('/home');
        }, 2000);
      }else{
        setIsSuccess(true);
        setIsInvalid(true)
        setSuccessMessage(response.data.message)
        
      }
    } catch (error) {
      console.log('login failed:', error);
      // toast.error('login failed');
    }
    
  };

  return (
    <>
      {/* Login Start  */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 contact-text py-5 wow fadeIn" style={{height:"100vh"}} data-wow-delay="0.5s">
              <div className="p-lg-5 ps-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Login</h1>
                </div>

                <form onSubmit={submitData}>
                  <div className="row g-3">
                    <div className="col-8">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
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
                          className="form-control"
                          name="password"
                          onChange={onValueChange}
                          id="Password"
                          placeholder="Password"
                        />
                        <label htmlFor="subject">Password</label>
                      </div>
                    </div>

                    <Link to="/Register">Don't have an account</Link>

                    <div className="col-8">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Login
                      </button>
                      {isSuccess&&<Alert style={{marginTop:"15px"}}variant={isInvalid?"warning":"success"}>{successMessage}</Alert>}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100" style={{ objectFit: 'cover' }} src={Carousel1} alt="imgnotfound" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Login End  */}
    </>
  );
};

export default Login;