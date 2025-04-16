import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (title: string, id: string) => {
    setActive(title);
    setIsOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Reset active state after 1 second
      setTimeout(() => {
        setActive('');
      }, 1000);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      const sections = navLinks.map(link => {
        const element = document.getElementById(link.id);
        return {
          id: link.id,
          title: link.title,
          offsetTop: element ? element.offsetTop : 0
        };
      }).sort((a, b) => a.offsetTop - b.offsetTop);

      const currentSection = sections.find((section, index) => {
        const nextSection = sections[index + 1];
        if (nextSection) {
          return scrollPosition >= section.offsetTop && scrollPosition < nextSection.offsetTop;
        }
        return scrollPosition >= section.offsetTop;
      });

      if (currentSection && currentSection.title !== active) {
        setActive(currentSection.title);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[999] ${
        scrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.3)] py-4' : 'py-3'
      }`}
    >
      <div className={`absolute inset-0 ${
        scrolled ? 'bg-gradient-to-b from-[#0f1c2e] to-[#0f1c2e]/95 backdrop-blur-md' : ''
      }`}></div>
      <nav className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="/" 
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-gold to-purple-600">
              <span className="text-2xl font-bold text-deep-navy">AS</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`text-base font-medium transition-colors duration-300 ${
                  active === link.title 
                    ? 'text-gold' 
                    : 'text-champagne hover:text-gold'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.title, link.id);
                }}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {link.title}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-champagne hover:text-gold"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`block py-2 text-base font-medium transition-colors duration-300 ${
                    active === link.title 
                      ? 'text-gold' 
                      : 'text-champagne hover:text-gold'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.title, link.id);
                  }}
                  whileHover={{ x: 10 }}
                >
                  {link.title}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;