import React, { useState} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/CSS/Header.css';
import logo from "../Assets/Images/LOGO..jpeg.jpg";
import PhoneIcon from '@mui/icons-material/Phone';

function Header() {
  const [activeLink, setActiveLink] = useState("home");

  const handleNavClick = (link) => {
    setActiveLink(link);
  }

  return (
    <>
      <Navbar expand="md" className="header-bg" fixed="top">
        <div>
          <Navbar.Brand href="/graphics-designer">
            <img
              src={logo}
              alt="Graphic Designer - Jetly"
              className="logo"
            />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/graphics-designer"
                className={`header-text ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={`header-text-wt ${activeLink === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#resume"
                className={`header-text-wt ${activeLink === 'resume' ? 'active' : ''}`}
                onClick={() => handleNavClick('resume')}
              >
                Products
              </Nav.Link>
              <Nav.Link
                href="/graphics-designer/portfolio"
                className={`header-text-wt ${activeLink === 'portfolio' ? 'active' : ''}`}
                onClick={() => handleNavClick('portfolio')}
              >
                Contact Us
              </Nav.Link>
              <div className="vertical-line"></div>
              <Nav.Link href="#" className='header-text'>
                <PhoneIcon className='header-icon' />+971 54 422 0855
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>      
    </>
  );
}

export default Header;