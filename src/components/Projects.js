import React from "react";

function Projects({ data }) {
  return (
    <section className="container my-5 p-5">
      <h2 className="text-center">Projects</h2>
      <div className="row">
        {data.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.github} className="btn btn-danger">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
// Compare this snippet from webassignment/src/components/Contact.js: