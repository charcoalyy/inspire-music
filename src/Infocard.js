const InfoCard = ({title, desc, image}) => {
    return(
        <div className="info-card">
            <img src={image}></img>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default InfoCard;