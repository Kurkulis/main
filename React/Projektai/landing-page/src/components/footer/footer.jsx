import React from 'react';
import './footer.scss';

const Footer = ({ text }) => {
    return (
        <footer className="footer">
            <div className="container text-center">
                <p>{text}</p>
            </div>
        </footer>
    );
};

export default Footer;
