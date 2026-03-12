import logoImg from "../../Captura de pantalla 2026-03-12 202852.png";

export const BalsarisLogo = ({ className = "h-10" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImg} 
        alt="Balsaris Logo" 
        className="h-full w-auto object-contain"
      />
      {/* He quitado el texto Balsaris de aquí para que no se duplique con tu imagen */}
    </div>
  );
}; 
