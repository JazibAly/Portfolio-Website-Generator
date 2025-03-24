import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section className="container my-5">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded">
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Name" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Message" required></textarea>
        </div>
        <button type="submit" className="btn btn-success">Send</button>
      </form>
    </section>
  );
}

export default Contact;
