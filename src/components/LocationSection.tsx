"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { companyInfo } from "@/data/companyInfo";
import { MapPin, Clock } from "lucide-react";

export function LocationSection() {
  const [activeTab, setActiveTab] = useState<"office" | "dispatch" | "schedule">("office");

  return (
    <section id="ubicacion" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #f9a826 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Column: Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-black text-corporate-dark mb-6 leading-tight tracking-tight">
              Nuestras Ubicaciones
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed font-medium text-sm md:text-base max-w-[55ch]">
              Haz clic en los botones para alternar entre nuestra oficina comercial, el centro de despacho y los horarios de atención.
            </p>

            {/* The 3 Tab Buttons */}
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-corporate-gray/60 rounded-xl mb-6 border border-gray-100">
              <button
                type="button"
                onClick={() => setActiveTab("office")}
                className={`py-3 px-1 text-xs md:text-sm font-black rounded-lg transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === "office"
                    ? "bg-corporate-yellow text-corporate-dark shadow-md"
                    : "text-gray-500 hover:text-corporate-dark hover:bg-corporate-gray/80"
                }`}
              >
                <MapPin size={16} className="shrink-0" />
                <span>Oficina</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("dispatch")}
                className={`py-3 px-1 text-xs md:text-sm font-black rounded-lg transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === "dispatch"
                    ? "bg-corporate-yellow text-corporate-dark shadow-md"
                    : "text-gray-500 hover:text-corporate-dark hover:bg-corporate-gray/80"
                }`}
              >
                <MapPin size={16} className="shrink-0" />
                <span>Despacho</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("schedule")}
                className={`py-3 px-1 text-xs md:text-sm font-black rounded-lg transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === "schedule"
                    ? "bg-corporate-yellow text-corporate-dark shadow-md"
                    : "text-gray-500 hover:text-corporate-dark hover:bg-corporate-gray/80"
                }`}
              >
                <Clock size={16} className="shrink-0" />
                <span>Horarios</span>
              </button>
            </div>

            {/* Details Card */}
            <div className="mb-6 min-h-[160px]">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl bg-corporate-gray/40 border border-corporate-yellow/10"
              >
                {activeTab === "office" && (
                  <div>
                    <h4 className="font-extrabold text-corporate-dark text-lg mb-2">Oficina Comercial & Showroom</h4>
                    <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-1">
                      {companyInfo.address}, {companyInfo.commune}
                    </p>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">
                      {companyInfo.city}, {companyInfo.country}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      Visítanos para conocer la calidad de nuestras prendas, revisar telas y tallajes.
                    </p>
                  </div>
                )}
                {activeTab === "dispatch" && (
                  <div>
                    <h4 className="font-extrabold text-corporate-dark text-lg mb-2">Centro de Despacho & Retiro</h4>
                    <p className="text-gray-600 font-semibold text-sm leading-relaxed mb-1">
                      {companyInfo.dispatchAddress}, {companyInfo.dispatchCommune}
                    </p>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">
                      {companyInfo.city}, {companyInfo.country}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      Punto exclusivo habilitado para retiro de pedidos y entrega de insumos.
                    </p>
                  </div>
                )}
                {activeTab === "schedule" && (
                  <div>
                    <h4 className="font-extrabold text-corporate-dark text-lg mb-2">Horario de Atención</h4>
                    <p className="text-corporate-yellow font-black text-base md:text-lg mb-3">
                      {companyInfo.schedule}
                    </p>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                      Recomendamos agendar tu visita con antelación escribiendo a nuestros números de WhatsApp.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Permanent Schedule Banner */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-corporate-yellow/5 border border-corporate-yellow/20">
              <Clock className="text-corporate-yellow shrink-0" size={20} />
              <div className="text-xs font-semibold text-corporate-dark">
                <span className="font-bold text-corporate-dark block">Horario General:</span>
                <span className="text-gray-600">{companyInfo.schedule}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Google Maps & Tour Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Stylized Map Viewport */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-corporate-dark group flex items-center justify-center">
              <motion.iframe
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={activeTab === "dispatch" ? companyInfo.maps.dispatch : companyInfo.maps.office}
                className="w-full h-full absolute inset-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              ></motion.iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
