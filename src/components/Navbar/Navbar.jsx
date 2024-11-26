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
        <div className="list">
          <li>NEPAL</li>{' '}
          <span>
            <SlArrowDown />{' '}
          </span>
          <li>JAPAN</li>{' '}
          <span>
            <SlArrowDown />{' '}
          </span>
          <li>USA</li>{' '}
          <span>
            <SlArrowDown />{' '}
          </span>
          <li>COMPANY</li>{' '}
          <span>
            <SlArrowDown />{' '}
          </span>
        </div>
      </ul>

      <div className="logoContainer">
        <img src={logo} alt="Logo" className="appLogo1" />
        <div>TOP 10 TREKS</div>
      </div>

      <div className="contactDetail">
        <div className="location">
          Change Location{' '}
          <span>
            <SlArrowDown />{' '}
          </span>
        </div>
        <div>
          <div className="contract">
            <FaPhone /> <span>+020910037</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
