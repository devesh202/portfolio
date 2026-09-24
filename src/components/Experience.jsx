import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "NIC",
      duration: "Jan 2025 - May 2026",
      description: [
        "Built chatbot UI and integrated backend APIs.",
        "Improved website loading performance by 30% using efficient React practices.",
        "Collaborated with the design team to ensure pixel-perfect implementation."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center mt-1">
                  <div className="w-12 h-12 rounded-full bg-dark-800 border border-primary/50 flex items-center justify-center text-primary z-10 relative">
                    <Briefcase size={20} />
                  </div>
                  {index !== experiences.length - 1 && (
                    <div className="w-px h-full bg-dark-700 absolute top-12 bottom-0 left-6"></div>
                  )}
                </div>

                <div className="w-full flex-1 bg-dark-800/50 border border-dark-700 p-6 md:p-8 rounded-2xl hover:bg-dark-800 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="md:hidden w-10 h-10 rounded-full bg-dark-900 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                        <span className="text-primary font-medium text-sm sm:text-base">{exp.company}</span>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto text-xs sm:text-sm text-slate-400 bg-dark-900 px-3 py-1 rounded-full border border-dark-700 shrink-0">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm sm:text-base text-slate-300">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
