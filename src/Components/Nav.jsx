import React, { useEffect, useState } from 'react';
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


    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            } else { // if scroll up show the navbar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const closeOpenMenus = (e) => {
        if (dropDownMenu.current === undefined) return;
        if (e.target !== toggleBtnIcon.current && e.target !== toggleBtn.current && e.target !== dropDownMenu.current) {
            dropDownMenu.current.classList.remove('open');
        }

        if (dropDownMenu.current.classList.contains('open')) {
            toggleBtnIcon.current.classList = 'fa-solid fa-xmark';
        } else {
            toggleBtnIcon.current.classList = 'fa-solid fa-bars';
        }
    };
    document.addEventListener('click', closeOpenMenus);



    return (
        <header>
            <nav id="navbar" className={`${show ? 'show' : 'hidden'}`} ref={navbar}>
                <Link to={'/'} id="logo" href="index.html"><img src={GuincheiLogo} alt="logo AgroSolution" /></Link>
                <div id="nav-middle" className="navigation-nav">
                    <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to='/contato'>Contato</NavLink>
                </div>
                <div id="nav-right" className="navigation-nav">
                    <NavLink id="contato" className={({ isActive }) => (isActive ? "active" : 'none')} to='/solicitar-guincho'>Solicite o Guincho</NavLink>
                </div>
                <div className="toggle-btn" ref={toggleBtn} onClick={dropdown}>
                    <i className="fa-solid fa-bars" ref={toggleBtnIcon}></i>
                </div>
                <div className='dropdown-menu' ref={dropDownMenu}>
                    <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to='/contato'>Contato</NavLink>
                    <NavLink id="contato-dropwdown" className={({ isActive }) => (isActive ? "active" : 'none')} to='/solicitar-guincho'>Solicite o Guincho</NavLink>
                </div>
            </nav>
        </header>
    );
}
