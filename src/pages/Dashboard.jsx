import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("njLoggedInUser");
    if (loggedIn) {
      setUser(JSON.parse(loggedIn));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("njLoggedInUser");
    navigate("/login");
  };

  if (!user) return null;

  const userInitial = user.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <div className={styles.dashboard}>
      <div className={styles.headerSection}>
        <div className={styles.avatar}>{userInitial}</div>
        <div className={styles.userIntro}>
          <h1>👋 Welcome, {user.name || "Learner"}!</h1>
          <p className={styles.tagline}>Glad to have you back at NjSchools 💚</p>
        </div>
      </div>

      <div className={styles.card}>
        <h2>Your Account Details</h2>
        <ul>
          <li>
            <strong>Name:</strong> {user.name}
          </li>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
          <li>
            <strong>Phone:</strong> {user.phone}
          </li>
        </ul>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          🚪 Logout
        </button>
      </div>

      <div className={styles.learnSection}>
        <h2>Continue Learning</h2>
        <p>Select a topic below to keep improving your skills:</p>
        <div className={styles.buttons}>
          <button onClick={() => navigate("/html")}>HTML</button>
          <button onClick={() => navigate("/css")}>CSS</button>
          <button onClick={() => navigate("/javascript")}>JavaScript</button>
          <button onClick={() => navigate("/react")}>React</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



