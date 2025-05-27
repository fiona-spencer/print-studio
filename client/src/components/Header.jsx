import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon, FiShoppingCart } from 'react-icons/fi';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const libraryLinks = [
    { name: 'New', url: '/libraryPage#new' },
    { name: 'Popular', url: '/libraryPage#popular' },
    { name: 'Sale', url: '/libraryPage#sale' },
  ];

  const customLinks = [
    { name: 'Upload File', url: '/customPage#upload' },
    { name: 'Customized models', url: '/customPage#customized' },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <header className="w-full px-4 py-4 flex items-center justify-between shadow-md bg-[var(--color-bg)] text-[var(--color-text)] relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98JTDf6m7AnlP_GlRoF8np93rErr8gxd6qQ&s"
            alt="Logo"
            className="h-10 w-10 rounded"
          />
          <span className="font-semibold text-[var(--color-title)] text-lg md:text-xl lg:text-2xl">Toronto Print Studio</span>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`md:flex gap-6 items-center ${
            menuOpen ? 'block' : 'hidden'
          } absolute md:static top-16 left-0 w-full md:w-auto bg-[var(--color-bg)] px-4 py-3 md:p-0 z-50`}
        >
          <Link
            to="/"
            className="hover:text-[var(--color-orange)] text-sm md:text-base lg:text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          {/* Library dropdown */}
          <div className="relative group">
            <Link
              to="/libraryPage"
              className="hover:text-[var(--color-orange)] text-sm md:text-base lg:text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Library
            </Link>
            <div className="absolute hidden group-hover:flex flex-col bg-[var(--color-bg)] border rounded shadow-lg p-2 mt-1 min-w-[140px]">
              {libraryLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className="hover:bg-[var(--color-hover)] px-3 py-2 rounded text-sm md:text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Custom dropdown */}
          <div className="relative group">
            <Link
              to="/customPage"
              className="hover:text-[var(--color-orange)] text-sm md:text-base lg:text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Custom
            </Link>
            <div className="absolute hidden group-hover:flex flex-col bg-[var(--color-bg)] border rounded shadow-lg p-2 mt-1 min-w-[160px]">
              {customLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className="hover:bg-[var(--color-hover)] px-3 py-2 rounded text-sm md:text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/contactPage"
            className="hover:text-[var(--color-orange)] text-sm md:text-base lg:text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Right side controls */}
          <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-0 md:ml-6 items-center">
            <button className="hover:text-[var(--color-orange)] text-sm md:text-base lg:text-lg">Sign In</button>
            <button
              onClick={toggleDarkMode}
              className="border px-3 py-1 rounded text-sm md:text-base hover:bg-[var(--color-hover)] flex items-center gap-1"
            >
              {isDarkMode ? (
                <>
                  <FiSun /> 
                </>
              ) : (
                <>
                  <FiMoon /> 
                </>
              )}
            </button>
            {/* Cart button */}
            <button
              className="text-xl hover:text-[var(--color-orange)] relative"
              onClick={toggleCart}
              aria-label="Toggle Cart"
            >
              <FiShoppingCart />
            </button>
          </div>
        </nav>
      </header>

{/* Cart Modal - slides in from right, below header */}
<div
  className={`fixed top-[64px] right-0 h-[calc(100vh-64px)] w-80 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-40
  ${cartOpen ? 'translate-x-0' : 'translate-x-full'}
`}
>
  <div className="p-4 flex justify-between items-center border-b dark:border-gray-700">
    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Your Cart</h2>
    <button
      onClick={toggleCart}
      className="text-xl hover:text-[var(--color-orange)]"
      aria-label="Close Cart"
    >
      ×
    </button>
  </div>
  <div className="p-4 text-gray-900 dark:text-gray-100">
    {/* Cart content here */}
    <p>Your cart is empty.</p>
  </div>
</div>

{/* Overlay behind cart but below header */}
{cartOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-30 z-30"
    onClick={toggleCart}
    aria-hidden="true"
  />
)}

    </>
  );
}
