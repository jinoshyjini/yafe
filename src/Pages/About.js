import React from 'react';
import Product4 from '../Assets/Images/yafe15.png';
import Product5 from '../Assets/Images/yafe13.png';
import Product6 from '../Assets/Images/yafe12-1.png';
import '../Assets/CSS/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import LocalConvenienceStoreOutlinedIcon from '@mui/icons-material/LocalConvenienceStoreOutlined';
import Delivery from '../Assets/Images/delivery.png';
import Payment from '../Assets/Images/payment.png';
import Support from '../Assets/Images/support.png';
import Return from '../Assets/Images/return.png';

const About = () => {
    return (
        <>
            <div className='container mt-2'>
                <div className='yafe-abt-container'>
                    <img alt='about' src={Product4} className='yafe-about img-fluid' />
                    <img alt='about' src={Product5} className='yafe-about img-fluid' />
                </div>
                <div className='yafe-abt-content'>
                    <h3 className='yafe-abt-text'>Fashion has no boundaries for us!</h3>
                    <p className='yafe-abt-txt'>We follow the latest trends, combining classic patterns with new and unique fashion deals.
                        Vendy is a worldwide style point for ecommerce trends. We provide customers around the
                        world with the best online stores. Checked by the time!</p>
                </div>
                <div className='row yafe-abt-protect'>
                    <div className='col-md-6 mb-3'>
                        <img alt='about' src={Product6} className='yafe-abt-img img-fluid' />
                    </div>
                    <div className='col-md-6'>
                        <h3 className='yafe-abt-text mb-3'>How do we protect our environment?</h3>
                        <h5 className='yafe-abt-head-env'>Recycled cardboards</h5>
                        <p className='yafe-abt-env'>We have given up on plastic and started to send online orders in cardboards which underwent
                            recycling process.</p>
                        <h5 className='yafe-abt-head-env'>Audits in plants</h5>
                        <p className='yafe-abt-env'>Each year, we carry out over 1300 audits in manufacturing plants
                            to examine the observation of human rights, salaries and the scope of natural environment
                            protection.</p>
                        <h5 className='yafe-abt-head-env'>Certified fabrics</h5>
                        <p className='yafe-abt-env'>We’re increasing the number of ecological products, we also use certified
                            fabrics or recycled polyester.</p>
                    </div>
                </div>
            </div>
            <div className='container-fluid row yafe-about-support'>
                        <div className='col-6 col-sm-6 col-md-3 col-lg-3'>
                            <div className='card'>
                                <img alt="Free Delivery" src={Delivery} className="yafe-abt-icon" />
                                <h5 className='yafe-abt-head'>Free Delivery</h5>
                                <p className='yafe-abt-env-sub'>Free shipping for all orders</p>
                            </div>
                        </div>
                        <div className='col-6 col-sm-6 col-md-3 col-lg-3'>
                            <div className='card'>
                                <img alt="Secure Payment" src={Payment} className="yafe-abt-icon" />
                                <h5 className='yafe-abt-head'>100% Payment Secure</h5>
                                <p className='yafe-abt-env-sub'>Payment 100% secured</p>
                            </div>
                        </div>
                        <div className='col-6 col-sm-6 col-md-3 col-lg-3'>
                            <div className='card'>
                                <img alt="Return" src={Return} className="yafe-abt-icon img-fluid" />
                                <h5 className='yafe-abt-head'>14 Days Return</h5>
                                <p className='yafe-abt-env-sub'>You have 14 days to return</p>
                            </div>
                        </div>
                        <div className='col-6 col-sm-6 col-md-3 col-lg-3'>
                            <div className='card'>
                                <img alt="Support" src={Support} className="yafe-abt-icon" />
                                <h5 className='yafe-abt-head'>Support 24/7</h5>
                                <p className='yafe-abt-env-sub'>We support 24 hours a day</p>
                            </div>
                        </div>
                    </div>
        </>
    )
}
export default About;