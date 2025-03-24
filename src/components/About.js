import React from "react";

function About({ data }) {
  return (
    <section className="container text-center my-5">
      <img src={data.profilePic} alt="Profile" className="rounded-circle mb-3" width="150" />
      <h2>About Me</h2>
      <p>{data.description}</p>
      <h3>Skills:</h3>
      <ul className="list-group list-group-flush">
        {data.skills.map((skill, index) => (
          <li key={index} className="list-group-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;
