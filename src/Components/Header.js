import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/CSS/Header.css';
import logo from "../Assets/Images/LOGO..jpeg.jpg";
import PhoneIcon from '@mui/icons-material/Phone';
import { useLocation } from 'react-router-dom';  

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveLink('home');
        break;
      case '/about':
        setActiveLink('about');
        break;
      case '/gallery':
        setActiveLink('gallery');
        break;
      case '/contact':
        setActiveLink('contact');
        break;
      default:
        setActiveLink('home');
    }
  }, [location.pathname]);

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <Navbar expand="md" className="header-bg">
        <div>
          <Navbar.Brand href="/">
            <img src={logo} alt="YAFE" className="logo" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/"
                className={`header-text ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/about"
                className={`header-text-wt ${activeLink === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="/gallery"
                className={`header-text-wt ${activeLink === 'gallery' ? 'active' : ''}`}
                onClick={() => handleNavClick('gallery')}
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className={`header-text-wt ${activeLink === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                Contact Us
              </Nav.Link>
              <div className="vertical-line"></div>
              <Nav.Link className='header-text'>
                <PhoneIcon className='header-icon' />+971 50 564 6073
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>      
    </>
  );
}

export default Header;
