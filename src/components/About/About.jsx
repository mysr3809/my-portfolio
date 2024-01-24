import React, { useState } from "react";
import "./about.css";
import MY3 from "../../assets/MY3.jpg";
import my4 from "../../assets/my4.PNG";
import { BiUserCircle } from "react-icons/bi";
import { BsPatchCheckFill } from "react-icons/bs";

const About = () => {
  const [personal, setPersonal] = useState(false);

  const handleClick = () => {
    setPersonal(true);
  };
  const handleClickTrue = () => {
    setPersonal(false);
  };
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="btn-container">
        <button className="btn btn-primary" onClick={handleClickTrue}>
          Tecnical
        </button>
        <button className="btn btn-primary" onClick={handleClick}>
          Personal
        </button>
      </div>
      {!personal ? (
        <div className="container about__container technical">
          <div className="about__me">
            <div className="about__me-image">
              <img src={my4} alt="about me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BiUserCircle className="about__icon" />
                <h5>Full Stack Web Developer</h5>
              </article>
            </div>
            <p>
              Dynamic Full Stack Developer with a diverse professional
              background. I bring a unique blend of discipline, time management,
              teamwork, and problem-solving skills from my previous careers to
              my current role. My primary focus is to continually enhance my
              skills and contribute to a collaborative and friendly work
              environment.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact
            </a>
          </div>
        </div>
      ) : (
        <div className="container about__container personal">
          <div className="about__me">
            <div className="about__me-image personal-img">
              <img src={MY3} alt="about me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card container-skills">
                <div className="skill">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <h5>Social</h5>
                </div>
                <div className="skill">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <h5>Sportive</h5>
                </div>
                <div className="skill">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <h5>Positive</h5>
                </div>
                <div className="skill">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <h5>Energetic</h5>
                </div>
                <div className="skill">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <h5>Hard Worker</h5>
                </div>
                <div className="skill">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <h5>Traveler</h5>
                </div>
              </article>
            </div>
            <p>
              Here is my story. In the past 30 years, I have had difficulties
              and successes. In difficult times, I stayed positive and never
              stopped struggling. As a result of the study, I realized that
              nothing is impossible. Leaving aside my past education, I am
              working in the field of software that I love very much. I guess my
              main character is to always be smiling, energetic and positive.
              Working on a project with pleasure, solving problems and
              presenting different perspectives is my biggest fun. It's time to
              combine what I've learned with my past experiences.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
