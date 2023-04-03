import React from 'react';
import './footer.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo" rel="noreferrer">
        Mustafa Yasar
      </a>
      <ul className="permalinks">
        <li>
          <a href="#" rel="noreferrer">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mustafa Yasar. All Rights Reserved</small>
      </div>
    </footer>
  );
};
export default Footer;
