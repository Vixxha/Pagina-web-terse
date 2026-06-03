"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/data/companyInfo";

export function CtaBanner() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative py-20 px-8 md:px-16 bg-gradient-to-r from-corporate-dark via-[#1a202c] to-corporate-dark rounded-3xl overflow-hidden shadow-2xl border border-white/5 text-center"
        >
          {/* Abstract background elements */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px'
          }}></div>

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

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8">
              <motion.a 
                href={`tel:+${companyInfo.whatsapp1.number}`}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="text-3xl md:text-5xl font-black text-corporate-yellow tracking-tighter hover:text-white transition-colors duration-300"
              >
                {companyInfo.whatsapp1.display}
              </motion.a>
              <span className="hidden sm:inline text-white/30 text-3xl font-light">|</span>
              <motion.a 
                href={`tel:+${companyInfo.whatsapp2.number}`}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, type: "spring", stiffness: 100 }}
                className="text-3xl md:text-5xl font-black text-corporate-yellow tracking-tighter hover:text-white transition-colors duration-300"
              >
                {companyInfo.whatsapp2.display}
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
