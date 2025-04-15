import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants';

interface ServiceCardProps {
  index: number;
  title: string;
  icon: JSX.Element;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(50%-16px)] xl:w-[calc(25%-16px)] p-[1px] rounded-2xl overflow-hidden"
    >
      <div className="relative bg-tertiary rounded-2xl h-full p-8 glass-effect border-t border-l border-white/5 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 group">
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        
        <div className="text-accent mb-4 w-12 h-12 flex items-center justify-center bg-tertiary rounded-full">
          {icon}
        </div>
        
        <h3 className="text-white text-xl font-bold mb-4 portfolio-header">{title}</h3>
        <p className="text-secondary">{description}</p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-black-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white portfolio-header">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-secondary max-w-3xl mx-auto">
            Offering a comprehensive range of web design and development services to help your business succeed online.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 