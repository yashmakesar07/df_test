// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaMapMarkedAlt, FaCity, FaWarehouse } from 'react-icons/fa'; // Import icons from react-icons

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[25%] bg-[#FAFAFA] h-screen text-black">
      <h2 className="text-xl font-bold mb-4">Digital Flake</h2>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? 'bg-[#F4EDAF]' : ''}`
              }
            >
              <FaHome className="mr-2" /> {/* Icon before text */}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/states"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? 'bg-[#F4EDAF]' : ''}`
              }
            >
              <FaMapMarkedAlt className="mr-2" /> {/* Icon before text */}
              State
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cities"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? 'bg-[#F4EDAF]' : ''}`
              }
            >
              <FaCity className="mr-2" /> {/* Icon before text */}
              City
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/warehouses"
              className={({ isActive }) =>
                `flex items-center p-2 rounded ${isActive ? 'bg-[#F4EDAF]' : ''}`
              }
            >
              <FaWarehouse className="mr-2" /> {/* Icon before text */}
              Warehouse
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
