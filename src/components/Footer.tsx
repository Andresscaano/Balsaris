import { Terminal, Instagram, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-cyber-lime/10 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-cyber-lime" />
          <span className="font-mono font-bold tracking-widest">BALSARIS</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-white/40 hover:text-cyber-lime transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-white/40 hover:text-cyber-lime transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-white/40 hover:text-cyber-lime transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
        <div className="tech-tracking opacity-20">© 2024 BALSARIS SYSTEMS. ALL RIGHTS RESERVED.</div>
      </div>
    </footer>
  );
};
