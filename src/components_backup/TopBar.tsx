import { Phone, Mail, MapPin } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export function TopBar() {
  return (
    <div className="bg-gradient-to-r from-corporate-dark via-[#1a202c] to-corporate-dark text-white/80 text-xs sm:text-sm py-3 z-50 relative border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          <a href="#ubicacion" className="flex items-center gap-2 font-medium tracking-wide hover:text-white transition-colors group">
            <div className="bg-white/5 p-1.5 rounded-full group-hover:bg-corporate-yellow/20 transition-colors">
              <MapPin size={14} className="text-corporate-yellow" />
            </div>
            <span>{companyInfo.address}, {companyInfo.commune}</span>
          </a>
          
          <div className="hidden md:block w-px h-4 bg-white/20"></div>

          <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 font-medium tracking-wide hover:text-white transition-colors group">
            <div className="bg-white/5 p-1.5 rounded-full group-hover:bg-corporate-yellow/20 transition-colors">
              <Mail size={14} className="text-corporate-yellow" />
            </div>
            <span>{companyInfo.email}</span>
          </a>
          
          <div className="hidden md:block w-px h-4 bg-white/20"></div>

          <a href={`https://wa.me/${companyInfo.whatsapp1.number}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium tracking-wide hover:text-white transition-colors group">
            <div className="bg-white/5 p-1.5 rounded-full group-hover:bg-corporate-yellow/20 transition-colors">
              <Phone size={14} className="text-corporate-yellow" />
            </div>
            <span>{companyInfo.whatsapp1.display}</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 items-center">
          <a href="#" className="bg-white/5 hover:bg-corporate-yellow hover:text-corporate-dark text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 shadow-sm" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" className="bg-white/5 hover:bg-corporate-yellow hover:text-corporate-dark text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 shadow-sm" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="bg-white/5 hover:bg-corporate-yellow hover:text-corporate-dark text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 shadow-sm" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>

      </div>
    </div>
  );
}
