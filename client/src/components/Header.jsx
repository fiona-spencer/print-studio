import React, { useState } from 'react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const libraryLinks = [
    { name: 'New', url: '#' },
    { name: 'Popular', url: '#' },
    { name: 'Sale', url: '#' },
  ];

  const customLinks = [
    { name: 'Upload File', url: '#' },
    { name: 'Customized models', url: '#' },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="w-full px-4 py-4 flex items-center justify-between shadow-md bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98JTDf6m7AnlP_GlRoF8np93rErr8gxd6qQ&s"
          alt="Logo"
          className="h-10 w-10 rounded"
        />
        <span className="font-semibold text-[var(--color-title)] text-lg md:text-xl lg:text-2xl">MyApp</span>
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
        <a href="#" className="hover:text-[var(--color-orange)] text-sm md:text-base lg:text-lg">Home</a>

        {/* Library dropdown */}
        <div className="relative group">
          <button className="hover:text-[var(--color-orange)] text-sm md:text-base lg:text-lg">Library</button>
          <div className="absolute hidden group-hover:flex flex-col bg-[var(--color-bg)] border rounded shadow-lg p-2 mt-1 min-w-[140px]">
            {libraryLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="hover:bg-[var(--color-hover)] px-3 py-2 rounded text-sm md:text-base"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Custom dropdown */}
        <div className="relative group">
          <button className="hover:text-[var(--color-orange)] text-sm md:text-base lg:text-lg">Custom</button>
          <div className="absolute hidden group-hover:flex flex-col bg-[var(--color-bg)] border rounded shadow-lg p-2 mt-1 min-w-[160px]">
            {customLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="hover:bg-[var(--color-hover)] px-3 py-2 rounded text-sm md:text-base"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <a href="#" className="hover:text-[var(--color-orange)] text-sm md:text-base lg:text-lg">Contact</a>

        {/* Right side controls */}
        <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-0 md:ml-6">
          <button className="hover:text-[var(--color-orange)] text-sm md:text-base lg:text-lg">Sign In</button>
          <button
            onClick={toggleDarkMode}
            className="border px-3 py-1 rounded text-sm md:text-base hover:bg-[var(--color-hover)]"
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
          <button className="text-xl hover:text-[var(--color-orange)]">🛒</button>
        </div>
      </nav>
    </header>
  );
}
