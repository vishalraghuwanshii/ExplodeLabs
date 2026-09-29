'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { 
  CheckCircle2, 
  Send, 
  Sparkles, 
  Film, 
  Clock, 
  ShieldCheck, 
  Layers, 
  HelpCircle,
  Sliders
} from 'lucide-react';

export function MotionProjectIntake() {
  const [format, setFormat] = useState('Short-Form Reels / Shorts / TikTok');
  const [productionModel, setProductionModel] = useState('Recurring Monthly Retainer (16 Videos/Mo - 4x/week)');
  const [selectedElements, setSelectedElements] = useState<string[]>([
    'Kinetic Typography & Hand-Timed Subtitles',
    'Custom Multi-Stem Sound Design & Foley',
    '2D Graphic Overlays & Motion Callouts'
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [phone, setPhone] = useState('');
  const [footageLink, setFootageLink] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const elementsList = [
    'Kinetic Typography & Hand-Timed Subtitles',
    'Custom Multi-Stem Sound Design & Foley',
    '2D Graphic Overlays & Motion Callouts',
    '3D Element Animation & Screen Tracking',
    'DaVinci Color Grading & Lighting Balance',
    'Long-Form to Short-Form Repurposing'
  ];

  const toggleElement = (el: string) => {
    if (selectedElements.includes(el)) {
      setSelectedElements(selectedElements.filter(item => item !== el));
    } else {
      setSelectedElements([...selectedElements, el]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim() || !email.trim()) {
      setErrorMsg('Please enter your name and work email.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: phone || 'Not provided',
          company: brand || 'Not provided',
          service: 'Motion Graphics & Video Post-Production',
          budget: productionModel,
          timeline: 'Immediate Production Sprint',
          message: `[MOTION GRAPHICS PROJECT INTAKE]
Format: ${format}
Production Model: ${productionModel}
Requirements: ${selectedElements.join(', ')}
Footage Link: ${footageLink || 'None provided'}
Project Details: ${notes || 'Standard scope review'}`
        })
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setErrorMsg('Something went wrong. Please reach out via email directly.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="project-intake" className="p-6 sm:p-8 bg-[#0c0c0c] border border-[#222222] rounded-2xl shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#ff5500]" />
          <span className="text-xs font-mono text-[#ff5500] font-semibold uppercase tracking-wider">
            Project Scope & Production Intake
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#f5f5f0] mb-2 tracking-tight">
          Start a Motion Graphics or Video Project
        </h3>
        <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-6">
          Tell us what you are looking to produce. We will review your requirements and recommend the appropriate production scope.
        </p>

        {isSuccess ? (
          <div className="p-6 bg-[#141414] border border-emerald-500/30 rounded-xl text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#f5f5f0]">Project Inquiry Received</h4>
            <p className="text-xs text-[#a1a1aa] leading-relaxed max-w-md mx-auto">
              Thank you, {name}. Our creative production lead is reviewing your project details. We will reach out to <strong className="text-white">{email}</strong> within 2 to 4 business hours.
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              variant="outline"
              size="sm"
              className="mt-2 text-xs"
            >
              Submit Another Inquiry
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Step 1: Content Format */}
            <div>
              <label className="block text-xs font-mono text-[#71717a] uppercase font-semibold mb-2">
                1. What type of video do you need produced?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Short-Form Reels / Shorts / TikTok',
                  '2D / 3D Animated Product Explainer',
                  'YouTube Long-Form with Motion',
                  'Paid Social Ad Creatives'
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFormat(item)}
                    className={`p-2.5 rounded-lg text-xs text-left font-mono transition-all flex items-center justify-between cursor-pointer ${
                      format === item
                        ? 'bg-[#181818] text-[#f5f5f0] border border-[#ff5500]/60 font-semibold'
                        : 'bg-[#121212] text-[#8e8e93] hover:text-[#f5f5f0] border border-[#1e1e1e]'
                    }`}
                  >
                    <span>{item}</span>
                    {format === item && <div className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Production Model */}
            <div>
              <label className="block text-xs font-mono text-[#71717a] uppercase font-semibold mb-2">
                2. Preferred Production Volume & Cadence
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Starter Retainer (8 Videos/Mo - 2x/week)',
                  'Growth Retainer (16 Videos/Mo - 4x/week)',
                  'Scale Retainer (30 Videos/Mo - Daily)',
                  'Single Custom Milestone Project'
                ].map((model) => (
                  <button
                    key={model}
                    type="button"
                    onClick={() => setProductionModel(model)}
                    className={`p-2.5 rounded-lg text-xs text-left font-mono transition-all flex items-center justify-between cursor-pointer ${
                      productionModel === model
                        ? 'bg-[#181818] text-[#f5f5f0] border border-[#ff5500]/60 font-semibold'
                        : 'bg-[#121212] text-[#8e8e93] hover:text-[#f5f5f0] border border-[#1e1e1e]'
                    }`}
                  >
                    <span className="truncate">{model}</span>
                    {productionModel === model && <div className="w-1.5 h-1.5 rounded-full bg-[#ff5500] shrink-0 ml-1" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Specific Post-Production Elements */}
            <div>
              <label className="block text-xs font-mono text-[#71717a] uppercase font-semibold mb-2">
                3. Post-Production Requirements
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {elementsList.map((el) => {
                  const isChecked = selectedElements.includes(el);
                  return (
                    <button
                      key={el}
                      type="button"
                      onClick={() => toggleElement(el)}
                      className={`p-2.5 rounded-lg text-[11px] text-left font-mono transition-all flex items-center gap-2 cursor-pointer ${
                        isChecked
                          ? 'bg-[#161616] text-[#f5f5f0] border border-[#ff5500]/40'
                          : 'bg-[#111111] text-[#71717a] hover:text-[#a1a1aa] border border-[#1c1c1c]'
                      }`}
                    >
                      <div className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                        isChecked ? 'bg-[#ff5500] text-white font-bold' : 'border border-[#333]'
                      }`}>
                        {isChecked && '✓'}
                      </div>
                      <span className="truncate">{el}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Contact & Scope Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-[11px] font-mono text-[#71717a] uppercase mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-[#121212] border border-[#202020] focus:border-[#ff5500] rounded-lg text-xs text-[#f5f5f0] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#71717a] uppercase mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-[#121212] border border-[#202020] focus:border-[#ff5500] rounded-lg text-xs text-[#f5f5f0] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#71717a] uppercase mb-1">Brand / Company / Channel</label>
                <input
                  type="text"
                  placeholder="e.g., HyperScale SaaS or @alexcreator"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full px-3 py-2 bg-[#121212] border border-[#202020] focus:border-[#ff5500] rounded-lg text-xs text-[#f5f5f0] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#71717a] uppercase mb-1">WhatsApp / Phone (Optional)</label>
                <input
                  type="text"
                  placeholder="+1 (555) 019-2834"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-[#121212] border border-[#202020] focus:border-[#ff5500] rounded-lg text-xs text-[#f5f5f0] outline-none transition-colors"
                />
              </div>
            </div>

            {/* Footage Link & Notes */}
            <div>
              <label className="block text-[11px] font-mono text-[#71717a] uppercase mb-1">
                Footage Link or Drive Folder (Optional)
              </label>
              <input
                type="url"
                placeholder="https://drive.google.com/... or Dropbox / WeTransfer link"
                value={footageLink}
                onChange={(e) => setFootageLink(e.target.value)}
                className="w-full px-3 py-2 bg-[#121212] border border-[#202020] focus:border-[#ff5500] rounded-lg text-xs text-[#f5f5f0] outline-none transition-colors font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#71717a] uppercase mb-1">
                Project Notes / Goals (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Tell us about your target style, desired turnaround, or publishing frequency..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 bg-[#121212] border border-[#202020] focus:border-[#ff5500] rounded-lg text-xs text-[#f5f5f0] outline-none transition-colors"
              />
            </div>

            {errorMsg && (
              <div className="p-2.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg">
                {errorMsg}
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSubmitting}
                className="w-full justify-center text-xs py-3 font-semibold shadow-lg shadow-[#ff5500]/20"
                withArrow
              >
                {isSubmitting ? 'Submitting Project Details...' : 'Start a Project →'}
              </Button>

              <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-[#71717a] font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Confidential • Mutual NDA Protected • Direct Scope Assessment</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
