import React from "react";
import {FaLinkedin} from "react-icons/fa";
import {VscGithub} from "react-icons/vsc";
import {FiTwitter} from "react-icons/fi";

const HeaderSocials = () => {
  return (
      <div className="header__socials">
        <a href="https://linkedin.com/in/oriolfarrastic" target="_blank">
          <FaLinkedin/>
        </a>
        <a href="https://github.com/oriolfar" target="_blank">
          <VscGithub/>
        </a>
        <a href="https://twitter.com/Ofarras" target="_blank">
          <FiTwitter/>
        </a>
      </div>
  );
};

export default HeaderSocials;
