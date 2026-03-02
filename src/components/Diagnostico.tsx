import { motion } from "motion/react";
import { useState, FormEvent } from "react";
import { Send, AlertCircle, CheckCircle } from "lucide-react";

export const Diagnostico = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // REEMPLAZA TU_ID_AQUI CON EL ID DE FORMSPREE
    const response = await fetch("https://formspree.io/f/meelbeev", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      alert("Error al enviar. Inténtalo de nuevo.");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="pt-32 pb-24 px-6 flex items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full tech-border p-12 text-center bg-charcoal"
        >
          <CheckCircle className="w-16 h-16 text-cyber-lime mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">DATOS RECIBIDOS</h2>
          <p className="text-white/60 mb-8">
            Nuestro sistema está procesando tu información. Un arquitecto de conversión se pondrá en contacto contigo en las próximas 24-48 horas.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="text-cyber-lime tech-tracking hover:underline"
          >
            VOLVER AL INICIO
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="tech-tracking text-cyber-lime mb-4">FILTRO DE AUTORIDAD</div>
            <h1 className="text-4xl font-bold mb-6">Diagnóstico de Conversión.</h1>
            <p className="text-white/50 text-sm mb-8">
              Este no es un formulario de contacto estándar. Es un filtro de alta fricción. Solo trabajamos con equipos que facturan y quieren escalar con sistemas, no con promesas.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs opacity-40">
                <AlertCircle className="w-4 h-4" />
                <span>REQUERIDO: Facturación {">"} 100k€</span>
              </div>
              <div className="flex items-center gap-3 text-xs opacity-40">
                <AlertCircle className="w-4 h-4" />
                <span>REQUERIDO: Equipo comercial activo</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 tech-border p-8 bg-black/20">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="tech-tracking opacity-50">NOMBRE COMPLETO</label>
                  <input
                    required
                    name="nombre"
                    type="text"
                    className="w-full bg-charcoal border border-white/10 p-4 focus:border-cyber-lime outline-none transition-colors"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <label className="tech-tracking opacity-50">EMAIL CORPORATIVO</label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full bg-charcoal border border-white/10 p-4 focus:border-cyber-lime outline-none transition-colors"
                    placeholder="juan@inmobiliaria.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="tech-tracking opacity-50">FACTURACIÓN ANUAL (EST.)</label>
                  <select name="facturacion" className="w-full bg-charcoal border border-white/10 p-4 focus:border-cyber-lime outline-none transition-colors appearance-none">
                    <option>Menos de 100k €</option>
                    <option>100k € - 500k €</option>
                    <option>500k € - 1M €</option>
                    <option>Más de 1M €</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="tech-tracking opacity-50">VOLUMEN LEADS / MES</label>
                  <input
                    required
                    name="volumen_leads"
                    type="number"
                    className="w-full bg-charcoal border border-white/10 p-4 focus:border-cyber-lime outline-none transition-colors"
                    placeholder="Ej. 250"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="tech-tracking opacity-50">EL MAYOR CUELLO DE BOTELLA ACTUAL</label>
                <textarea
                  required
                  name="mensaje"
                  rows={4}
                  className="w-full bg-charcoal border border-white/10 p-4 focus:border-cyber-lime outline-none transition-colors"
                  placeholder="Describe tu problema operativo principal..."
                ></textarea>
              </div>

              <button
                disabled={status === "submitting"}
                type="submit"
                className="w-full bg-cyber-lime text-charcoal py-5 font-mono font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-3"
              >
                {status === "submitting" ? "PROCESANDO SISTEMA..." : "ENVIAR PARA DIAGNÓSTICO"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
