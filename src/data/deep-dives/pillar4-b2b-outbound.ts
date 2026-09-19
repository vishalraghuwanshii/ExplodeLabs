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
      '**B2B outbound SDR and cold email infrastructure** is the enterprise system of provisioning isolated secondary sending domains, configuring cryptographic DNS authentication (SPF/DKIM/DMARC), executing multi-source waterfall data enrichment (Clay), and automating AI-personalized multi-channel sales sequences that reliably book qualified discovery calls with economic decision-makers.',
    executiveSummary:
      'Blasting generic cold emails from your primary corporate domain lands your company on global spam blacklists and burns market reputation. Explode Labs builds dedicated multi-domain cold email architectures with 50+ warmed inboxes, multi-vendor data enrichment, and hyper-personalized trigger-based messaging that generates a consistent, predictable enterprise sales pipeline.',
    fiveStagePipeline: [
      {
        title: 'Phase 1: Domain Fleet Provisioning & DNS Cryptography',
        duration: 'Weeks 1-2',
        description: 'Purchase 20 to 50+ isolated secondary domains (.com, .io, .co) on Google Workspace or Microsoft 365 and configure strict SPF, DKIM, DMARC, and Custom Tracking Domains (CTD).',
        deliverables: [
          '20–50 Isolated Secondary Domains & Inboxes',
          'Strict SPF, DKIM & DMARC (p=quarantine) DNS Records',
          'Custom SSL-Encrypted Tracking Domains',
          'Primary Corporate Domain Reputation Shield'
        ],
        tools: ['Google Workspace Admin', 'Microsoft 365', 'Cloudflare DNS', 'DMARC Report']
      },
      {
        title: 'Phase 2: Algorithmic Inbox Warmup & Ramp Protocol',
        duration: 'Weeks 3-4',
        description: 'Connect sending inboxes to peer-to-peer AI warmup networks to build positive sender reputation, maintain 99%+ deliverability, and establish realistic sending schedules.',
        deliverables: [
          'Automated Peer-to-Peer Warmup Network Integration',
          'Spam Folder Rescue & Inbox Placement Scoring',
          'Gradual Daily Send Ramp Schedule (max 30 emails/inbox/day)',
          'Blacklist & Spam Trap Diagnostic Monitors'
        ],
        tools: ['Smartlead.ai', 'Instantly.ai', 'Mail-Tester', 'GlockApps']
      },
      {
        title: 'Phase 3: Clay Waterfall Data Enrichment & Signal Mining',
        duration: 'Weeks 5-6',
        description: 'Build automated Clay tables that enrich prospective leads across 10+ data vendors, verifying work emails via ZeroBounce and scraping real-time hiring/funding triggers.',
        deliverables: [
          'Automated Clay Waterfall Data Enrichment Workflow',
          'Triple-Layer Email Verification (ZeroBounce / Debounce)',
          'Hiring, Funding & Tech-Stack Intent Trigger Filters',
          'Exhaustive Persona & Job Title Segmentation'
        ],
        tools: ['Clay.com', 'Apollo API', 'Prospeo', 'ZeroBounce', 'Clearbit']
      },
      {
        title: 'Phase 4: AI Copywriting & Multi-Angle Sequencing',
        duration: 'Weeks 7-8',
        description: 'Draft concise, trigger-based 3-step email sequences with dynamic personalization variables (recent LinkedIn posts, company podcast mentions, open job listings).',
        deliverables: [
          '3-Step High-Converting Direct-Response Email Cadences',
          'Dynamic LLM Prompt Variables for 1-to-1 Personalization',
          'Value-Offer Lead Magnets (Proprietary Audits / Benchmarks)',
          'Spam Trigger Word & HTML Payload Scrubbing'
        ],
        tools: ['OpenAI API', 'Smartlead Sequences', 'Notion', 'Grammarly']
      },
      {
        title: 'Phase 5: Inbox Management, Objection Handling & Demo Booking',
        duration: 'Ongoing Retainer',
        description: 'Dedicated SDRs handle inbox replies within 15 minutes, answer objections, qualify leads against BANT criteria, and schedule calendar demos directly into your AE diaries.',
        deliverables: [
          'Dedicated Human SDR Inbox Management & Sub-15 Min Response SLA',
          'Objection Handling Playbook & Battlecards',
          'Qualified Discovery Calls Booked on Account Executive Calendars',
          'Weekly Pipeline Attribution & Sequence Split-Testing Reports'
        ],
        tools: ['Smartlead Master Inbox', 'HubSpot / Salesforce CRM', 'Calendly', 'Slack Alerts']
      }
    ],
    deliverablesMatrix: [
      {
        category: 'Infrastructure & Deliverability',
        items: ['20–50 Dedicated Secondary Domains', '100% SPF, DKIM, DMARC Authentication', 'Primary Domain 100% Protected'],
        standards: 'Inbox Placement Rate > 95% across Google & Outlook Inboxes'
      },
      {
        category: 'Data Accuracy',
        items: ['Waterfall Email Enrichment (Clay)', '100% ZeroBounce Catch-All Verified', 'Zero Spam-Trap Exposure'],
        standards: 'Bounce Rate < 2.0% Guaranteed'
      },
      {
        category: 'Pipeline Output',
        items: ['Guaranteed Qualified Discovery Calls per Month', 'Pre-Vetted BANT Enterprise Criteria', 'Seamless CRM Opportunity Sync'],
        standards: 'Zero Junk Leads / Students / Competitors'
      }
    ],
    toolDecisionTree: [
      {
        category: 'Cold Email Sending Infrastructure',
        primaryChoice: 'Smartlead.ai + Google Workspace / M365 Inboxes',
        alternatives: 'Sending bulk emails from HubSpot/Marketo (causes blacklisting)',
        rationale: 'Smartlead rotates sending across dozens of separate inboxes with randomized delays, preventing ESP spam throttling.'
      },
      {
        category: 'Data Enrichment Engine',
        primaryChoice: 'Clay.com Multi-Vendor Waterfall',
        alternatives: 'Buying static single-provider lead lists (ZoomInfo)',
        rationale: 'Clay queries Apollo, Prospeo, Dropcontact, and Hunter sequentially, finding verified emails that single databases miss with 40% higher accuracy.'
      },
      {
        category: 'Email Verification',
        primaryChoice: 'ZeroBounce API',
        alternatives: 'Sending without verification',
        rationale: 'ZeroBounce detects spam traps, invalid MX records, and risky catch-all servers, keeping bounce rates under 2%.'
      }
    ],
    comparisonMatrix: [
      {
        metric: 'Domain Protection',
        explodeLabs: 'Separate fleet of 30+ secondary domains with isolated DNS',
        traditionalAgency: 'Sends bulk emails from client primary corporate domain (fatal error)',
        inHouseHire: 'Uses standard marketing automation tool',
        freelancers: 'Free Gmail accounts'
      },
      {
        metric: 'Data Enrichment',
        explodeLabs: 'Clay 10-vendor waterfall + real-time intent trigger scraping',
        traditionalAgency: 'Outdated 2021 static CSV lists downloaded from Apollo',
        inHouseHire: 'Manual LinkedIn Sales Navigator copy-pasting',
        freelancers: 'Scraped scraped lists full of spam traps'
      },
      {
        metric: 'Personalization Depth',
        explodeLabs: 'Dynamic LLM prompts referencing recent company events, jobs & tech stack',
        traditionalAgency: 'Dear {First_Name}, I hope this email finds you well...',
        inHouseHire: 'Slow manual research (5 emails a day)',
        freelancers: 'Generic blast templates'
      },
      {
        metric: 'Lead Qualification',
        explodeLabs: 'Dedicated human SDRs triage replies and book qualified BANT demos',
        traditionalAgency: 'Dumps raw unverified replies into your inbox',
        inHouseHire: 'High turnover SDR hiring and training costs',
        freelancers: 'No lead qualification'
      }
    ],
    industryScenarios: [
      {
        industry: 'B2B Enterprise HR Tech',
        challenge: 'A Series A recruitment platform struggled with high SDR turnover and a 0.4% cold email response rate using static lists.',
        architecture: 'Provisioned 35 secondary domains, built a Clay workflow scraping companies with 50+ open engineering roles, and deployed personalized trigger emails.',
        impactMetric: 'Booked 58 qualified enterprise discovery calls in 60 days, generating $1.6M in qualified new ARR pipeline.'
      },
      {
        industry: 'Commercial Fleet Telematics & IoT',
        challenge: 'A logistics IoT firm needed to reach VP of Fleet Operations across 4,000 regional trucking companies with verified direct phone and email data.',
        architecture: 'Enriched DOT registration data through Clay, verified mobile numbers, and launched multi-channel email and phone outreach cadences.',
        impactMetric: 'Achieved a 4.2% reply rate and closed $850,000 in fleet tracking contracts within 90 days.'
      },
      {
        industry: 'Healthcare Compliance SaaS',
        challenge: 'A HIPAA software provider was burning their primary domain sender reputation by blasting 10,000 emails/week from HubSpot.',
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
          'No single data provider (Apollo, ZoomInfo, Clearbit) has complete coverage. Clay waterfall enrichment queries multiple data vendors in sequential cascade: if Provider A doesn not have a verified email, it instantly queries Provider B, Provider C, and Provider D. This achieves 75-85% verified email coverage compared to 40-50% with single tools.'
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
          'Our trained human SDR team monitors your master inbox continuously, responding to questions and objections within 15 minutes and scheduling qualified discovery meetings directly into your sales reps calendars.'
      },
      {
        question: 'What qualification criteria do you use before passing a lead to our sales team?',
        answer:
          'We customize qualification against your specific BANT criteria (Budget, Authority, Need, Timeline)—confirming company size, industry, current software stack, and decision-maker role before booking the call.'
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
      '**Lifecycle email marketing and automation** is the technical engineering and copywriting of behavioral email flows (Welcome Series, Abandoned Cart, Post-Purchase Upsell, Win-Back), predictive customer segmentation (RFM), dynamic product recommendation blocks, and dedicated IP deliverability monitoring to maximize Customer Lifetime Value (LTV).',
    executiveSummary:
      'Blasting unsegmented weekly email blasts to your entire list causes list burnout, high unsubscribe rates, and landing in the Gmail Promotions tab. Explode Labs builds behavioral automated lifecycle engines in Klaviyo and Customer.io that deliver personalized emails triggered by real-time shopper behavior, generating 30% to 45%+ of total store revenue on autopilot.',
    fiveStagePipeline: [
      {
        title: 'Phase 1: Deliverability, DNS & Dedicated IP Warming Audit',
        duration: 'Weeks 1-2',
        description: 'Audit sending reputation, configure custom dedicated sending domains with DMARC/BIMI records, clean inactive subscribers, and establish inbox placement benchmarks.',
        deliverables: [
          'Full Email Deliverability & Inbox Placement Audit',
          'Dedicated Sending Domain (DSD) & BIMI / VMC Certification',
          'List Hygiene & Inactive Subscriber Sunset Policy Setup',
          'Sender Score & Google Postmaster Tools Telemetry'
        ],
        tools: ['Klaviyo', 'Google Postmaster Tools', 'SendForensics', 'Cloudflare DNS']
      },
      {
        title: 'Phase 2: Core Revenue Flow Architecture & Wireframing',
        duration: 'Weeks 3-4',
        description: 'Design the 8 essential automated e-commerce lifecycle flows with multi-branch logic based on cart value, customer purchase history, and product category viewed.',
        deliverables: [
          'High-Converting Welcome Series (Non-Buyers vs Buyers)',
          'High-Intent Abandoned Cart & Checkout Recovery Flows',
          'Browse Abandonment & Price Drop Alerts',
          'Post-Purchase Cross-Sell, Care Guides & VIP Win-Back Sequences'
        ],
        tools: ['Klaviyo Flow Builder', 'Figma', 'Notion Lifecycle Architecture', 'Whimsical']
      },
      {
        title: 'Phase 3: Custom Responsive HTML / Dark-Mode Email Design',
        duration: 'Weeks 5-6',
        description: 'Design and code mobile-first, dark-mode compatible responsive HTML email templates with dynamic product recommendation blocks and live countdown timers.',
        deliverables: [
          'Bespoke Mobile-First Responsive HTML Email Templates',
          'Dark-Mode Optimization & Contrast QA across Outlook/Apple/Gmail',
          'Dynamic Product Feed & Dynamic Discount Code Injection',
          'Interactive AMP / Live Countdown Timer Modules'
        ],
        tools: ['Litmus', 'Email on Acid', 'Figma', 'Klaviyo Template Studio']
      },
      {
        title: 'Phase 4: Predictive RFM Segmentation & Campaign Calendar',
        duration: 'Weeks 7-8',
        description: 'Construct advanced Recency, Frequency, Monetary (RFM) customer segments and deploy a structured monthly promotional campaign calendar with predictive send-time optimization.',
        deliverables: [
          'Predictive RFM Segments (VIP Champions, At-Risk, Lapsed)',
          'Smart Send-Time & Predictive Churn Optimization',
          'Monthly High-Impact Campaign Strategy & Content Calendar',
          'A/B Subject Line & Preview Text Experimentation Framework'
        ],
        tools: ['Klaviyo Predictive Analytics', 'Shopify Plus API', 'Excel Cohort Models']
      },
      {
        title: 'Phase 5: Continuous Attribution, SMS Synergy & LTV Scaling',
        duration: 'Ongoing Retainer',
        description: 'Synchronize email flows with transactional SMS (Attentive / Postscript), optimize customer repeat purchase rates, and attribute revenue directly in GA4 and Triple Whale.',
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
        rationale: 'Klaviyo has deep bidirectional integration with Shopify, syncing catalog updates, real-time inventory, and customer purchase histories instantly.'
      },
      {
        category: 'B2B & Product Lifecycle Platform',
        primaryChoice: 'Customer.io',
        alternatives: 'HubSpot Marketing Hub',
        rationale: 'Customer.io allows complex behavioral event tracking and webhook triggers based on in-app SaaS user actions.'
      },
      {
        category: 'Email Client Testing & QA',
        primaryChoice: 'Litmus / Email on Acid',
        alternatives: 'Sending test emails to personal Gmail accounts',
        rationale: 'Litmus renders email templates across 70+ client configurations, verifying that dark-mode styles and Outlook tables render without breaking.'
      }
    ],
    comparisonMatrix: [
      {
        metric: 'Flow Complexity & Logic',
        explodeLabs: 'Multi-branch conditional logic based on customer LTV, viewed SKUs, and cart size',
        traditionalAgency: '1 basic single-step abandoned cart email with a coupon',
        inHouseHire: 'Standard default Shopify templates',
        freelancers: 'Static unsegmented email blasts'
      },
      {
        metric: 'Dark-Mode & HTML Compatibility',
        explodeLabs: 'Custom coded responsive HTML tested across Litmus on 70+ email clients',
        traditionalAgency: 'Single sliced image that displays blank when images are blocked',
        inHouseHire: 'Basic drag-and-drop builder with broken mobile padding',
        freelancers: 'Inconsistent rendering'
      },
      {
        metric: 'Deliverability & DNS',
        explodeLabs: 'Dedicated sending domains, DMARC, BIMI verification & automated sunsetting',
        traditionalAgency: 'Shares shared IP pools with spammers, landing in spam folders',
        inHouseHire: 'Unaware of 2024 Google/Yahoo sender requirements',
        freelancers: 'No deliverability knowledge'
      },
      {
        metric: 'Revenue Contribution',
        explodeLabs: 'Consistently drives 30–45%+ of total store revenue from automated flows',
        traditionalAgency: '5–10% revenue from occasional discount blasts',
        inHouseHire: 'Low flow optimization priority',
        freelancers: 'No revenue tracking'
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
