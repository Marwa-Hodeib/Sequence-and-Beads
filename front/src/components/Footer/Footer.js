import React, {Component} from 'react';
import facebook from "../../assets/social_media_icon/Facebook.png";
import instagram from "../../assets/social_media_icon/Instagram.png";
import whatsapp from "../../assets/social_media_icon/WhatsApp.png";
import "./Footer.css";

class Footer extends Component
{
    render()
    {
        return (
            <footer className="footer_container">
                <h2 id="footer_container_h2">Sequins & Beads</h2>
                <ul className="footer_icon_container">
                    <li className="footer_icon_item"><a href="https://www.facebook.com" target="_blank"><img src={facebook} alt="facebook logo"/></a></li>
                    <li className="footer_icon_item"><a href="https://www.instagram.com" target="_blank"><img src={instagram} alt="instagram logo"/></a></li>
                    <li className="footer_icon_item"><a href="https://www.whatsapp.com" target="_blank"><img src={whatsapp} alt="whatsapp logo"/></a></li>
                </ul>
                <p className="footer_madebyline">&copy; 2020 <a href="https://codi.tech/" target="_blank" className = "footer_hearty">OZMA</a></p>
            </footer>
        );
    }
}
export default Footer;