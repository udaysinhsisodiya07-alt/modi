'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Award, Heart, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden group"
          >
            <Image
              src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGSiwa_ypd7jBNH_0tjKh1s1xbQLNVa-xraMlI03k_i_CH6EgUcGhVhByc29pyWmYB2nPPpBbLDvBe4fzQIpB5ivMPq00nuZw1fBuWUtnFhTSNOMgJLpY0WcN3I08JNMrX3Vvoa2g=w1080-h1920-k-no"
              alt="Dr. Modi"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl font-bold text-white mb-2">Dr. Modi</h3>
              <p className="text-teal-400 font-bold text-xs uppercase tracking-widest">Chief Dental Surgeon</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 mb-6">
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">About Our Clinic</span>
            </div>
            
            <h2 className="text-[40px] lg:text-[50px] font-bold text-white leading-tight mb-6">
              Redefining Dental Care with Compassion and Precision.
            </h2>
            
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              At Modi Dental Clinic, we believe a healthy smile is the foundation of overall well-being. As a women-owned, multi-speciality clinic in Ahmedabad, we combine advanced technology with a gentle, personalized approach to ensure every patient feels comfortable and confident.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-500/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Expert Team</h4>
                  <p className="text-xs text-white/50">Highly qualified specialists for comprehensive care.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Modern Tech</h4>
                  <p className="text-xs text-white/50">Equipped with the latest dental technology.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Gentle Care</h4>
                  <p className="text-xs text-white/50">Painless treatments in a relaxing environment.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <p className="italic text-white/80 font-serif text-lg">
                &quot;Our mission is to provide accessible, high-quality dental care while empowering our patients to maintain lifelong oral health.&quot;
              </p>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
