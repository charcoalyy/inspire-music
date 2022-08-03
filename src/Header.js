import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useState, useEffect } from 'react';
import ActivateTab from './ActivateTab';

const Header = () => {
    const [ activeTab, setActiveTab ] = useState('home');

    useEffect(() => {
        const navTabs = document.querySelectorAll('.nav-tab');
        navTabs.forEach(tab => tab.classList.remove('active-nav'));
        activeTab ? document.getElementById(activeTab).classList.add('active-nav') : document.getElementById('home').classList.add('active-nav')
    }, [activeTab])

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

    const [ dropdown, setDropdown ] = useState(false);

    return(
        <div className="header">
            <ActivateTab activeTab={activeTab} setActiveTab={setActiveTab} />
            <section className="header-logo">
                <Link to="/"><img id="header-image" src="https://inspiremusiclesson.com/wp-content/uploads/2017/11/sample-FINAL-retina.jpg"></img></Link>
            </section>
            <section className="navbar">
                <div className="nav-tab-container">
                    <Link to="/" id="home" className="nav-tab active-nav">Home</Link>
                </div>
                <div onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className="nav-tab-container" onClick={() => setDropdown(false)}>
                    <Link to="/lessons" id="lessons" className="nav-tab">Lessons</Link>
                    {dropdown && <Dropdown items={lessonMenuItems} id="lessons-dropdown" />}
                </div>
                <div className="nav-tab-container">
                    <Link to="/teachers" id="teachers" className="nav-tab">Teachers</Link>
                </div>
                <div className="nav-tab-container">
                    <Link to="/events" id="events" className="nav-tab">Events</Link>
                </div>
                <div className="nav-tab-container">
                    <Link to="/contact" id="contact" className="nav-tab">Contact Us</Link>
                </div>
            </section>
        </div>
    )
}

export default Header;