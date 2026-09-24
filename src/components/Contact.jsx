import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Access the Web3Forms key securely from .env
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div 
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-dark-800/50 p-6 sm:p-8 rounded-2xl border border-dark-700">
              <h3 className="text-2xl font-bold mb-6">Connect</h3>
              
              <div className="space-y-6">
                <a href="mailto:deveshzope2002@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center border border-dark-700 group-hover:border-primary/50 transition-colors shrink-0">
                    <Mail className="text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-sm text-slate-400">Email</span>
                    <span className="font-medium text-sm sm:text-base truncate block">deveshzope2002@gmail.com</span>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/devesh-zope-0234a6262/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center border border-dark-700 group-hover:border-primary/50 transition-colors shrink-0">
                    <Linkedin className="text-[#0A66C2]" />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-400">LinkedIn</span>
                    <span className="font-medium text-sm sm:text-base">Devesh Zope</span>
                  </div>
                </a>

                <a href="https://github.com/devesh202" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center border border-dark-700 group-hover:border-primary/50 transition-colors shrink-0">
                    <Github className="text-white" />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-400">GitHub</span>
                    <span className="font-medium text-sm sm:text-base">@devesh202</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="md:col-span-3 bg-dark-800/50 p-6 sm:p-8 rounded-2xl border border-dark-700"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    className="w-full bg-dark-900 border border-dark-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className="w-full bg-dark-900 border border-dark-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="5" 
                  required 
                  className="w-full bg-dark-900 border border-dark-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-medium rounded-xl hover:bg-blue-600 transition-colors bg-glow"
              >
                <Send size={20} />
                Send Message
              </button>

              {result && (
                <p className="text-center mt-4 text-sm font-medium text-slate-300">
                  {result}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
