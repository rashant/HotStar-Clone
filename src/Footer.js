import React from 'react'
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import './Footer.css';
const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-left">
                <span>Copyright © 2022</span>
                <span>About Disney+ Hotstar</span>
                <span>About Us</span>
                <span>Feedback</span>
            </div>
            <div className="footer-right">
                <span>Contact Us</span>
                <div className="Icons">
                <a className="github" href="https://www.github.com/rashant/"><i><BsGithub/></i></a>
                <a className="instagram" href="https://www.instagram.com/k.p.sai4/"><i><BsInstagram/></i></a>
                <a className="linkedin" href="https://www.linkedin.com/in/prashant-kalepu/"><i><BsLinkedin/></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;