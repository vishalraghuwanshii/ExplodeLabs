'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Check, Sparkles, ShieldCheck, Clock, Mail, Phone, MessageSquare } from 'lucide-react';

export default function ContactPage() {
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

          {/* Right Column Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#0d0d0d] border border-[#242424] rounded-2xl shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
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
                      <select 
                        value={formData.countryCode} 
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="w-[100px] shrink-0 bg-[#141414] border border-[#282828] focus:border-[#ff5500] rounded-lg px-2 py-2.5 text-sm text-[#f5f5f0] outline-none cursor-pointer"
                      >
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+81">🇯🇵 +81</option>
                        <option value="+86">🇨🇳 +86</option>
                        <option value="+55">🇧🇷 +55</option>
                        <option value="+27">🇿🇦 +27</option>
                      </select>
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

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button 
                      type="submit" 
                      size="lg" 
                      variant="primary" 
                      className="flex-1" 
                      withArrow={!isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Project Inquiry'}
                    </Button>
                    <a 
                      href="https://calendly.com/explodelabs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide text-[#f5f5f0] bg-transparent hover:bg-[#1a1a1a] border border-[#333] hover:border-[#555] rounded-xl transition-all"
                    >
                      Book Calendly Meeting
                    </a>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#f5f5f0]">Project Inquiry Received</h3>
                  <p className="text-sm text-[#8e8e93] max-w-md mx-auto">
                    Thank you, <span className="text-[#f5f5f0]">{formData.name}</span>. A senior engineering architect has received your brief and will respond to <span className="text-[#f5f5f0]">{formData.email}</span> within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
