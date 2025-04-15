import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { testimonials } from '../constants';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-deep-navy to-[#0a1525] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm rounded-full mb-4 font-medium">
            Feedback & Recommendations
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-champagne">
            What Others <span className="text-gradient">Say About Me</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-gold mx-auto mb-8"></div>
          
          <p className="text-champagne/70 max-w-2xl mx-auto">
            Feedback from mentors, professors, and collaborators who have guided me and worked with me during my learning journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-navy-light/30 backdrop-blur-sm p-8 rounded-xl border border-champagne/10 hover:border-gold/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)' }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-gold">
                  <FaQuoteLeft size={24} />
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-gold" size={14} />
                  ))}
                </div>
              </div>
              
              <p className="text-champagne/90 mb-8 leading-relaxed">
                "{testimonial.testimonial}"
              </p>
              
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full border-2 border-gold/30 p-0.5 overflow-hidden mr-4">
                  <motion.img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full" 
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div>
                  <h4 className="font-medium text-champagne">{testimonial.name}</h4>
                  <p className="text-sm text-champagne/60">
                    {testimonial.designation}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-gold text-deep-navy font-medium hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 