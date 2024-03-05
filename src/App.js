import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './component/Navbar';
import Home from './component/Home';
import Homenav from './component/Homenav'
import Services from './component/Services';
import Footer from './component/Footer';
import Portfolio from './component/Portfolio';
import AboutUs from './component/Aboutus';
// import Testing from './component/Testing';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes> 
         <Route exact path="/home" element={<Homenav/>}/>
          <Route path="/" element={<Services/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route exact path="/team" element={<Home />}/>
          </Routes>
      </Router>
        <Footer />
        {/* <Testing/> */}
    </div>
  );
}

export default App;
