"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const MotionLink = motion(Link);

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Catálogo", href: "/catalogo" },
    { name: "Ubicación", href: "/#ubicacion" },
    { name: "Contacto", href: "/#contacto" },
  ];

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
        <div className="flex justify-between items-center h-24 md:h-28">
 
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex-shrink-0 flex items-center gap-3.5 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 relative flex items-center justify-center transition-all duration-300">
              <img 
                src={companyInfo.logo} 
                alt={`${companyInfo.name} Logo`} 
                className="object-contain w-full h-full transition-transform duration-350 drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl md:text-3xl tracking-tight text-corporate-dark leading-none">
                TERSE
              </span>
              <span className="font-bold text-xs md:text-sm tracking-[0.18em] text-corporate-yellow uppercase mt-1 leading-none">
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
              <MotionLink 
                key={item.name}
                variants={itemVariants}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-corporate-dark font-semibold relative py-2 group hover:text-corporate-yellow transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-yellow rounded px-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-1 w-0 h-0.5 bg-corporate-yellow transition-all duration-300 group-hover:w-[calc(100%-8px)]"></span>
              </MotionLink>
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

            <MotionLink 
              href="/catalogo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-corporate-yellow hover:bg-corporate-yellow-hover active:scale-[0.98] text-corporate-dark font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all uppercase text-sm tracking-wide flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-dark"
            >
              Solicitar Cotización
            </MotionLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-corporate-dark hover:text-corporate-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-yellow rounded-lg p-1 z-50 relative"
              aria-label="Menú principal"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col">
              {navItems.map((item) => (
                <MotionLink
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-corporate-dark font-extrabold py-3 px-4 rounded-xl hover:bg-corporate-gray hover:text-corporate-yellow transition-all text-sm block"
                >
                  {item.name}
                </MotionLink>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-2">
                <MotionLink
                  href="/catalogo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-corporate-yellow hover:bg-corporate-yellow-hover text-corporate-dark font-black py-4 rounded-xl shadow-md text-center block uppercase text-xs tracking-widest"
                >
                  Solicitar Cotización
                </MotionLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
