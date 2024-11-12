import React from 'react';
import '../Assets/CSS/Footer.css';
import Facebook from '../Assets/Images/facebook.png';
import Instagram from '../Assets/Images/instagram.png';
import Whatsapp from '../Assets/Images/whatsapp.png';
import Linkedin from '../Assets/Images/linkedin.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Footer() {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/")
    }

    const handleAbout = () => {
        navigate("/about")
    }

    const handleGallery = () => {
        navigate("/gallery")
    }

    const handleContact = () => {
        navigate("/contact")
    }
    return (
        <>
            <div className="footer-container">
                <div className='footer-content row'>
                    <div className='footer-text col-6 col-sm-4'>
                        <h5 className='yafe-footer mb-2'>Company Address</h5>
                        <p className='footer-text-ad'>
                            <LocationOnIcon className='yafe-address' />&nbsp; 34 Street 2, Musaffah, Abu Dhabi, <br /> United Arab Emirates
                        </p>
                        <p className='footer-text-ad'><PhoneIcon className='yafe-address' />&nbsp; +971 50 564 6073</p>
                        <p className='footer-text-ad'><EmailIcon className='yafe-address' />&nbsp; yafegen@gmail.com</p>
                    </div>
                    <div className='footer-text col-6 col-sm-4'>
                        <h5 className='yafe-footer mb-2'>Quick Link</h5>
                        <div className='footer-text mb-2' onClick={handleHome}><b>-</b> &nbsp;Home</div>
                        <div className='footer-text mb-2' onClick={handleAbout}><b>-</b> &nbsp;About</div>
                        <div className='footer-text mb-2' onClick={handleGallery}><b>-</b> &nbsp;Gallery</div>
                        <div className='footer-text mb-2' onClick={handleContact}><b>-</b> &nbsp;Contact Us</div>
                    </div>
                    <div className='footer-text col-6 col-sm-4'>
                        <h5 className='yafe-footer mb-2'> &nbsp;Social Media</h5>
                        <img alt="Facebook" src={Facebook} className='yafe-footer-icon' />
                        <img alt="Instagram" src={Instagram} className='yafe-footer-icon' />
                        <img alt="Linkedin" src={Linkedin} className='yafe-footer-icon' />
                        <img alt="Whatsapp" src={Whatsapp} className='yafe-footer-icon' />
                    </div>
                </div>
            </div>
            <div className='footer-txt text-center'>© 2023 YAFE Trading LLC & Building Materials All Rights Reserved.</div>
        </>
    )
}
export default Footer;
