import { Link } from 'react-router-dom';

const InfoCard = ({title, desc, extraDesc, image, onClick, iden}) => {
    return(
        <Link to={`/${iden}`} onClick={onClick} id={iden} className="info-card">
            <img src={image}></img>
            <h2>{title}</h2>
            <h6>{extraDesc}</h6>
            <p>{desc}</p>
        </Link>
    )
}

export default InfoCard;