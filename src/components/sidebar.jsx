// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[25%] h-screen" style={{ backgroundColor: '#F4F4F4', color: 'black' }}>
      <h2 className="text-xl font-bold mb-4">Digital Flake</h2>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-600' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/states"
              className={({ isActive }) =>
                `block p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-600' : ''}`
              }
            >
              State
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cities"
              className={({ isActive }) =>
                `block p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-600' : ''}`
              }
            >
              City
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/warehouses"
              className={({ isActive }) =>
                `block p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-600' : ''}`
              }
            >
              Warehouse
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
