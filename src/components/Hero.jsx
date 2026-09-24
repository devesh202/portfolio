import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import Typewriter from './Typewriter';

import ProfileCard from './ProfileCard';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* 3D Canvas handles background */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-dark-800 border border-dark-700 text-sm font-medium text-primary mb-6">
                Hi, I am Devesh Zope 👋
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 min-h-[150px] sm:min-h-[140px] md:min-h-[180px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Building scalable <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                <Typewriter words={["web apps", "3D experiences", "backend APIs", "modern UIs"]} />
              </span> <br className="hidden sm:block"/>
              with MERN & problem-solving mindset.
            </motion.h1>

            <motion.p 
              className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm a Full Stack Developer passionate about crafting modern, efficient, and dynamic user experiences. Expect premium quality, not just minimum viable products.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a 
                href="#projects" 
                className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-blue-600 transition-all bg-glow w-full sm:w-auto text-center"
              >
                View Projects
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-dark-800 text-white font-medium rounded-full border border-dark-700 hover:bg-dark-700 transition-all w-full sm:w-auto text-center"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right Column: 3D Animated Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
