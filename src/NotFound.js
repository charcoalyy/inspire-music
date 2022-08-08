import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="not-found">
            <h2>Sorry, that page doesn't exist.</h2>
            <Link to="/"><button className="back-home">Return Home</button></Link>
        </div>
    )
}

export default NotFound;