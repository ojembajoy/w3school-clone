import React from "react";
import styles from './Tutorials.module.css';

const Tutorials = () => {
    const tutorials =[ "HTML", "CSS", "JavaScript", "Python", "React"];

    return (
        <section className={styles.tutorials}>
            <h2>Learn Tutorials </h2>

      <div className={styles.cards}>
          {tutorials.map((tut, index) => (
              <div key={index} className={styles.card}>
                  <h3>{tut}</h3>
                  <p>Start learning {tut} with examples and exercises.</p>
                  <button>Start</button>
              </div>
          ))}
      </div>
        </section>
    );
};

export default Tutorials;