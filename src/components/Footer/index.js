import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer () {
    return (
        <section id="contact-info">
        <div class="list">
          <ul>
            <li><a href="mailto: bob.tarino@gmail.com"><FiMail /></a></li>
            <li><a href="https://github.com/BobTarino"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/roberttarino/"><FaLinkedin /></a></li>
          </ul>
        </div>
    </section>
    );

}


export default Footer;