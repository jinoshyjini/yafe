import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from '@mui/material';
import Background from '../Assets/Images/yafe1.png';
import Background1 from '../Assets/Images/yafe2.png';
import Background2 from '../Assets/Images/yafe5.jpg';
import '../Assets/CSS/Home.css';

const Home = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        src={Background}
                        alt="YAFE"
                        className="home-bg"
                    />
                    <Carousel.Caption className='mb-5'>
                        <h3>Your Trusted Source for Quality Spares</h3>
                        <p>Where Quality Meets Reliability</p>
                        <Button variant="contained" className='home-btn'>DISCOVER NOW</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={Background1}
                        alt="YAFE"
                        className="home-bg"
                    />
                    <Carousel.Caption className='mb-5'>
                        <h3>Driving Innovation in Spare Parts</h3>
                        <p>Where Quality Meets Reliability</p>
                        <Button variant="contained" className='home-btn'>DISCOVER NOW</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={Background2}
                        alt="YAFE"
                        className="home-bg"
                    />
                    <Carousel.Caption className='mb-5'>
                        <h3>Your Foundation for Quality Contsruction</h3>
                        <p>Where Quality Meets Reliability</p>
                        <Button variant="contained" className='home-btn'>DISCOVER NOW</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
};
export default Home;