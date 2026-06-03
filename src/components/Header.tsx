"use client";

import { motion } from "framer-motion";
import { Search, Menu } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export function Header() {
  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/#nosotros" },
    { name: "Catálogo", href: "/catalogo" },
    { name: "Ubicación", href: "/#ubicacion" },
    { name: "Contacto", href: "/#contacto" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/80 backdrop-blur-md sticky top-0 z-40 w-full shadow-sm border-b border-gray-100/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
 
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex-shrink-0 flex items-center gap-3.5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 relative rounded-2xl overflow-hidden shadow-md flex items-center justify-center bg-white border border-slate-100 transition-all duration-300 hover:shadow-lg">
              <img 
                src={companyInfo.logo} 
                alt={`${companyInfo.name} Logo`} 
                className="object-contain w-full h-full p-1 transition-transform duration-350"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg md:text-xl tracking-tight text-corporate-dark leading-none">
                TERSE
              </span>
              <span className="font-bold text-[10px] md:text-xs tracking-[0.18em] text-corporate-yellow uppercase mt-1 leading-none">
                LIMITADA
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex space-x-8"
          >
            {navItems.map((item) => (
              <motion.a 
                key={item.name}
                variants={itemVariants}
                href={item.href} 
                className="text-corporate-dark font-semibold relative py-2 group hover:text-corporate-yellow transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-yellow rounded px-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-1 w-0 h-0.5 bg-corporate-yellow transition-all duration-300 group-hover:w-[calc(100%-8px)]"></span>
              </motion.a>
            ))}
          </motion.nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-corporate-dark hover:text-corporate-yellow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-yellow rounded-full p-1"
              aria-label="Buscar"
            >
              <Search size={20} />
            </motion.button>

            <motion.a 
              href="/catalogo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-corporate-yellow hover:bg-corporate-yellow-hover active:scale-[0.98] text-corporate-dark font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all uppercase text-sm tracking-wide flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-dark"
            >
              Solicitar Cotización
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="text-corporate-dark hover:text-corporate-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-yellow rounded-lg p-1"
              aria-label="Menú principal"
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
