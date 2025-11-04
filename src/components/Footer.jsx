import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { } from "framer-motion/client";




// updated footer
const Footer = () => {
    return (
        <footer className={styles.footer}> 
            <p>&copy; 2025 NjSchools.com.ng | All rights reserved By OJEMBA JOY NKECHI.</p>
            <div className={styles.links}>
                <li><NavLink to='/privacy'>Privacy</NavLink></li>
                <li><NavLink to='/terms'>Terms</NavLink></li>
            </div>

            <ul className={styles.links}>
                 <li> <NavLink to="/introduction">Introduction</NavLink></li>
                 <li> <NavLink to="/elements"> Elements</NavLink></li>
                 <li> <NavLink to='/attributes'> Attributes</NavLink></li>
                </ul> 
        </footer>
    );
};

export default Footer;
