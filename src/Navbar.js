import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useState, useEffect } from 'react';
import ActivateTab from './ActivateTab';
import { lessonMenuItems, teacherMenuItems } from './SpecificLists';
import { animated, useTransition } from '@react-spring/web';

const Navbar = ({wide, setOpenNav}) => {
    const [ activeTab, setActiveTab ] = useState('home');
    useEffect(() => {
        const navTabs = document.querySelectorAll('.nav-tab');
        navTabs.forEach(tab => tab.classList.remove('active-nav'));
        activeTab ? document.getElementById(activeTab).classList.add('active-nav') : document.getElementById('home').classList.add('active-nav')
    }, [activeTab])

    const [dropdown, setDropdown] = useState(null)
    const fade = useTransition(dropdown, {
        from: {opacity: 0},
        enter: {
            opacity: 1
        },
        leave: {opacity: 0}
    })

    return(
        <div onClick={() => setOpenNav(false)}>
            <ActivateTab activeTab={activeTab} setActiveTab={setActiveTab} />
            <section className="navbar">
                <div className="nav-tab-container">
                    <Link to="/" id="home" className="nav-tab active-nav">Home</Link>
                </div>
                <div onMouseLeave={() => setDropdown(null)} className="nav-tab-container" onClick={() => setDropdown(null)}>
                    <Link to="/lessons" id="lessons" className="nav-tab" onMouseEnter={() => setDropdown('lesson')}>Lessons</Link>
                    {fade((style, item) => item === 'lesson' && <animated.div style={style}>{<Dropdown items={lessonMenuItems} id="lessons-dropdown" />}</animated.div>)}
                </div>
                <div className="nav-tab-container" onMouseLeave={() => setDropdown(null)} onClick={() => setDropdown(null)}>
                    <Link to="/teachers" id="teachers" className="nav-tab" onMouseEnter={() => setDropdown('teachers')}>Teachers</Link>
                    {fade((style, item) => item === 'teachers' && <animated.div style={style}>{<Dropdown items={teacherMenuItems} id="teachers-dropdown" />}</animated.div>)}
                </div>
                <div className="nav-tab-container">
                    <Link to="/events" id="events" className="nav-tab">Events</Link>
                </div>

                { wide && <p className="nav-divider">|</p>}
                
                <div className="nav-tab-container">
                    <Link to="/contact" id="contact" className="nav-tab">Contact Us</Link>
                </div>
                <div className="nav-tab-container">
                    <Link to="/about" id="about" className="nav-tab">About</Link>
                </div>
            </section>
        </div>
    )
}

export default Navbar;