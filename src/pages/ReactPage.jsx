import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import styles from "./ReactPage.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function ReactPage() {
  const navigate = useNavigate();
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


        <div style={{ padding: "80px", textAlign: "center" }}></div>
      <h1>Learn React</h1>
      <p>React is a JavaScript library for building user interfaces. It allows you to create reusable UI components.</p>
      <button
        onClick={()=>navigate('/tryit')}
        style={{
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          marginTop: "20px",
        }}
      >
      <p className={styles.text2}>Try It Yourself</p>


      </button>
    </div>
    </div>
</Banner>


    </>
  )
}
