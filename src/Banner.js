import { Link } from 'react-router-dom';

const Banner = ({title, desc, id, clickable, noButton}) => {
    let pathName = id;
    pathName = id.substring(0, pathName.indexOf('-'));

    return(
        <div className="banner" id={id}>
            {clickable ? <Link to={`/${pathName}`} className="linkable-banner"><h2>{title}</h2></Link> : <h2>{title}</h2>}
            <p>{desc}</p>
            {!noButton && <a className="free-trial">Book a free trial lesson today</a>}
        </div>
    )
}

export default Banner;