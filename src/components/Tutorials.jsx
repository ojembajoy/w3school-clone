import React from "react";
import styles from './Tutorials.module.css';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Tutorials = () => {
    const navigate = useNavigate();
    const cards =[
        {
            title:"HTML",
            desc:"Learn the structure of the web with HTML.",
            color:"#e34c26",
            to:"/html"
        },

        {
            title:"CSS",
            desc:"Style your websites beautifully using CSS",
            color: "#264de4",
            to:"/css"
        },

        {
            title:"JavaScript",
            desc:"Making your websites interactive with JavaScript.",
            color:"#f0db4f",
            to:"/javascript"
        },

         {
            title:"React",
            desc:"Build modern web apps using React.",
            color:"#61dafb",
            to:"/react"
        },
    ];

    return(
        <section className={styles.tutorials} >
            <h2 className={styles.heading}>Start Learning</h2>
            <div className={styles.cardContainer}>
                {cards.map((card, index) => (
                    <motion.div
                    key={index}
                    className={styles.card}
                    style={{backgroundColor: card.color}}
                    initial={{opacity:1, y:60}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.6, delay: index * 0.2}}
                    viewport={{once:true}}
                    >
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <button onClick={() => navigate(card.to)} className={styles.btn}>Try Now {card.title}</button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Tutorials;