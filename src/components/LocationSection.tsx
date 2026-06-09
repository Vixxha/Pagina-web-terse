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
            {/* Stylized Map Viewport */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-corporate-dark group flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13318.129631984162!2d-70.65859659303811!3d-33.43543305494152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d05b784b68ef%3A0xf4ef52f98c56b230!2sTerse%20Limitada!5e0!3m2!1ses-419!2scl!4v1780609981807!5m2!1ses-419!2scl" 
                className="w-full h-full absolute inset-0"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
