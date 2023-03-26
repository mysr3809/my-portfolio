import React from 'react';
import './about.css';
import my2 from '../../assets/my2.png';
import { BiUserCircle } from 'react-icons/bi';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={my2} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <BiUserCircle />
              <h5>Full Stack Web Developer</h5>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            veniam debitis, possimus nostrum quia molestias quidem consequatur
            soluta ipsum vel ipsa doloribus voluptatum dicta eaque dolores qui
            quaerat suscipit. Sunt!
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
