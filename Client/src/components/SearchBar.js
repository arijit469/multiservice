import React, { useState, useEffect } from "react";
import { searchProvider } from './Service/api';

const SearchBar = ({ parentCallback }) => {
  const [searchService, setSearchService] = useState({
    service: '',
    pincode: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchProvider(searchService);
        console.log('search successful:', response.data);
        parentCallback(response.data);
      } catch (error) {
        console.log('search failed:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  const onValueChange = (e) => {
    setSearchService({ ...searchService, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(searchService);
    try {
      const response = await searchProvider(searchService);
      console.log('search successful:', response.data);
      parentCallback(response.data);
    } catch (error) {
      console.log('search failed:', error);
    }
  }

  return (
    <>
      {/* searchbar */}
      <div className="row g-0 mx-lg-0">
        <div className="col-lg-12 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
          <form onSubmit={submitData}>
            <div className="row g-3">
              <div className="col-md-3">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    name="service"
                    onChange={onValueChange}
                    id="search"
                    placeholder="What you are looking for ?"
                  />
                  <label htmlFor="search">Find Service</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    name="pincode"
                    onChange={onValueChange}
                    id="pincode"
                    placeholder="Your Pincode"
                  />
                  <label htmlFor="pincode">Your Pincode</label>
                </div>
              </div>
              <div className="col-2">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Find
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* searchbar */}
    </>
  );
};

export default SearchBar;
