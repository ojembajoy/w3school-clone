import React from 'react'
import styles from "./Css.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Banner from '../components/Banner';


export default function CSS() {
  return (
<>


<Banner>
      <div style={{ padding: "80px", textAlign: "center" }}>

   <div className={styles.container}>

<div className={styles.topic}>
             <h1>CSS Tutorial</h1>
            </div>
           <div className={styles.buttons}>
             <button className={styles.btn} ><IoIosArrowBack /> Home</button>
             <button className={styles.btn} >Next<IoIosArrowForward /></button>
           </div>


    <div style={{ padding: "80px", textAlign: "center" }}>
      <h1>Learn CSS</h1>
      <p>CSS makes your website beautiful — it controls colors, layouts, and animations.</p>
      <a
        href="/tryit"
        style={{
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
         <div className={styles.text2}>Try It Yourself</div>
         
      </a>
    </div>

     <ul className={styles.links}>
               <li> <a href="/html/introduction">Introduction</a></li>
               <li> <a href="/html/elements">HTML Elements</a></li>
               <li> <a href="/html/attributes">HTML Attributes</a></li>
              </ul>
   </div>
    
   </div>
   </Banner>

</>


    
    
  )
}
