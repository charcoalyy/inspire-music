const Testimonial = ({name, instrument, desc, image}) => {
    return(
        <div className="testimonial">
            <div className="thumb">
                <img src={image}></img>
            </div>
            <div className="content">
                <h3>{name}</h3>
                <h4>{instrument}</h4>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Testimonial;