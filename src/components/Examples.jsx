import React from "react";
import styles from "./Examples.module.css";
import { useNavigate } from "react-router-dom";

const Examples = () => {
    const navigate= useNavigate();
    const examples = [
        {title: "HTML Example",
        to: "/tutorialpage"},
        
        {title: "CSS Example",
        to: "/tutorialpage"},
        
        {title: "JavaScript Example",
        to:"/tutorialpage"},
        
        {title: "React Example",
        to:"/tutorialpage"},
    ];

    return (
        <section className={styles.examples}>
            <h2>Try Examples</h2>
            <div className={styles.cards}>
                {examples.map((ex, index) => (
                    <div key={index} className={styles.card}>
                        <h3>{ex.title}</h3>
                        <p>Practice {ex.title} online with interactive code editor.</p>
                        <button onClick={() => navigate(ex.to)} className={styles.btn}>
        Try Now
      </button>
                    </div>
                ))}
            </div>
        </section>
    )
}


export default Examples;