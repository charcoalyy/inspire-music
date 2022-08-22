import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
// import { useSpring, animated, useTransition } from '@react-spring/web';
import { GiHamburgerMenu } from 'react-icons/gi'
import Navbar from './Navbar';

const Header = () => {

    const [ wide, setWide ] = useState(null);
    useEffect(() => {
        const handleChange = () => {
            window.innerWidth > 930 ? setWide(true) : setWide(false)
            console.log(wide)
        }

        window.addEventListener('resize', handleChange);
        return () => {
            window.removeEventListener('resize', handleChange);
        };
    });

    const openMenu = () => {
        setOpenNav(true)
    }

    const nav = useRef(null);
    const [ openNav, setOpenNav ] = useState(false);
    const closeOpenNav = (e) => {
        if (nav.current && openNav && !nav.current.contains(e.target)) {
            setOpenNav(false);
        }
    }

    document.addEventListener('mousedown', closeOpenNav)

    return(
        <div className="header">
            <section className="header-logo">
                <Link to="/"><img id="header-image" src="https://inspiremusiclesson.com/wp-content/uploads/2017/11/sample-FINAL-retina.jpg"></img></Link>
            </section>

            { wide && <Navbar wide={wide} /> }
            { !wide && !openNav && <GiHamburgerMenu size={30} onClick={openMenu} /> }
            { openNav && <div ref={nav}>{<Navbar wide={wide} setOpenNav={setOpenNav} />}</div> }
        </div>
    )
}

export default Header;