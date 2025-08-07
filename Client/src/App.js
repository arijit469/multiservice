import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import "./assets/lib/animate/animate.min.css"
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css" 
import "./assets/lib/lightbox/css/lightbox.min.css" 
import "./assets/css/bootstrap.min.css" 
import "./assets/css/style.css"
// import Service from './components/Service';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import ServiceRegister from './components/ServiceRegister';
import Team from './components/Team';
import About from './components/About';
import ServiceInsider from './components/ServiceInsider';
import DashboardWrapper from './components/DashboardWrapper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      {/* <NavBar /> */}
      <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route exact path="/" render={(props) =><Login />} />
        <Route path="/login" render={(props) =><Login />} />
        <Route path="/register" render={(props) =><Register />} />
        <Route path="/registerBusiness" render={(props) =><DashboardWrapper><ServiceRegister /></DashboardWrapper> } />
        <Route path="/home" render={(props) =><DashboardWrapper><Home/> </DashboardWrapper>}/> 
        <Route path="/service" render={(props) =><DashboardWrapper><ServiceInsider /></DashboardWrapper>} />
        <Route path="/about" render={(props) =><DashboardWrapper><About /></DashboardWrapper>} />
        <Route path="/contact" render={(props) =><DashboardWrapper><Contact /></DashboardWrapper>} />
        <Route path="/team" render={(props) =><DashboardWrapper><Team /></DashboardWrapper>} />
        </Switch> 
        </BrowserRouter>

      {/* <Footer/> */}
    </>
    
  );
}



// const fileData = (e) => {
//   console.log(e.target.files[0]);
// };

export default App;
