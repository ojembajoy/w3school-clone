import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Html from "./pages/Html";
import CSS from "./pages/CSS";
import JavaScript from "./pages/JavaScript";
import ReactPage from "./pages/ReactPage";
import Terms from "./pages/Terms";
import TryNow from "./pages/TryNow";
import Privacy from "./pages/Privacy";
import ExamplesPage from "./pages/ExamplesPage";
import TutorialPage from "./pages/TutorialPage";
import Attributes from "./pages/Attributes";
import Elements from "./pages/Elements";
import Introduction from "./pages/Introduction";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import styles from "./App.module.css";
import {} from "framer-motion/client";

// ✅ Create a wrapper so useNavigate works inside
const AppContent = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  // 🧠 Load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("njLoggedInUser");
    if (savedUser) {
      setLoggedInUser(JSON.parse(savedUser));
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("njLoggedInUser");
    setLoggedInUser(null);
  };

  return (
    <div className={styles.app}>
        <Navbar />
      {/* 🌟 Header Section */}
      <header className={styles.header}>
        <h1>NjSchools</h1>
        <nav>
          <Link to="/">Home</Link>

          {/* 🧠 Show Dashboard + Logout if logged in */}
          {loggedInUser ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <button onClick={handleLogout} className={styles.logoutBtn}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </header>

      {/* 👋 Welcome Message */}
      {loggedInUser && (
        <div className={styles.welcomeBanner}>
          <p>
            👋 Welcome back, <strong>{loggedInUser.name}</strong>!
          </p>
        </div>
      )}

      {/* 🌐 Routing Section */}
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/react" element={<ReactPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tryit" element={<TryNow />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/reactpage" element={<ReactPage />} />
          <Route path="/examplespage" element={<ExamplesPage />} />
          <Route path="/tutorialpage" element={<TutorialPage />} />
          <Route path="/attributes" element={<Attributes />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

// ✅ Wrap AppContent inside BrowserRouter
const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;


