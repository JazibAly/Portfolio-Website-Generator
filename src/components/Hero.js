import React from "react";

function Hero({ data }) {
  return (
    <section className="p-5 bg-info text-white mt-5">
      <h1 className="">Hi, I'm</h1>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
      <button className="btn btn-light">Contact Me</button>
      <img src={data.profilePic} alt="Profile" className="rounded-circle mb-3" width="150" />
    </section>
  );
}

export default Hero;
