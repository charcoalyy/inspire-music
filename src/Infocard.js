import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const InfoCard = ({title, desc, extraDesc, image, onClick, iden, alt}) => {
    useEffect(() => {
        AOS.init({duration: 1000});
        AOS.refresh();
    }, [])

    return(
        <Link to={`/${iden}`} onClick={onClick} id={iden} className="info-card-link">
            <div className="info-card" data-aos="fade-up">
                <div>
                    <img src={image} alt={alt && alt}></img>
                    <h2>{title}</h2>
                    { extraDesc && <h6>{extraDesc}</h6>}
                    { desc && <p>{desc}</p>}
                </div>
            </div>
        </Link>
    )
}

export default InfoCard;