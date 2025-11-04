import React, { useState, } from "react";
import styles from "./Introduction.module.css";

const Introduction = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 🪄 Close modal when background is clicked
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.modalOverlay)) {
      setShowModal(false);
      setShowSuccess(false);
      setErrorMessage("");
    }
  };

  // 📦 Retrieve saved users from localStorage
  const getUsers = () => {
    const saved = localStorage.getItem("njUsers");
    return saved ? JSON.parse(saved) : [];
  };

  // 💾 Save new user
  const saveUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem("njUsers", JSON.stringify(users));
  };

  // 🧠 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim().toLowerCase();
    const phone = e.target.phone.value.trim();
    const password = e.target.password.value;

    const users = getUsers();

    // 🕵️ Check duplicates
    const duplicate = users.find(
      (u) => u.email === email || u.phone === phone || u.name === name
    );

    if (duplicate) {
      setErrorMessage("❌ Account already exists with this name, email, or phone!");
      return;
    }

    // ✅ Save user
    const newUser = { name, email, phone, password };
    saveUser(newUser);
    setShowSuccess(true);

    // 🕐 Close after 2.5 seconds
    setTimeout(() => {
      setShowModal(false);
      setShowSuccess(false);
    }, 2500);

    // Clear form
    e.target.reset();
  };

  return (
    <div className={styles.introduction}>
      <h1>NjSchools Introduction</h1>
      <p>
        NjSchools is an educational platform that provides resources and tutorials for learning web development.
      </p>

      <h2>Getting Started</h2>
      <p>
        To get started with NjSchools, explore our tutorials on HTML, CSS, JavaScript, and more. We offer step-by-step guides to help you build your skills.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Comprehensive tutorials on web development topics.</li>
        <li>Interactive coding examples.</li>
        <li>Community support and forums.</li>
      </ul>

      <h2>Join Us</h2>
      <p>
        Sign up today to access all our resources and start your journey in web development with NjSchools!
      </p>

      <button onClick={() => setShowModal(true)}>Sign Up</button>

      {/* 🌟 Modal Popup */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
          <div className={styles.modalContent}>
            {!showSuccess ? (
              <>
                <h2>Join NjSchools 🎓</h2>
                <p>Sign up to unlock full access to tutorials and interactive coding lessons!</p>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <input type="text" name="name" placeholder="Full Name" required />
                  <input type="email" name="email" placeholder="Email Address" required />
                  <input type="tel" name="phone" placeholder="Phone Number" required />
                  <input type="password" name="password" placeholder="Create Password" required />

                  {errorMessage && (
                    <p className={styles.errorMessage}>{errorMessage}</p>
                  )}

                  <button type="submit">Create Account</button>
                </form>

                <button
                  className={styles.closeBtn}
                  onClick={() => setShowModal(false)}
                >
                  ✖ Close
                </button>
              </>
            ) : (
              <div className={styles.successMessage}>
                <h2>✅ Thank you for signing up!</h2>
                <p>Welcome to NjSchools — your learning journey starts now 🎉</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Introduction;




