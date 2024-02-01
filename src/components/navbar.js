import React from 'react';
import "./navbar.css";
import logo from "../../assets file/logo.jpg";
import contactimg from "../asset/contact.jpg"
import {link} from 'react-scroll';

function Navbar (){
  return (
    <nav className='navbar'>
      <img src="{logo}" alt="logo" className='logo'/>
      <div className='billgrace'>
        <link className='desktopMenulistItems'> Home</link>
        <link className='desktopMenulistItems'> About</link>
        <link className='desktopMenulistItems'> client</link>
      </div>
        <button className= 'billgraceBtn'>
          <img src='{contact}' alt="" className='billgraceimg'/> Contact us
        </button>
    </nav>
  )
}

export default Navbar;