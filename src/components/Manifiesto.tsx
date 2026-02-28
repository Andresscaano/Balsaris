import { motion } from "motion/react";
import { Quote, ShieldAlert, Zap } from "lucide-react";

export const Manifiesto = () => {
  return (
    <div className="pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-5 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Office" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="tech-tracking text-cyber-lime mb-8">EL MANIFIESTO</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
            Contra la dictadura del lead basura.
          </h1>

          <div className="space-y-12 text-xl text-white/80 leading-relaxed font-light">
            <div className="relative p-8 border-l-4 border-cyber-lime bg-cyber-lime/5 italic">
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-cyber-lime opacity-50" />
              "El sector inmobiliario no tiene un problema de ventas. Tiene un problema de ingeniería."
            </div>

            <p>
              Durante décadas, los portales inmobiliarios han secuestrado la atención del agente. Te han convencido de que <span className="text-cyber-lime">MÁS LEADS</span> es igual a <span className="text-cyber-lime">MÁS VENTAS</span>.
            </p>

            <div className="grid md:grid-cols-2 gap-8 py-8">
              <div className="tech-border p-6">
                <ShieldAlert className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="font-bold mb-2">LA GRAN MENTIRA</h3>
                <p className="text-sm opacity-60">Creer que un email de Idealista es una oportunidad de negocio. El 90% son ruidos estadísticos.</p>
              </div>
              <div className="tech-border p-6">
                <Zap className="w-8 h-8 text-cyber-lime mb-4" />
                <h3 className="font-bold mb-2">NUESTRA VERDAD</h3>
                <p className="text-sm opacity-60">Un lead solo existe cuando hay capacidad financiera validada y urgencia real.</p>
              </div>
            </div>

            <p>
              Balsaris nace para devolver el poder a las inmobiliarias que piensan. No somos una agencia que te vende anuncios bonitos. Somos la infraestructura que filtra el ruido para que tú solo hables con el 5% que realmente va a comprar.
            </p>

            <p className="font-mono text-cyber-lime text-sm tracking-widest pt-12">
              [ FIN DE LA TRANSMISIÓN ]
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
