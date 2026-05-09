"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-gray-900 font-semibold tracking-tight">
          Trevor Witkowski
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <a href="#about"    className="hover:text-gray-900 transition-colors">About</a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#contact"  className="hover:text-gray-900 transition-colors">Contact</a>
        </div>

        <button
          className="md:hidden text-gray-400 hover:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4 text-sm text-gray-500">
          <a href="#about"    onClick={() => setOpen(false)} className="hover:text-gray-900 transition-colors">About</a>
          <a href="#projects" onClick={() => setOpen(false)} className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#contact"  onClick={() => setOpen(false)} className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      )}
    </nav>
  );
}
