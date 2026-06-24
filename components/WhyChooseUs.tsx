'use client';

import { motion } from 'motion/react';
import { Microscope, Users, Stethoscope, PiggyBank, Clock, ClipboardCheck } from 'lucide-react';

const reasons = [
  {
    icon: Microscope,
    title: 'Advanced Technology',
    description: 'We utilize cutting-edge dental equipment, including 3D imaging and laser dentistry, for precise diagnostics and treatment.',
  },
  {
    icon: Users,
    title: 'Expert Specialists',
    description: 'Our team comprises highly trained and experienced MDS specialists dedicated to providing top-tier care in every discipline.',
  },
  {
    icon: Stethoscope,
    title: 'Painless Treatments',
    description: 'We prioritize your comfort with modern pain management techniques, ensuring a anxiety-free dental experience.',
  },
  {
    icon: PiggyBank,
    title: 'Affordable Pricing',
    description: 'Premium care should be accessible. We offer transparent pricing and flexible payment options without compromising on quality.',
  },
  {
    icon: Clock,
    title: 'Emergency Care',
    description: 'Dental emergencies can happen anytime. We are equipped to handle urgent cases promptly and effectively.',
  },
  {
    icon: ClipboardCheck,
    title: 'Personalized Plans',
    description: 'Every smile is unique. We develop customized treatment strategies tailored precisely to your specific needs and goals.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <span className="text-[10px] text-teal-400 font-bold tracking-widest uppercase mb-4 block">The Modi Difference</span>
              <h2 className="text-[40px] font-bold text-white mb-6">Why Choose Modi Dental Clinic?</h2>
              <p className="text-lg text-white/50 mb-8">
                We combine the luxury of a modern aesthetic clinic with the rigor of advanced medical science. Your comfort, safety, and satisfaction are our highest priorities.
              </p>
              
              <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-teal-400">4.9</div>
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {'★★★★★'}
                  </div>
                  <p className="text-xs font-bold text-white/80">Based on 160+ Google Reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-teal-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                    <p className="text-white/50 leading-relaxed text-sm">
                      {reason.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
