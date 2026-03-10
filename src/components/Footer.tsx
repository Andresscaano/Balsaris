import { Instagram, Twitter, Facebook } from "lucide-react";
import { BalsarisLogo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-cyber-lime/10 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="group">
          <BalsarisLogo className="h-8" />
        </div>
        
        <div className="flex gap-8">
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/balsarisact" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-cyber-lime transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>

          {/* Twitter / X */}
          <a 
            href="https://x.com/balsarisact" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-cyber-lime transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>

          {/* Facebook */}
          <a 
            href="https://www.facebook.com/profile.php?id=61588466267835" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-cyber-lime transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        <div className="tech-tracking opacity-20 text-xs md:text-sm">
          © 2026 BALSARIS SYSTEMS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};
