import { FaFacebookSquare, FaLinkedin, FaEnvelopeSquare, FaWhatsappSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="footer">
            <div className="socials">
                <a href="https://www.facebook.com/inspiremusicacademy/" target="_blank">{<FaFacebookSquare size={25} />}</a>
                <a href="https://api.whatsapp.com/send?phone=16476685860&app=facebook&entry_point=page_cta&fbclid=IwAR0qvIWtQDm6GymyoORgEIsOobbvR-xBAbrFWvNVGShG1zpxl_6O-GrvL8A" target="_blank">{<FaWhatsappSquare size={25} />}</a>
                <a href="https://www.linkedin.com/company/inspire-music-academy/mycompany/" target="_blank">{<FaLinkedin size={25} />}</a>
                <Link to="/contact">{<FaEnvelopeSquare size={25} />}</Link>
            </div>
            <p>Copyright © 2022 Inspire Music Academy</p>
        </div>
    )
}

export default Footer;