const Infoslot = ({title, age, duration, desc, desc2, desc3, image, slotName, price}) => {
    return(
        <div className={`info-slot`}>
            <h2>{title}</h2>
            <div className="info-slot-content">
                <div className="info-slot-thumb">
                    <img src={image}></img>
                </div>
                <div className="info-slot-text">
                    { age && duration && <h6>Recommended ages: {age} <br></br> Lesson durations: {duration}</h6> }
                    <p className={slotName}>{desc}</p>
                    { desc2 && <p className={slotName}>{desc2}</p>}
                    { desc3 && <p className={slotName}>{desc3}</p>}
                    { price && <h6>Price: ${price}/h</h6>}
                </div>
            </div>
        </div>
    )
}

export default Infoslot;