import Banner from "../components/Banner";
import styles from "./Html.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Html() {
  return (

     <>
      <Banner className={styles.banner}>
        <div className="container">
           <div className={styles.topic}>
          <h1>HTML Tutorial</h1>
         </div>
        <div className={styles.buttons}>
          <button className={styles.btn} ><IoIosArrowBack /> Home</button>
          <button className={styles.btn} >Next<IoIosArrowForward /></button>
        </div>
      
          <p className={styles.text}>HTML is the standard markup language for creating Web pages. It stands for Hyper Text Markup Language. HTML describes the structure of a Web page.</p>
          <div className={styles.links}>
            <a href="/html/introduction">Introduction</a>
            <a href="/html/elements">HTML Elements</a>
            <a href="/html/attributes">HTML Attributes</a>
          </div>
        </div>
        
      </Banner>

     </>
  )
}
