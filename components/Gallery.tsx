'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const images = [
  'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEmGdf9GVnRYv0qw7hIsBJ7oxfkbIQ9lYXUcLKv6lcHK_lCb4k2aAK2G1wgInSp9Gibh_aW0wzvcb3AIQMniq-KO0kFS_7JlcQn0ygokKR6aMJGCnIzDuFKQmHhoDAt8--hj7ENDlusngIR=w1080-h1920-k-no'
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] text-teal-400 font-bold tracking-widest uppercase mb-4 block">Smile Gallery</span>
            <h2 className="text-[40px] lg:text-[50px] font-bold text-white mb-6">Real Results, Real Smiles</h2>
            <p className="text-lg text-white/50">
              Take a look at the beautiful transformations we&apos;ve achieved for our patients through our advanced dental treatments.
            </p>
          </motion.div>
        </div>

        {/* Single Image Presentation */}
        <div className="max-w-4xl mx-auto">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[2.5rem] group shadow-2xl border border-white/10"
            >
              <div className="aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] w-full relative">
                <Image
                  src={src}
                  alt={`Clinic view`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
