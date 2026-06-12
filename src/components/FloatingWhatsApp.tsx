"use client";

import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo, getWhatsAppLink } from "@/data/companyInfo";

// Official WhatsApp SVG Logo Icon
const WhatsAppIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512" 
    fill="currentColor" 
    className={className}
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // 640px is standard Tailwind 'sm' breakpoint
    };
    
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contacts = [
    {
      name: "Ventas 1",
      display: companyInfo.whatsapp1.display,
      number: companyInfo.whatsapp1.number,
      message: "Hola Terse Limitada, me gustaría solicitar una cotización de uniformes.",
      desc: "Atención inmediata y cotizaciones rápidas."
    },
    {
      name: "Ventas 2",
      display: companyInfo.whatsapp2.display,
      number: companyInfo.whatsapp2.number,
      message: "Hola Terse Limitada, me gustaría solicitar una cotización de uniformes.",
      desc: "Asesoría de prendas a medida y soporte técnico."
    }
  ];

  // Responsive animation configurations
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const panelVariants = {
    hidden: isMobile 
      ? { y: "100%", opacity: 1, scale: 1 } 
      : { y: 20, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: isMobile 
        ? { type: "spring" as const, damping: 28, stiffness: 260 }
        : { duration: 0.25, ease: "easeOut" as const }
    },
    exit: isMobile 
      ? { y: "100%", opacity: 1, scale: 1, transition: { type: "spring" as const, damping: 30, stiffness: 350 } } 
      : { y: 15, opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" as const } }
  };

  return (
    <>
      {/* Backdrop (Darkened blur background) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-all duration-300 sm:bg-transparent sm:backdrop-blur-none"
          />
        )}
      </AnimatePresence>

      {/* Main Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none sm:bottom-6 sm:right-6">
        {/* Contact Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="pointer-events-auto flex flex-col bg-white border border-gray-100 overflow-hidden shadow-2xl
                         /* Mobile: Slide-up bottom sheet */
                         fixed bottom-0 left-0 right-0 w-full rounded-t-3xl rounded-b-none border-t border-gray-200/50 max-h-[85vh]
                         /* Desktop (sm and up): Floating card above button */
                         sm:absolute sm:bottom-20 sm:right-0 sm:left-auto sm:w-80 sm:rounded-2xl sm:max-h-[500px]"
            >
              {/* Mobile Drag Indicator (Pill) */}
              <div className="w-12 h-1 bg-gray-300/60 rounded-full mx-auto my-2.5 sm:hidden shrink-0" />

              {/* Header */}
              <div className="bg-[#075e54] text-white p-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center font-bold text-white">
                      <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#075e54] rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Soporte Terse</h4>
                    <p className="text-xs text-white/80">Normalmente responde al instante</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
                  aria-label="Cerrar chat"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content Body */}
              <div className="p-4 bg-gray-50 flex flex-col gap-3 overflow-y-auto max-h-[calc(85vh-80px)] sm:max-h-[420px]">
                <p className="text-xs text-gray-500 mb-1 leading-normal">
                  ¿Con quién de nuestro equipo comercial deseas comunicarte?
                </p>

                {contacts.map((contact) => (
                  <a
                    key={contact.name}
                    href={getWhatsAppLink(contact.number, contact.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 bg-white border border-gray-100 p-4 sm:p-3.5 rounded-xl hover:border-[#25D366] hover:bg-gray-50/50 shadow-xs transition-all group"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-xs text-corporate-dark flex items-center gap-1.5">
                        {contact.name}
                        <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full inline-block animate-pulse" />
                      </span>
                      <span className="text-[10px] text-gray-400 mt-0.5 leading-normal">
                        {contact.desc}
                      </span>
                      <span className="text-xs text-[#25D366] font-semibold mt-1">
                        {contact.display}
                      </span>
                    </div>
                    <div className="bg-[#25D366]/10 p-2.5 sm:p-2 rounded-full text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                      <Send size={14} className="rotate-45" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing floating toggle button */}
        <AnimatePresence>
          {(!isOpen || !isMobile) && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto relative bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all cursor-pointer group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50 flex items-center justify-center shrink-0"
              aria-label="Abrir WhatsApp de soporte"
            >
              {/* Pulsing green outer ring (only when closed) */}
              {!isOpen && (
                <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
              )}
              <WhatsAppIcon className="w-8 h-8 relative z-10" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
