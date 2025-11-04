import React from "react";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
const navigate=  useNavigate()
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
         <h1>Learn to code with NjSchools </h1>
        <p>
          NjSchools is the world's lagest web developer site.
          Learn HTML, CSS, JavaScript, Python, React, and more - all in one place.
        </p>
        <button onClick={()=>navigate('/examplesPage')} className={styles.btn}>Start Learning</button>
      
      </div>

      
       
    </section>
  );
};

export default Hero;
