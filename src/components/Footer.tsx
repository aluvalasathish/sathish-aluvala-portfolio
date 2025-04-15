import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaCodepen, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-10 bg-deep-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-600/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gold to-purple-600 opacity-80"></div>
                <span className="relative z-10 text-2xl font-bold text-deep-navy">A</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-gold">Sathish</span> Aluvala
                </h3>
                <p className="text-champagne/70 max-w-md">
                  Frontend Developer passionate about creating beautiful and functional web experiences.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <h4 className="text-lg font-semibold text-champagne mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-champagne/70 hover:text-gold transition-colors duration-300">Home</a>
              <a href="#about" className="text-champagne/70 hover:text-gold transition-colors duration-300">About</a>
              <a href="#projects" className="text-champagne/70 hover:text-gold transition-colors duration-300">Projects</a>
              <a href="#testimonials" className="text-champagne/70 hover:text-gold transition-colors duration-300">Testimonials</a>
              <a href="#contact" className="text-champagne/70 hover:text-gold transition-colors duration-300">Contact</a>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <h4 className="text-lg font-semibold text-champagne mb-4">Let's Connect</h4>
            <p className="text-champagne/70 mb-4">
              Feel free to reach out for opportunities, collaborations, or just to say hello!
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/sathish-aluvala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-champagne hover:text-gold transition-colors duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/sathish-aluvala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-champagne hover:text-gold transition-colors duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a 
                href="https://twitter.com/sathish_aluvala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-champagne hover:text-gold transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://codepen.io/sathish-aluvala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-champagne hover:text-gold transition-colors duration-300"
              >
                <FaCodepen size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-champagne/10 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-sm text-champagne/50 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} Sathish Aluvala. All Rights Reserved.
          </motion.p>
          
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs text-champagne/50">Built with React & Framer Motion</p>
            <motion.button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 transition-all duration-300"
              aria-label="Scroll to top"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowUp size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 