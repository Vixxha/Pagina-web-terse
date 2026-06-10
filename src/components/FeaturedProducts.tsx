"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getFeaturedProducts, Product } from "@/data/mockProducts";
import { companyInfo, getWhatsAppLink } from "@/data/companyInfo";
import { MessageSquare, X, Info, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function FeaturedProducts() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Get only featured products and limit to first 4 for a clean grid
  const featured = getFeaturedProducts().slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featured.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [featured.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="destacados" className="py-24 bg-corporate-gray relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-corporate-yellow/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-black text-corporate-dark tracking-tight"
          >
            Productos Destacados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-gray-500 max-w-xl mx-auto mt-4 font-medium text-sm md:text-base leading-relaxed"
          >
            Descubre una muestra de nuestras mejores prendas corporativas diseñadas para el trabajo pesado y la presentación institucional.
          </motion.p>
        </div>

        {/* Products Grid (Visible on Desktop/Tablet) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16"
        >
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-corporate-gray/50 border-b border-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  priority={index < 2}
                />
                <span className="absolute top-4 left-4 bg-corporate-yellow text-corporate-dark font-extrabold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm z-10">
                  Destacado
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-corporate-yellow uppercase tracking-widest mb-2 block">
                  {product.category}
                </span>
                <h3 className="font-extrabold text-lg text-corporate-dark group-hover:text-corporate-yellow transition-colors duration-300 line-clamp-2 min-h-[3.5rem] leading-snug">
                  {product.name}
                </h3>
                
                <p className="text-gray-500 text-xs font-medium line-clamp-3 mb-6 flex-grow leading-relaxed">
                  {product.description}
                </p>

                <button
                  onClick={() => setActiveProduct(product)}
                  className="w-full bg-corporate-dark hover:bg-corporate-yellow active:scale-[0.98] text-white hover:text-corporate-dark font-bold text-xs uppercase tracking-widest py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-yellow"
                >
                  <Info size={14} />
                  Ver Detalle / Cotizar
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Slideshow (Visible only on cellphones) */}
        <div className="block sm:hidden relative mb-16">
          <div className="relative overflow-hidden rounded-3xl shadow-md border border-gray-100 bg-white flex flex-col min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col h-full flex-grow"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-corporate-gray/50 border-b border-gray-100">
                  <Image
                    src={featured[currentSlide].image}
                    alt={featured[currentSlide].name}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={currentSlide === 0}
                  />
                  <span className="absolute top-4 left-4 bg-corporate-yellow text-corporate-dark font-extrabold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm z-10">
                    Destacado
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-corporate-yellow uppercase tracking-widest mb-2 block">
                    {featured[currentSlide].category}
                  </span>
                  <h3 className="font-extrabold text-lg text-corporate-dark line-clamp-2 min-h-[3.5rem] leading-snug">
                    {featured[currentSlide].name}
                  </h3>
                  
                  <p className="text-gray-500 text-xs font-medium line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {featured[currentSlide].description}
                  </p>

                  <button
                    onClick={() => setActiveProduct(featured[currentSlide])}
                    className="w-full bg-corporate-dark hover:bg-corporate-yellow active:scale-[0.98] text-white hover:text-corporate-dark font-bold text-xs uppercase tracking-widest py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-yellow"
                  >
                    <Info size={14} />
                    Ver Detalle / Cotizar
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-4">
            {featured.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                  currentSlide === idx ? "bg-corporate-yellow w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="flex justify-center">
          <Link
            href="/catalogo"
            className="group bg-corporate-yellow hover:bg-corporate-yellow-hover active:scale-[0.98] text-corporate-dark font-black px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 uppercase text-xs tracking-widest flex items-center gap-3 transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-dark"
          >
            Ver Catálogo Completo
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {activeProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProduct(null)}
              className="absolute inset-0 bg-corporate-dark/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 border border-gray-100 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-4 right-4 z-20 bg-corporate-dark hover:bg-corporate-yellow text-white hover:text-corporate-dark p-2 rounded-full shadow-md transition-colors duration-300"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>

              {/* Left Column: Image */}
              <div className="w-full md:w-1/2 bg-corporate-gray/50 relative aspect-[4/5] md:aspect-auto md:min-h-[500px]">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Right Column: Detail Form */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-corporate-yellow uppercase tracking-widest mb-2 block">
                    {activeProduct.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-corporate-dark mb-4 leading-tight">
                    {activeProduct.name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                    {activeProduct.description}
                  </p>

                  {/* Highlights / Technical details */}
                  {activeProduct.details && activeProduct.details.length > 0 && (
                    <div className="mb-8">
                      <h4 className="font-extrabold text-xs text-corporate-dark uppercase tracking-wider mb-3">
                        Características Técnicas:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeProduct.details.map((detail, index) => (
                          <li key={index} className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
                            <CheckCircle2 size={14} className="text-corporate-yellow shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Call-to-actions */}
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-sm font-bold text-corporate-dark mb-4 text-center md:text-left">
                    ¿Te interesa este producto? Contáctanos:
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <a
                      href={getWhatsAppLink(
                        companyInfo.whatsapp1.number,
                        `Hola Terse Limitada, estoy interesado en cotizar el producto: *${activeProduct.name}*`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                      <MessageSquare size={16} />
                      WhatsApp Ventas 1 ({companyInfo.whatsapp1.display})
                    </a>

                    <a
                      href={getWhatsAppLink(
                        companyInfo.whatsapp2.number,
                        `Hola Terse Limitada, estoy interesado en cotizar el producto: *${activeProduct.name}*`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                      <MessageSquare size={16} />
                      WhatsApp Ventas 2 ({companyInfo.whatsapp2.display})
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
