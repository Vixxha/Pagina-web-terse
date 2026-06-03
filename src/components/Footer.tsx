"use client";

import { motion } from "framer-motion";
import { Trophy, Clock, MessageSquare, Mail, MapPin } from "lucide-react";
import { companyInfo, getWhatsAppLink } from "@/data/companyInfo";

export function Footer() {
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
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 relative rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-white border border-gray-100">
                <img
                  src={companyInfo.logo}
                  alt={`${companyInfo.name} Logo`}
                  className="object-contain w-full h-full p-0.5"
                />
              </div>
              <span className="font-black text-2xl tracking-tight text-corporate-dark uppercase">
                {companyInfo.name}
              </span>
            </div>
            <p className="text-gray-600 mb-8 max-w-md font-medium">
              Ofrecemos la mejor calidad en uniformes corporativos y ropa de trabajo. Con nosotros encuentras prendas diseñadas para durar, brindar comodidad y destacar la identidad profesional de tu empresa.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-3 mb-8 text-sm font-semibold text-corporate-dark">
              <a href="#ubicacion" className="flex items-center gap-2 hover:text-corporate-yellow transition-colors">
                <MapPin size={16} className="text-corporate-yellow" />
                <span>{companyInfo.address}, {companyInfo.commune}, {companyInfo.city}</span>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-corporate-yellow transition-colors">
                <Mail size={16} className="text-corporate-yellow" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href={getWhatsAppLink(companyInfo.whatsapp1.number, companyInfo.whatsapp1.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-corporate-yellow transition-colors text-xs bg-corporate-gray px-4 py-2 rounded-xl w-fit"
                >
                  <MessageSquare size={14} className="text-[#25D366]" />
                  <span>Ventas 1: {companyInfo.whatsapp1.display}</span>
                </a>
                <a
                  href={getWhatsAppLink(companyInfo.whatsapp2.number, companyInfo.whatsapp2.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-corporate-yellow transition-colors text-xs bg-corporate-gray px-4 py-2 rounded-xl w-fit"
                >
                  <MessageSquare size={14} className="text-[#25D366]" />
                  <span>Ventas 2: {companyInfo.whatsapp2.display}</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex gap-4">
                <Trophy className="text-corporate-yellow shrink-0" size={32} />
                <div>
                  <h4 className="font-extrabold text-corporate-dark text-xl">10+</h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Años de Trayectoria</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-corporate-yellow shrink-0" size={32} />
                <div>
                  <h4 className="font-extrabold text-corporate-dark text-xl">24/7</h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Contacto Continuo</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Schedule Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-corporate-yellow p-8 md:p-10 rounded-3xl shadow-2xl relative lg:-mt-32 z-20 border border-white/10"
          >
            <h3 className="text-2xl font-black text-corporate-dark mb-6">
              Envíanos un Mensaje
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name-input" className="sr-only">Tu Nombre</label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    placeholder="Tu Nombre"
                    className="w-full bg-white px-4 py-3 border-none rounded-xl focus:ring-2 focus:ring-corporate-dark outline-none text-corporate-dark placeholder:text-gray-500 font-medium shadow-inner"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email-input" className="sr-only">Tu Email</label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    placeholder="Tu Email"
                    className="w-full bg-white px-4 py-3 border-none rounded-xl focus:ring-2 focus:ring-corporate-dark outline-none text-corporate-dark placeholder:text-gray-500 font-medium shadow-inner"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="service-select" className="sr-only">Prenda a cotizar</label>
                <select 
                  id="service-select" 
                  className="w-full bg-white px-4 py-3 border-none rounded-xl focus:ring-2 focus:ring-corporate-dark outline-none text-gray-700 font-medium shadow-inner"
                >
                  <option>Cotizar Chaquetas</option>
                  <option>Cotizar Micropolares</option>
                  <option>Cotizar Parkas</option>
                  <option>Otras Rendas / Uniformes</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message-textarea" className="sr-only">Requerimiento</label>
                <textarea
                  id="message-textarea"
                  required
                  placeholder="Detalla tu requerimiento de uniformes corporativos..."
                  rows={4}
                  className="w-full bg-white px-4 py-3 border-none rounded-xl focus:ring-2 focus:ring-corporate-dark outline-none resize-none text-corporate-dark placeholder:text-gray-500 font-medium shadow-inner"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-corporate-dark hover:bg-black active:scale-[0.98] text-white font-bold py-4 rounded-full shadow-md hover:shadow-xl transition-all uppercase text-xs tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-corporate-dark cursor-pointer"
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-corporate-dark text-gray-400 py-6 text-sm text-center border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} {companyInfo.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
