import React from "react";
import styles from "./Footer.module.css";


// updated footer
const Footer = () => {
    return (
        <footer className={styles.footer}> 
            <p>&copy; 2025 W3Schools Clone. All rights reserved.</p>
            <div className={styles.links}>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;
