const Banner = ({title, desc, id}) => {
    return(
        <div className="banner" id={id}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <a className="free-trial">Book a free trial lesson today</a>
        </div>
    )
}

export default Banner;