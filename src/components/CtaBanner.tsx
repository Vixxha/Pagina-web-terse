"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { companyInfo, getWhatsAppLink } from "@/data/companyInfo";
import Image from "next/image";

export function CtaBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const contacts = [
    {
      id: 0,
      label: "Ventas 1",
      display: companyInfo.whatsapp1.display,
      number: companyInfo.whatsapp1.number,
      message: companyInfo.whatsapp1.message,
    },
    {
      id: 1,
      label: "Ventas 2",
      display: companyInfo.whatsapp2.display,
      number: companyInfo.whatsapp2.number,
      message: companyInfo.whatsapp2.message,
    },
  ];

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    resetTimer();
  };
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 5.0, ease: "easeOut" }}
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
              transition={{ delay: 0.1, duration: 5.0 }}
              className="text-2xl md:text-4xl font-extrabold text-white mb-6 leading-tight"
            >
              ¿Necesitas Uniformes de Emergencia o una Cotización a Medida?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 5.0 }}
              className="text-gray-400 text-sm md:text-base mb-4 font-semibold uppercase tracking-wider"
            >
              Llámanos directamente al
            </motion.div>

            {/* Carousel Container */}
            <div className="w-full max-w-md mx-auto mb-6 relative min-h-[250px] flex flex-col justify-center items-center overflow-hidden px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -80, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-6 w-full"
                >
                  <a
                    href={`tel:+${contacts[activeIndex].number}`}
                    className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 px-8 py-6 rounded-3xl hover:bg-white/10 hover:border-corporate-yellow shadow-lg transition-all w-full group"
                  >
                    <div className="flex items-center gap-3 text-corporate-yellow mb-1 group-hover:scale-110 transition-transform">
                      <MessageCircle size={32} className="text-[#25D366]" />
                      <span className="font-bold tracking-widest uppercase text-xs text-white">
                        {contacts[activeIndex].label}
                      </span>
                    </div>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-corporate-yellow tracking-tighter group-hover:text-white transition-colors whitespace-nowrap">
                      {contacts[activeIndex].display}
                    </span>
                  </a>

                  <motion.a
                    href={getWhatsAppLink(contacts[activeIndex].number, contacts[activeIndex].message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(249, 168, 38, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-corporate-yellow hover:bg-corporate-yellow-hover text-corporate-dark font-black px-10 py-4 rounded-full shadow-lg transition-all uppercase text-sm tracking-widest inline-block text-center cursor-pointer w-full max-w-xs"
                  >
                    Obtener Cotización Gratis
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mb-2">
              {contacts.map((contact, index) => (
                <button
                  key={contact.id}
                  onClick={() => handleDotClick(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                    ? "w-8 bg-corporate-yellow"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                  aria-label={`Ir al contacto ${contact.label}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
