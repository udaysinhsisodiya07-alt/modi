'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white/50 py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/5 pb-12">
          
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-900 font-serif font-bold text-lg">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-white leading-tight">MODI DENTAL</span>
                <span className="text-[9px] uppercase tracking-widest text-teal-400 font-semibold">Clinic</span>
              </div>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Creating beautiful smiles with advanced dental care. Your trusted, modern, women-owned multi-speciality clinic in Ahmedabad.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-black transition-colors border border-white/10">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-black transition-colors border border-white/10">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-black transition-colors border border-white/10">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Clinic', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Why Choose Us', id: 'why-us' },
                { name: 'Smile Gallery', id: 'gallery' },
                { name: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={`#${item.id}`} className="text-sm hover:text-teal-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Our Services</h4>
            <ul className="space-y-3">
              {['Dental Implants', 'Root Canal Treatment', 'Smile Designing', 'Invisible Aligners', 'Teeth Whitening', 'Pediatric Dentistry'].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-sm hover:text-teal-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">Shilp Revanta, M106, Near Club O7 Road, Bodakdev, Shela, Ahmedabad, Gujarat 380015</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                <a href="tel:+919726755207" className="text-sm hover:text-teal-400 transition-colors">+91 97267 55207</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                <a href="mailto:contact@modidental.com" className="text-sm hover:text-teal-400 transition-colors">contact@modidental.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Modi Dental Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
