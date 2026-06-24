'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, MessageSquare, Send } from 'lucide-react';

export function Appointment() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="appointment" className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col lg:flex-row">
          
          {/* Left Side: Info */}
          <div className="lg:w-5/12 bg-white/5 text-white p-12 lg:p-16 relative overflow-hidden border-r border-white/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Book Your Visit</h3>
              <p className="text-white/50 mb-12 text-lg">
                Schedule your appointment online and take the first step towards a healthier, more beautiful smile.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-white">Opening Hours</h4>
                    <p className="text-white/50">Mon - Sat: 10:00 AM - 8:00 PM</p>
                    <p className="text-white/50">Sunday: Closed (Emergencies only)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-white">Direct Contact</h4>
                    <p className="text-white/50"><a href="tel:+919726755207" className="hover:text-teal-400 transition-colors">+91 97267 55207</a></p>
                    <p className="text-white/50"><a href="mailto:contact@modidental.com" className="hover:text-teal-400 transition-colors">contact@modidental.com</a></p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-xs text-white/40">
                  For immediate assistance or severe dental emergencies during off-hours, please call our emergency hotline directly.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-7/12 p-12 lg:p-16">
            <h3 className="text-2xl font-bold text-white mb-8">Request an Appointment</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-white/70 uppercase tracking-widest">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-white/40" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      required
                      className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white/10 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-white/70 uppercase tracking-widest">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="w-5 h-5 text-white/40" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white/10 transition-all"
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="date" className="text-xs font-bold text-white/70 uppercase tracking-widest">Preferred Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Calendar className="w-5 h-5 text-white/40" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      required
                      className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white/10 transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-bold text-white/70 uppercase tracking-widest">Service Required</label>
                  <select
                    id="service"
                    className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-[#0a0a0a] transition-all"
                  >
                    <option value="">General Consultation</option>
                    <option value="implants">Dental Implants</option>
                    <option value="rootcanal">Root Canal</option>
                    <option value="braces">Braces / Aligners</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="other">Other</option>
                  </select>
                </div>

              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-white/70 uppercase tracking-widest">Additional Notes</label>
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                    <MessageSquare className="w-5 h-5 text-white/40" />
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white/10 transition-all"
                    placeholder="Tell us about your dental concern..."
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-teal-500 text-black px-12 py-4 rounded-xl font-bold hover:bg-teal-400 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-teal-500/20"
                >
                  {formStatus === 'idle' && (
                    <>
                      Book Appointment
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                  {formStatus === 'submitting' && 'Sending Request...'}
                  {formStatus === 'success' && 'Request Sent Successfully!'}
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
