import { ServiceDeepDive } from './types';

export const pillar4DeepDives: Record<string, ServiceDeepDive> = {
  'b2b-outbound-sdr-and-lead-generation': {
    slug: 'b2b-outbound-sdr-and-lead-generation',
    metaTitle: 'B2B Outbound SDR & Cold Email Infrastructure | Explode Labs',
    metaDescription: 'Scale qualified enterprise pipeline. 50+ secondary domains, automated DMARC/DKIM/SPF DNS setups, Clay waterfall enrichment, and AI-personalized outreach.',
    primaryKeyword: 'b2b outbound lead generation',
    secondaryKeywords: [
      'cold email service provider',
      'clay waterfall data enrichment',
      'cold email infrastructure setup',
      'b2b sales appointment setting',
      'smartlead outbound agency'
    ],
    aeoDefinition:
      'B2B outbound sales development and cold email infrastructure is a specialized revenue system that protects your primary domain, enriches prospective accounts across multiple data sources, and delivers personalized outreach to book qualified discovery calls with key economic decision-makers.',
    executiveSummary:
      'Sending bulk cold outreach from your primary corporate domain puts your entire company email reputation at risk and burns valuable market accounts. Explode Labs builds dedicated multi-domain cold email architectures, spanning dozens of secondary domains, multi-source waterfall data enrichment, and personalized, trigger-based messaging, paired with dedicated SDR triage to book high-intent meetings directly on your sales team’s calendar.',
    fiveStagePipeline: [
      {
        title: 'Phase 1: Domain Fleet Setup & Technical DNS Authentication',
        duration: 'Weeks 1-2',
        description: 'We purchase 20 to 50+ isolated secondary domains (.com, .io, .co) on Google Workspace and Microsoft 365, configuring strict SPF, DKIM, DMARC, and custom tracking domains with SSL to completely shield your primary corporate domain.',
        deliverables: [
          '20 to 50 Dedicated Secondary Domains & Inboxes',
          'Strict SPF, DKIM & DMARC (p=quarantine) DNS Records',
          'Custom SSL-Encrypted Tracking Domains',
          'Primary Corporate Domain Reputation Isolation'
        ],
        tools: ['Google Workspace Admin', 'Microsoft 365', 'Cloudflare DNS', 'DMARC Report']
      },
      {
        title: 'Phase 2: Inbox Warmup & Gradual Volume Ramp',
        duration: 'Weeks 3-4',
        description: 'We connect all sending inboxes to automated peer-to-peer warmup networks to establish baseline sender trust with Google and Microsoft algorithms, monitoring inbox placement before active sending begins.',
        deliverables: [
          'Peer-to-Peer AI Warmup Network Integration',
          'Spam Folder Diagnostics & Inbox Placement Scoring',
          'Gradual Daily Send Ramp Schedule (max 30-40 emails/inbox/day)',
          'Automated Blacklist & Spam Trap Monitoring'
        ],
        tools: ['Smartlead.ai', 'Instantly.ai', 'Mail-Tester', 'GlockApps']
      },
      {
        title: 'Phase 3: Multi-Source Data Enrichment & Intent Triggers',
        duration: 'Weeks 5-6',
        description: 'We build automated Clay workflows that query 10+ data providers in sequential cascade, verifying work emails with ZeroBounce catch-all tests and filtering accounts by hiring, funding, and tech stack triggers.',
        deliverables: [
          'Automated Clay Waterfall Data Enrichment Workflow',
          'Triple-Layer Email Verification (ZeroBounce / Debounce)',
          'Real-Time Buying Trigger Filters (Hiring, Funding, Stack Changes)',
          'Detailed Ideal Customer Profile (ICP) & Job Title Matrix'
        ],
        tools: ['Clay.com', 'Apollo API', 'Prospeo', 'ZeroBounce', 'Clearbit']
      },
      {
        title: 'Phase 4: High-Relevance Copywriting & Cadence Design',
        duration: 'Weeks 7-8',
        description: 'We craft concise, 3-step value-first email cadences using dynamic personalization variables that reference actual company initiatives, recent milestones, and specific operational pain points.',
        deliverables: [
          '3-Step High-Converting Direct-Response Email Cadences',
          'Dynamic Personalization Variables for Account Relevance',
          'Value-First Lead Magnet Assets (Audits, Benchmarks, Calculators)',
          'Spam Trigger Word & Formatting Scrubbing'
        ],
        tools: ['OpenAI API', 'Smartlead Sequences', 'Notion', 'Grammarly']
      },
      {
        title: 'Phase 5: Dedicated SDR Triage & Calendar Booking',
        duration: 'Ongoing Retainer',
        description: 'Our trained sales development representatives monitor your master inbox continuously, handling inquiries within 15 minutes, qualifying leads against your BANT criteria, and scheduling meetings directly on your reps’ calendars.',
        deliverables: [
          'Dedicated Human SDR Inbox Management with Sub-15 Min SLA',
          'Objection Handling Playbook & Battlecards',
          'Pre-Vetted BANT Discovery Calls Booked in AE Calendars',
          'Weekly Pipeline Attribution & Sequence Split-Testing Reports'
        ],
        tools: ['Smartlead Master Inbox', 'HubSpot / Salesforce CRM', 'Calendly', 'Slack Alerts']
      }
    ],
    deliverablesMatrix: [
      {
        category: 'Infrastructure & Deliverability',
        items: ['20 to 50 Dedicated Secondary Domains', '100% SPF, DKIM, DMARC Authentication', 'Primary Domain 100% Protected'],
        standards: 'Inbox Placement Rate > 95% across Google & Outlook Inboxes'
      },
      {
        category: 'Data Accuracy',
        items: ['Waterfall Email Enrichment (Clay)', '100% ZeroBounce Catch-All Verified', 'Zero Spam-Trap Exposure'],
        standards: 'Strict Bounce Rate Targets < 2.0%'
      },
      {
        category: 'Pipeline Output',
        items: ['Targeted Qualified Discovery Calls per Month', 'Pre-Vetted BANT Enterprise Criteria', 'Seamless CRM Opportunity Sync'],
        standards: 'Zero Junk Leads / Students / Competitors'
      }
    ],
    toolDecisionTree: [
      {
        category: 'Cold Email Sending Infrastructure',
        primaryChoice: 'Smartlead.ai + Google Workspace / M365 Inboxes',
        alternatives: 'Sending bulk cold emails from HubSpot or Marketo (causes domain blacklisting)',
        rationale: 'Smartlead distributes outbound volume across dozens of isolated inboxes with randomized send delays, preventing email service providers from throttling accounts.'
      },
      {
        category: 'Data Enrichment Engine',
        primaryChoice: 'Clay.com Multi-Vendor Waterfall',
        alternatives: 'Buying static single-provider lead lists (ZoomInfo or Apollo alone)',
        rationale: 'Clay queries Apollo, Prospeo, Dropcontact, and Hunter sequentially, verifying contact data across multiple sources and achieving 30-40% higher data accuracy than single-vendor databases.'
      },
      {
        category: 'Email Verification',
        primaryChoice: 'ZeroBounce API',
        alternatives: 'Sending to unverified lists without MX checks',
        rationale: 'ZeroBounce detects spam traps, invalid MX records, and risky catch-all servers, keeping bounce rates reliably under 2%.'
      }
    ],
    comparisonMatrix: [
      {
        metric: 'Domain Protection',
        explodeLabs: 'Dedicated fleet of 30+ secondary domains with isolated DNS records',
        traditionalAgency: 'Sends bulk emails from client primary corporate domain (risks domain ban)',
        inHouseHire: 'Attempts cold outreach from standard marketing automation tool',
        freelancers: 'Free Gmail accounts with zero domain reputation'
      },
      {
        metric: 'Data Enrichment',
        explodeLabs: 'Clay 10-vendor waterfall + real-time intent trigger monitoring',
        traditionalAgency: 'Outdated static CSV lists downloaded months ago',
        inHouseHire: 'Manual LinkedIn Sales Navigator copy-pasting',
        freelancers: 'Scraped low-quality lists filled with spam traps'
      },
      {
        metric: 'Personalization Depth',
        explodeLabs: 'Dynamic prompts referencing actual company events, hiring, and tech stacks',
        traditionalAgency: 'Generic "Dear {First_Name}, I hope this email finds you well..."',
        inHouseHire: 'Slow manual research limited to 5-10 accounts per day',
        freelancers: 'Uncustomized bulk mass templates'
      },
      {
        metric: 'Lead Qualification',
        explodeLabs: 'Dedicated human SDRs triage replies and book qualified BANT meetings',
        traditionalAgency: 'Forwards raw unverified replies for your team to qualify',
        inHouseHire: 'High SDR hiring, onboarding, and turnover overhead',
        freelancers: 'No lead qualification or objection handling'
      }
    ],
    industryScenarios: [
      {
        industry: 'B2B Enterprise HR Tech',
        challenge: 'A Series A recruitment platform struggled with high SDR turnover and a 0.4% cold email response rate using static database exports.',
        architecture: 'Provisioned 35 secondary domains, built a Clay workflow identifying companies with 50+ open engineering roles, and deployed personalized trigger emails.',
        impactMetric: 'Booked 58 qualified enterprise discovery calls in 60 days, generating $1.6M in qualified new ARR pipeline.'
      },
      {
        industry: 'Commercial Fleet Telematics & IoT',
        challenge: 'A logistics IoT company needed to reach VP of Fleet Operations across 4,000 regional trucking companies with verified direct phone and email data.',
        architecture: 'Enriched Department of Transportation registration data through Clay, verified mobile numbers, and launched multi-channel email and phone cadences.',
        impactMetric: 'Achieved a 4.2% positive reply rate and closed $850,000 in fleet tracking contracts within 90 days.'
      },
      {
        industry: 'Healthcare Compliance SaaS',
        challenge: 'A HIPAA software provider was burning their primary domain sender reputation by blasting 10,000 emails per week from HubSpot.',
        architecture: 'Rehabilitated primary domain DNS, isolated all cold outbound into 40 secondary Google Workspace inboxes on Smartlead, and filtered for HIPAA hiring triggers.',
        impactMetric: 'Primary domain deliverability restored to 100%; generated 34 monthly qualified hospital demo meetings.'
      }
    ],
    detailedFaqs: [
      {
        question: 'Why do we need separate secondary domains for cold outbound email?',
        answer:
          'Sending high-volume cold outreach from your primary corporate domain carries an inherent risk of being flagged by spam filters (like Google Workspace and Microsoft 365). Using isolated secondary domains (e.g., `getcompany.com` or `companyhq.com`) ensures that your primary corporate domain email deliverability is 100% protected.'
      },
      {
        question: 'What is Clay waterfall data enrichment and why is it superior to single lead databases?',
        answer:
          'No single data provider (Apollo, ZoomInfo, Clearbit) has complete coverage. Clay waterfall enrichment queries multiple data vendors in sequential cascade: if Provider A does not have a verified email, it instantly queries Provider B, Provider C, and Provider D. This achieves 75-85% verified email coverage compared to 40-50% with single tools.'
      },
      {
        question: 'How many cold emails can be sent per day without landing in the spam folder?',
        answer:
          'To maintain flawless sender reputation, we limit individual email inboxes to a maximum of 30 to 40 outbound emails per day. To scale volume to 1,000+ daily emails, we distribute the volume across a fleet of 30 to 50 separate inboxes and domains.'
      },
      {
        question: 'What is DMARC and how does Explode Labs configure it?',
        answer:
          'DMARC (Domain-based Message Authentication, Reporting, and Conformance) is a critical security protocol that tells receiving servers how to handle emails that fail SPF or DKIM checks. We configure strict DMARC alignment (`p=quarantine` or `p=reject`) alongside custom tracking domains to pass 2024+ Google and Yahoo sender requirements.'
      },
      {
        question: 'How long does the domain warmup process take before sending active campaigns?',
        answer:
          'New domains and inboxes require 14 to 21 days of automated peer-to-peer warmup to establish baseline sender trust with Google and Microsoft algorithms before active sales sequencing begins.'
      },
      {
        question: 'Who handles incoming positive replies and objection handling?',
        answer:
          'Our trained human SDR team monitors your master inbox continuously, responding to questions and objections within 15 minutes and scheduling qualified discovery meetings directly into your sales reps\' calendars.'
      },
      {
        question: 'What qualification criteria do you use before passing a lead to our sales team?',
        answer:
          'We customize qualification against your specific BANT criteria (Budget, Authority, Need, Timeline), confirming company size, industry, current software stack, and decision-maker role before booking the call.'
      },
      {
        question: 'What is your pricing model for B2B Outbound Lead Generation?',
        answer:
          'We offer a transparent monthly infrastructure management and SDR retainer paired with milestone performance incentives per qualified meeting held.'
      }
    ]
  },

  'lifecycle-and-cold-email-infrastructure': {
    slug: 'lifecycle-and-cold-email-infrastructure',
    metaTitle: 'Lifecycle Email Marketing & Klaviyo Automation Agency | Explode Labs',
    metaDescription: 'Scale recurring revenue with automated Klaviyo e-commerce flows, customer lifecycle segmentation, high-converting HTML templates, and deliverability monitoring.',
    primaryKeyword: 'email marketing agency',
    secondaryKeywords: [
      'klaviyo flow agency',
      'ecommerce lifecycle email marketing',
      'email deliverability audit agency',
      'automated customer retention flows',
      'b2b lifecycle email marketing'
    ],
    aeoDefinition:
      'Lifecycle email marketing is an automated customer retention system that sends targeted, behavior-triggered messages across the customer journey (from welcome series and cart recovery to post-purchase education and win-backs - maximizing customer lifetime value, repeat order rates, and retention revenue.',
    executiveSummary:
      'Sending generic weekly email blasts to your entire list causes subscriber fatigue, high unsubscribe rates, and landing in the spam or promotions folder. Explode Labs builds intelligent, behavior-driven lifecycle email and SMS engines in Klaviyo and Customer.io that automatically nurture buyers based on real-time actions - turning your email channel into a predictable revenue driver that generates 30% to 45%+ of total store revenue.',
    fiveStagePipeline: [
      {
        title: 'Phase 1: Deliverability Audit & Technical DNS Setup',
        duration: 'Weeks 1-2',
        description: 'We audit your sending reputation, configure custom dedicated sending domains with DMARC and BIMI authentication, clean inactive contacts, and establish Google Postmaster baseline telemetry.',
        deliverables: [
          'Full Email Deliverability & Inbox Placement Audit',
          'Dedicated Sending Domain (DSD) & BIMI / VMC Certification',
          'List Hygiene & Inactive Subscriber Sunset Policy Setup',
          'Sender Score & Google Postmaster Tools Telemetry'
        ],
        tools: ['Klaviyo', 'Google Postmaster Tools', 'SendForensics', 'Cloudflare DNS']
      },
      {
        title: 'Phase 2: Core Revenue Flow Architecture',
        duration: 'Weeks 3-4',
        description: 'We design the 8 essential automated e-commerce lifecycle flows with multi-branch logic based on cart value, purchase history, and product category engagement.',
        deliverables: [
          'High-Converting Welcome Series (Non-Buyers vs Buyers)',
          'High-Intent Abandoned Cart & Checkout Recovery Flows',
          'Browse Abandonment & Price Drop Alerts',
          'Post-Purchase Cross-Sell, Care Guides & VIP Win-Back Sequences'
        ],
        tools: ['Klaviyo Flow Builder', 'Figma', 'Notion Lifecycle Architecture', 'Whimsical']
      },
      {
        title: 'Phase 3: Custom Dark-Mode Responsive HTML Design',
        duration: 'Weeks 5-6',
        description: 'We design and code mobile-first, dark-mode compatible responsive HTML email templates with dynamic product recommendation blocks and live countdown timers.',
        deliverables: [
          'Bespoke Mobile-First Responsive HTML Email Templates',
          'Dark-Mode Optimization & Contrast QA across Outlook, Apple & Gmail',
          'Dynamic Product Feed & Dynamic Discount Code Injection',
          'Interactive AMP & Live Countdown Timer Modules'
        ],
        tools: ['Litmus', 'Email on Acid', 'Figma', 'Klaviyo Template Studio']
      },
      {
        title: 'Phase 4: Predictive Customer Segmentation & Content Calendar',
        duration: 'Weeks 7-8',
        description: 'We build advanced Recency, Frequency, Monetary (RFM) customer segments and deploy a structured monthly promotional campaign calendar with predictive send-time optimization.',
        deliverables: [
          'Predictive RFM Segments (VIP Champions, At-Risk, Lapsed)',
          'Smart Send-Time & Predictive Churn Optimization',
          'Monthly High-Impact Campaign Strategy & Content Calendar',
          'A/B Subject Line & Preview Text Experimentation Framework'
        ],
        tools: ['Klaviyo Predictive Analytics', 'Shopify Plus API', 'Excel Cohort Models']
      },
      {
        title: 'Phase 5: Email + SMS Synergy & Ongoing LTV Optimization',
        duration: 'Ongoing Retainer',
        description: 'We synchronize email flows with transactional SMS (Attentive / Postscript), optimize customer repeat purchase rates, and attribute revenue directly in GA4 and Triple Whale.',
        deliverables: [
          'Email + SMS Omnichannel Trigger Orchestration',
          'Cohort Customer Lifetime Value (LTV) Retention Reports',
          'Continuous Flow A/B Testing & Offer Optimization',
          'Monthly Executive Email Revenue Attribution Audits'
        ],
        tools: ['Attentive / Postscript', 'Triple Whale', 'Looker Studio', 'BigQuery']
      }
    ],
    deliverablesMatrix: [
      {
        category: 'Flow Architecture',
        items: ['8+ Core Automated Lifecycle Flows', 'Multi-Tier Conditional Splits by Cart Value & Category', 'Dynamic Personalized Product Feeds'],
        standards: 'Email Flow Revenue > 20% of Total Store Gross Revenue'
      },
      {
        category: 'Design & Code Quality',
        items: ['Mobile-First Responsive HTML Code', '100% Dark-Mode Render Compatibility', 'Zero Image Clipping or Layout Breaks in Outlook'],
        standards: 'Verified across 50+ Email Clients via Litmus'
      },
      {
        category: 'Deliverability & Hygiene',
        items: ['Dedicated Sending Domain & DMARC Compliance', 'Automated Sunset Cleaning Flows', 'Inbox Placement Rate > 98%'],
        standards: 'Spam Complaint Rate < 0.05%, Open Rates > 45%'
      }
    ],
    toolDecisionTree: [
      {
        category: 'E-Commerce Lifecycle Platform',
        primaryChoice: 'Klaviyo (Shopify Plus native)',
        alternatives: 'Mailchimp, Constant Contact',
        rationale: 'Klaviyo provides deep bidirectional synchronization with Shopify, syncing catalog updates, real-time inventory levels, and customer purchase history instantly.'
      },
      {
        category: 'B2B & Product Lifecycle Platform',
        primaryChoice: 'Customer.io',
        alternatives: 'HubSpot Marketing Hub',
        rationale: 'Customer.io enables granular behavioral event tracking and webhook triggers based on in-app user actions for SaaS platforms.'
      },
      {
        category: 'Email Client Testing & QA',
        primaryChoice: 'Litmus / Email on Acid',
        alternatives: 'Sending test emails to personal Gmail accounts',
        rationale: 'Litmus renders email templates across 70+ client configurations, ensuring dark-mode styles and Outlook tables render without layout distortion.'
      }
    ],
    comparisonMatrix: [
      {
        metric: 'Flow Complexity & Logic',
        explodeLabs: 'Multi-branch conditional logic based on customer LTV, viewed SKUs, and cart size',
        traditionalAgency: '1 basic single-step abandoned cart email with a generic coupon',
        inHouseHire: 'Standard default Shopify notification templates',
        freelancers: 'Static unsegmented weekly email blasts'
      },
      {
        metric: 'Dark-Mode & HTML Compatibility',
        explodeLabs: 'Custom coded responsive HTML tested across Litmus on 70+ email clients',
        traditionalAgency: 'Single sliced image that displays blank when recipient images are blocked',
        inHouseHire: 'Basic drag-and-drop builder with broken mobile padding',
        freelancers: 'Inconsistent layout rendering across Outlook and mobile'
      },
      {
        metric: 'Deliverability & DNS',
        explodeLabs: 'Dedicated sending domains, DMARC, BIMI verification & automated sunsetting',
        traditionalAgency: 'Shares pooled IPs with low-quality senders, triggering spam filters',
        inHouseHire: 'Unaware of 2024 Google and Yahoo sender requirements',
        freelancers: 'No deliverability or DNS configuration knowledge'
      },
      {
        metric: 'Revenue Contribution',
        explodeLabs: 'Consistently drives 30 to 45%+ of total store revenue from automated flows',
        traditionalAgency: '5 to 10% revenue from occasional discount blasts',
        inHouseHire: 'Low flow optimization priority due to competing duties',
        freelancers: 'No revenue attribution tracking'
      }
    ],
    industryScenarios: [
      {
        industry: 'D2C High-Growth Apparel & Footwear',
        challenge: 'A Shopify Plus fashion brand was generating only 8% of revenue from email marketing with high unsubscribe rates from daily list blasts.',
        architecture: 'Rebuilt their entire Klaviyo architecture into 12 personalized flows, implemented predictive RFM segmentation, and introduced dark-mode HTML designs.',
        impactMetric: 'Email revenue increased from 8% to 36% of total store revenue ($1.4M annual lift); unsubscribe rate dropped by 65%.'
      },
      {
        industry: 'Subscription Health & Supplements',
        challenge: 'A nutritional supplement brand suffered from high customer churn after month 2 of their recurring subscription.',
        architecture: 'Created an educational post-purchase flow with dosage timing tips, community proof, and SMS upcoming refill alerts.',
        impactMetric: 'Subscription retention rate at month 6 increased by 38%, expanding average Customer Lifetime Value (LTV) from $94 to $168.'
      },
      {
        industry: 'B2B SaaS Developer Platform',
        challenge: 'A developer platform had a 72% free-trial drop-off rate because users did not install the SDK during day 1.',
        architecture: 'Deployed Customer.io behavioral event triggers sending interactive code tutorials when users hit specific error states in the CLI.',
        impactMetric: 'Free-trial to paid conversion increased from 4.2% to 11.8%, lifting new monthly recurring revenue (MRR) by $85,000.'
      }
    ],
    detailedFaqs: [
      {
        question: 'What percentage of total e-commerce revenue should come from email marketing?',
        answer:
          'A healthy e-commerce business should generate between 25% and 40%+ of total revenue from email marketing, with automated flows (Welcome, Abandoned Cart, Post-Purchase) accounting for at least 50% of all email revenue.'
      },
      {
        question: 'What are the 2024 Google and Yahoo email authentication requirements?',
        answer:
          'Google and Yahoo enforce strict requirements for bulk senders: custom dedicated sending domains, SPF and DKIM authentication, a valid DMARC policy, one-click unsubscribe headers, and maintaining spam complaint rates strictly below 0.10% (and never exceeding 0.30%).'
      },
      {
        question: 'What is BIMI (Brand Indicators for Message Identification) and how does it help?',
        answer:
          'BIMI displays your official verified corporate logo next to your emails in the Gmail and Apple Mail inbox. It requires a strict DMARC policy (`p=quarantine` or `p=reject`) and a Verified Mark Certificate (VMC), increasing email open rates and building brand trust.'
      },
      {
        question: 'How do you handle dark mode email rendering across Apple Mail and Outlook?',
        answer:
          'We use specialized CSS `@media (prefers-color-scheme: dark)` media queries, transparent PNGs with subtle white borders, and robust HTML table fallback structures to ensure that colors and text remain perfectly readable in both dark and light modes.'
      },
      {
        question: 'How do you segment an e-commerce email list without lowering campaign reach?',
        answer:
          'We use dynamic engagement segments (e.g. active in last 30, 60, or 90 days), purchase intent categories, and RFM status. Sending high-frequency campaigns to engaged segments protects sender reputation while targeted re-engagement campaigns recover lapsed buyers.'
      },
      {
        question: 'What is a Sunset Policy in email marketing and why is it crucial?',
        answer:
          'A Sunset Policy automatically identifies subscribers who have not opened or clicked an email in 90 to 180 days. It sends a final 2-part "Are you still interested?" re-permission campaign and un-subscribes un-responsive contacts to keep inbox deliverability high.'
      },
      {
        question: 'Do you manage both Email and SMS marketing together?',
        answer:
          'Yes. We orchestrate omnichannel workflows across Klaviyo, Attentive, and Postscript to ensure shoppers receive the right message on the right channel without receiving duplicate promotional messages.'
      },
      {
        question: 'What is your monthly management fee for Lifecycle & Klaviyo Email Marketing?',
        answer:
          'We offer tiered monthly retainers covering continuous flow optimization, campaign strategy, responsive HTML design, copywriting, and deliverability monitoring.'
      }
    ]
  }
};
