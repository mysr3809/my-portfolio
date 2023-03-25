import React from 'react';
import './header.css';
import CTA from './CTA';
import my from '../../assets/my.png';
import HeaderSocial from './HeaderSocial';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mustafa</h1>
        <h5 className="text-light">Full Stack Web Developer</h5>
        <CTA />
        <HeaderSocial />
      </div>
      <div className="me">
        <img src={my} alt="me" />
      </div>
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
