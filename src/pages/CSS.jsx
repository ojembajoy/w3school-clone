import React from 'react'
import styles from "./Css.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';


export default function CSS() {
  const navigate = useNavigate();
  return (
<>


<Banner>
      <div style={{ padding: "80px", textAlign: "center" }}>

   <div className={styles.container}>

<div className={styles.topic}>
             <h1>CSS Tutorial</h1>
            </div>
           <div className={styles.buttons}>
             <button onClick={() => navigate('/')} className={styles.btn} ><IoIosArrowBack /> Home</button>
             <button onClick={() => navigate('/JavaScript')} className={styles.btn} >Next<IoIosArrowForward /></button>
           </div>


    <div style={{ padding: "80px", textAlign: "center" }}>
      <h1>Learn CSS</h1>
      <p>CSS makes your website beautiful — it controls colors, layouts, and animations.</p>
      <button
        onClick={()=>navigate('/tryit')}
        style={{
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
         <div className={styles.text2}>Try It Yourself</div>
         
      </button>
    </div>

     
   </div>
    
   </div>
   </Banner>

</>


    
    
  )
}
