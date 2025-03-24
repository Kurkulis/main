import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1>Mano Svetainė</h1>
            <nav>
                <ul>
                    <li>Pradžia</li>
                    <li>Apie</li>
                    <li>Kontaktai</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
