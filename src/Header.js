import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { animated, useTransition } from '@react-spring/web';
import { CgMenu, CgClose } from 'react-icons/cg';
import Navbar from './Navbar';

const Header = () => {

    const [ wide, setWide ] = useState(window.innerWidth > 930 ? true : false);
    useEffect(() => {
        const handleChange = () => {
            window.innerWidth > 930 ? setWide(true) : setWide(false)
        }

        window.addEventListener('resize', handleChange);
        return () => {
            window.removeEventListener('resize', handleChange);
        };
    });

    const openMenu = () => {
        setOpenNav(true)
        setBurger(false)
    }

    const nav = useRef(null);
    const [ openNav, setOpenNav ] = useState(false);
    const closeOpenNav = (e) => {
        if (nav.current && openNav && !nav.current.contains(e.target)) {
            setOpenNav(false);
            setBurger(true);
        }
    }

    document.addEventListener('mousedown', closeOpenNav)

    const [ burger, setBurger ] = useState(true);

    const slide = useTransition(openNav, {
        from: { opacity: -1, y: -65, position: "absolute", right: 0 },
        enter: { opacity: 1, y: 65, zIndex: 5},
        leave: { opacity: -1, y: -65 }
    })

    return(
        <div className="header">
            <section className="header-logo">
                <Link to="/"><img id="header-image" src="https://inspiremusiclesson.com/wp-content/uploads/2017/11/sample-FINAL-retina.jpg"></img></Link>
            </section>

            { wide && <Navbar wide={wide} /> }
            { !wide && burger && <CgMenu size={30} onClick={openMenu} className="burger" /> }
            { !wide && !burger && <CgClose size={30} className="burger" /> }
            {slide((style, item) => item === true && <animated.div style={style} ref={nav}>{<Navbar wide={wide} setOpenNav={setOpenNav} setBurger={setBurger} />}</animated.div>)}
        </div>
    )
}

export default Header;