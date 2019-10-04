import React from 'react'
import logo from '../../images/shoppin-phone.png'
import { FaInstagram, FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa"
const Footer = () => (
    <div className="footer">
        <div className="container">
            <div className="footer__container">
                <div className="footer__brand">
                    <img src={logo} alt="logo" />
                </div>

                <p>copy-right:&copy;Mohammad Shahbazi</p>
                <div>
                    <a className="footer__social" href="#" ><FaInstagram /></a>
                    <a className="footer__social" href="#" ><FaFacebook /></a>
                    <a className="footer__social" href="#" ><FaTelegram /></a>
                    <a className="footer__social" href="#" ><FaTwitter /></a>

                </div>
            </div>
        </div>

    </div>
)
export default Footer