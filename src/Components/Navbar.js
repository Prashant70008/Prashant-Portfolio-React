import React, { useState } from "react";
import { useRef } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png'; 
import underline from '../Assets/underline.svg';
import menu_open from '../Assets/menu_open.svg';
import menu_close from '../Assets/menu_close.svg';

const Navbar = () => {
    const [menu,setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right="0";
    }
    const closeMenu = () => {
        menuRef.current.style.right="-350px";
    }

    return (
        <div className="navbar">
            <img id="logo" src={logo} alt=""/>
            <img src={menu_open} onClick={openMenu} className="nav-mob-open"/>
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu}  alt="" className="nav-mob-close" />
                <li><a className='anchor-link' href='#home'> <p onClick={()=> setMenu("home")}>Home</p></a>{menu==="home"? <img src={underline}/>:<></>}</li>
                <li><a className='anchor-link' offset={50} href='#about'><p onClick={()=> setMenu("about")}>About</p></a>{menu==="about"? <img src={underline}/>:<></>}</li>
                <li><a className='anchor-link' offset={50} href='#services'><p onClick={()=> setMenu("services")}>Services</p></a>{menu==="services"? <img src={underline}/>:<></>}</li>
                <li><a className='anchor-link' offset={50} href='#mywork'><p onClick={()=> setMenu("work")}>Portfolio</p></a>{menu==="work"? <img src={underline}/>:<></>}</li>
                <li><a className='anchor-link' offset={50} href='#contact'><p onClick={()=> setMenu("contact")}>Contact</p></a>{menu==="contact"? <img src={underline}/>:<></>}</li>
            </ul>
            <div className="nav-connect"><a className='anchor-link' offset={50} href='#contact'>Connect With Me</a></div>

        </div>
    )
}
export default Navbar;
