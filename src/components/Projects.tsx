import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const projects: Project[] = [
    // {
    //   id: 1,
    //   title: "Personal Portfolio Website",
    //   description: "My portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations and responsive design.",
    //   image: "/assets/images/portfolio.png",
    //   tags: ["React", "TypeScript", "Tailwind CSS"],
    //   github: "https://github.com/aluvalasathish/Portfolio",
    //   demo: "https://aluvalasathish.github.io/Portfolio/",
    // },
    {
      id: 2,
      title: "Hargharwala Dashboard",
      description: "A dashboard for Hargharwala, a platform for managing the business. It is a full stack application built with React, Node.js, and MongoDB.",
      image: "/assets/images/hargharwala.jpg",
      tags: ["JavaScript", "React", "API Integration"],
      github: "https://github.com/aluvalasathish/Hargharwala-Dashboard",
    },
    {
      id: 3,
      title: "Orchids Dashboard",
      description: "A dashboard for Orchids, a platform for managing the business. It is a full stack application built with Flutter, Node.js, and MongoDB.",
      image: "/assets/images/Dashboard main.jpg",
      tags: ["Flutter", "Node.js", "MongoDB"],
      github: "https://github.com",
    },
    {
      id: 4,
      title: "Enterprises Kart",
      description: "A platform for selling business and buying business. It is a full stack application built with React, Node.js, and MongoDB.",
      image: "/assets/images/image.png",
      tags: ["React", "Node.js", "MongoDB","Payment Gateway Integration"],
      github: "https://github.com",
    },
    {
      id: 5,
      title: "A Chat Application",
      description: "A chat application built with React, Node.js, and MongoDB.",
      image: "/assets/images/chatapplication.png",
      tags: ["React", "Node.js", "MongoDB","Socket.io"],
      github: "https://github.com/aluvalasathish/Chat-Application",
    }
    
    
  ];

  const filters = ["All", "React", "JavaScript", "HTML", "CSS", "Flutter"];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <motion.p 
            className="text-[var(--accent)] uppercase tracking-widest mb-2 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Recent <span className="gradient-text">Learning Projects</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-[var(--accent)] mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A collection of projects I've built to practice and showcase my skills.
            These projects demonstrate my understanding of key web development concepts.
          </motion.p>
        </div>

        <motion.div 
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[var(--accent)] text-white'
                  : 'bg-[var(--surface-1)] text-[var(--text-secondary)] hover:bg-[var(--surface-2)]'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[var(--surface-1)] rounded-lg overflow-hidden border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-1)] via-transparent to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <motion.span 
                      key={index} 
                      className="px-3 py-1 text-xs rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.a 
            href="https://github.com/aluvalasathish" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 