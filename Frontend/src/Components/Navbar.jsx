import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-blue-600">
          HR Cloud
        </NavLink>

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex">
          {["/", "/services", "/about", "/contact"].map((path, index) => {
            const label = ["Home", "Services", "About", "Contact"][index];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-500"
                }
              >
                {label}
              </NavLink>
            );
          })}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-600 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 w-full pt-4 pb-2 space-y-2 ">
          {["/", "/services", "/about", "/contact"].map((path, index) => {
            const label = ["Home", "Services", "About", "Contact"][index];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block text-blue-600 font-semibold"
                    : "block hover:text-blue-500"
                }
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
