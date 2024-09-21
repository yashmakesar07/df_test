import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import { FaUser } from 'react-icons/fa'; // User icon from react-icons

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-5 bg-[#662671] text-white">
            <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold flex items-center">
                    <img src="/public/Images/navlogo.png" alt="Logo" className="h-7 w-auto mr-2" />
                    {/* Optional: Add a logo title */}
                </Link>
            </div>
            <div className="flex items-center">
                <Link to="/profile" className="text-xl p-2 hover:bg-purple-700 rounded transition">
                    <FaUser />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
