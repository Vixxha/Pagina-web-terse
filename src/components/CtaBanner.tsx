"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";
import Image from "next/image";

export function CtaBanner() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative py-20 px-8 md:px-16 bg-corporate-dark rounded-3xl overflow-hidden shadow-2xl border border-white/5 text-center"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/cta-bg.webp" 
              alt="Fondo corporativo Terse" 
              fill 
              className="object-cover opacity-40 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-corporate-dark/95 via-corporate-dark/80 to-corporate-dark/95"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-2xl md:text-4xl font-extrabold text-white mb-6 leading-tight"
            >
              ¿Necesitas Uniformes de Emergencia o una Cotización a Medida?
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-400 text-sm md:text-base mb-4 font-semibold uppercase tracking-wider"
            >
              Llámanos directamente al
            </motion.div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mb-10 w-full">
              <motion.a 
                href={`tel:+${companyInfo.whatsapp1.number}`}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 px-8 py-6 rounded-3xl hover:bg-white/10 hover:border-corporate-yellow shadow-lg transition-all w-full sm:w-auto group"
              >
                <div className="flex items-center gap-3 text-corporate-yellow mb-1 group-hover:scale-110 transition-transform">
                   <MessageCircle size={32} className="text-[#25D366]" />
                   <span className="font-bold tracking-widest uppercase text-xs text-white">Ventas 1</span>
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-corporate-yellow tracking-tighter group-hover:text-white transition-colors whitespace-nowrap">{companyInfo.whatsapp1.display}</span>
              </motion.a>
              
              <div className="hidden sm:flex w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

              <motion.a 
                href={`tel:+${companyInfo.whatsapp2.number}`}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 px-8 py-6 rounded-3xl hover:bg-white/10 hover:border-corporate-yellow shadow-lg transition-all w-full sm:w-auto group"
              >
                <div className="flex items-center gap-3 text-corporate-yellow mb-1 group-hover:scale-110 transition-transform">
                   <MessageCircle size={32} className="text-[#25D366]" />
                   <span className="font-bold tracking-widest uppercase text-xs text-white">Ventas 2</span>
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-corporate-yellow tracking-tighter group-hover:text-white transition-colors whitespace-nowrap">{companyInfo.whatsapp2.display}</span>
              </motion.a>
            </div>

            <div className="flex justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(249, 168, 38, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-corporate-yellow hover:bg-corporate-yellow-hover text-corporate-dark font-black px-10 py-4 rounded-full shadow-lg transition-all uppercase text-sm tracking-widest"
              >
                Obtener Cotización Gratis
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
