import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/CSS/Header.css';
import logo from "../Assets/Images/LOGO..jpeg.jpg";
import PhoneIcon from '@mui/icons-material/Phone';

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
    <Navbar expand="md" className="header-bg">
      <div>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="YAFE" className="logo" />
        </Navbar.Brand>
      </div>
      <div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className={`nav-link header-text ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link header-text-wt ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className={`nav-link header-text-wt ${activeLink === 'gallery' ? 'active' : ''}`}
              onClick={() => handleNavClick('gallery')}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`nav-link header-text-wt ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact Us
            </Link>
            <div className="vertical-line"></div>
            <Nav.Link className='header-text'>
                <PhoneIcon className='header-icon' />+971 50 564 6073
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
