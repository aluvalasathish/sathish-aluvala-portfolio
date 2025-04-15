import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-deep-navy z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-navy/90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-gold font-medium">Hello, my name is</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
           SATHISH ALUVALA
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-semibold mb-6 text-gradient"
          >
            Junior Frontend Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-champagne/90 text-lg md:text-xl max-w-2xl mb-8"
          >
            Frontend Developer with 6 months of hands-on experience in creating 
            interactive web experiences. Proficient in building responsive 
            interfaces with React and modern web technologies. Passionate about 
            clean code, user experience, and continuous learning. Ready to 
            contribute to innovative projects and grow further in the field.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="btn-primary"
            >
              View My Projects
            </a>
            <a 
              href="#contact" 
              className="btn-secondary"
            >
              Let's Connect
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex items-center gap-6"
          >
            <a 
              href="https://github.com/aluvalasathish" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-champagne hover:text-gold transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/aluvalasathish" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-champagne hover:text-gold transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <span className="text-champagne/50">|</span>
            <a 
              href="/src/assets/Sathish_OCT_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne hover:text-gold transition-colors duration-300"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2
          }}
        >
          <a href="#about" className="text-champagne/70 hover:text-gold transition-colors duration-300">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 