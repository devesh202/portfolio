import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-12 bg-dark-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-dark-800 to-dark-900 border border-dark-700 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-dark-950 rounded-2xl flex items-center justify-center border border-primary/40 shrink-0 shadow-lg">
              <GraduationCap size={40} className="text-primary sm:w-[48px] sm:h-[48px]" />
            </div>
            
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                  Currently Pursuing
                </span>
                <span className="text-xs font-medium text-slate-400">
                  Postgraduate Degree
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 text-white">
                MSc in Computing (Artificial Intelligence with NLP)
              </h2>
              <p className="text-primary font-semibold text-base sm:text-lg mb-2">
                Dublin City University (DCU)
              </p>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
                Specializing in AI architectures, Large Language Models (LLMs), Natural Language Processing, and intelligent full-stack applications.
              </p>
            </div>

            <div className="text-center bg-dark-950 px-6 py-5 rounded-2xl border border-dark-700 w-full md:w-auto shrink-0">
              <span className="block text-xs text-slate-400 uppercase tracking-wider mb-1">Location</span>
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                Dublin, Ireland
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
