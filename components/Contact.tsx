'use client';

import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-[10px] text-teal-400 font-bold tracking-widest uppercase mb-4 block">Locate Us</span>
            <h2 className="text-[40px] lg:text-[50px] font-bold text-white mb-6">Find Your Way to a Better Smile</h2>
            <p className="text-lg text-white/50 mb-10">
              Conveniently located in Ahmedabad. We offer a relaxing environment and easy access for all your dental needs.
            </p>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Modi Dental Clinic</h4>
                  <p className="text-white/50 leading-relaxed text-sm">
                    Shilp Revanta, M106, Near Club O7 Road,<br />
                    Bodakdev, Shela,<br />
                    Ahmedabad, Gujarat 380015
                  </p>
                </div>
              </div>

              <Link
                href="https://www.google.com/maps/place/MODI+DENTAL+CLINIC/@23.034391,72.509193,15z/data=!4m2!3m1!1s0x395e84b66aeed317:0x659adbf34b18e848"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 w-full bg-teal-500 text-black px-6 py-4 rounded-xl font-bold hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/20"
              >
                <Navigation className="w-5 h-5" />
                Get Directions on Google Maps
              </Link>
            </div>
          </div>

          <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0a] relative group">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5991871217066!2d72.50661807531435!3d23.03850127916298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b66aeed317%3A0x659adbf34b18e848!2sMODI%20DENTAL%20CLINIC!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                className="absolute inset-0 z-0 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
