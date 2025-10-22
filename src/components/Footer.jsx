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

            <ul className={styles.links}>
                 <li> <a href="/introduction">Introduction</a></li>
                 <li> <a href="/elements"> Elements</a></li>
                 <li> <a href="/attributes"> Attributes</a></li>
                </ul> 
        </footer>
    );
};

export default Footer;
