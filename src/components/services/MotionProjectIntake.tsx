'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Check
} from 'lucide-react';

export function MotionProjectIntake() {
  const [format, setFormat] = useState('Short-Form Reels / Shorts / TikTok');
  const [productionModel, setProductionModel] = useState('Growth Retainer (16 Videos / Month)');
  const [selectedElements, setSelectedElements] = useState<string[]>([
    'Kinetic Typography & Subtitles',
    'Custom Sound Design & Foley',
    '2D Graphic Overlays'
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

  const formatOptions = [
    'Short-Form Reels / Shorts / TikTok',
    '2D / 3D Animated Product Explainer',
    'YouTube Long-Form with Motion',
    'Paid Social Ad Creatives'
  ];

  const volumeOptions = [
    'Starter Retainer (8 Videos / Month)',
    'Growth Retainer (16 Videos / Month)',
    'Scale Retainer (30 Videos / Month)',
    'Single Custom Milestone Project'
  ];

  const elementsList = [
    'Kinetic Typography & Subtitles',
    'Custom Sound Design & Foley',
    '2D Graphic Overlays',
    '3D Animation & Tracking',
    'DaVinci Color Grading & Polish',
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
    <div id="project-intake" className="p-6 sm:p-8 bg-[#0c0c0c] border border-[#222222] rounded-2xl shadow-2xl relative overflow-hidden font-sans">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#ff5500]" />
          <span className="text-xs text-[#ff5500] font-medium tracking-wide">
            Project Intake & Scoping
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#f5f5f0] mb-2 tracking-tight">
          Start a Motion Graphics Project
        </h3>
        <p className="text-xs sm:text-sm text-[#8e8e93] leading-relaxed mb-6">
          Tell us about your project or video volume. We will review your requirements and follow up with a recommended plan.
        </p>

        {isSuccess ? (
          <div className="p-6 bg-[#141414] border border-emerald-500/30 rounded-xl text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#f5f5f0]">Project Details Received</h4>
            <p className="text-xs text-[#a1a1aa] leading-relaxed max-w-md mx-auto">
              Thank you, {name}. Our creative lead is reviewing your project requirements. We will reach out to <strong className="text-white">{email}</strong> within 2 to 4 business hours.
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
              <label className="block text-xs font-semibold text-[#a1a1aa] mb-2.5">
                1. What type of video do you need?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {formatOptions.map((item) => {
                  const isSelected = format === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFormat(item)}
                      className={`p-3 rounded-lg text-xs text-left transition-all flex items-center justify-between cursor-pointer border leading-snug ${
                        isSelected
                          ? 'bg-[#181818] text-[#f5f5f0] border-[#ff5500] font-medium shadow-sm'
                          : 'bg-[#111111] text-[#a1a1aa] hover:text-[#f5f5f0] border-[#1e1e1e] hover:border-[#2a2a2a]'
                      }`}
                    >
                      <span className="pr-1">{item}</span>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-[#ff5500] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Production Volume */}
            <div>
              <label className="block text-xs font-semibold text-[#a1a1aa] mb-2.5">
                2. Preferred production volume or cadence
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {volumeOptions.map((model) => {
                  const isSelected = productionModel === model;
                  return (
                    <button
                      key={model}
                      type="button"
                      onClick={() => setProductionModel(model)}
                      className={`p-3 rounded-lg text-xs text-left transition-all flex items-center justify-between cursor-pointer border leading-snug ${
                        isSelected
                          ? 'bg-[#181818] text-[#f5f5f0] border-[#ff5500] font-medium shadow-sm'
                          : 'bg-[#111111] text-[#a1a1aa] hover:text-[#f5f5f0] border-[#1e1e1e] hover:border-[#2a2a2a]'
                      }`}
                    >
                      <span className="pr-1">{model}</span>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-[#ff5500] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Specific Creative Elements */}
            <div>
              <label className="block text-xs font-semibold text-[#a1a1aa] mb-2.5">
                3. Creative elements needed
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {elementsList.map((el) => {
                  const isChecked = selectedElements.includes(el);
                  return (
                    <button
                      key={el}
                      type="button"
                      onClick={() => toggleElement(el)}
                      className={`p-2.5 rounded-lg text-xs text-left transition-all flex items-center gap-2.5 cursor-pointer border ${
                        isChecked
                          ? 'bg-[#161616] text-[#f5f5f0] border-[#ff5500]/60 font-medium'
                          : 'bg-[#111111] text-[#8e8e93] hover:text-[#a1a1aa] border-[#1e1e1e]'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] shrink-0 transition-colors ${
                        isChecked ? 'bg-[#ff5500] text-white font-bold' : 'border border-[#333]'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="leading-snug">{el}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#181818]">
              <div>
                <label className="block text-xs font-medium text-[#a1a1aa] mb-1.5">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#222222] focus:border-[#ff5500] rounded-lg text-xs text-[#f5f5f0] placeholder-[#555] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#a1a1aa] mb-1.5">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#222222] focus:border-[#ff5500] rounded-lg text-xs text-[#f5f5f0] placeholder-[#555] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#a1a1aa] mb-1.5">Brand / Company / Channel</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Media or @alexcreator"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#222222] focus:border-[#ff5500] rounded-lg text-xs text-[#f5f5f0] placeholder-[#555] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#a1a1aa] mb-1.5">Phone / WhatsApp (Optional)</label>
                <input
                  type="text"
                  placeholder="+1 (555) 019-2834"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#222222] focus:border-[#ff5500] rounded-lg text-xs text-[#f5f5f0] placeholder-[#555] outline-none transition-colors"
                />
              </div>
            </div>

            {/* Footage Link & Notes */}
            <div>
              <label className="block text-xs font-medium text-[#a1a1aa] mb-1.5">
                Footage Link or Drive Folder (Optional)
              </label>
              <input
                type="url"
                placeholder="Google Drive, Dropbox, or WeTransfer link"
                value={footageLink}
                onChange={(e) => setFootageLink(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#222222] focus:border-[#ff5500] rounded-lg text-xs text-[#f5f5f0] placeholder-[#555] outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#a1a1aa] mb-1.5">
                Project Notes / Style Goals (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Any references, target turnaround, or style preferences..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#121212] border border-[#222222] focus:border-[#ff5500] rounded-lg text-xs text-[#f5f5f0] placeholder-[#555] outline-none transition-colors"
              />
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg">
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
                {isSubmitting ? 'Submitting Details...' : 'Start a Project →'}
              </Button>

              <div className="flex items-center justify-center gap-2 mt-3 text-xs text-[#71717a]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Confidential • NDA Protected • Fast Response</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
