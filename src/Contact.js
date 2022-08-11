import Banner from "./Banner";
import { FaPhoneSquare, FaEnvelopeSquare, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
    return(
        <div className="contact-us">
            <Banner title="Contact Us" id="contact-banner" desc="We'd absolutely love to hear from you!" />
            <div className="contact-content">
                <section className="contact-information">
                    <h1>Get our contact information</h1>
                    <h6>Call, email, or visit us to get your inquiries answered.</h6>
                    <p>{<FaPhoneSquare size={15}/>} (905) 534-2456</p>
                    <p>{<FaEnvelopeSquare size={15} />} info@inspiremusiclesson.com</p>
                    <i></i>
                    <p>{<FaMapMarkerAlt size={15} />} 6-9980 Kennedy Rd, Markham, ON</p>
                    <p>(Kylemore’s Shoppe on Angus Glen Plaza, across TD Bank)</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.0425285245474!2d-79.3197941!3d43.8963859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d58974d54509%3A0xe7c3206129284a8d!2s6-9980%20Kennedy%20Rd%2C%20Markham%2C%20ON%20L6C%200M4!5e0!3m2!1sen!2sca!4v1660181998513!5m2!1sen!2sca" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
                <section className="contact-direct">
                    <h1>Get in touch</h1>
                    <h6>Fill out this form to directly send us an email from your browser.</h6>
                    <form className="contact-form">
                        <label>Name</label>
                        <input type="text" required></input>
                        <label>Email</label>
                        <input type="text" required></input>
                        <label>Message</label>
                        <textarea required></textarea>
                        <button className="send-email">Send email</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Contact;