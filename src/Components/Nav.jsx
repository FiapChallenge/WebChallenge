import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';
import GuincheiLogo from '../assets/GuincheiLogoRemake.png';
import './Nav.css';

export default function Nav() {
    const toggleBtn = useRef();
    const toggleBtnIcon = useRef();
    const dropDownMenu = useRef();

    let isOpen = false;

    const dropdown = function () {
        dropDownMenu.current.classList.toggle('open');
        isOpen = dropDownMenu.current.classList.contains('open');

        toggleBtnIcon.current.classList = isOpen ? 'fa-solid fa-xmark' : 'fa solid fa-bars';
    };

    // let prevScrollpos = window.scrollY;

    // window.onscroll = function () {
    //     let currentScrollPos = window.scrollY;
    //     if (prevScrollpos > currentScrollPos || currentScrollPos < 64 || isOpen) {
    //         document.getElementById("navbar").style.transform = "translateY(0)";
    //     } else {
    //         document.getElementById("navbar").style.transform = "translateY(-100%)";
    //     }
    //     prevScrollpos = currentScrollPos;
    // };

    const navbar = useRef()

    let prevScrollpos = window.scrollY
    window.onscroll = function () {
        let currentScrollPos = window.scrollY
        if (prevScrollpos > currentScrollPos || currentScrollPos < 64 || isOpen) {
            navbar.current.style.transform = "translateY(0)"   
        } else {
            navbar.current.style.transform = "translateY(-100%)"
        }
        prevScrollpos = currentScrollPos
    }



    return (
        <header>
            <nav id="navbar" ref={navbar}>
                <Link to={'/'} id="logo" href="index.html"><img src={GuincheiLogo} alt="logo AgroSolution" /></Link>
                <div id="nav-middle" class="navigation-nav">
                    <NavLink exact activeClassName="active" to='/'>Home</NavLink>
                    <NavLink activeClassName="active" to='/contato'>Contato</NavLink>
                </div>
                <div id="nav-right" class="navigation-nav">
                    <NavLink id="contato" activeClassName="active" to='/solicitar-guincho'>Solicite o Guincho</NavLink>
                </div>
                <div class="toggle-btn" ref={toggleBtn} onClick={dropdown}>
                    <i class="fa-solid fa-bars" ref={toggleBtnIcon}></i>
                </div>
                <div class="dropdown-menu" ref={dropDownMenu}>
                    <NavLink exact activeClassName="active" to='/'>Home</NavLink>
                    <NavLink activeClassName="active" to='/contato'>Contato</NavLink>
                    <NavLink id="contato-dropwdown" activeClassName="active" to='/solicitar-guincho'>Solicite o Guincho</NavLink>
                </div>
            </nav>
        </header>
    );
}
