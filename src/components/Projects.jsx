import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Jigyasa Chatbot",
    problem: "Users needed a way to interact with the system via voice alongside traditional text.",
    solution: "Built a chatbot with Speech-to-Text integration and a dynamic UI + menu system.",
    result: "Improved user interaction speed by resolving queries efficiently.",
    tech: ["React", "Node.js", "AI/ML APIs", "Tailwind CSS"],
    github: "https://github.com/devesh202",
    live: "https://drive.google.com/file/d/1rVAVCTPEMOuP1crwjBMZ1IrYzFNeYHcn/view?usp=drive_link"
  },
  {
    title: "InterviewPrep AI",
    problem: "Job seekers struggle to align resumes with Job Descriptions (JD), pass ATS filters, and prepare for role-specific interview questions.",
    solution: "Built a full-stack AI platform that parses resumes & JDs, extracts skills, flags skill gaps, generates ATS-optimized resume content, and curates customized interview questions.",
    result: "Significantly boosts interview readiness and resume ATS match rate with tailored AI-driven insights.",
    tech: ["React", "Node.js", "AI/LLM APIs", "Tailwind CSS"],
    github: "https://github.com/devesh202/Resume-Analyzer",
    live: "https://resume-analyzer-two-virid.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Real-world problems I've solved through code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group"
            >
              <div className="p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-4 mb-6 text-slate-300">
                    <div>
                      <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider block mb-1">Problem</span>
                      <p className="text-sm md:text-base text-slate-400">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-wider block mb-1">Solution</span>
                      <p className="text-sm md:text-base text-slate-400">{project.solution}</p>
                    </div>
                    <div>
                      <span className="text-purple-400 font-semibold text-xs sm:text-sm uppercase tracking-wider block mb-1">Result</span>
                      <p className="text-sm md:text-base text-slate-400">{project.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-3 py-1 text-xs font-medium text-slate-300 bg-dark-900 rounded-full border border-dark-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 border-t border-dark-700/50">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-900 border border-dark-700 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-xs sm:text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
