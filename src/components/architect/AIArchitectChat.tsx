'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  FileText, 
  Check, 
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Target
} from 'lucide-react';
import { ProjectBrief } from '@/types';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export function AIArchitectChat() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('query') || '';

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);
  const [brief, setBrief] = useState<ProjectBrief | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialQuery) {
      setMessages([
        {
          id: '1',
          sender: 'ai',
          text: `Welcome to Explode Labs Project Architect. I analyzed your initial request: "${initialQuery}". Let me scope this out with you. What is your target timeline or preferred delivery date?`,
          timestamp: 'Just now'
        }
      ]);
      setStep(1);
    } else {
      setMessages([
        {
          id: '1',
          sender: 'ai',
          text: "Hello! I am the Explode Labs AI Project Architect. What are you looking to build, design, scale, or automate? (e.g. 'I need short-form video editing for TikTok', 'Build a Next.js web portal', or 'Design a brand identity and pitch deck.')",
          timestamp: 'Just now'
        }
      ]);
      setStep(0);
    }
  }, [initialQuery]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      {
        id: Date.now().toString(),
        sender: 'user',
        text: text.trim(),
        timestamp: 'Just now'
      }
    ];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      if (step === 0) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'ai',
            text: "Got it! What is your ideal timeframe, and what existing assets (Figma, raw footage, branding, or codebase) do you have ready?",
            timestamp: 'Just now'
          }
        ]);
        setStep(1);
      } else if (step === 1) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'ai',
            text: "Understood. What is your preferred engagement model (e.g. Quick Sprint, Dedicated Milestone, or Ongoing Retainer)?",
            timestamp: 'Just now'
          }
        ]);
        setStep(2);
      } else if (step === 2 || step > 2) {
        const generatedBrief: ProjectBrief = {
          id: `brief_${Math.floor(100000 + Math.random() * 900000)}`,
          projectName: 'Custom Digital Project Scoping',
          industry: 'Custom Domain / Digital Growth',
          primaryPillar: 'build',
          recommendedServices: [
            'Tailored Milestone Execution',
            'Senior Architectural Oversight',
            'Full Asset & Source Code Ownership'
          ],
          suggestedStack: ['Modern Frameworks', 'Tailwind / Figma', 'High-Speed Cloud Deployment'],
          keyDeliverables: [
            'Dedicated senior specialist assigned to project',
            'Weekly sprint milestone releases & transparent progress updates',
            'Zero technical debt, clean documentation, and full IP handover'
          ],
          estimatedTimeline: 'Flexible (Aligned to your deadline)',
          estimatedBudgetRange: 'Custom Proposal (Tiered to project scope)',
          complexityScore: 'Medium',
          dependencies: [
            'Initial discovery alignment & asset review',
            'Milestone deliverable sign-off'
          ],
          suggestedNextSteps: [
            'Direct discovery session with senior team lead',
            'Receive customized itemized milestone proposal'
          ],
          summary: 'A streamlined, high-quality digital engagement tailored to deliver maximum impact within your timeline and scope.'
        };

        setBrief(generatedBrief);

        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'ai',
            text: "I have synthesized your requirements and generated a tailored Project Architecture Brief below. You can review the scope breakdown and request your custom proposal.",
            timestamp: 'Just now'
          }
        ]);
        setStep(3);
      }
    }, 800);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitted(true);
  };

  const resetChat = () => {
    setMessages([
      {
        id: '1',
        sender: 'ai',
        text: "Hello! What are you looking to build, design, scale, or automate?",
        timestamp: 'Just now'
      }
    ]);
    setBrief(null);
    setStep(0);
    setIsSubmitted(false);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#1f1f1f]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#ff5500]/10 border border-[#ff5500]/25 flex items-center justify-center text-[#ff5500]">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#f5f5f0]">Explode Labs Project Architect</h1>
            <p className="text-xs text-[#8e8e93]">Guided technical scoping & custom proposal synthesis</p>
          </div>
        </div>
        <button
          onClick={resetChat}
          className="flex items-center gap-1.5 text-xs text-[#8e8e93] hover:text-[#f5f5f0] bg-[#141414] hover:bg-[#1a1a1a] border border-[#222222] px-3 py-1.5 rounded-md transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Session</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className={brief ? 'lg:col-span-5 flex flex-col h-[650px]' : 'lg:col-span-12 flex flex-col h-[550px]'}>
          <div className="flex-1 overflow-y-auto space-y-4 p-4 rounded-xl bg-[#0b0b0b] border border-[#1a1a1a]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'ai' && (
                  <div className="w-7 h-7 rounded bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500] shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-xl p-3.5 text-sm leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#ff5500] text-white shadow-sm shadow-[#ff5500]/20'
                      : 'bg-[#141414] text-[#e4e4e7] border border-[#222222]'
                  }`}
                >
                  {m.text}
                </div>
                {m.sender === 'user' && (
                  <div className="w-7 h-7 rounded bg-[#222222] flex items-center justify-center text-[#f5f5f0] shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-7 h-7 rounded bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500] shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-[#141414] border border-[#222222] rounded-xl px-4 py-3 text-xs text-[#8e8e93] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-bounce [animation-delay:0.4s]"></span>
                  <span className="ml-1">Scoping requirements...</span>
                </div>
              </div>
            )}
          </div>

          {step === 1 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {['Fast Turnaround (1-2 weeks)', 'Standard Sprint (3-6 weeks)', 'Assets Ready to Go', 'Starting from Scratch'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSend(opt)}
                  className="text-xs bg-[#121212] hover:bg-[#1c1c1c] text-[#a1a1aa] hover:text-[#f5f5f0] border border-[#222222] px-3 py-1.5 rounded-md transition-colors text-left"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {['Quick One-Off Milestone', 'Fixed-Scope Full Project', 'Monthly Growth Retainer'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSend(opt)}
                  className="text-xs bg-[#121212] hover:bg-[#1c1c1c] text-[#a1a1aa] hover:text-[#f5f5f0] border border-[#222222] px-3 py-1.5 rounded-md transition-colors text-left"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="mt-3 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your answer or project details..."
              className="flex-1 bg-[#0f0f0f] border border-[#262626] focus:border-[#ff5500] rounded-lg px-4 py-2.5 text-base sm:text-sm text-[#f5f5f0] placeholder-[#5c5c60] outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-2.5 bg-[#ff5500] hover:bg-[#e04a00] disabled:opacity-40 text-white rounded-lg transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {brief && (
          <div className="lg:col-span-7 bg-[#0d0d0d] border border-[#282828] rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative shadow-2xl animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#1f1f1f] mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <Badge variant="orange">Architecture Brief</Badge>
                    <span className="text-xs font-mono text-[#71717a]">ID: {brief.id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#f5f5f0] mt-1">{brief.projectName}</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#8e8e93]">Scoping Tier</div>
                  <div className="text-sm font-bold font-mono text-[#ff5500]">Custom Proposal</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121212] border border-[#1e1e1e] space-y-2 mb-6 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#8e8e93] flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Pricing Model</span>
                  </span>
                  <span className="font-semibold text-[#f5f5f0]">Custom Milestones / Retainer</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8e8e93] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Estimated Turnaround</span>
                  </span>
                  <span className="font-semibold text-[#f5f5f0]">{brief.estimatedTimeline}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6 text-xs">
                <div>
                  <div className="font-mono uppercase text-[#71717a] mb-2 font-semibold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Key Engagement Deliverables</span>
                  </div>
                  <div className="space-y-1.5">
                    {brief.keyDeliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2 text-[#a1a1aa]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1f1f1f]">
              {!isSubmitted ? (
                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <div className="text-xs text-[#8e8e93]">
                    Enter your email to receive a formal itemized proposal for this project:
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email..."
                      className="flex-1 bg-[#141414] border border-[#2a2a2a] rounded-lg px-3.5 py-2 text-base sm:text-xs text-[#f5f5f0] placeholder-[#5c5c60] outline-none"
                    />
                    <Button type="submit" size="sm" variant="primary">
                      Request Proposal
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-center">
                  <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mb-1">
                    <Check className="w-4 h-4" />
                    <span>Inquiry Received</span>
                  </div>
                  <p className="text-[11px] text-[#a1a1aa]">
                    Our team is preparing your custom proposal. We will contact <span className="text-[#f5f5f0]">{email}</span> shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
