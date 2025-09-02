import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu =() => 
    {setIsOpen(!isOpen);
    };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>W3 School</div>

      <div className={styles.hamburger} onClick={toggleMenu}>
      <GiHamburgerMenu />
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JavaScript</a></li>
         <li><a href="#">React</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
