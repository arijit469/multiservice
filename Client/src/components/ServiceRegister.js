import React,{useState} from 'react';
import Quote from '../assets/img/carousel-4.jpg';
import { addProvider } from './Service/api';
import { Alert } from 'react-bootstrap';
const ServiceRegister = () => {
  const [provider, setProvider] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: '',
    service: '',
    your_time: '',
    state: '',
    city: '',
    pincode: '',
    address: '',
    // image:''
  });
  // const fileData = (e) => {
  //   setProvider({ ...provider, image: e.target.files[0] })
  //   };
  const onvalueChange = (e) => {
      setProvider({ ...provider, [e.target.name]: e.target.value });
    };
    //bootstrap-alert
  const [isSuccess,setIsSuccess]=useState(false)
  const [successMessage,setSuccessMessage]=useState(false)
  const [isInvalid,setIsInvalid]=useState(false)

    const submitData = async (e) => {
      e.preventDefault();
      // console.log(provider.image, "__",provider.image.name)
      const formData = new FormData();
      // formData.append('image', provider.image.name)
      formData.append('name', provider.name);
      formData.append('email', provider.email);
      formData.append('gender', provider.gender);
      formData.append('service', provider.service);
      formData.append('your_time', provider.your_time);
      formData.append('state', provider.state);
      formData.append('city', provider.city);
      formData.append('pincode', provider.pincode);
      formData.append('address', provider.address);
      try {
        const response = await addProvider(provider);
        const success = response.data.success;
        console.log('Registration successful:', response.data);
        localStorage.setItem("authenticated", true);
        if(success){
          // alert(response.data.message)
          setIsSuccess(true);
          setSuccessMessage(response.data.message)
          
        }else{
          // alert(response.data.message)
          setIsSuccess(true);
        setIsInvalid(true)
        setSuccessMessage(response.data.message)
        }


        setTimeout(() => {
          window.location.reload(true)
        }, 2000);
      } catch (error) {
        console.log('Register failed:', error);
      }
    }
  return (
    <>
      {/* ServiceRegister Start */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <img className="position-absolute img-fluid w-100 h-100" src={Quote} style={{ objectFit: 'cover' }} alt="" />
              </div>
            </div>
            <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 pe-lg-0">
                <div className="bg-primary mb-3" style={{ width: '60px', height: '2px' }}></div>
                <h1 className="display-5 mb-5">Register Your Service</h1>
                <p className="mb-4 pb-2">Register your Service with us to expand your business, reach to many people with your work and our service</p>
                <form onSubmit={submitData}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input type="text" name="name" onChange={onvalueChange} className="form-control border-0" placeholder="Your Name" style={{ height: '55px' }} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="email" name="email" onChange={onvalueChange} className="form-control border-0" placeholder="Your Email" style={{ height: '55px' }} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="text" name="mobile" onChange={onvalueChange} className="form-control border-0" placeholder="Your Mobile" style={{ height: '55px' }} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select className="form-select border-0" style={{ height: '55px' }} name="gender" onChange={onvalueChange}>
                        <option defaultValue>Your Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="text" name="service" onChange={onvalueChange} className="form-control border-0" placeholder="Your Service Name" style={{ height: '55px' }} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="text" name="your_time" onChange={onvalueChange} className="form-control border-0" placeholder="Your Service Time" style={{ height: '55px' }} />
                    </div>
                    <div className="col-12 col-sm-4">
                      <input type="text" name="state" onChange={onvalueChange} className="form-control border-0" placeholder="Your State" style={{ height: '55px' }} />
                    </div>
                    <div className="col-12 col-sm-4">
                      <input type="text" name="city" onChange={onvalueChange} className="form-control border-0" placeholder="Your City" style={{ height: '55px' }} />
                    </div>
                    <div className="col-12 col-sm-4">
                      <input type="text" name="pincode" onChange={onvalueChange} className="form-control border-0" placeholder="Your Pincode" style={{ height: '55px' }} />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control border-0" onChange={onvalueChange} name="address" placeholder="Your full address with landmark of your business"></textarea>
                    </div>

                    {/* <div>
                    <label for="exampleFormControlFile1">Uplode Your Shop Photo</label>
                    <input type="file" class="form-control-file" name="image" onChange={fileData} id="exampleFormControlFile1"/>
                    </div> */}
                    

                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" >Register Your Service</button>
                      {isSuccess&&<Alert style={{marginTop:"15px"}}variant={isInvalid?"warning":"success"}>{successMessage}</Alert>}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ServiceRegister End */}
    </>
  );
};

export default ServiceRegister;
