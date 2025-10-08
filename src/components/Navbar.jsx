import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Navbar.module.css";
import { FaWhatsappSquare } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu =() => 
    {setIsOpen(!isOpen);
    };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><a href='/'>W3 School</a></div>

      <div className={styles.hamburger} onClick={toggleMenu}>
      <GiHamburgerMenu />
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li><a href='/html'>HTML</a></li>
        <li><a href='/css'>CSS</a></li>
        <li><a href='/javascript'>JavaScript</a></li>
        <li><a href='/react'>React</a></li>
        <li><a
    href="https://wa.me/2349131177313?text=Hello%20👋%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20learn%20more!"
    target="_blank"
    rel="noopener noreferrer"
  >
    Contact
 <FaWhatsappSquare /></a></li>
   
      </ul>
    </nav>
  );
};

export default Navbar;
