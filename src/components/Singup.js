import React from "react";
import Banner from "./Banner";

export default function Signup() {
  return (
    <div className="site-section">
        <Banner title="singup" url="images/bg_3.jpg"/>
    <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <form action="#">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="FirstName"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="LastName"
            />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Téléphone"
            />
          </div>
    
        </form>
      </div>
      <div className="col-lg-4">
        <form action="#">
        <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary py-3 px-5"
              defaultValue="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}