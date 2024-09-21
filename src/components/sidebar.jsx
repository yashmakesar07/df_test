// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaMapMarkedAlt, FaCity, FaWarehouse, FaArrowRight } from 'react-icons/fa'; // Import icons from react-icons

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[25%] bg-[#FAFAFA] h-screen text-black">
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 rounded text-xl ${isActive ? 'bg-[#F4EDAF]' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center">
                    <FaHome size={24} className="mr-3" /> {/* Increased icon size */}
                    Home
                  </div>
                  {isActive && <FaArrowRight size={18} className="text-black" />} {/* Arrow when active */}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/states"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 rounded text-xl ${isActive ? 'bg-[#F4EDAF]' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center">
                    <FaMapMarkedAlt size={24} className="mr-3" /> {/* Increased icon size */}
                    State
                  </div>
                  {isActive && <FaArrowRight size={18} className="text-black" />} {/* Arrow when active */}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cities"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 rounded text-xl ${isActive ? 'bg-[#F4EDAF]' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center">
                    <FaCity size={24} className="mr-3" /> {/* Increased icon size */}
                    City
                  </div>
                  {isActive && <FaArrowRight size={18} className="text-black" />} {/* Arrow when active */}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/warehouses"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 rounded text-xl ${isActive ? 'bg-[#F4EDAF]' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center">
                    <FaWarehouse size={24} className="mr-3" /> {/* Increased icon size */}
                    Warehouse
                  </div>
                  {isActive && <FaArrowRight size={18} className="text-black" />} {/* Arrow when active */}
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
