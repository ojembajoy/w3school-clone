import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
         <h1>Learn to code with W3Schools </h1>
        <p>
          W3Schools is the world's lagest web developer site.
          Learn HTML, CSS, JavaScript, Python, React, and more - all in one place.
        </p>
        <button className={styles.btn}>Start Learning</button>
      
      </div>
       
    </section>
  );
};

export default Hero;
