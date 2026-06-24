'use client';

import { motion } from 'motion/react';
import { Star, ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#050505]">
      {/* Background Orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1 gap-2">
                  <span className="flex text-yellow-400">★★★★★</span>
                  <span className="text-xs font-medium text-white/80">4.9 Rating (160+ Reviews)</span>
                </div>
                <div className="bg-teal-400/10 border border-teal-400/20 px-3 py-1 rounded-full text-[10px] uppercase font-bold text-teal-400 tracking-wider">
                  Women-Owned Clinic
                </div>
              </div>
              
              <h1 className="text-[50px] sm:text-[60px] lg:text-[72px] font-bold text-white leading-[0.9] tracking-tighter mb-8">
                Creating Beautiful <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                  Smiles
                </span> With Care
              </h1>
              
              <p className="text-white/50 text-lg leading-relaxed max-w-xl mb-10">
                Experience world-class dentistry in the heart of Ahmedabad. We combine cutting-edge technology with personalized care to redefine your dental journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="#appointment"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-teal-500 text-black font-bold rounded-2xl shadow-lg shadow-teal-500/20 hover:bg-teal-400 transition-colors"
                >
                  Book Appointment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://wa.me/919726755207"
                  target="_blank"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 font-bold text-white rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5 text-green-500" />
                  WhatsApp Us
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Advanced</p>
                    <p className="text-xs text-white/50">Technology</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Expert</p>
                    <p className="text-xs text-white/50">Specialists</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative h-[500px] sm:h-[600px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEmGdf9GVnRYv0qw7hIsBJ7oxfkbIQ9lYXUcLKv6lcHK_lCb4k2aAK2G1wgInSp9Gibh_aW0wzvcb3AIQMniq-KO0kFS_7JlcQn0ygokKR6aMJGCnIzDuFKQmHhoDAt8--hj7ENDlusngIR=w1080-h1920-k-no"
              alt="Modi Dental Clinic Team"
              fill
              className="object-cover object-center"
              referrerPolicy="no-referrer"
              priority
            />
            {/* Glassmorphism overlay card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] overflow-hidden relative">
                      <Image
                        src={`https://picsum.photos/seed/patient${i}/100/100`}
                        alt="Patient"
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs font-medium text-white/80 mt-1">
                    Trusted by 5,000+ happy patients
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
