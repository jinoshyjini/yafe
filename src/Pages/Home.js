import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from '@mui/material';
import Background from '../Assets/Images/yafe1.png';
import Background1 from '../Assets/Images/yafe5.jpg';
import Background2 from '../Assets/Images/yafe2.png';
import Background3 from '../Assets/Images/yafe11.jpg';
import Product from '../Assets/Images/yafe6.jpg';
import Product1 from '../Assets/Images/yafe10.jpg';
import Product2 from '../Assets/Images/yafe8.jpg';
import Product3 from '../Assets/Images/yafe9.jpg';
import '../Assets/CSS/Home.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    const navigate = useNavigate();

    const handleDiscover = () => {
        navigate("/gallery")
    }

    return (
        <>
            <div className='mb-5'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            src={Background}
                            alt="YAFE"
                            className="home-bg"
                        />
                        <Carousel.Caption className='yafe-caro'>
                            <h3 className='yafe-caro-head'>One Stop Solution For all Building Materials</h3>
                            <p className='yafe-caro-txt'>Where Quality Meets Reliability</p>
                            <Button variant="contained" className='home-btn' onClick={handleDiscover}>DISCOVER NOW</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Background1}
                            alt="YAFE"
                            className="home-bg"
                        />
                        <Carousel.Caption className='yafe-caro'>
                            <h3 className='yafe-caro-head'>Driving Innovation in Spare Parts</h3>
                            <p className='yafe-caro-txt'>Where Quality Meets Reliability</p>
                            <Button variant="contained" className='home-btn' onClick={handleDiscover}>DISCOVER NOW</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Background2}
                            alt="YAFE"
                            className="home-bg"
                        />
                        <Carousel.Caption className='yafe-caro'>
                            <h3 className='yafe-caro-head'>Your Foundation for Quality Construction</h3>
                            <p className='yafe-caro-txt'>Where Quality Meets Reliability</p>
                            <Button variant="contained" className='home-btn' onClick={handleDiscover}>DISCOVER NOW</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className='yafe-content mt-5'>
                    <h3 className='yafe-heading'>PARTS THAT POWER YOUR JOURNEY</h3>
                    <p className='yafe-txt mt-3'>Step into our expensive showroom and discover a world of possibilities for your building projects</p>
                    <p className='yafe-btn' onClick={handleDiscover}>Discover Now <ArrowRightAltIcon /></p>
                </div>
                <div className='yafe-product container my-5'>
                    <h3 className='yafe-heading mb-5 text-center'>CATEGORY</h3>
                    <div className='row'>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'>
                            <div className="card text-center">
                                <img alt='Hand Tools' src={Product} className='yafe-img img-fluid' />
                                <p className='yafe-tool mt-2'>HAND TOOLS</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'>
                            <div className="card text-center">
                                <img alt='Safety Wears' src={Product1} className='yafe-img img-fluid' />
                                <p className='yafe-tool mt-2'>SAFETY WEARS</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'>
                            <div className="card text-center">
                                <img alt='Lifting Tools' src={Product2} className='yafe-img img-fluid' />
                                <p className='yafe-tool mt-2'>LIFTING TOOLS</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4'>
                            <div className="card text-center">
                                <img alt='Power Tools' src={Product3} className='yafe-img img-fluid' />
                                <p className='yafe-tool mt-2'>POWER TOOLS</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row m-3'>
                    <div className='col-lg-5 col-md-12 col-sm-12 col-12 card yafe-abt'>
                        <div className='p-4'>
                            <h5 className='yafe-head mb-3'>We Started From 2022</h5>
                            <p className='yafe-cont'>
                                Founded in 2022 and headquartered in Abu Dhabi, U.A.E., It's a distinguished
                                distributor specializing in Mechanical, Electrical, Plumbing, and oil field products
                                across the United Arab Emirates. Our central location in Mussafah Industrial area M-9,
                                Abu Dhabi. Facilitates quick access to our well-stocked showroom and warehouses,
                                ensuring prompt and reliable service. With a commitment to quality upheld through
                                stringent checks and efficient distribution, Afreen is your trusted partner for MEP
                                and oil field supplies, prioritizing customer satisfaction and on-time deliveries.
                                Choose YAFE for a seamless experience in meeting your construction and oil field product needs.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-12 col-sm-12 col-12 yafe-gap'></div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                        <img
                            src={Background3}
                            alt="YAFE"
                            className="yafe-bg img-fluid"
                        />
                    </div>
                </div>
            </div>
        </>
    )
};
export default Home;