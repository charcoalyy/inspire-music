const Infoslot = ({title, age, duration, desc, image}) => {
    return(
        <div className="info-slot">
            <h2>{title}</h2>
            <div className="info-slot-content">
                <div className="info-slot-thumb">
                    <img src={image}></img>
                </div>
                <div className="info-slot-text">
                    <h6>Recommended ages: {age} <br></br> Lesson durations: {duration}</h6>
                    <p>{desc}</p>
                    <a className="free-trial">Book a free trial lesson today</a>
                </div>
            </div>
        </div>
    )
}

export default Infoslot;