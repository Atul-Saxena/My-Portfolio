import React, { useEffect, useState } from "react";
import "./TechSphere.css";
import TagCloud from "TagCloud";


const TechShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
      const container = ".tagcloud";
      const texts = [
        "React JS",
        "NodeJS",
        "ES6",
        "GIT",
        "GITHUB",
        "VSCode",
        "TypeScript",
        "Javascript",
        "Python",
        "Open AI",
        "Firebase",
        "Microsoft 365",
        "Microsoft\nTeams",
        "BootStrap",
        "Jupiter\nNotebook",
        "MongoDB",
        "HTML",
        "C++",
        "SQL",
        "CSS",
        "JavaScript",
        "Next JS",
        "VITE",
        "Tailwind",
        "Express",
        "Postman",
        "Adobe XD",
        "Adobe\nLightroom",
        "Figma",
        "React JS",
        "NodeJS",
        "ES6",
        "GIT",
        "GITHUB",
        "VSCode",
        "TypeScript",
        "Javascript",
        "Python",
        "Open AI",
        "Firebase",
        "Microsoft 365",
        "Microsoft\nTeams",
        "BootStrap",
        "Jupiter\nNotebook",
        "MongoDB",
        "HTML",
        "C++",
        "SQL",
        "CSS",
        "JavaScript",
        "Next JS",
        "VITE",
        "Tailwind",
        "Express",
        "Postman",
        "Adobe XD",
        "Adobe\nLightroom",
        "Figma",
        
      ];
      const screenWidth = window.innerWidth;

      let radius = 320; // Default radius
      if (screenWidth <= 768) {
        // Adjust radius for smaller screens
        radius = 165; // Change the radius value for smaller screens
      }

      const options = {
        radius: radius,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options,);

  }, []);

  return (
    <>
      <div className="techStack">

        <div className="tagcloud-container">
          <span className="tagcloud text-center"></span>
        </div>
      </div>
    </>
  );
};

export default TechShpere;