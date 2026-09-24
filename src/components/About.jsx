import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I am a full-stack developer pursuing an <span className="text-white font-medium">MSc in Computing (AI with NLP) at Dublin City University (DCU)</span>, passionate about building intelligent, scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="text-yellow-400" size={32} />,
              title: "Who I am",
              desc: "A Full Stack Developer & AI enthusiast pursuing MSc in Computing (AI with NLP) at DCU, bridging deep learning with web applications."
            },
            {
              icon: <Code2 className="text-primary" size={32} />,
              title: "What I do",
              desc: "I specialize in the MERN stack & AI/NLP integrations. From responsive UIs and REST APIs to AI-driven resume & chatbot tools, I cover the full spectrum."
            },
            {
              icon: <Target className="text-green-400" size={32} />,
              title: "What I'm aiming for",
              desc: "To solve real-world problems by combining modern full-stack web architectures with cutting-edge Artificial Intelligence and NLP technologies."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-800/50 border border-dark-700 p-8 rounded-2xl hover:bg-dark-800 transition-colors"
            >
              <div className="w-14 h-14 bg-dark-900 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
