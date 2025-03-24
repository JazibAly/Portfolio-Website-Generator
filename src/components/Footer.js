import React from "react";

function Footer({ data }) {
  return (
    <footer className="text-center p-3 bg-dark text-light">
      <h4>Connect with me:</h4>
      <ul className="list-inline">
        {data.map((social, index) => (
          <li key={index} className="list-inline-item">
            <a href={social.url} className="text-light" target="_blank" rel="noopener noreferrer">
              {social.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
