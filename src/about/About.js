import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div>
        <div className="left-about">
          <h2>About Me</h2>
        </div>

        <div className="right-about">
          <div>
            Born and raised in the Bay Area, SJSU graduate, and self-taught
            programmer. Strong interest in full-stack development focusing on
            well designed, clean, responsive, and scalable code.
          </div>{" "}
          <div>
            A quick learner, self starter, innovative, and creative. I have a
            love for mountains, music, and movies. When I'm not coding you can
            find me eating carbs, lifting at the gym, running, traveling,
            binging the latest Netflix movie, or taking pictures of my cat.
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
