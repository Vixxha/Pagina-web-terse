"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/data/companyInfo";
import { MapPin, Clock, Compass, ExternalLink, ShieldCheck } from "lucide-react";

export function LocationSection() {
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
              Nuestra Ubicación & Showroom
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed font-medium text-sm md:text-base max-w-[55ch]">
              Te invitamos a visitar nuestras oficinas comerciales. Aquí podrás conocer la calidad de nuestras telas, revisar costuras, y recibir asesoría personalizada para la confección de tu ropa corporativa a medida.
            </p>

            <div className="space-y-6 mb-8">
              {/* Address Card */}
              <div className="flex gap-4 p-5 rounded-2xl bg-corporate-gray/50 hover:bg-corporate-gray transition-colors duration-300">
                <div className="w-12 h-12 bg-corporate-yellow/10 rounded-xl flex items-center justify-center text-corporate-yellow shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-corporate-dark">Dirección Oficial</h4>
                  <p className="text-sm text-gray-500 mt-1 font-semibold">
                    {companyInfo.address}, {companyInfo.commune}
                  </p>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                    {companyInfo.city}, {companyInfo.country}
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex gap-4 p-5 rounded-2xl bg-corporate-gray/50 hover:bg-corporate-gray transition-colors duration-300">
                <div className="w-12 h-12 bg-corporate-yellow/10 rounded-xl flex items-center justify-center text-corporate-yellow shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-corporate-dark">Horario de Atención</h4>
                  <p className="text-sm text-gray-500 mt-1 font-semibold leading-relaxed">
                    {companyInfo.schedule}
                  </p>
                </div>
              </div>

              {/* Security/Access Card */}
              <div className="flex gap-4 p-5 rounded-2xl bg-corporate-gray/50 hover:bg-corporate-gray transition-colors duration-300">
                <div className="w-12 h-12 bg-corporate-yellow/10 rounded-xl flex items-center justify-center text-corporate-yellow shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-corporate-dark">Estacionamiento Disponible</h4>
                  <p className="text-sm text-gray-500 mt-1 font-semibold">
                    Contamos con accesos controlados y estacionamiento para clientes en nuestro showroom.
                  </p>
                </div>
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
            {/* Compass badge decoration */}
            <div className="absolute -top-6 -right-6 z-20 bg-corporate-yellow text-corporate-dark w-16 h-16 rounded-full flex items-center justify-center shadow-lg font-black transform rotate-12">
              <Compass className="animate-spin-slow w-8 h-8" />
            </div>

            {/* Stylized Map Viewport */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-corporate-dark group flex items-center justify-center">

              {/* Map Graphic Overlay Mock / Dark Theme Map aesthetic */}
              <div className="absolute inset-0 bg-[#242a38] opacity-90 transition-all duration-700 group-hover:scale-105" style={{
                backgroundImage: 'radial-gradient(circle, #2d3548 10%, transparent 11%), radial-gradient(circle at bottom left, #2d3548 20%, transparent 21%)',
                backgroundSize: '40px 40px'
              }}>
                {/* Visual paths to look like a map */}
                <div className="absolute top-1/3 left-0 w-full h-8 bg-corporate-dark/30 transform -rotate-12 border-y border-white/5"></div>
                <div className="absolute top-0 left-1/3 w-8 h-full bg-corporate-dark/30 transform rotate-45 border-x border-white/5"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-corporate-yellow/10 animate-ping opacity-30"></div>

                {/* Custom glowing pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative">
                    <span className="absolute inline-flex h-6 w-6 rounded-full bg-corporate-yellow opacity-75 animate-ping"></span>
                    <div className="relative w-8 h-8 bg-corporate-yellow rounded-full flex items-center justify-center shadow-xl border-2 border-white">
                      <MapPin size={16} className="text-corporate-dark font-black" />
                    </div>
                  </div>
                  <div className="mt-2 bg-corporate-dark px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest text-white border border-white/10 shadow-lg">
                    {companyInfo.name}
                  </div>
                </div>
              </div>

              {/* Glassmorphism visual prompt for 360 tour */}
              <div className="relative z-10 max-w-sm px-6 py-8 rounded-3xl bg-corporate-dark/75 backdrop-blur-md border border-white/10 text-center m-6 flex flex-col items-center shadow-2xl">
                <Compass className="text-corporate-yellow w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Tour Virtual 360°</h3>
                <p className="text-gray-300 text-xs font-semibold mb-6 leading-relaxed">
                  Explora las dependencias de nuestro Showroom interactivo directamente a través de la vista de Google Street View.
                </p>
                <a
                  href={companyInfo.googleMapsPhotosphereUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-corporate-yellow hover:bg-corporate-yellow-hover text-corporate-dark font-black px-6 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Abrir Tour 360°
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
