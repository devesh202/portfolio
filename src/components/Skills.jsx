import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "ReactJS", level: "Advanced", percentage: 90 },
      { name: "HTML & CSS", level: "Advanced", percentage: 95 },
      { name: "JavaScript", level: "Advanced", percentage: 85 },
      { name: "Tailwind CSS", level: "Intermediate", percentage: 80 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Intermediate", percentage: 75 },
      { name: "Express.js", level: "Intermediate", percentage: 75 },
      { name: "RESTful APIs", level: "Advanced", percentage: 85 }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: "Intermediate", percentage: 70 },
      { name: "SQL", level: "Intermediate", percentage: 65 }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: "Advanced", percentage: 90 },
      { name: "Postman", level: "Advanced", percentage: 85 }
    ]
  }
];

const getLevelStyle = (level) => {
  switch (level.toLowerCase()) {
    case 'advanced':
      return {
        badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40',
        bar: 'bg-gradient-to-r from-emerald-500 to-teal-400'
      };
    case 'intermediate':
      return {
        badge: 'bg-blue-500/15 text-blue-400 border-blue-500/40',
        bar: 'bg-gradient-to-r from-primary to-cyan-400'
      };
    case 'beginner':
    default:
      return {
        badge: 'bg-amber-500/15 text-amber-400 border-amber-500/40',
        bar: 'bg-gradient-to-r from-amber-500 to-orange-400'
      };
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I work with to build scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => {
                  const style = getLevelStyle(skill.level);
                  return (
                    <div key={sIdx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${style.badge}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-dark-800 rounded-full h-2">
                        <motion.div 
                          className={`h-2 rounded-full ${style.bar}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
