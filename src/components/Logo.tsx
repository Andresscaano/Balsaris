import { motion } from "motion/react";

export const BalsarisLogo = ({ className = "h-10" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Contenedor de la imagen del logo */}
      <img 
        src="/Captura de pantalla 2026-03-12 202852.png" 
        alt="Balsaris Logo" 
        className="h-full w-auto object-contain"
      />
      
      {/* Texto al lado del logo (Opcional) */}
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
