import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home'; 
import Services from "./services"
import Ninos from "./Ninos" 
import Navbar from "./components/navbar.jsx"
import Opengym from "./Opengym"
import Artes from "./Artes"
import Nutricion from "./Nutricion"
import Identity from "./Identity"
import Training from "./trainingplan"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/servicios" element={<Services/>} />
        <Route path="/identidadqenqo" element={<Identity/>} />
        <Route path="/planes-de-entrenamiento" element={<Training/>} />      
        <Route path="/artes-marciales" element={<Artes/>} />
        <Route path="/open-gym" element={<Opengym/>} />    
        <Route path="/ninos" element={<Ninos/>} />
        <Route path="/nutricion" element={<Nutricion/>} />
      </Routes>
    </Router>
  );
}
export default App