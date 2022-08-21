import { Link } from "react-router-dom";
import { useSpring } from "@react-spring/web";

const Dropdown = ({items, id}) => {

    let parentNav = id.substring(0, id.indexOf('-'));

    const styles = useSpring({
        config: { 
            duration: 5000
        },
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        } 
    })

    return(
        <section className="dropdown-menu" id={id}>
            {items.map(item => ( 
                <Link to={`/${parentNav}/${item.path}`} className="dropdown-item" key={item.title}>
                    {item.title}
                </Link>
            ))}
        </section>
    )
}

export default Dropdown;