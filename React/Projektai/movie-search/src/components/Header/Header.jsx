import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = ({ text }) => {


    return (

        <>
            <div>
                <h1>{text}</h1>
            </div>
        </>
    );
};

export default Header;