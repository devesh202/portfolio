import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-dark-800 bg-dark-950 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Devesh Zope. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm mt-4 md:mt-0 flex items-center gap-1">
          Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
