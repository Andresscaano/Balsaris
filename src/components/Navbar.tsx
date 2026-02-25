import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "EL MANIFIESTO", path: "/manifiesto" },
    { name: "INFRAESTRUCTURA", path: "/infraestructura" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-charcoal/80 backdrop-blur-md border-b border-cyber-lime/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Terminal className="w-6 h-6 text-cyber-lime group-hover:rotate-12 transition-transform" />
          <span className="font-mono font-bold tracking-widest text-xl">BALSARIS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`tech-tracking hover:text-cyber-lime transition-colors ${
                location.pathname === link.path ? "text-cyber-lime" : "text-white/60"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/diagnostico"
            className="bg-cyber-lime text-charcoal px-6 py-2 rounded-sm font-mono text-xs font-bold hover:bg-white transition-colors"
          >
            APLICAR DIAGNÓSTICO
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-cyber-lime" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-charcoal border-b border-cyber-lime/20 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="tech-tracking text-lg"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/diagnostico"
            onClick={() => setIsOpen(false)}
            className="bg-cyber-lime text-charcoal px-6 py-4 text-center font-mono font-bold"
          >
            APLICAR DIAGNÓSTICO
          </Link>
        </motion.div>
      )}
    </nav>
  );
};
