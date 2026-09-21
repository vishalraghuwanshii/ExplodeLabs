'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Check, Sparkles, ShieldCheck, Clock, Mail, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { CountrySelect } from '@/components/ui/CountrySelect';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'form' | 'calendar'>('form');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    company: '',
    service: 'SEO & Organic Growth',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Badge variant="orange" className="mb-3">
                Start a Conversation
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f5f5f0] mb-4">
                Let's scope your project.
              </h1>
              <p className="text-base text-[#8e8e93] leading-relaxed">
                Speak directly with a senior technical architect. We provide transparent estimates, architecture blueprints, and milestone proposals.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#a1a1aa]">
              <div className="flex items-center gap-3 p-4 bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl">
                <Clock className="w-5 h-5 text-[#ff5500] shrink-0" />
                <span>Initial technical feedback & scoping within 24 business hours.</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Mutual Non-Disclosure Agreement (NDA) available upon request.</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#181818]">
              <div className="text-xs font-mono uppercase text-[#71717a] mb-2 font-semibold">Prefer natural language?</div>
              <Button href="/architect" variant="outline" size="sm" withArrow>
                Use AI Project Architect
              </Button>
            </div>
          </div>

          {/* Right Column Form or Calendar */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#0d0d0d] border border-[#242424] rounded-2xl shadow-2xl">
              
              {!submitted && (
                <div className="flex p-1 bg-[#141414] border border-[#1e1e1e] rounded-xl mb-8">
                  <button 
                    onClick={() => setActiveTab('form')}
                    className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${activeTab === 'form' ? 'bg-[#242424] text-[#f5f5f0] shadow-md border border-[#333]' : 'text-[#71717a] hover:text-[#f5f5f0] border border-transparent'}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Submit Project Brief</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('calendar')}
                    className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${activeTab === 'calendar' ? 'bg-[#ff5500] text-white shadow-md border border-[#ff6600]' : 'text-[#71717a] hover:text-[#f5f5f0] border border-transparent'}`}
                  >
                    <Clock className="w-4 h-4" />
                    <span>Book Discovery Call</span>
                  </button>
                </div>
              )}

              {submitted ? (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f5f0]">Project Inquiry Received</h3>
                  <p className="text-sm text-[#8e8e93] max-w-md mx-auto">
                    Thank you, <span className="text-[#f5f5f0] font-semibold">{formData.name}</span>. A senior engineering architect will review your brief and respond within 24 hours.
                  </p>
                  
                  <div className="pt-8 border-t border-[#181818]">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5500]/10 text-[#ff5500] text-xs font-mono font-semibold mb-4 border border-[#ff5500]/20">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Want to skip the wait?</span>
                    </div>
                    <div className="p-6 sm:p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] rounded-2xl flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5500]/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-[#ff5500]/20 transition-all duration-500" />
                      <div className="w-12 h-12 rounded-full bg-[#1e1e1e] border border-[#333] flex items-center justify-center mb-4 text-[#ff5500] group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-[#f5f5f0] mb-2">Book your kickoff call right now</h4>
                      <p className="text-sm text-[#8e8e93] max-w-sm mb-6">Select a time on our calendar that works for you, and we'll jump straight into scoping your project.</p>
                      <a 
                        href="https://calendly.com/vishal-invokeiq/30min" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#ff5500] hover:bg-[#e04a00] rounded-xl transition-all shadow-[0_0_20px_rgba(255,85,0,0.3)] hover:shadow-[0_0_30px_rgba(255,85,0,0.5)] w-full sm:w-auto"
                      >
                        <span>Open Calendly</span>
                        <Sparkles className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : activeTab === 'calendar' ? (
                <div className="animate-in fade-in duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#f5f5f0] mb-2">Schedule your Discovery Call</h3>
                    <p className="text-sm text-[#8e8e93] max-w-sm mx-auto">Skip the project brief and jump straight into a call. We'll discuss your goals and build a custom milestone plan.</p>
                  </div>
                  
                  <div className="p-8 sm:p-12 bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-[#242424] rounded-2xl flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#ff5500]/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#ff5500]/10 transition-all duration-700" />
                    
                    <div className="relative z-10 w-16 h-16 rounded-full bg-[#1e1e1e] border border-[#333] flex items-center justify-center mb-6 text-[#f5f5f0] shadow-xl group-hover:-translate-y-1 transition-transform duration-300">
                      <Clock className="w-7 h-7" />
                    </div>
                    
                    <h4 className="relative z-10 text-xl font-bold text-[#f5f5f0] mb-3">Direct Calendar Access</h4>
                    <p className="relative z-10 text-sm text-[#8e8e93] max-w-sm mb-8">Click below to open our scheduling interface in a new window for the fastest, most reliable booking experience.</p>
                    
                    <a 
                      href="https://calendly.com/vishal-invokeiq/30min" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative z-10 inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-bold tracking-wide text-white bg-[#ff5500] hover:bg-[#e04a00] rounded-xl transition-all shadow-[0_0_25px_rgba(255,85,0,0.35)] hover:shadow-[0_0_40px_rgba(255,85,0,0.5)] w-full sm:w-auto"
                    >
                      <span>Book on Calendly</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#71717a] mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="David Vance"
                        className="w-full bg-[#141414] border border-[#282828] focus:border-[#ff5500] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f0] placeholder-[#5c5c60] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#71717a] mb-1.5 font-semibold">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@company.com"
                        className="w-full bg-[#141414] border border-[#282828] focus:border-[#ff5500] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f0] placeholder-[#5c5c60] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#71717a] mb-1.5 font-semibold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full bg-[#141414] border border-[#282828] focus:border-[#ff5500] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f0] placeholder-[#5c5c60] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#71717a] mb-1.5 font-semibold">
                        Target Service / Solution
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#141414] border border-[#282828] focus:border-[#ff5500] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f0] outline-none"
                      >
                        <option>SEO & Organic Growth</option>
                        <option>Paid Media & Advertising</option>
                        <option>Creative Media & Design</option>
                        <option>B2B Outbound & Lead Gen</option>
                        <option>Web & Software Engineering</option>
                        <option>AI & Automation</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#71717a] mb-1.5 font-semibold">
                      Phone Number (Optional)
                    </label>
                    <div className="flex gap-2">
                      <CountrySelect 
                        value={formData.countryCode}
                        onChange={(val) => setFormData({ ...formData, countryCode: val })}
                      />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="flex-1 bg-[#141414] border border-[#282828] focus:border-[#ff5500] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f0] placeholder-[#5c5c60] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#71717a] mb-1.5 font-semibold">
                      Project Details / Project Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you want to build or scale, key requirements, or existing tech stack..."
                      className="w-full bg-[#141414] border border-[#282828] focus:border-[#ff5500] rounded-lg px-3.5 py-2.5 text-sm text-[#f5f5f0] placeholder-[#5c5c60] outline-none resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    size="lg" 
                    variant="primary" 
                    className="w-full" 
                    withArrow={!isSubmitting}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Project Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
