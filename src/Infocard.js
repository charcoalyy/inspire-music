const InfoCard = ({title, desc, extraDesc, image, onClick, iden}) => {
    return(
        <div onClick={onClick} id={iden} className="info-card">
            <img src={image}></img>
            <h2>{title}</h2>
            <h6>{extraDesc}</h6>
            <p>{desc}</p>
        </div>
    )
}

export default InfoCard;