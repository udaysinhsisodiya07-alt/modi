'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919726755207"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl hover:shadow-[#25D366]/30 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 bg-white text-slate-800 text-sm font-medium px-4 py-2 rounded-xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 origin-bottom-right scale-95 group-hover:scale-100">
        Chat with us
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-slate-100 transform rotate-45"></div>
      </div>
    </a>
  );
}
