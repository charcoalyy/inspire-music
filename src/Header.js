import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useState } from 'react';

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

    const lessonMenuItems = [
        {
            title: "Instrumental",
            path: "instrumental",
            className: "dropdown-item"
        }, 
        {
            title: "Music Theory",
            path: "theory",
            className: "dropdown-item"
        }, 
        {
            title: "Other",
            path: "other",
            className: "dropdown-item"
        }
    ]

    const [ dropdown, setDropdown ] = useState(true);

    return(
        <div className="header">
            <section className="header-logo">
                <Link to="/"><img id="header-image" src="https://inspiremusiclesson.com/wp-content/uploads/2017/11/sample-FINAL-retina.jpg"></img></Link>
            </section>
            <section className="navbar">
                <div className="nav-tab-container">
                    <Link to="/" id="home" className="nav-tab active-nav" onClick={handleClick}>Home</Link>
                </div>
                <div onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className="nav-tab-container" onClick={() => setDropdown(false)}>
                    <Link to="/lessons" id="lessons" className="nav-tab" onClick={handleClick} >Lessons</Link>
                    {dropdown && <Dropdown items={lessonMenuItems} id="lessons-dropdown" />}
                </div>
                <div className="nav-tab-container">
                    <Link to="/teachers" className="nav-tab" onClick={handleClick}>Teachers</Link>
                </div>
                <div className="nav-tab-container">
                    <Link to="/events" className="nav-tab" onClick={handleClick}>Events</Link>
                </div>
                <div className="nav-tab-container">
                    <Link to="/contact" className="nav-tab" onClick={handleClick}>Contact Us</Link>
                </div>
            </section>
        </div>
    )
}

export default Header;