import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Header = ({setCurrentPage}) => {

    const inactivateTabs = () => {
        const navTabs = document.querySelectorAll('.nav-tab');
        navTabs.forEach(tab => tab.classList.remove('active-nav'));
    }

    const handleClick = (e) => {
        inactivateTabs();
        e.target.classList.add('active-nav');
        setCurrentPage(e.target.id);
    }

    return(
        <div className="header">
            <section className="header-logo">
                <Link to="/"><img id="header-image" src="https://inspiremusiclesson.com/wp-content/uploads/2017/11/sample-FINAL-retina.jpg"></img></Link>
            </section>
            <section className="navbar">
                <Link to="/" id="home" className="nav-tab active-nav" onClick={handleClick}>Home</Link>
                <Link to="/lessons" id="lessons" className="nav-tab" onClick={handleClick}>Lessons</Link>
                <Link to="/teachers" className="nav-tab" onClick={handleClick}>Teachers</Link>
                <Link to="/events" className="nav-tab" onClick={handleClick}>Events</Link>
                <Link to="/contact" className="nav-tab" onClick={handleClick}>Contact Us</Link>
            </section>
            <Dropdown items={["Instrumental", "Music Theory", "Other"]} id="lessons-dropdown" />
        </div>
    )
}

export default Header;