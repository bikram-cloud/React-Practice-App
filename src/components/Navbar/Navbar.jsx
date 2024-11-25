import React from 'react';
import './Navbar.css';
import { SlArrowDown } from 'react-icons/sl';
import logo from '../../assets/newlogo.avif';
import { FaPhone } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" className="appLogo" />
      <ul>
        <div>
          <li>NEPAL</li> <SlArrowDown />
        </div>
        <div>
          <li>JAPAN</li> <SlArrowDown />
        </div>
        <div>
          <li>USA</li> <SlArrowDown />
        </div>
        <div>
          <li>COMPANY</li>
        </div>
      </ul>

      <div className="logoContainer">
        <img src={logo} alt="Logo" className="appLogo1" />
        <div>TOP 10 TREKS</div>
      </div>

      <div className="contactDetail">
        <div>Change Location</div> <SlArrowDown />
        <div>
          <div>
            <FaPhone /> +020910037
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
