import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import profileImg from '../assets/profile.png';

const ProfileCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position values for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid mouse movement
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  // Map mouse coordinates to 3D rotation angles (-15deg to 15deg)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized coordinates between -0.5 and 0.5
    const mouseXNorm = (event.clientX - rect.left) / width - 0.5;
    const mouseYNorm = (event.clientY - rect.top) / height - 0.5;

    x.set(mouseXNorm);
    y.set(mouseYNorm);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto perspective-1000 py-4">
      {/* Background Animated Neon Glow Aura */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 animate-pulse transition duration-1000"></div>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, rotateY: 60, scale: 0.85 }}
        whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 bg-dark-900/90 backdrop-blur-xl border border-white/10 rounded-[2.2rem] p-3 sm:p-4 shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden"
      >
        {/* Stylish Frame Container with Border Glow */}
        <div className="relative rounded-[1.8rem] overflow-hidden border border-white/15 bg-dark-950/80 shadow-inner">
          {/* Image */}
          <motion.img
            src={profileImg}
            alt="Devesh Zope"
            className="w-full h-[320px] sm:h-[380px] md:h-[420px] object-cover object-top rounded-[1.8rem] transform transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ transformStyle: "preserve-3d", translateZ: "20px" }}
          />

          {/* Shimmer Light Reflection Sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none"
            initial={{ opacity: 0, x: "-100%" }}
            animate={isHovered ? { opacity: 1, x: "100%" } : { opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Bottom Gradient Overlay & Status Badge */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent p-4 sm:p-6 flex flex-col justify-end">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-wide">Devesh Zope</h3>
                <p className="text-xs sm:text-sm font-medium text-slate-300">Software Engineer</p>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 bg-dark-900/90 border border-dark-700/80 px-3 py-1.5 rounded-full shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-semibold text-emerald-400">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Outer Corner Futuristic Brackets */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/60 rounded-tl-sm pointer-events-none"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/60 rounded-bl-sm pointer-events-none"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-purple-500/60 rounded-br-sm pointer-events-none"></div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;
