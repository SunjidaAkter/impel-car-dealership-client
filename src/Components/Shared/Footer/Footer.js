import React from 'react';
// import './Footer.css'
import facebookIcon from "../../../Media/icons/facebookIcon.png";
import twitterIcon from "../../../Media/icons/twitterIcon.png";
import instagramIcon from "../../../Media/icons/instagramIcon.png";
import './Footer.css'


const Footer = () => {
    return (
        <div className='pt-3 contaner bg mb-0 bg-dark footer'>
            <h6 className='text-center mt-3 mb-0'>Copyright &copy; 2022 IMPEL.</h6>
            <h6 className='text-center mt-2 mb-0 pb-2'> All rights reserved.</h6>
            <div className='d-flex justify-content-center align-items-center'>
                <h6 className='my-3 me-3'>Follow us on </h6>
                <a
                    href="https://www.facebook.com/"
                    target="blank"
                >
                    <img
                        className="me-2"
                        style={{ width: "30px" }}
                        src={facebookIcon}
                        alt=""
                    />
                </a>


                <a href="https://twitter.com/" target="blank">
                    <img
                        className="me-2"
                        style={{ width: "30px" }}
                        src={twitterIcon}
                        alt=""
                    />
                </a>

                <a
                    href="https://www.instagram.com/"
                    target="blank"
                >
                    <img
                        className="me-2"
                        style={{ width: "30px" }}
                        src={instagramIcon}
                        alt=""
                    />
                </a>
            </div>
        </div>
    );
};

export default Footer;