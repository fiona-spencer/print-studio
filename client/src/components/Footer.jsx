import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] text-[var(--color-text)] border-t border-gray-300 dark:border-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo and About */}
        <div>
          <h2 className="text-lg font-bold text-[var(--color-title)] mb-2">MyApp</h2>
          <p>Custom prints, creative tools, and unique designs. Powered by your imagination.</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-[var(--color-title)] mb-2">Explore</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-[var(--color-orange)]">Home</a></li>
            <li><a href="#" className="hover:text-[var(--color-orange)]">Library</a></li>
            <li><a href="#" className="hover:text-[var(--color-orange)]">Custom</a></li>
            <li><a href="#" className="hover:text-[var(--color-orange)]">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-[var(--color-title)] mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-[var(--color-orange)]">FAQs</a></li>
            <li><a href="#" className="hover:text-[var(--color-orange)]">Support</a></li>
            <li><a href="#" className="hover:text-[var(--color-orange)]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[var(--color-orange)]">Terms</a></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="font-semibold text-[var(--color-title)] mb-2">Connect</h3>
          <ul className="space-y-1">
            <li>Email: <a href="mailto:support@myapp.com" className="hover:text-[var(--color-orange)]">support@myapp.com</a></li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 py-4 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}
