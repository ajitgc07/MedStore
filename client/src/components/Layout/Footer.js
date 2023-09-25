import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer'>
            <h2 className='text-center mt-5'>
                All Right Reserved &copy;2023
                <p className='text-center mt-2 mb-2'>
                    <Link to="/about">About</Link>
                    |
                    <Link to="/contact">Contact</Link>
                    |
                    <Link to="/policy">Privacy Policy</Link>
        
                </p>
            </h2>
        </div>
    );
};

export default Footer;