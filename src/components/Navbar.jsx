import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const scrollToSection = (id) => {
    setMobileMenuOpen(false)
    if (!isHomePage) {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="w-full bg-[#1E1E1E] transition-colors duration-200">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-10 lg:px-12 pt-8 md:pt-10 pb-4 md:pb-6 flex items-center justify-between">
        {/* Left: Logo */}
        <Link 
          to="/" 
          className="flex items-center transition-opacity hover:opacity-90"
          aria-label="Aditi Portfolio Home"
        >
          <img 
            src="/images/hero/portfolio_logo.png" 
            alt="aC" 
            className="h-10 sm:h-11 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Right: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-9 lg:space-x-12 text-[13px] lg:text-sm tracking-[0.08em] font-medium uppercase text-[#E5E5E5]">
          <button
            onClick={() => scrollToSection('work')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            MY WORK
          </button>
          
          <Link
            to="/about"
            className="hover:text-white transition-colors cursor-pointer"
          >
            ABOUT ME
          </Link>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            CONTACT
          </button>
          
          <a
            href="https://drive.google.com/file/d/1RfIvlnV09x-jF51NwtemdwOD-CPzBet8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors cursor-pointer"
          >
            RESUME
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#E5E5E5] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E1E1E] px-8 py-6 space-y-5 border-t border-zinc-800/60">
          <button
            onClick={() => scrollToSection('work')}
            className="block w-full text-left text-sm tracking-[0.08em] uppercase font-medium text-[#E5E5E5] hover:text-white"
          >
            MY WORK
          </button>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-left text-sm tracking-[0.08em] uppercase font-medium text-[#E5E5E5] hover:text-white"
          >
            ABOUT ME
          </Link>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left text-sm tracking-[0.08em] uppercase font-medium text-[#E5E5E5] hover:text-white"
          >
            CONTACT
          </button>
          <a
            href="https://drive.google.com/file/d/1RfIvlnV09x-jF51NwtemdwOD-CPzBet8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-left text-sm tracking-[0.08em] uppercase font-medium text-[#E5E5E5] hover:text-white"
          >
            RESUME
          </a>
        </div>
      )}
    </header>
  )
}
