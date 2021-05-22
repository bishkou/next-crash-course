import React from "react";
import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> New
            </h1>
            <p className={headerStyles.description}>
                keep up to date with news</p>
        </div>
    )
}

export default Header;
