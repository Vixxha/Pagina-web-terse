"use client";

import { motion } from "framer-motion";
import { companyInfo, getWhatsAppLink } from "@/data/companyInfo";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  } as const;

  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center bg-corporate-gray overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
          style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          {/* Title and descriptions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-corporate-yellow p-8 md:p-12 shadow-2xl rounded-3xl"
          >
            <motion.p variants={itemVariants} className="uppercase tracking-widest text-xs font-bold text-corporate-dark/90 mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-corporate-dark/80 block"></span>
              Bienvenidos a {companyInfo.name}
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-black text-corporate-dark leading-[1.1] tracking-tight mb-6">
              Innovación en Ropa Corporativa y de Abrigo
            </motion.h1>
            <motion.p variants={itemVariants} className="text-corporate-dark/85 mb-8 font-medium text-sm md:text-base leading-relaxed max-w-[48ch]">
              Ofrecemos soluciones premium en Chaquetas, Micropolares y Parkas con la mejor calidad en terminaciones, durabilidad y materiales del mercado.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="catalogo"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-corporate-dark hover:bg-black active:scale-[0.98] text-white px-8 py-3.5 rounded-full font-bold uppercase text-xs tracking-wider transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-corporate-dark"
              >
                Ver Catálogo
              </motion.a>

              <motion.a
                href={getWhatsAppLink(companyInfo.whatsapp1.number, "Hola Terse Limitada, me interesa cotizar ropa corporativa.")}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-white px-8 py-3.5 rounded-full font-bold uppercase text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Cotizar por WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
