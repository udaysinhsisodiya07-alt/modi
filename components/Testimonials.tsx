'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    text: "The best dental experience I've ever had. Dr. Modi is incredibly gentle and the clinic is absolutely beautiful and pristine. My root canal was completely painless.",
    rating: 5,
    image: 'https://picsum.photos/seed/user1/100/100',
  },
  {
    id: 2,
    name: 'Rahul Desai',
    text: "Got my smile designing done here. The attention to detail and use of advanced technology is impressive. Highly recommend Modi Dental Clinic to anyone in Ahmedabad.",
    rating: 5,
    image: 'https://picsum.photos/seed/user2/100/100',
  },
  {
    id: 3,
    name: 'Anita Patel',
    text: "Very professional team. They explained the entire implant procedure clearly and made sure I was comfortable throughout. The results are fantastic.",
    rating: 5,
    image: 'https://picsum.photos/seed/user3/100/100',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] text-teal-400 font-bold tracking-widest uppercase mb-4 block">Patient Stories</span>
            <h2 className="text-[40px] lg:text-[50px] font-bold text-white mb-6">Smiles Transformed</h2>
            <p className="text-lg text-white/50">
              Don&apos;t just take our word for it. Hear what our patients have to say about their experience at Modi Dental Clinic.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative group hover:bg-white/10 transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-white/10 group-hover:text-teal-400/30 transition-colors" />
              
              <div className="flex text-yellow-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-white/80 text-sm leading-relaxed mb-8 italic">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#050505]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-white/40 text-xs">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
