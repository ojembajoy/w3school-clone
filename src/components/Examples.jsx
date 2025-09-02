import React from "react";
import styles from "./Examples.module.css";

const Exmples = () => {
    const examples = ["HTML Examples", "CSS Example", "React Example"];

    return (
        <section className={styles.examples}>
            <h2>Try Examples</h2>
            <div className={styles.cards}>
                {examples.map((ex, index) => (
                    <div key={index} className={styles.card}>
                        <h3>{ex}</h3>
                        <p>Practice {ex} online with interactive code editor.</p>
                        <button>Try Now</button>
                    </div>
                ))}
            </div>
        </section>
    )
}


export default Exmples