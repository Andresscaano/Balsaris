import { motion } from "motion/react";
import { ArrowRight, Zap, Shield, BarChart3, Activity, Layers, Cpu, X, Terminal, Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const SchematicVisual = () => (
  <div className="relative w-full h-[400px] flex items-center justify-center opacity-40">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute w-64 h-64 border border-cyber-lime/30 rounded-full border-dashed"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute w-48 h-48 border border-cyber-lime/50 rounded-full"
    />
    <div className="grid grid-cols-3 gap-4">
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          className="w-2 h-2 bg-cyber-lime rounded-full"
        />
      ))}
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-[1px] h-full bg-cyber-lime/10 absolute left-1/2" />
      <div className="h-[1px] w-full bg-cyber-lime/10 absolute top-1/2" />
    </div>
  </div>
);

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal" />
        </div>

        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="tech-tracking text-cyber-lime mb-4">SISTEMAS DE CONVERSIÓN</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Balsaris <span className="text-cyber-lime">|</span> Ingeniería Inmobiliaria.
            </h1>
            <p className="text-xl text-white/60 mb-8 max-w-md border-l-2 border-cyber-lime/30 pl-6">
              Ingeniería contra el caos de los portales.<br />No instalamos anuncios, desplegamos infraestructuras de cierre.
            </p>
            <Link
              to="/diagnostico"
              className="inline-flex items-center gap-3 bg-cyber-lime text-charcoal px-8 py-4 font-mono font-bold hover:gap-5 transition-all group"
            >
              SOLICITAR DIAGNÓSTICO (0 €)
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block"
          >
            <SchematicVisual />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Pain Points */}
      <section className="py-24 bg-black/20 border-y border-cyber-lime/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bbda4833effb?auto=format&fit=crop&q=80&w=2070" 
            alt="Data Chaos" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tech-tracking text-red-500 mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4" /> ERROR DE SISTEMA DETECTADO
              </div>
              <h2 className="text-4xl font-bold mb-8">Tu equipo no vende porque hace de "telefonista".</h2>
              <div className="space-y-6 text-white/70 text-lg">
                <p>
                  El sistema tradicional de portales (Idealista/Fotocasa) está roto. Te inunda de leads basura que consumen tu recurso más valioso: <span className="text-white font-bold italic">el tiempo.</span>
                </p>
                <p>
                  Tu equipo pierde <span className="text-cyber-lime font-mono">4 HORAS DIARIAS</span> filtrando mirones sin financiación. Estás pagando sueldos de comerciales para que hagan tareas de centralita.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "LEADS BASURA", value: "85%", color: "text-red-500" },
                { label: "TIEMPO PERDIDO", value: "4H/DÍA", color: "text-red-500" },
                { label: "VENTAS PERDIDAS", value: "5-10", color: "text-red-500" },
                { label: "ROI PORTALES", value: "NEGATIVO", color: "text-red-500" },
              ].map((stat, i) => (
                <div key={i} className="tech-border p-6 bg-charcoal/50">
                  <div className="tech-tracking mb-2">{stat.label}</div>
                  <div className={`text-2xl font-mono font-bold ${stat.color}`}>{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Differential */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="tech-tracking text-cyber-lime mb-4">ARQUITECTURA VS POSTUREO</div>
            <h2 className="text-4xl font-bold">No somos una agencia de marketing.</h2>
            <p className="text-white/50 mt-4">Somos arquitectos de sistemas de alta precisión.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border border-cyber-lime/20">
            <div className="p-12 border-b md:border-b-0 md:border-r border-cyber-lime/10">
              <h3 className="tech-tracking mb-8 opacity-50">MARKETING TRADICIONAL</h3>
              <ul className="space-y-6">
                {["Creatividad subjetiva", "Más leads (sin filtrar)", "Promesas de 'branding'", "Dependencia de portales"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/40">
                    <X className="w-5 h-5 text-red-900" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12 bg-cyber-lime/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Shield className="w-32 h-32 text-cyber-lime" />
              </div>
              <h3 className="tech-tracking mb-8 text-cyber-lime">BALSARIS INFRASTRUCTURE</h3>
              <ul className="space-y-6">
                {["Ingeniería de datos", "Cualificación de Hierro", "Lógica Financiera", "Independencia de Sistema"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white">
                    <Zap className="w-5 h-5 text-cyber-lime" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Value Ladder */}
      <section className="py-24 bg-black/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="tech-tracking text-cyber-lime mb-12 text-center">DESPLIEGUE TÁCTICO</div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                level: "NIVEL 01",
                name: "PAC (Protocolo de Activación)",
                desc: "Orden en el caos en 7 días. Limpieza de base de datos y activación de leads durmientes.",
                icon: <Activity className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
              },
              {
                level: "NIVEL 02",
                name: "Sistema Automático (Core)",
                desc: "El radar que separa compradores de mirones. Cualificación financiera automática antes de la llamada.",
                icon: <Layers className="w-8 h-8" />,
                highlight: true,
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
              },
              {
                level: "NIVEL 03",
                name: "Inmobiliaria 100% Automatizada",
                desc: "La línea de montaje predecible. Escalabilidad total sin aumentar la carga de trabajo del equipo.",
                icon: <Cpu className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 tech-border relative group transition-all hover:-translate-y-2 overflow-hidden ${
                  item.highlight ? "bg-cyber-lime/10 border-cyber-lime/40" : "bg-charcoal"
                }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                </div>
                <div className="relative z-10">
                  <div className="text-cyber-lime mb-6">{item.icon}</div>
                  <div className="tech-tracking mb-2 opacity-50">{item.level}</div>
                  <h3 className="text-xl font-bold mb-4">{item.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-8">{item.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyber-lime group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: ROI */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto tech-border p-12 bg-gradient-to-br from-charcoal to-black">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="tech-tracking text-cyber-lime mb-4">LA LÓGICA DEL DINERO</div>
              <h2 className="text-3xl font-bold mb-6">Esto no es un gasto. Es protección de ingresos.</h2>
              <p className="text-white/60 mb-8">
                Perder 5 ventas al mes por mala gestión financiera del lead equivale a <span className="text-white font-bold underline decoration-cyber-lime">90.000 € perdidos</span>.
              </p>
              <div className="flex items-center gap-4 p-4 bg-cyber-lime/10 border-l-4 border-cyber-lime">
                <BarChart3 className="w-6 h-6 text-cyber-lime" />
                <span className="font-mono text-sm">INVERSIÓN EN SISTEMA: 1.800 € / MES</span>
              </div>
            </div>
            <div className="w-full md:w-64 aspect-square bg-cyber-lime/5 rounded-full flex items-center justify-center relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyber-lime">50X</div>
                <div className="tech-tracking text-[8px]">POTENCIAL ROI</div>
              </motion.div>
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="48%"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="301"
                  strokeDashoffset="75"
                  className="text-cyber-lime opacity-20"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Closing */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Deja de adivinar. Empieza a construir.</h2>
          <p className="text-white/60 mb-10 text-lg">
            Déjanos enseñarte exactamente cuánto dinero estás perdiendo por leads mal gestionados y cómo tapar el agujero gratis.
          </p>
          <Link
            to="/diagnostico"
            className="inline-block bg-cyber-lime text-charcoal px-12 py-5 font-mono font-bold text-lg hover:bg-white transition-colors tech-glow"
          >
            SOLICITAR DIAGNÓSTICO DE CONVERSIÓN
          </Link>
        </div>
      </section>
    </div>
  );
};
