import React from "react";
import "../Assets/CSS/Contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contactus = () => {
    return (
        <>
            <div className="container mt-5 pt-0 pb-4">
                <form >
                    <div className="page-title-wrapper">
                        <h1 className="page-title">
                            <span className="base" data-ui-id="page-title-wrapper">
                                {/* Contact Us */}
                            </span>{" "}
                        </h1>
                    </div>

                    <div className="col-sm-12">
                        <div className="main-title  text-center">
                            <h3>Get in touch</h3>
                            <div className="title-underline"></div>
                        </div>

                        <div className="col-md-12 pos-rel text-center">
                            <div className="truckimg_wrap">
                                <img
                                    src="https://s3.us-east-2.amazonaws.com/truckergig/images/maps-and-flags.png"
                                    alt="arrow-img"
                                />
                            </div>
                            <p className="location-style">
                                34 Street 2, Musaffah, Abu Dhabi, United Arab Emirates.
                            </p>
                            <div className="ver-line hidden-xs"></div>
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="main-title  text-center">
                            <h3 className="text-transform: none;">Have a Question?</h3>
                            <h5 className="font-size: 15px;  font-family: 'Ebrima', sans-serif; text-transform: none;color: #000;">
                                Send us an email
                            </h5>
                            <div className="title-underline"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="input-field col-sm-12">
                                <input
                                    name="name"
                                    placeholder="Your Name*"
                                    id="name"
                                    title="Name"
                                    className="form-control "
                                    type="text"
                                />
                            </div>
                            <br />
                            <div className="input-field col-sm-12">
                                <input
                                    name="emailAddress"
                                    placeholder="Your Email Id*"
                                    id="email"
                                    className="form-control input-text browser-default textbox"
                                    type="email"
                                />
                            </div>
                            <br />
                            <div className="input-field col-sm-12">
                                <input
                                    placeholder="Telephone"
                                    name="phone"
                                    id="telephone"
                                    title="Phone Number"
                                    className="form-control input-text browser-default textbox"
                                    type="text"
                                />
                            </div>
                            <br />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="input-field col-sm-12">
                                <input
                                    placeholder="Message"
                                    name="message"
                                    id="comment"
                                    title="What’s on your mind?"
                                    className="form-control input-text browser-default textarea"
                                />
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className="input-field col-sm-12">
                    </div>

                    <div className="col-sm-12  text-center">
                        <div className="padding:30px 0px 0px;float: left;width: 100%;">
                            <button
                                className="submit-btn"
                                type="submit"
                                title="Submit"
                            >
                                <span>SEND</span>
                            </button>
                        </div>
                    </div>
                    <div className="map-section row">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23149.612541477697!2d54.49508645793682!3d24.337281415399137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e662b6453b14d%3A0x8d54c05a5be90b87!2s34%20Street%202%2C%20Mussafah%20Industrial%20Area%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1699988797173!5m2!1sen!2sus"
                            width="100%" height="400"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contactus;


