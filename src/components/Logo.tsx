import { motion } from "motion/react";

export const BalsarisLogo = ({ className = "h-8" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-full aspect-square relative flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logo-green-grad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#8EDB2F" />
              <stop offset="100%" stopColor="#A6F154" />
            </linearGradient>
            <linearGradient id="logo-dark-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D343E" />
              <stop offset="100%" stopColor="#1A1D23" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Technical Ring - Very subtle */}
          <circle cx="50" cy="50" r="48" className="stroke-white/5" strokeWidth="0.5" strokeDasharray="1 3" />

          {/* Main "A" Frame - Refined with double-stroke effect */}
          <path 
            d="M50 92 L12 72 L50 18 L88 72 L50 92 Z" 
            className="fill-charcoal stroke-white/10" 
            strokeWidth="0.5"
          />
          <path 
            d="M50 82 L28 68 L50 35 L72 68 L50 82 Z" 
            className="fill-black/40 stroke-cyber-lime/20" 
            strokeWidth="1"
          />
          
          {/* 4 Vertical Bars - Precision engineered with gradients */}
          <g transform="translate(0, 2)">
            {[
              { x: 32, h: 18, delay: 0 },
              { x: 41, h: 28, delay: 0.1 },
              { x: 50, h: 38, delay: 0.2 },
              { x: 59, h: 48, delay: 0.3 }
            ].map((bar, i) => (
              <g key={i}>
                {/* Green Base */}
                <motion.rect
                  initial={{ height: 0, y: 75 }}
                  animate={{ height: bar.h, y: 75 - bar.h }}
                  transition={{ duration: 0.6, delay: bar.delay, ease: "easeOut" }}
                  x={bar.x} width="5"
                  fill="url(#logo-green-grad)"
                />
                {/* Dark Cap */}
                <motion.rect
                  initial={{ height: 0, y: 75 - bar.h }}
                  animate={{ height: bar.h * 0.6, y: 75 - bar.h }}
                  transition={{ duration: 0.6, delay: bar.delay + 0.2, ease: "easeOut" }}
                  x={bar.x} width="5"
                  fill="url(#logo-dark-grad)"
                />
              </g>
            ))}
          </g>

          {/* The Arrow - Sharp, Bold, with Glow */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            d="M28 68 L68 28 L68 38 L82 18 L62 18 L68 28"
            fill="url(#logo-green-grad)"
            stroke="#8EDB2F"
            strokeWidth="1"
            filter="url(#glow)"
          />

          {/* Technical Accent Lines */}
          <path d="M45 18 H55" className="stroke-cyber-lime/40" strokeWidth="1" />
          <path d="M12 72 L20 72" className="stroke-white/20" strokeWidth="1" />
          <path d="M80 72 L88 72" className="stroke-white/20" strokeWidth="1" />
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-sans font-black tracking-tighter text-2xl italic leading-none select-none text-white">
          BALSARIS
        </span>
        <span className="text-[8px] tech-tracking text-cyber-lime/60 font-bold mt-0.5">
          CONVERSION SYSTEMS
        </span>
      </div>
    </div>
  );
};
