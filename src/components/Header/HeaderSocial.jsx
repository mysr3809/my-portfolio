import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const HeaderSocial = () => {
  return (
    <div className="headers__socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
