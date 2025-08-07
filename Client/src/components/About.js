import React from 'react';

const About = () => {
  return (
    <>
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
        </div>
      </div>
      <div className="container py-5">
        <div className="bg-primary mb-3" style={{ width: '80px', height: '2px' }}></div>
        <h3 className="display-5 mb-5">Our Objective</h3>
        <p>
          'Hand To Help' is a platform that aims to bring together multiple service providers from various industries and offer their services to customers through a single portal. This project is designed to simplify service delivery for customers and provide a new revenue stream for service providers.
          The platform can be tailored to cater to different industries such as healthcare, transportation, cleaning services, home repairs, and more. The goal is to provide customers with a one-stop-shop for accessing various services, making it easier and more convenient for them to find what they need.
          One of the main advantages of 'Hand To Help' is the increased accessibility it provides. The platform can be accessed through various devices such as mobile phones, tablets, and desktop computers, making it easy for customers to access services on the go. This accessibility can lead to increased customer satisfaction and retention.
          Another key feature of the platform is the variety of services it offers. By bringing together multiple service providers, the platform can offer a wider range of services than any single provider could offer on their own. This variety allows customers to choose the service that best suits their needs and preferences.
        </p>
      </div>
    </>
  );
}

export default About;
