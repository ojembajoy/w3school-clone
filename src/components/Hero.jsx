import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
        <h1>Learn to code with W3Schools </h1>
        <p>
          HTML, CSS, JavaScript, Python, React, and more...
        </p>
        <buttom className={styles.btn}>Start Learning</buttom>
      
    </section>
  );
};

export default Hero;
