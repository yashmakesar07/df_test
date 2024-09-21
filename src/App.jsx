// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar'; // Import the Navbar
import WarehousePage from './pages/WarehousePage';
import StatePage from './pages/StatePage';
import CityPage from './pages/CityPage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col">
        <Navbar /> {/* Add Navbar here */}
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/states" element={<StatePage/>} />
              <Route path="/cities" element={<CityPage/>} />
              <Route path="/warehouse" element={<WarehousePage/>} />
              
              {/* <Route path="/warehouses" element={<Warehouse />} /> */}
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
