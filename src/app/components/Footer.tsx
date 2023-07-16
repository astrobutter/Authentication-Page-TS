import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai';


const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer-container">
      <p>{year} QCI | All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineGithub />
      </p>
    </div>
  )
}

export default Footer