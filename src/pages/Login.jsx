import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [validations, setValidations] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("njUsers")) || [];
    setUsers(savedUsers);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // 🧠 Real-time Validation
    const newValidations = { ...validations };

    if (name === "email") {
      newValidations.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? "valid"
        : "invalid";
    }

    if (name === "password") {
      newValidations.password = value.length >= 6 ? "valid" : "invalid";
    }

    if (name === "phone") {
      newValidations.phone = /^[0-9]{10,15}$/.test(value)
        ? "valid"
        : "invalid";
    }

    if (name === "name") {
      newValidations.name = value.trim().length > 2 ? "valid" : "invalid";
    }

    setValidations(newValidations);
  };

  // ✨ Signup
  const handleSignup = (e) => {
    e.preventDefault();

    const duplicate = users.find(
      (user) =>
        user.email === formData.email ||
        user.phone === formData.phone ||
        user.name === formData.name
    );

    if (duplicate) {
      setError("⚠️ Account already exists with this name, email, or phone!");
      return;
    }

    if (
      Object.values(validations).includes("invalid") ||
      !formData.email ||
      !formData.password
    ) {
      setError("❌ Please fill all fields correctly.");
      return;
    }

    const newUsers = [...users, formData];
    localStorage.setItem("njUsers", JSON.stringify(newUsers));
    localStorage.setItem("njLoggedInUser", JSON.stringify(formData));

    setUsers(newUsers);
    navigate("/dashboard");
  };

  // 🔑 Login
  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password
    );

    if (!foundUser) {
      setError("❌ Invalid email or password.");
      return;
    }

    localStorage.setItem("njLoggedInUser", JSON.stringify(foundUser));
    navigate("/dashboard");
  };
    return (
    <div className={styles.loginContainer}>
      <h1>{isSignup ? "Create Account" : "Login"}</h1>
      <p>{isSignup ? "Join us today!" : "Welcome back!"}</p>
      <form onSubmit={isSignup ? handleSignup : handleLogin}>
  {isSignup && (
    <>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className={
          validations.name ? styles[validations.name] : ""
        }
        required
      />
      <div className={styles.hint}>Enter at least 20 letters</div>

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className={
          validations.phone ? styles[validations.phone] : ""
        }
        required
      />
      <div className={styles.hint}>Enter 10–15 digits only</div>
    </>
  )}

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    value={formData.email}
    onChange={handleChange}
    className={validations.email ? styles[validations.email] : ""}
    required
  />
  <div className={styles.hint}>Example: joy@example.com</div>

  <input
    type="password"
    name="password"
    placeholder="Password"
    value={formData.password}
    onChange={handleChange}
    className={
      validations.password ? styles[validations.password] : ""
    }
    required
  />
  <div className={styles.hint}>At least 6 characters</div>

  {error && <p className={styles.error}>{error}</p>}

  <button type="submit" className={styles.submitBtn}>
    {isSignup ? "Sign Up" : "Login"}
  </button>
</form>

      <p className={styles.toggleText}>
        {isSignup ? "Already have an account?" : "Don't have an account?"}
        <span onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? " Login" : " Sign Up"}
        </span>
      </p>
    </div>
  );
};

export default Login;
