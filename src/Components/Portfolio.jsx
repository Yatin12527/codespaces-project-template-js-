/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/ash-edmonds-Koxa-GX_5zs-unsplash.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Passmybook (Techack 4.0) | MERN Jan 2024",
    description:
      "Developed a web application for selling and buying old books and notes, Worked in a team of 4 during a hackathon. Implemented user authentication and book listing features using MongoDB, Express.js, React, and Node.js",
    url: "https://github.com/Yatin12527/PassMyBook/tree/main",
  },
  {
    title: "Synxkill (HackJNU 3.0) | MERN Jan 2024",
    description:
      "Developed a MERN-based web application for personalized tutoring to learn different skills, collaborating with a team of three during HackJNU. Backend development is in progress, and the frontend is nearing completion. Implemented features for user authentication and skill listing using MongoDB, Express.js, React, and Node.js.",
    url: "https://github.com/Yatin12527/synxkill",
  },
  {
    title: "Facerec (Hack Geekhub) | Python, OpenCV March 2024",
    description:
      "Developed a Python-based web application for registering attendance using face recognition during the Hack Geekhub hackathon at UIET. Utilized the OpenCV library for face recognition.",
    url: "https://github.com/Yatin12527/facerec/tree/main",
  },
  {
    title: "Nirnay (Hack It sapiens 2.0) | Blockchain March 2024",
    description:
      "Developed a blockchain-based voting application with a frontend using React. Utilized MetaMask for Ethereum account management and transaction signing, and implemented smart contracts for secure and transparent voting.",
    url: "https://github.com/Yatin12527/nirnay-voting-system",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
