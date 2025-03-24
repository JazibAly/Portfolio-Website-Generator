// import React from "react";

// function Footer({ data }) {
//   return (
//     <footer className="text-center p-3 font-dark bg-body-secondary">
//       <h4>Connect with me:</h4>
//       <ul className="list-inline">
//         {data.map((social, index) => (
//           <li key={index} className="list-inline-item">
//             <a href={social.url} className="text-light" target="_blank" rel="noopener noreferrer">
//               {social.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </footer>
//   );
// }

// export default Footer;


import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer({ data }) {
  // Extract GitHub and LinkedIn links
  const githubLink = data?.find((social) => social.name.toLowerCase() === "github")?.url || "#";
  const linkedinLink = data?.find((social) => social.name.toLowerCase() === "linkedin")?.url || "#";

  return (
    <footer className="text-center p-3 font-dark bg-body-secondary">
      <h4>Connect with me:</h4>
      <ul className="list-inline">
        {data.map((social, index) => (
          <li key={index} className="list-inline-item">
            <a href={social.url} className="text-light mx-2" target="_blank" rel="noopener noreferrer">
              {social.name}
            </a>
          </li>
        ))}
      </ul>
      {/* GitHub & LinkedIn Icons */}
      <div className="mt-3">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-light mx-2">
          <FaGithub size={30} color="#212529"/>
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-light mx-2">
          <FaLinkedin size={30} color="#212529"/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
