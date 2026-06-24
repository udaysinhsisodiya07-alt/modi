'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements to restore your smile and confidence.',
    image: 'https://picsum.photos/seed/implants/800/600',
  },
  {
    title: 'Root Canal Treatment',
    description: 'Painless endodontic therapy to save infected teeth and eliminate severe toothache.',
    image: 'https://picsum.photos/seed/rootcanal/800/600',
  },
  {
    title: 'Smile Designing',
    description: 'Customized cosmetic treatments to give you the perfect, harmonious smile you deserve.',
    image: 'https://picsum.photos/seed/smile/800/600',
  },
  {
    title: 'Invisible Aligners',
    description: 'Clear, removable aligners for discreet and comfortable orthodontic treatment.',
    image: 'https://picsum.photos/seed/aligners/800/600',
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional whitening solutions for a significantly brighter and more radiant smile.',
    image: 'https://picsum.photos/seed/whitening/800/600',
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Gentle and fun dental care designed specifically for children of all ages.',
    image: 'https://picsum.photos/seed/pediatric/800/600',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-400 font-bold tracking-widest uppercase text-[10px] mb-4 block">Our Specialties</span>
            <h2 className="text-[40px] lg:text-[50px] font-bold text-white mb-6">Comprehensive Dental Care</h2>
            <p className="text-lg text-white/50">
              We offer a full spectrum of advanced dental treatments under one roof, using state-of-the-art technology to ensure optimal outcomes.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden border-b border-white/10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/50 mb-6 line-clamp-2 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="#appointment"
                  className="inline-flex items-center text-teal-400 font-bold text-sm group-hover:text-teal-300 transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <Link
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-teal-400 transition-all"
            >
              View All Services
            </Link>
        </div>
      </div>
    </section>
  );
}
