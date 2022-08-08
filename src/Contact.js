import Banner from "./Banner";

const Contact = () => {
    return(
        <div className="contact-us">
            <Banner title="Contact Us" id="contact-banner" desc="We'd absolutely love to hear from you!" />
            <div className="contact-content">
                <section className="contact-information">
                    <h1>Get our contact information</h1>
                    <h6>Call, email, or visit us to get your inquiries answered.</h6>
                    <i></i>
                    <p>(905) 534-2456</p>
                    <i></i>
                    <p>info@inspiremusiclesson.com</p>
                    <i></i>
                    <p>6-9980 Kennedy Rd, Markham, ON</p>
                    <p>Kylemore’s Shoppe on Angus Glen Plaza, across from TD Bank</p>
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