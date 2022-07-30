

const Header = ({currentPage, setCurrentPage}) => {

    const inactivateTabs = () => {
        const navTabs = document.querySelectorAll('.nav-tab');
        navTabs.forEach(tab => tab.classList.remove('active-nav'));
    }

    const handleClick = (e) => {
        inactivateTabs();
        e.target.classList.add('active-nav');
        setCurrentPage(e.target.id);
        console.log(currentPage);
    }

    return(
        <div className="header">
            <section className="header-logo">
                <a href="/"><img id="header-image" src="https://inspiremusiclesson.com/wp-content/uploads/2017/11/sample-FINAL-retina.jpg"></img></a>
            </section>
            <section className="navbar">
                <a id="home" className="nav-tab active-nav" onClick={handleClick}>Home</a>
                <a id="lessons" className="nav-tab" onClick={handleClick}>Lessons</a>
                <a className="nav-tab" onClick={handleClick}>Teachers</a>
                <a className="nav-tab" onClick={handleClick}>Events</a>
                <a className="nav-tab" onClick={handleClick}>Contact Us</a>
            </section>
        </div>
    )
}

export default Header;