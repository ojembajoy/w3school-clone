
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route, Link } from "react-router";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Html from "./pages/Html";
import CSS from "./pages/CSS";
import JavaScript from "./pages/JavaScript";
import ReactPage from "./pages/ReactPage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";



const App = () => {

    return (
        <BrowserRouter>
           <Navbar/>
            
           
           <Routes>
              <Route path='/' element={<HomePage />} />
               <Route path='/html' element={<Html />} />
               <Route path='/css' element={<CSS />} />
               <Route path='/javascript' element={<JavaScript />} />
               <Route path='/react' element={<ReactPage />} />
               <Route path='/privacy' element={<Privacy />} />
               <Route path='/terms' element={<Terms />} />
           </Routes>
             <Footer/>
        </BrowserRouter>
    );
};

export default App;