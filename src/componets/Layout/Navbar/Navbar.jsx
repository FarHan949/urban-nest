import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'animate.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white rounded-lg -m-3 bg-gradient-to-r from-LightTaupe to-LiverChestnut">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center lg:h-28 h-20">
          {/* Logo */}
          
            <a
            style={{fontFamily: "Nunito Sans sans-serif", fontStyle: 'italic'}} 
            className="text-xl font-bold text-black lg:text-3xl animate__animated animate__flip animate__delay-2s animate_slower">
              Urban Nest</a>
         
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-2 py-1 rounded-lg transition duration-300 ${
                  isActive
                    ? 'text-white bg-JackoBean border-b-2 border-CoyoteBrown'
                    : 'hover:text-white hover:bg-JackoBean'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-2 py-1 rounded-lg transition duration-300 ${
                  isActive
                  ? 'text-white bg-JackoBean border-b-2 border-CoyoteBrown'
                  : 'hover:text-white hover:bg-JackoBean'
                }`
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-2 py-1 rounded-lg transition duration-300 ${
                  isActive
                  ? 'text-white bg-JackoBean border-b-2 border-CoyoteBrown'
                  : 'hover:text-white hover:bg-JackoBean'
                }`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `px-2 py-1 rounded-lg transition duration-300 ${
                  isActive
                  ? 'text-white bg-JackoBean border-b-2 border-CoyoteBrown'
                  : 'hover:text-white hover:bg-JackoBean'
                }`
              }
            >
              Profile
            </NavLink>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full hover:scale-110 transition transform duration-300"
            />
          </div>
          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-LightTaupe to-LiverChestnut">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 text-sm ${
                isActive ? 'text-white bg-JackoBean' : 'hover:bg-indigo-600'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-4 py-2 text-sm ${
                isActive ? 'text-white bg-JackoBean' : 'hover:bg-indigo-600'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `block px-4 py-2 text-sm ${
                isActive ? 'text-white bg-JackoBean' : 'hover:bg-indigo-600'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `block px-4 py-2 text-sm ${
                isActive ? 'text-white bg-JackoBean' : 'hover:bg-indigo-600'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Profile
          </NavLink>
          <div className="flex justify-center py-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full hover:scale-110 transition transform duration-300"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
