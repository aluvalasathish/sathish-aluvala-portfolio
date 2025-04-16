import { FaCode, FaDesktop, FaMobileAlt, FaServer } from 'react-icons/fa';
import React from 'react';

interface NavLink {
  id: string;
  title: string;
}

interface Service {
  title: string;
  icon: React.ReactElement;
  description: string;
}

interface Project {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  live_demo_link: string;
}

interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },

  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services: Service[] = [
  {
    title: "Web Developer",
    icon: React.createElement(FaCode),
    description: "Creating responsive, performant, and beautiful websites using the latest technologies and best practices.",
  },
  {
    title: "UI/UX Designer",
    icon: React.createElement(FaDesktop),
    description: "Designing intuitive and engaging user interfaces that provide exceptional user experiences across all platforms.",
  },
  {
    title: "Mobile App Developer",
    icon: React.createElement(FaMobileAlt),
    description: "Building cross-platform mobile applications that work seamlessly on iOS and Android devices.",
  },
  {
    title: "Backend Developer",
    icon: React.createElement(FaServer),
    description: "Creating robust, scalable, and secure backend systems to power web and mobile applications.",
  },
];

export const projects: Project[] = [
  {
    name: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce platform with integrated payment processing, inventory management, and customer analytics. Features responsive design and advanced filtering.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://random.imagecdn.app/500/300",
    source_code_link: "https://github.com/",
    live_demo_link: "https://example.com/",
  },
  {
    name: "Travel Agency Website",
    description:
      "A modern travel agency website with interactive maps, booking functionality, and personalized recommendations based on user preferences and past travels.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://random.imagecdn.app/500/301",
    source_code_link: "https://github.com/",
    live_demo_link: "https://example.com/",
  },
  {
    name: "Portfolio Web App",
    description:
      "A creative and interactive portfolio website for showcasing design and development work, featuring 3D elements, animations, and a unique user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "pink-text-gradient",
      },
    ],
    image: "https://random.imagecdn.app/500/302",
    source_code_link: "https://github.com/",
    live_demo_link: "https://example.com/",
  },
  {
    name: "AI Content Generator",
    description:
      "An advanced content generation tool using AI to create marketing copy, blog posts, and social media content tailored to specific industries and brand voices.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "openai api",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: "https://random.imagecdn.app/500/303",
    source_code_link: "https://github.com/",
    live_demo_link: "https://example.com/",
  },
];

export const testimonials: Testimonial[] = [
  {
    testimonial:
      "Sathish demonstrated exceptional skills in React development during our project collaboration. His attention to detail and ability to create responsive, user-friendly interfaces was impressive.",
    name: "Shiva Sandupatla",
    designation: "Senior Developer",
    company: "Digiuniv Technologies",
    image: "https://avatar.iran.liara.run/public/boy",
  },
  {
    testimonial:
      "Working with Sathish was a great experience. Despite being early in his career, he shows great promise in frontend development. His dedication to learning and problem-solving abilities are commendable.",
    name: "Shirisha",
    designation: "Project Lead",
    company: "Digiuniv Technologies",
    image: "https://avatar.iran.liara.run/public/girl",
  },
  {
    testimonial:
      "Sathish completed several challenging React projects during his training period. His quick learning ability and passion for modern web technologies make him a valuable addition to any development team.",
    name: "Prathap",
    designation: "Technical Mentor",
    company: "Digiuniv Technologies",
    image: "https://avatar.iran.liara.run/public/boy",
  },
  {
    testimonial:
      "In the 6 months I've worked with Sathish, he has shown remarkable growth as a frontend developer. His work on our React-based dashboard project demonstrated both technical skill and attention to user experience.",
    name: "Abhishek Angadi",
    designation: "UI/UX Lead",
    company: "Digiuniv Technologies",
    image: "https://avatar.iran.liara.run/public/boy",
  },
]; 