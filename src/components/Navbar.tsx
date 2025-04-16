import React, { useState, useEffect, Component, ErrorInfo } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaCodepen, FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../constants';

// Error boundary to suppress errors that might generate logs
class ErrorBoundary extends Component<{ children: React.ReactNode }> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    // Error handling logic here
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <header className="fixed top-0 left-0 w-full z-50 bg-deep-navy py-3 shadow-lg">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <a href="/" className="flex items-center justify-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gold to-purple-600 opacity-80"></div>
                <span className="relative z-10 text-2xl font-bold text-deep-navy">A</span>
              </div>
            </a>
          </div>
        </header>
      );
    }
    
    return this.props.children;
  }
}

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (title: string, id: string) => {
    setActive(title);
    setIsOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <ErrorBoundary>
      <LazyMotion features={domAnimation} strict>
        <header 
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled 
              ? 'bg-deep-navy/90 backdrop-blur-md py-3 shadow-lg' 
              : 'bg-transparent py-5'
          }`}
        >
          <div className="container mx-auto px-6 flex items-center justify-between relative">
            {/* Logo */}
            <motion.a 
              href="/" 
              className="flex items-center justify-center" 
              onClick={() => setActive('')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gold to-purple-600 opacity-80"></div>
                <span className="relative z-10 text-2xl font-bold text-deep-navy">A</span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden lg:flex items-center"
              initial="hidden"
              animate="visible"
              variants={navbarVariants}
            >
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.id}
                    variants={itemVariants}
                  >
                    <a
                      href={`#${link.id}`}
                      className={`relative text-base font-medium px-3 py-2 transition-all duration-300 ${
                        active === link.title 
                          ? 'text-gold' 
                          : 'text-champagne hover:text-gold'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.title, link.id);
                      }}
                    >
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center gap-4 ml-6">
                <motion.a 
                  href="https://github.com/aluvalasathish" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-champagne hover:text-gold transition-colors duration-300"
                  aria-label="GitHub"
                  variants={itemVariants}
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/aluvalasathish" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-champagne hover:text-gold transition-colors duration-300"
                  aria-label="LinkedIn"
                  variants={itemVariants}
                >
                  <FaLinkedinIn size={20} />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/aluvalasathish" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-champagne hover:text-gold transition-colors duration-300"
                  aria-label="Twitter"
                  variants={itemVariants}
                >
                  <FaTwitter size={20} />
                </motion.a>
                
              </div>
            </motion.nav>

            {/* Mobile Menu Button */}
            <motion.button 
              className="lg:hidden w-10 h-10 flex items-center justify-center text-champagne"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden w-full absolute left-0 top-[72px] bg-deep-navy/95 backdrop-blur-lg shadow-lg z-50 overflow-hidden"
              >
                <div className="container mx-auto px-6 py-8">
                  <ul className="flex flex-col gap-6 mb-8">
                    {navLinks.map((link, index) => (
                      <motion.li 
                        key={link.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <a
                          href={`#${link.id}`}
                          className={`block py-2 text-lg font-medium border-b border-champagne/10 ${
                            active === link.title ? 'text-gold' : 'text-champagne'
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(link.title, link.id);
                          }}
                        >
                          {link.title}
                        </a>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex justify-center gap-8 mb-8">
                    <a 
                      href="https://github.com/sathish-aluvala" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-champagne hover:text-gold text-2xl transition-colors duration-300"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href="https://linkedin.com/in/sathish-aluvala" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-champagne hover:text-gold text-2xl transition-colors duration-300"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a 
                      href="https://twitter.com/sathish_aluvala" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-champagne hover:text-gold text-2xl transition-colors duration-300"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </LazyMotion>
    </ErrorBoundary>
  );
};

export default Navbar; 