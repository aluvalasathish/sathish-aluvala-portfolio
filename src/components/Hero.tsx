import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTypescript, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiJavascript } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-deep-navy z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-navy/90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      {/* Floating Tech Stack Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[700px] right-[200px] text-gold/30"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <SiReact size={40} />
        </motion.div>
        <motion.div
          className="absolute top-[720px] right-[320px] text-purple-600/30"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <SiTypescript size={35} />
        </motion.div>
        <motion.div
          className="absolute top-[740px] right-[450px] text-blue-500/30"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <SiTailwindcss size={45} />
        </motion.div>
        <motion.div
          className="absolute top-32 left-[20%] text-yellow-500/30"
          animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <SiJavascript size={38} />
        </motion.div>
        <motion.div
          className="absolute top-52 left-[25%] text-green-500/30"
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <SiNodedotjs size={42} />
        </motion.div>
        <motion.div
          className="absolute top-72 left-[15%] text-green-600/30"
          animate={{ y: [0, 22, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <SiMongodb size={40} />
        </motion.div>

        {/* Decorative Shapes */}
        <motion.div
          className="absolute top-40 right-[40%] w-8 h-8 border-2 border-gold/20 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-60 right-[35%] w-6 h-6 border-2 border-purple-500/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-80 right-[25%] w-4 h-4 bg-gold/10 rounded-full"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Left Column - Text Content */}
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
              Frontend Developer
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

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-[400px] h-[400px]">
              {/* Decorative Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold/20 to-purple-600/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Profile Image Container */}
              <div className="group relative w-full h-full rounded-full overflow-hidden border-2 border-gold/30 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gold/10 to-purple-600/10">
                  <img
                    src="/assets/images/mylogo.png"
                    alt="Sathish Aluvala"
                    className="relative z-20 w-full h-full object-cover rounded-full transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src="/assets/images/favicon.png"
                    alt="Sathish Aluvala"
                    className="absolute inset-0 z-10 w-full h-full object-cover rounded-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>

              {/* Decorative Ring */}
              <motion.div
                className="absolute -inset-4 border-2 border-dashed border-gold/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
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