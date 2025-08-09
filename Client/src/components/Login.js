import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Carousel1 from '../assets/img/login1.jpg';
import { verify } from './Service/api';
import 'sweetalert2/dist/sweetalert2.min.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const MySwal = withReactContent(Swal);

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  // Green color theme (same as Register)
  const theme = {
    primary: '#4CAF50',
    primaryDark: '#060606ff',
    primaryLight: '#C8E6C9',
    accent: '#8BC34A',
    text: '#0c0909ff',
  };

  // Animation variants (same as Register)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (formError) setFormError(null);
  };

  const showSuccessPopup = () => {
    MySwal.fire({
      title: <strong style={{ color: theme.primaryDark }}>Welcome back!</strong>,
      html: <p style={{ color: theme.primaryDark }}>You have successfully logged in!</p>,
      icon: 'success',
      background: '#fff6f6ff',
      showConfirmButton: true,
      confirmButtonColor: theme.primary,
      confirmButtonText: 'Continue to Dashboard',
      width: '32rem',
      customClass: {
        popup: 'animated-popup',
        title: 'popup-title',
        confirmButton: 'popup-confirm-btn'
      },
      showClass: {
        popup: 'animate__animated animate__zoomIn animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOut animate__faster'
      }
    }).then(() => {
      history.push('/home');
    });
  };

  const validateForm = () => {
    if (!user.email.includes('@')) {
      setFormError('Please enter a valid email');
      return false;
    }
    if (user.password.length < 6) {
      setFormError('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);

    try {
      const response = await verify(user);
      if (response.data.success) {
        localStorage.setItem("authenticated", true);
        showSuccessPopup();
      } else {
        MySwal.fire({
          title: <strong style={{ color: '#fffefeff' }}>Login Error</strong>,
          html: <p style={{ color: '#000000ff' }}>{response.data.message || 'Invalid credentials. Please try again.'}</p>,
          icon: 'error',
          background: '#ffffffff',
          confirmButtonColor: '#28d025ff',
          confirmButtonText: 'Try Again',
          width: '32rem',
          showClass: {
            popup: 'animate__animated animate__headShake animate__faster'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOut animate__faster'
          }
        });
      }
    } catch (error) {
      console.error('Login failed:', error);
      MySwal.fire({
        title: <strong style={{ color: '#fff' }}>Login Error</strong>,
        html: <p style={{ color: '#eee' }}>{error.response?.data?.message || 'Login failed. Please try again.'}</p>,
        icon: 'error',
        background: '#f4f4f8ff',
        confirmButtonColor: '#3cda33ff',
        confirmButtonText: 'Try Again',
        width: '32rem',
        showClass: {
          popup: 'animate__animated animate__headShake animate__faster'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOut animate__faster'
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="container-fluid bg-light overflow-hidden px-lg-0"
    >
      <div className="container contact px-lg-0">
        <div className="row g-0 mx-lg-0">
          {/* Left Column - Login Form */}
          <motion.div 
            className="col-lg-6 contact-text py-5" 
            style={{height:"100vh", marginTop:"20px"}}
          >
            <div className="p-lg-5 ps-lg-0">
              <motion.div 
                className="section-title text-start"
                variants={itemVariants}
              >
                <h1 className="display-5 mb-4" style={{ color: theme.primaryDark }}>Welcome Back!</h1>
                <p className="mb-4" style={{ color: theme.text }}>Please login to your account</p>
              </motion.div>

              <motion.form 
                onSubmit={submitData}
                variants={itemVariants}
              >
                <div className="row g-3">
                  <motion.div className="col-md-8" variants={itemVariants}>
                    <div className="form-floating">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={onValueChange}
                        id="email"
                        placeholder="Your Email"
                        required
                        style={{ borderColor: theme.primary }}
                      />
                      <label htmlFor="email" style={{ color: theme.text }}>Your Email</label>
                    </div>
                  </motion.div>
                  
                  <motion.div className="col-8" variants={itemVariants}>
                    <div className="form-floating position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="form-control"
                        onChange={onValueChange}
                        id="password"
                        placeholder="Password"
                        required
                        minLength="6"
                        style={{ borderColor: theme.primary }}
                      />
                      <label htmlFor="password" style={{ color: theme.text }}>Password</label>
                      <button
                        type="button"
                        className="btn btn-link position-absolute end-0 top-50 translate-middle-y"
                        onClick={togglePasswordVisibility}
                        style={{ color: theme.primary, zIndex: 5 }}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {formError && (
                      <motion.div
                        className="col-8"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="alert alert-danger mt-2 mb-0">
                          {formError}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div 
                    className="col-8" 
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Link to="/Register" className="text-decoration-none" style={{ color: theme.text }}>
                      Don't have an account? <span style={{ color: theme.primary }}>Sign up</span>
                    </Link>
                  </motion.div>

                  <motion.div 
                    className="col-8" 
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button 
                      className="btn w-100 py-3" 
                      type="submit"
                      disabled={isLoading}
                      style={{ 
                        backgroundColor: theme.primary,
                        color: 'white',
                        border: 'none'
                      }}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Logging in...
                        </>
                      ) : (
                        <span className="d-flex align-items-center justify-content-center">
                          <motion.span
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="me-2"
                          >
                            🔑
                          </motion.span>
                          Login
                        </span>
                      )}
                    </button>
                  </motion.div>
                </div>
              </motion.form>
            </div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            className="col-lg-6 pe-lg-0" 
            style={{ minHeight: '400px' }}
            variants={{
              hidden: { x: '100%', opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 60,
                  duration: 1.2
                }
              }
            }}
          >
            <div className="position-relative h-100">
              <motion.img 
                className="position-absolute w-100 h-100" 
                style={{ objectFit: 'cover' }} 
                src={Carousel1} 
                alt="Login visual"
              />
              <motion.div 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ 
                  background: `linear-gradient(to right, ${theme.primaryLight}33, ${theme.primary}cc)`,
                  opacity: 0.7
                }}
              />
              <motion.div 
                className="position-absolute top-50 start-50 translate-middle text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="mb-3">Join Our Community</h2>
                <p className="mb-0">Login to unlock all features</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add these styles for the popups */}
      <style jsx global>{`
        .animated-popup {
          border-radius: 12px;
          border: 2px solid ${theme.primary};
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .popup-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
        }
        .popup-confirm-btn {
          font-weight: 500;
          letter-spacing: 0.5px;
          padding: 10px 24px;
          border-radius: 8px;
          transition: all 0.3s;
        }
        .popup-confirm-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .form-control:focus {
          border-color: ${theme.primary};
          box-shadow: 0 0 0 0.25rem ${theme.primary}40;
        }
      `}</style>
    </motion.div>
  );
};

export default Login;