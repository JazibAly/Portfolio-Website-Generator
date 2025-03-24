

import React from "react";

function About({ data }) {
  return (
    <section className="container text-center my-5 p-5">
      <h2 className="">About Me</h2>
      <p>{data.description}</p>
      <h3 className="mb-4 mt-4 skills-heading">Skills:</h3>
      <div className="container">
        <div className="row">
          {data.skills.map((skill, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-2 skills">
              <span className="badge bg-success p-3">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

