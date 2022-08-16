import { Link } from "react-router-dom";

const Dropdown = ({items, id}) => {

    let parentNav = id.substring(0, id.indexOf('-'));

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