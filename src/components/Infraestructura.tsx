import { motion } from "motion/react";
import { CheckCircle2, Server, Database, Lock, Globe, Zap } from "lucide-react";

export const Infraestructura = () => {
  const modules = [
    {
      title: "Capa de Captura Inteligente",
      icon: <Globe className="w-6 h-6" />,
      features: ["Landing pages de alta fricción", "Tracking de comportamiento", "Pixel de conversión avanzado"],
    },
    {
      title: "Motor de Cualificación (Iron Filter)",
      icon: <Lock className="w-6 h-6" />,
      features: ["Validación financiera real-time", "Scoring de urgencia", "Descarte automático de curiosos"],
    },
    {
      title: "Base de Datos Dinámica",
      icon: <Database className="w-6 h-6" />,
      features: ["Segmentación por capacidad", "Retargeting automatizado", "Limpieza de duplicados"],
    },
    {
      title: "Dashboard de Control",
      icon: <Server className="w-6 h-6" />,
      features: ["Métricas de ROI reales", "Seguimiento de cierre", "Auditoría de equipo comercial"],
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Tech Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2070" 
          alt="Server Infrastructure" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="tech-tracking text-cyber-lime mb-4">INFRAESTRUCTURA TÉCNICA</div>
          <h1 className="text-5xl font-bold">Arquitectura de Cierre.</h1>
          <p className="text-white/50 mt-6 max-w-2xl mx-auto">
            No es magia, es una línea de montaje digital diseñada para maximizar el valor de cada segundo de tu equipo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {modules.map((module, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="tech-border p-10 bg-charcoal/40 group hover:border-cyber-lime/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-cyber-lime/10 text-cyber-lime rounded-sm">
                  {module.icon}
                </div>
                <h3 className="text-2xl font-bold">{module.title}</h3>
              </div>
              <ul className="space-y-4">
                {module.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-cyber-lime" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-cyber-lime text-charcoal flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">¿Listo para desplegar?</h2>
            <p className="font-medium opacity-80 italic">Tiempo estimado de implementación: 14 días laborables.</p>
          </div>
          <Zap className="w-16 h-16 opacity-20 hidden md:block" />
          <button className="bg-charcoal text-white px-10 py-4 font-mono font-bold hover:bg-black transition-colors">
            INICIAR DESPLIEGUE
          </button>
        </div>
      </div>
    </div>
  );
};
