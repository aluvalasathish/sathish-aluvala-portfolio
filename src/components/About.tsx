import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaMobile, FaServer } from 'react-icons/fa';

const About: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', icon: <FaCode />, description: 'Building responsive and interactive user interfaces with React, HTML, CSS, and JavaScript.' },
    { name: 'UI/UX Design', icon: <FaPaintBrush />, description: 'Creating user-friendly interfaces with Figma and implementing modern design principles.' },
    { name: 'Mobile Development', icon: <FaMobile />, description: 'Exploring Flutter for cross-platform mobile application development.' },
    { name: 'Backend Development', icon: <FaServer />, description: 'Working with Node.js, Express, and MongoDB to create RESTful APIs.' },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-[var(--surface-1)]">
      <div className="container">
        <div className="text-center mb-16">
          <motion.p 
            className="text-[var(--accent)] uppercase tracking-widest mb-2 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Aspiring <span className="gradient-text">developer</span> ready to create
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-[var(--accent)] mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-[var(--accent)]/10 blur-md transform -translate-x-4 translate-y-4"></div>
              <div className="relative rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--surface-2)]">
                <div className="aspect-w-4 aspect-h-5">
                  <img 
                    src="https://i.pinimg.com/736x/a9/fa/95/a9fa959c47186f221539b2c9ac8af56e.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-40"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-[var(--surface-1)]/80 backdrop-blur-sm p-4">
                  <p className="text-center text-sm tracking-wider uppercase text-[var(--text-muted)]">Junior Web Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Hello, I'm <span className="text-[var(--accent)]">Sathish Aluvala</span></h3>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              I'm a Frontend Developer with 6 months of professional experience in web development. 
              During this time, I've worked on several projects that have helped me develop strong 
              practical skills in modern web technologies, particularly React and its ecosystem.
            </p>
            
            <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
              In my current role, I've contributed to responsive web applications, collaborated with 
              design teams, and implemented modern UI/UX practices. I'm constantly learning and 
              improving my skills, with a focus on writing clean, maintainable code and creating 
              engaging user experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-[var(--accent)]"></div>
                <span className="text-[var(--text-primary)]">React.js</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <div className="w-2 h-2 rounded-full bg-[var(--accent)]"></div>
                <span className="text-[var(--text-primary)]">JavaScript</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <div className="w-2 h-2 rounded-full bg-[var(--accent)]"></div>
                <span className="text-[var(--text-primary)]">HTML/CSS</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <div className="w-2 h-2 rounded-full bg-[var(--accent)]"></div>
                <span className="text-[var(--text-primary)]">Flutter</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <div className="w-2 h-2 rounded-full bg-[var(--accent)]"></div>
                <span className="text-[var(--text-primary)]">Java</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <div className="w-2 h-2 rounded-full bg-[var(--accent)]"></div>
                <span className="text-[var(--text-primary)]">Git & GitHub</span>
              </motion.div>
            </div>

            <motion.a 
              href="#contact" 
              className="btn primary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <motion.h3 
              className="text-3xl font-bold mb-4"
              {...fadeIn}
              transition={{ duration: 0.5 }}
            >
              My <span className="gradient-text">Skills</span>
            </motion.h3>
            <motion.p 
              className="text-[var(--text-secondary)] max-w-2xl mx-auto"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Over the past 6 months, I've developed these skills through hands-on professional work,
              personal projects, and continuous learning. Each project has helped me grow and improve
              in these areas.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="p-6 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] hover:border-[var(--accent)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
                <p className="text-[var(--text-secondary)] text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 