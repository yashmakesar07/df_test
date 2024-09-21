// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; 
import City from './components/City';
import State from './components/State';
import Home from './components/Home';
import Navbar from './components/Navbar'; // Import the Navbar

const App = () => {
  return (
    <Router>
      <div className="flex flex-col">
        <Navbar /> {/* Add Navbar here */}
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/states" element={<State />} />
              <Route path="/cities" element={<City />} />
              {/* <Route path="/warehouses" element={<Warehouse />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
