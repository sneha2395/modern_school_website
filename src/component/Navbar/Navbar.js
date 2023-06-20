import React from 'react'
import "../../assets/css/navbar.css";

const Navbar = () => {
  return (
    <div>
        <header class="headerSectionStart">

      <nav class="header-nav Container">
        <div class="header-logo">
          <img src ="assets/logo-no-background.svg" class="logoBox"/>
          {/* <h4 data-aos="fade-down">We Together</h4>
          <div class="header__logo-overlay"></div>  */}
        </div>
        <ul class="header-menu">
          <li>
            <a href="#home" class="nav-link">HOME</a>
          </li>
          <li>
            <a href="#about" class="nav-link">ABOUT US</a>
          </li>
          <li>
            <a href="#membership" class="nav-link">OUR TEAM</a>
          </li>
          <li>
            <a href="#search" class="nav-link">OUR USB</a>
          </li>
          <li>
            <a href="#contact" class="nav-link">ACEDEMICS</a>
          </li>
          <li>
            <a href="#blog" class="nav-link">INFRASTRUCTURE</a>
          </li>
          <li>
            <a href="#search" class="nav-link">ACTIVITIES</a>
          </li>
          <li>
            <a href="#blog" class="nav-link">MEDIA</a>
          </li>
          <li>
            <a href="#search" class="nav-link">REACH US</a>
          </li>
        </ul>

        
            {/* <a href="#"class="button">Login</a>
            <a href="#" class="button">Sign up</a> */}
            
      </nav>
    </header>
    </div>
  )
}

export default Navbar