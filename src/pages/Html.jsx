import { } from "framer-motion/client";
import Banner from "../components/Banner";
import styles from "./Html.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export default function Html() {
  return (

     <>
      
     
       <Banner>
         <div style={{ padding: "80px", textAlign: "center" }}>
           <div className={styles.container}>
           <div className={styles.topic}>
          <h1>HTML Tutorial</h1>
         </div>
        <div className={styles.buttons}>
          <button className={styles.btn} ><IoIosArrowBack /> Home</button>
          <button className={styles.btn} >Next<IoIosArrowForward /></button>
        </div>
      
       <div style={{ padding: "80px", textAlign: "center" }}>
      <h1>Learn HTML</h1>
      <p>HTML is the structure of every webpage — it defines elements like headings, images, and links.</p>
      <a
        href="/tryit"
        style={{
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          marginTop: "20px",
        }}
      >
         <p className={styles.text2}>Try It Yourself</p>

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
