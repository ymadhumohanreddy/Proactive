import React, { useState } from 'react';
import './styles.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#">
            <img src="/logomain.png" alt="ProVital Logo" />
          </a>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="hamburger"
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? '×' : '☰'}
        </button>
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">List your practice</a>
            </li>
            <li className="nav-item">
              <a href="#">For Employers</a>
            </li>
            <li className="nav-item">
              <a href="#">Courses</a>
            </li>
            <li className="nav-item">
              <a href="#">Books</a>
            </li>
            <li className="nav-item">
              <a href="#">Speakers</a>
            </li>
            <li className="nav-item">
              <a href="#">Doctors</a>
            </li>
            <li className="nav-item login-signup">
              <a href="#" onClick={toggleDropdown}>Login / Signup</a>
              {isDropdownOpen && (
                <div className="dropdown">
                  <div className="dropdown-row">
                    <span>Doctor:</span>
                    <a href="#">Login</a>
                    <span>/</span>
                    <a href="#">Signup</a>
                  </div>
                  <div className="dropdown-row">
                    <span>Patient:</span>
                    <a href="#">Login</a>
                    <span>/</span>
                    <a href="#">Signup</a>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* The mobile menu is placed here, outside of the header */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          <ul className="mobile-menu-list">
             <li className="nav-item login-signup">
              
              
                <div className="">
                  <div className="">
                    <span>Doctor:</span>
                    <a href="#">Login</a>
                    <span>/</span>
                    <a href="#">Signup</a><span className="arrow-icon">→</span>
                  </div>
                  <div className="">
                    <span>Patient:</span>
                    <a href="#">Login</a>
                    <span>/</span>
                    <a href="#">Signup</a><span className="arrow-icon">→</span>
                  </div>
                </div>
              
            </li>
            <li className="nav-item">
              <a href="#" onClick={closeMenu}>Doctors</a>
              <span className="arrow-icon">→</span>
            </li>
            <li className="nav-item">
              <a href="#" onClick={closeMenu}>List your practice</a>
              <span className="arrow-icon">→</span>
            </li>
            <li className="nav-item">
              <a href="#" onClick={closeMenu}>For Employers</a>
              <span className="arrow-icon">→</span>
            </li>
            <li className="nav-item">
              <a href="#" onClick={closeMenu}>Courses</a>
              <span className="arrow-icon">→</span>
            </li>
            <li className="nav-item">
              <a href="#" onClick={closeMenu}>Books</a>
              <span className="arrow-icon">→</span>
            </li>
            <li className="nav-item">
              <a href="#" onClick={closeMenu}>Speakers</a>
              <span className="arrow-icon">→</span>
            </li>
            
           
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
