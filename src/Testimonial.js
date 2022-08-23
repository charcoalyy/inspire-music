import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const Testimonial = ({name, instrument, desc, image, alt}) => {
    useEffect(() => {
        AOS.init({duration: 1000});
        AOS.refresh();
    }, [])

    return(
        <div data-aos="fade-left">
            <div className="testimonial">
                <div className="thumb">
                    <img src={image} alt={alt && alt}></img>
                </div>
                <div className="content">
                    <h3>{name}</h3>
                    <h4>{instrument}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;