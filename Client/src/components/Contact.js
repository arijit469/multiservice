import React,{ useState } from 'react';
import Carousel1 from '../assets/img/contact1 (1).png';
import { addContact } from './Service/api';
import { Alert } from 'react-bootstrap';
const Contact = () => {

    const [contact, setContact] = useState({
      name: '',
      email: '',
      subject: '',
      message:''
    });
  
    const onValueChange = (e) => {
      setContact({ ...contact, [e.target.name]: e.target.value });
    };
     //bootstrap-alert
  const [isSuccess,setIsSuccess]=useState(false)
  const [successMessage,setSuccessMessage]=useState(false)
  const [isInvalid,setIsInvalid]=useState(false)
  

    const submitData = async (e) => {
      e.preventDefault();
    try {
      const response = await addContact(contact);
      const success = response.data.success;
      // alert(response.data.message)
      localStorage.setItem("authenticated", true);
      if(success){
        setIsSuccess(true);
        setSuccessMessage(response.data.message)
      }else{
        setIsSuccess(true);
        setIsInvalid(true)
        setSuccessMessage(response.data.message)
        // alert(response.data.message)
      }

      setTimeout(() => {
        window.location.reload(true)
      }, 2000);
    } catch (error) {
      console.log('contact unsuccessfull', error);
    }
  };

  return (
    <>
      {/* Contact Start */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 ps-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Contact Us</h1>
                </div>
                <p className="mb-4">We are available for you 24 X 7. Write your query, we will reach you as soon as possible. Thank you, Team "Hand To Help"</p>
                <form onSubmit={submitData}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" name= "name" onChange={onValueChange} id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" name="email" onChange={onValueChange} id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" name="subject" onChange={onValueChange}  id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" name="message" onChange={onValueChange} id="message" style={{ height: "100px" }}></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                    </div>
                    {isSuccess&&<Alert style={{marginTop:"15px"}}variant={isInvalid?"warning":"success"}>{successMessage}</Alert>}
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100" style={{ objectFit: "cover" }} src={Carousel1} alt="imgnotfound" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
}

export default Contact;
