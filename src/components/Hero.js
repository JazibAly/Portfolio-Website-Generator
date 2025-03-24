import React from "react";
import { Link } from "react-router-dom";

function Hero({ data }) {
  return (
    <section className="p-5 bg-dark text-white mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-7 col-md-7 col-sm-12">
          <h1 className="placeholder-text">Hi, I'm</h1>
          <h1 className="user-name">{data.name}</h1>
          <p>{data.bio}</p>
          <button className="btn btn-danger"><Link className="nav-link" to="/portfolio#contact">Contact Me</Link></button>
        </div>
        <div className="circular-landscape col-lg-5 col-md-5 col-sm-12">
          <img src={data.profilePic} alt="Profile" className="rounded-circle mb-3" width="150" />
        </div>
      </div>
      </section>
  );
}

export default Hero;
