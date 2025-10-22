
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route, Link } from "react-router";
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
import styles from './App.module.css'

const App = () => {

    return (
        <div className={styles.app}>

        <BrowserRouter>
           <Navbar/>
           <main>
           <Routes>
              <Route path='/' element={<HomePage />} />
               <Route path='/html' element={<Html />} />
               <Route path='/css' element={<CSS />} />
               <Route path='/javascript' element={<JavaScript />} />
               <Route path='/react' element={<ReactPage />} />
               <Route path='/privacy' element={<Privacy />} />
               <Route path='/tryit' element={<TryNow />} />
               <Route path='/terms' element={<Terms />} />
               <Route path="/reactpage" element={<ReactPage />} />
               <Route path="/examplespage" element={<ExamplesPage />} />
               <Route path="/tutorialpage" element={<TutorialPage />} />
           </Routes>
           </main>
             <Footer/>
        </BrowserRouter>
        </div>
    );
};

export default App;