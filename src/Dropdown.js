
const Dropdown = ({items, id}) => {
    return(
        <section className="dropdown-menu" id={id}>
            {items.map(item => ( 
                <div className="dropdown-item">
                    {item}
                </div>
            ))}
        </section>
    )
}

export default Dropdown;