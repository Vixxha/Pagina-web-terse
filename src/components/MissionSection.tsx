"use client";

import { motion } from "framer-motion";
import { Placeholder } from "./ui/Placeholder";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function MissionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  } as const;

  return (
    <section id="nosotros" className="py-20 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Image & Experience Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute top-10 -left-6 z-10 bg-corporate-yellow px-4 py-8 rounded-2xl shadow-lg h-48 flex items-center justify-center transform -rotate-180" style={{ writingMode: 'vertical-rl' }}>
              <span className="text-corporate-dark font-bold tracking-widest uppercase text-xl">
                10+ Años de Éxito
              </span>
            </div>
            <div className="pl-12">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Placeholder text="Mission Section Image" className="w-full h-[500px] hover:scale-105 transition-transform duration-700" variant="light" />
              </div>

              {/* Overlay small video placeholder */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="absolute -bottom-10 right-10 w-48 h-32 shadow-2xl border-4 border-white rounded-2xl overflow-hidden"
              >
                <Placeholder text="Video Presentación" className="w-full h-full hover:scale-105 transition-transform duration-500" variant="dark" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 mt-12 lg:mt-0"
          >
            <motion.p 
              variants={itemVariants}
              className="uppercase tracking-widest text-sm font-bold text-corporate-yellow mb-2 flex items-center gap-2"
            >
              <span className="w-8 h-0.5 bg-corporate-yellow block"></span>
              Nuestra Misión
            </motion.p>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-corporate-dark mb-6 leading-tight"
            >
              Compromiso con la Calidad y el Diseño Corporativo
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-8 leading-relaxed font-medium"
            >
              En Terse Limitada, nos dedicamos a entregar la mejor calidad en ropa corporativa de abrigo y seguridad. Nuestras chaquetas, micropolares y parkas están diseñados para resistir las exigencias del día a día, manteniendo la comodidad y la imagen profesional de tu empresa.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
            >
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-corporate-gray/50 transition-colors duration-300">
                <CheckCircle2 className="text-corporate-yellow shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-corporate-dark">Atención Personalizada</h4>
                  <p className="text-sm text-gray-500 mt-1">Soluciones a medida para cada empresa.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-corporate-gray/50 transition-colors duration-300">
                <CheckCircle2 className="text-corporate-yellow shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-corporate-dark">Materiales Premium</h4>
                  <p className="text-sm text-gray-500 mt-1">Confección con telas de alta resistencia.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-6 pt-6 border-t border-gray-100"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-md relative">
                <Image src="/Catalogo-image/Marcelo.webp" alt="Marcelo Segovia" fill className="object-cover" />
              </div>
              <div>
                <a href="https://www.linkedin.com/in/marcelo-segovia-22a2794a/" target="_blank" rel="noopener noreferrer" className="font-bold text-corporate-dark hover:text-blue-600 transition-colors flex items-center gap-2">
                  Marcelo Segovia
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A66C2]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">CEO & Fundador</p>
              </div>
              <div className="ml-auto">
                <span className="text-2xl font-signature text-gray-400 select-none">MSegovia</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
