
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./JavaScript.module.css";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";

export default function JavaScript() {
  const navigate = useNavigate();
  return (
  
    <>
    
    <Banner>
      <div style={{ padding: "80px", textAlign: "center" }}>
                 <div className={styles.container}>
                 <div className={styles.topic}>
                <h1>JavaScript Tutorial</h1>
               </div>
              <div className={styles.buttons}>
                <button onClick={() => navigate('/')} className={styles.btn} ><IoIosArrowBack /> Home</button>
                <button onClick={() => navigate('/ReactPage')} className={styles.btn} >Next<IoIosArrowForward /></button>
              </div>
            
             <div style={{ padding: "80px", textAlign: "center" }}>
            <h1>Learn JavaScript</h1>
            <p>JavaScript is the programming language of the web — it allows you to create dynamic and interactive content.</p>
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
      
          </div>

    </Banner>

    </>
  );
}
