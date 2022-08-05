import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useState, useEffect } from 'react';
import ActivateTab from './ActivateTab';
import { lessonMenuItems, teacherMenuItems } from './SpecificLists';

const Header = () => {
    const [ activeTab, setActiveTab ] = useState('home');

    useEffect(() => {
        const navTabs = document.querySelectorAll('.nav-tab');
        navTabs.forEach(tab => tab.classList.remove('active-nav'));
        activeTab ? document.getElementById(activeTab).classList.add('active-nav') : document.getElementById('home').classList.add('active-nav')
    }, [activeTab])

    const [ lessonDropdown, setLessonDropdown ] = useState(false);
    const [ teacherDropdown, setTeacherDropdown ] = useState(false);

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
                <div onMouseEnter={() => setLessonDropdown(true)} onMouseLeave={() => setLessonDropdown(false)} className="nav-tab-container" onClick={() => setLessonDropdown(false)}>
                    <Link to="/lessons" id="lessons" className="nav-tab">Lessons</Link>
                    {lessonDropdown && <Dropdown items={lessonMenuItems} id="lessons-dropdown" />}
                </div>
                <div className="nav-tab-container" onMouseEnter={() => setTeacherDropdown(true)} onMouseLeave={() => setTeacherDropdown(false)} onClick={() => setTeacherDropdown(false)}>
                    <Link to="/teachers" id="teachers" className="nav-tab">Teachers</Link>
                    {teacherDropdown && <Dropdown items={teacherMenuItems} id="teachers-dropdown" />}
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