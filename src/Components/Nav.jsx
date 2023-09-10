import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';
import GuincheiLogo from '../assets/GuincheiLogoRemake.png';
import './Nav.css';

export default function Nav() {
    const toggleBtn = useRef();
    const toggleBtnIcon = useRef();
    const dropDownMenu = useRef();

    const [isOpen, setIsOpen] = useState(true);

    const dropdown = function () {
        dropDownMenu.current.classList.toggle('open');
        setIsOpen(!isOpen);

        toggleBtnIcon.current.classList = isOpen ? 'fa-solid fa-xmark' : 'fa solid fa-bars';
    };
    const navbar = useRef();


    let prevScrollpos = window.scrollY;
    window.onscroll = function () {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos || currentScrollPos < 64 || isOpen) {
            navbar.current.style.transform = "translateY(0)";
        } else {
            navbar.current.style.transform = "translateY(-100%)";
        }
        prevScrollpos = currentScrollPos;
    };

    // window.addEventListener('click', function (e) {
    //     if (!toggleBtn.current.contains(e.target) && !dropDownMenu.current.contains(e.target)) {
    //         dropDownMenu.current.classList.remove('open');
    //         setIsOpen(true);
    //         toggleBtnIcon.current.classList = 'fa solid fa-bars';
    //     }
    //     if (dropDownMenu.current.contains(e.target)) {
    //         dropDownMenu.current.classList.remove('open');
    //         setIsOpen(true);
    //         toggleBtnIcon.current.classList = 'fa solid fa-bars';
    //     }
    // });



    return (
        <header>
            <nav id="navbar" ref={navbar}>
                <Link to={'/'} id="logo" href="index.html"><img src={GuincheiLogo} alt="logo AgroSolution" /></Link>
                <div id="nav-middle" className="navigation-nav">
                    <NavLink exact='true' activeclassname="active" to='/'>Home</NavLink>
                    <NavLink activeClassName="active" to='/contato'>Contato</NavLink>
                </div>
                <div id="nav-right" className="navigation-nav">
                    <NavLink id="contato" activeclassname="active" to='/solicitar-guincho'>Solicite o Guincho</NavLink>
                </div>
                <div className="toggle-btn" ref={toggleBtn} onClick={dropdown}>
                    <i className="fa-solid fa-bars" ref={toggleBtnIcon}></i>
                </div>
                <div className="dropdown-menu" ref={dropDownMenu}>
                    <NavLink exact activeclassname="active" to='/'>Home</NavLink>
                    <NavLink activeclassname="active" to='/contato'>Contato</NavLink>
                    <NavLink id="contato-dropwdown" activeclassname="active" to='/solicitar-guincho'>Solicite o Guincho</NavLink>
                </div>
            </nav>
        </header>
    );
}
