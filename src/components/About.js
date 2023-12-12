// About.js

import React from "react";
import "./About.css"; // Import your styles for About if needed

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        This website was created using the MERN (MongoDB, Express, React, Node.js) stack
        by a team of 5 passionate developers. Each team member contributed their
        skills to bring this project to life.
      </p>
      <h2>Meet the Team</h2>
      <ul>
        <li>Team Member 1 - Full Stack Developer</li>
        <li>Team Member 2 - Frontend Developer</li>
        <li>Team Member 3 - Backend Developer</li>
        <li>Team Member 4 - UI/UX Designer</li>
        <li>Team Member 5 - Project Manager</li>
      </ul>
      <p>
        We worked collaboratively to design, develop, and deploy this website,
        aiming to create a seamless and enjoyable experience for our users.
      </p>
    </div>
  );
};

export default About;
