import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DataEntry({ setPortfolioData }) {
  const [formData, setFormData] = useState({
    hero: { name: "", bio: "" },
    about: { profilePic: "", description: "", skills: [] },
    projects: [],
    socialMedia: [],
    github: ""
  });

  const navigate = useNavigate();

  const fetchGitHubProjects = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await response.json();
      if (Array.isArray(data)) {
        setFormData((prevState) => ({
          ...prevState,
          projects: data.map(repo => ({
            title: repo.name,
            description: repo.description || "No description available",
            github: repo.html_url,
            image: "https://placehold.co/600x400" // Placeholder image
          }))
        }));
      }
    } catch (error) {
      console.error("Error fetching GitHub projects:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("portfolioData", JSON.stringify(formData));
    setPortfolioData(formData);
    navigate("/portfolio");
  };

  return (
    <section className="container mt-5 pb-5">
      <h2 className="pt-3">Enter Portfolio Details</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded">
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Name" 
            onChange={(e) => setFormData({ ...formData, hero: { ...formData.hero, name: e.target.value } })} required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Short Bio" 
            onChange={(e) => setFormData({ ...formData, hero: { ...formData.hero, bio: e.target.value } })} required></textarea>
        </div>
        <div className="mb-3">
          <input type="file" className="form-control" 
            onChange={(e) => setFormData({ ...formData, about: { ...formData.about, profilePic: URL.createObjectURL(e.target.files[0]) } })} required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="About Me" 
            onChange={(e) => setFormData({ ...formData, about: { ...formData.about, description: e.target.value } })} required></textarea>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Skills (comma separated)" 
            onChange={(e) => setFormData({ ...formData, about: { ...formData.about, skills: e.target.value.split(",") } })} required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="GitHub Username" 
            onChange={(e) => setFormData({ ...formData, github: e.target.value })} />
          <button type="button" className="btn btn-info mt-2" 
            onClick={() => fetchGitHubProjects(formData.github)}>Fetch Projects</button>
        </div>
        <button type="submit" className="btn btn-primary">Generate Portfolio</button>
      </form>
    </section>
  );
}

export default DataEntry;
