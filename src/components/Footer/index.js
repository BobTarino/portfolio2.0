import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer () {
    return (
        <section id="contact-info">
        <div class="list">
          <ul>
            <li><a href="mailto: bob.tarino@gmail.com"><FiMail size={40} /></a></li>
            <li><a href="https://github.com/BobTarino"><FaGithub size={40} /></a></li>
            <li><a href="https://www.linkedin.com/in/roberttarino/"><FaLinkedin size={40} /></a></li>
          </ul>
        </div>
    </section>
    );

}


export default Footer;