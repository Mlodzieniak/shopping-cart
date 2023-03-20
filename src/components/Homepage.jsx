import React from "react";
import intro from "./video/intro.mp4";
// import "./HomePage.css";

function Homepage() {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={intro} type="video/mp4" />
      </video>
      <div className="homepage">
        <h1>Welcome to my website</h1>
        <p>This is some text that will be displayed on top of the video</p>
      </div>
    </div>
  );
}

export default Homepage;
