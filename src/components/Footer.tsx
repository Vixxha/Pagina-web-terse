"use client";

import { motion } from "framer-motion";
import { Trophy, Clock, MessageSquare, Mail, MapPin, Send, User, ChevronDown } from "lucide-react";
import { companyInfo, getWhatsAppLink } from "@/data/companyInfo";
import { useState } from "react";

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Cotizar Chaquetas",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Terse Limitada, mi nombre es *${formData.name.trim()}* (${formData.email.trim()}).\n\n*Asunto:* ${formData.subject}\n\n*Mensaje:* ${formData.message.trim()}`;
    const link = getWhatsAppLink(companyInfo.whatsapp1.number, text);
    window.location.href = link;
  };

  return (
    <footer id="contacto" className="bg-white border-t border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3.5 mb-5 md:mb-8">
              <div className="w-14 h-14 sm:w-20 md:w-24 relative flex items-center justify-center">
                <img
                  src={companyInfo.logo}
                  alt={`${companyInfo.name} Logo`}
                  className="object-contain w-full h-full drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-corporate-dark leading-none">
                  TERSE
                </span>
                <span className="font-bold text-xs sm:text-sm tracking-[0.18em] text-corporate-yellow uppercase mt-0.5 sm:mt-1 leading-none">
                  LIMITADA
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-6 md:mb-8 max-w-md font-medium leading-relaxed">
              Ofrecemos la mejor calidad en uniformes corporativos y ropa de trabajo. Con nosotros encuentras prendas diseñadas para durar, brindar comodidad y destacar la identidad profesional de tu empresa.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-3.5 mb-6 md:mb-8 text-xs sm:text-sm font-semibold text-corporate-dark">
              <a href="#ubicacion" className="flex items-start gap-2.5 hover:text-corporate-yellow transition-colors group">
                <MapPin size={16} className="text-corporate-yellow shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span><strong>Oficina:</strong> {companyInfo.address}, {companyInfo.commune}</span>
                  <span className="text-gray-500 font-medium text-[10px] sm:text-xs"><strong>Despacho:</strong> {companyInfo.dispatchAddress}, {companyInfo.dispatchCommune}</span>
                </div>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2.5 hover:text-corporate-yellow transition-colors">
                <Mail size={14} className="text-corporate-yellow" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex flex-col gap-2.5 pt-1">
                <a
                  href={getWhatsAppLink(companyInfo.whatsapp1.number, companyInfo.whatsapp1.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-corporate-yellow transition-colors text-sm sm:text-base font-black bg-corporate-gray px-5 py-3 rounded-xl w-fit"
                >
                  <MessageSquare size={18} className="text-[#25D366] shrink-0" />
                  <span>Ventas 1: {companyInfo.whatsapp1.display}</span>
                </a>
                <a
                  href={getWhatsAppLink(companyInfo.whatsapp2.number, companyInfo.whatsapp2.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-corporate-yellow transition-colors text-sm sm:text-base font-black bg-corporate-gray px-5 py-3 rounded-xl w-fit"
                >
                  <MessageSquare size={18} className="text-[#25D366] shrink-0" />
                  <span>Ventas 2: {companyInfo.whatsapp2.display}</span>
                </a>
              </div>
            </div>

            <div className="flex flex-row gap-6 md:gap-8">
              <div className="flex gap-2.5 sm:gap-4">
                <Trophy className="text-corporate-yellow shrink-0" size={24} />
                <div>
                  <h4 className="font-extrabold text-corporate-dark text-lg md:text-xl leading-none">10+</h4>
                  <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wide mt-1">Años de Trayectoria</p>
                </div>
              </div>
              <div className="flex gap-2.5 sm:gap-4">
                <Clock className="text-corporate-yellow shrink-0" size={24} />
                <div>
                  <h4 className="font-extrabold text-corporate-dark text-lg md:text-xl leading-none">24/7</h4>
                  <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wide mt-1">Contacto Continuo</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-corporate-dark p-8 md:p-10 rounded-3xl shadow-2xl relative lg:-mt-24 z-20 border border-white/10"
          >
            <div className="mb-8">
              <span className="text-corporate-yellow text-xs font-bold uppercase tracking-widest block mb-2">Contacto Directo</span>
              <h3 className="text-2xl md:text-3xl font-black text-white">
                Envíanos un Mensaje
              </h3>
            </div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <label htmlFor="name-input" className="sr-only">Tu Nombre</label>
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </div>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Tu Nombre"
                    className="w-full bg-white/5 pl-12 pr-4 py-3.5 border border-white/10 rounded-xl focus:ring-2 focus:ring-corporate-yellow focus:border-transparent outline-none text-white placeholder:text-gray-400 font-medium transition-all"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="email-input" className="sr-only">Tu Email</label>
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Tu Email"
                    className="w-full bg-white/5 pl-12 pr-4 py-3.5 border border-white/10 rounded-xl focus:ring-2 focus:ring-corporate-yellow focus:border-transparent outline-none text-white placeholder:text-gray-400 font-medium transition-all"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="service-select" className="sr-only">Prenda a cotizar</label>
                <select 
                  id="service-select" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-white/5 px-4 py-3.5 border border-white/10 rounded-xl focus:ring-2 focus:ring-corporate-yellow focus:border-transparent outline-none text-white font-medium appearance-none transition-all cursor-pointer"
                >
                  <option value="Cotizar Chaquetas" className="text-corporate-dark">Cotizar Chaquetas</option>
                  <option value="Cotizar Micropolares" className="text-corporate-dark">Cotizar Micropolares</option>
                  <option value="Cotizar Parkas" className="text-corporate-dark">Cotizar Parkas</option>
                  <option value="Cotizar Pantalones" className="text-corporate-dark">Cotizar Pantalones</option>
                  <option value="Cotizar Poleras" className="text-corporate-dark">Cotizar Poleras</option>
                  <option value="Otras Prendas / Uniformes" className="text-corporate-dark">Otras Prendas / Uniformes</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                  <ChevronDown size={18} />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="message-textarea" className="sr-only">Requerimiento</label>
                <textarea
                  id="message-textarea"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Detalla tu requerimiento de uniformes corporativos..."
                  rows={4}
                  className="w-full bg-white/5 px-4 py-3.5 border border-white/10 rounded-xl focus:ring-2 focus:ring-corporate-yellow focus:border-transparent outline-none resize-none text-white placeholder:text-gray-400 font-medium transition-all"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-corporate-yellow hover:bg-[#e6a300] text-corporate-dark font-black py-4 rounded-xl shadow-lg transition-all uppercase text-xs tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-corporate-yellow flex items-center justify-center gap-2 mt-2"
              >
                <Send size={16} />
                Enviar Mensaje por WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Expanded Bottom Footer */}
      <div className="bg-corporate-dark text-gray-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h4 className="text-white font-bold mb-5 uppercase text-sm tracking-widest text-corporate-yellow">Navegación</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="/catalogo" className="hover:text-white transition-colors">Catálogo de Productos</a></li>
              <li><a href="/#contacto" className="hover:text-white transition-colors">Solicitar Cotización</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 uppercase text-sm tracking-widest text-corporate-yellow">Contacto Directo</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-500" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">{companyInfo.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare size={16} className="text-[#25D366]" />
                <a href={getWhatsAppLink(companyInfo.whatsapp1.number, companyInfo.whatsapp1.message)} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{companyInfo.whatsapp1.display}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare size={16} className="text-[#25D366]" />
                <a href={getWhatsAppLink(companyInfo.whatsapp2.number, companyInfo.whatsapp2.message)} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{companyInfo.whatsapp2.display}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 uppercase text-sm tracking-widest text-corporate-yellow">Ubicaciones</h4>
            <div className="text-sm font-medium leading-relaxed space-y-4">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gray-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-white text-xs uppercase tracking-wider text-corporate-yellow">Oficina / Showroom</p>
                  <p>
                    {companyInfo.address}<br />
                    {companyInfo.commune}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gray-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-white text-xs uppercase tracking-wider text-corporate-yellow">Bodega / Despacho</p>
                  <p>
                    {companyInfo.dispatchAddress}<br />
                    {companyInfo.dispatchCommune}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-sm text-center border-t border-white/10 pt-8 text-gray-500">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
