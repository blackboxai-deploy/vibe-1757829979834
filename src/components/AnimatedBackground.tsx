'use client'

import React from 'react'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-blue-900/20 to-cyan-900/20 animate-gradient-shift" />
      
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/10 rounded-full animate-float-slow" />
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-blue-400/20 rounded-full animate-float-medium" />
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-purple-400/30 rounded-full animate-float-fast" />
        <div className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-cyan-400/20 rounded-full animate-float-slow animation-delay-1000" />
        
        {/* Floating Squares */}
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rotate-45 animate-float-medium animation-delay-2000" />
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rotate-12 animate-float-fast animation-delay-3000" />
        <div className="absolute top-2/3 left-1/6 w-3 h-3 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rotate-45 animate-float-slow animation-delay-4000" />
        
        {/* Floating Triangles */}
        <div className="absolute top-1/6 right-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-white/10 animate-float-medium animation-delay-1500" />
        <div className="absolute bottom-1/6 right-1/6 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-blue-400/20 animate-float-fast animation-delay-2500" />
        
        {/* Floating Lines */}
        <div className="absolute top-1/2 right-1/6 w-12 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-float-slow animation-delay-3500" />
        <div className="absolute bottom-1/2 left-1/8 w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent rotate-45 animate-float-medium animation-delay-4500" />
      </div>

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
    </div>
  )
}

// CSS Custom Properties for animations (will be added to globals.css)
/*
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes blob {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(90deg); }
}

@keyframes float-fast {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(270deg); }
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 4s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 3s ease-in-out infinite;
}

.animation-delay-1000 { animation-delay: 1s; }
.animation-delay-1500 { animation-delay: 1.5s; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-2500 { animation-delay: 2.5s; }
.animation-delay-3000 { animation-delay: 3s; }
.animation-delay-3500 { animation-delay: 3.5s; }
.animation-delay-4000 { animation-delay: 4s; }
.animation-delay-4500 { animation-delay: 4.5s; }
*/