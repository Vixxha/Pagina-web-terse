"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockProducts, Product } from "@/data/mockProducts";
import { companyInfo, getWhatsAppLink } from "@/data/companyInfo";
import { MessageSquare, X, Info, CheckCircle2, Search } from "lucide-react";
import Image from "next/image";

export function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Chaquetas");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = ["Chaquetas", "Micropolares", "Parkas", "Pantalones", "Poleras"];

  const filteredProducts = mockProducts.filter((p) => {
    const matchesCategory = p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setSearchTerm("");
    setVisibleCount(8);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <section id="catalogo" className="py-24 bg-corporate-gray relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-corporate-yellow/5 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-corporate-dark/5 rounded-full blur-3xl pointer-events-none -ml-48 -mb-48" />

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
            Nuestra Ropa Corporativa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-gray-500 max-w-xl mx-auto mt-4 font-medium text-sm md:text-base leading-relaxed"
          >
            Selecciona una sección para ver las prendas disponibles. Si te interesa algún producto, contáctanos directamente a nuestros números de WhatsApp.
          </motion.p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-full font-bold uppercase text-xs tracking-wider transition-all duration-300 shadow-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-yellow ${selectedCategory === cat
                ? "bg-corporate-dark text-white border-corporate-dark"
                : "bg-white text-corporate-dark hover:bg-corporate-gray border-gray-200"
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Basic Search Filter */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={`Buscar en ${selectedCategory}... (ej. Hombre, Mujer, térmico)`}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(8); // Reset pagination on search
              }}
              className="w-full bg-white border border-gray-200 text-corporate-dark font-medium rounded-full py-4 pl-12 pr-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-corporate-yellow focus:border-transparent transition-all"
            />
            {searchTerm && (
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setVisibleCount(8);
                }}
                className="absolute right-4 text-gray-400 hover:text-corporate-dark transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
              >
                {/* Product Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-corporate-gray/50 border-b border-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  {product.featured && (
                    <span className="absolute top-4 left-4 bg-corporate-yellow text-corporate-dark font-extrabold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm z-10">
                      Destacado
                    </span>
                  )}
                </div>

                {/* Card Content */}
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
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 font-medium">No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-12 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="px-8 py-3 bg-white text-corporate-dark font-bold text-sm uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              Cargar más productos
            </motion.button>
          </div>
        )}
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
