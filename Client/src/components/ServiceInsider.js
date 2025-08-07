import React, { useState } from "react";
import SearchBar from "./SearchBar";
import defaultImage from "../assets/img/Customer-Service.jpg";
import { Alert } from "react-bootstrap";

const ServiceInsider = () => {
  const [providerList, setProviderList] = useState([]);

  const handleCallback = (data) => {
    console.log(data);
    setProviderList(data.providerList);
    if (providerList.length === 0) {
    }
    console.log(providerList);
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <SearchBar parentCallback={handleCallback} />
          {/* loop for display service */}
          <div className="row g-4">
            {providerList &&
              providerList.length > 0 &&
              providerList.map((listOfProvider) => (
                <div
                  key={listOfProvider.id}
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden position-relative">
                      <img
                        className="img-fluid"
                        src={
                          listOfProvider.image
                            ? listOfProvider.image
                            : defaultImage
                        }
                        alt=""
                      />
                    </div>

                    <div
                      className="text-center p-4"
                      style={{ height: "340px", overflow: "auto" }}
                    >
                      <h5 className="mb-0" id="sHeading">{listOfProvider.service}</h5>
                      <div className="row g-3">
                        <div className="col-md-6 sStyle">Provider Name</div>
                        <div className="col-md-6 sStyle gaap">
                          : {listOfProvider.name}
                        </div>
                      </div>
                      <div className="row g-3">
                        <div className="col-md-6 sStyle">Mobile No</div>
                        <div className="col-md-6 sStyle gaap">
                          : {listOfProvider.mobile}
                        </div>
                      </div>
                      <div className="row g-3">
                        <div className="col-md-6 sStyle">Pincord</div>
                        <div className="col-md-6 sStyle gaap">
                          : {listOfProvider.pincode}
                        </div>
                      </div>
                      <div className="row g-3">
                        <div className="col-md-6 sStyle">Address</div>
                        <div className="col-md-6 sStyle gaap">
                          : {listOfProvider.address}
                        </div>
                      </div>
                      <div className="row g-3">
                        <div className="col-md-6 sStyle">City</div>
                        <div className="col-md-6 sStyle gaap">
                          : {listOfProvider.city}
                        </div>
                      </div>
                      <div className="row g-3">
                        <div className="col-md-6 sStyle">State</div>
                        <div className="col-md-6 sStyle gaap">
                          : {listOfProvider.state}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {providerList && providerList.length === 0 && (
              <Alert variant="warning">
                Sorry! Currently No Provider Found{" "}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceInsider;
