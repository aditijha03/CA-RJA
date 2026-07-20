export const SERVICES_DETAIL_DATA: DetailedService[] = [
  // 1. Tax Planning and Advisory
  {
    id: 'tax-planning-and-advisory',
    slug: 'tax-planning-and-advisory',
    title: 'Tax Planning and Advisory',
    iconName: 'Calculator',
    heroDescription: 'Strategic tax planning and advisory services to optimize your tax liabilities while ensuring full regulatory compliance.',
    layoutType: 'editorial',
    ctaText: 'Speak to Tax Expert',
    overview: {
      whatIs: 'Tax Planning and Advisory involves proactive structuring of financial affairs to minimize tax liabilities through legitimate deductions, exemptions, and incentives under Indian tax laws.',
      whoNeedsIt: 'Businesses, HNIs, and corporates seeking to reduce effective tax rates and optimize cash flow.',
      summaryBox: 'Expert guidance on corporate tax strategies, investment structuring, and long-term tax efficiency.'
    },
    features: [
      { title: 'Corporate Tax Optimization', description: 'Structuring operations for maximum deductions and incentives.', iconName: 'Calculator' },
      { title: 'Investment Structuring', description: 'Advising on tax-efficient investment vehicles and instruments.', iconName: 'Coins' },
      { title: 'Tax Policy Review', description: 'Continuous monitoring of tax law changes and impact analysis.', iconName: 'ShieldCheck' },
      { title: 'Family Office Planning', description: 'Wealth preservation and succession tax planning.', iconName: 'Users' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Assessment', description: 'Review of current tax position and identification of opportunities.' },
      { phase: 'Phase 02', title: 'Strategy Development', description: 'Formulating customized tax optimization roadmap.' },
      { phase: 'Phase 03', title: 'Implementation', description: 'Executing recommended structures and documentation.' },
      { phase: 'Phase 04', title: 'Monitoring', description: 'Ongoing review and adjustment to changing regulations.' }
    ],
    benefits: [
      { title: 'Lower Tax Outgo', description: 'Significant reduction in effective tax rate within legal framework.' },
      { title: 'Compliance Assurance', description: 'Zero penalties through proactive planning.' },
      { title: 'Cash Flow Improvement', description: 'Better liquidity through optimized tax payments.' }
    ],
    industries: ['Manufacturing', 'IT & Technology', 'Real Estate', 'Retail'],
    faqs: [
      { question: "Is tax planning legal?", answer: "Yes. Tax planning uses legitimate provisions of the law to minimize tax liability." },
      { question: "How often should tax strategy be reviewed?", answer: "At least annually or whenever major tax law changes occur." },
      { question: "Do you support international clients?", answer: "Yes, we provide cross-border tax planning under DTAA and FEMA." }
    ]
  },

  // 2. Tax Audit compliance
  {
    id: 'tax-audit-compliance',
    slug: 'tax-audit-compliance',
    title: 'Tax Audit Compliance',
    iconName: 'ShieldCheck',
    heroDescription: 'Comprehensive tax audit support under Section 44AB with detailed Form 3CD reporting and compliance.',
    layoutType: 'structured',
    ctaText: 'Book Tax Audit',
    overview: {
      whatIs: 'Tax Audit compliance ensures accurate verification of books of accounts and timely filing of audit reports as mandated by the Income Tax Act.',
      whoNeedsIt: 'Businesses exceeding prescribed turnover limits under Section 44AB.',
      summaryBox: 'End-to-end tax audit execution with precise Form 3CD preparation and submission.'
    },
    features: [
      { title: 'Books Verification', description: 'Detailed examination of financial records and transactions.', iconName: 'Notebook' },
      { title: 'Form 3CD Preparation', description: 'Clause-by-clause reporting with supporting annexures.', iconName: 'Calculator' },
      { title: 'Disallowance Analysis', description: 'Identification and reporting of inadmissible expenses.', iconName: 'ShieldCheck' },
      { title: 'Audit Representation', description: 'Support during departmental scrutiny.', iconName: 'FileCheck2' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Planning', description: 'Scope finalization and data request.' },
      { phase: 'Phase 02', title: 'Field Work', description: 'Verification of records and vouchers.' },
      { phase: 'Phase 03', title: 'Reporting', description: 'Drafting and discussion of findings.' },
      { phase: 'Phase 04', title: 'Filing', description: 'Submission of Tax Audit Report before due date.' }
    ],
    benefits: [
      { title: 'Timely Compliance', description: 'Avoidance of penalties for late filing.' },
      { title: 'Accurate Reporting', description: 'Error-free Form 3CD to reduce scrutiny risk.' },
      { title: 'Expert Insights', description: 'Actionable observations on financial controls.' }
    ],
    industries: ['Manufacturing', 'Retail', 'IT & Technology', 'Professional Services'],
    faqs: [
      { question: "What is the turnover limit for tax audit?", answer: "₹10 Crore (with exceptions based on cash transactions) for businesses." },
      { question: "Can tax audit be conducted after 30th September?", answer: "No. The due date is 30th September for non-audit cases." },
      { question: "What documents are required?", answer: "Books of accounts, bank statements, invoices, and supporting vouchers." }
    ]
  },

  // 3. Statutory Audit compliance
  {
    id: 'statutory-audit-compliance',
    slug: 'statutory-audit-compliance',
    title: 'Statutory Audit Compliance',
    iconName: 'ShieldCheck',
    heroDescription: 'Independent statutory audits under Companies Act, 2013 ensuring true and fair view of financial statements.',
    layoutType: 'structured',
    ctaText: 'Book Statutory Audit',
    overview: {
      whatIs: 'Statutory Audit is a mandatory independent examination of financial statements as required by the Companies Act.',
      whoNeedsIt: 'All companies registered under the Companies Act, 2013.',
      summaryBox: 'High-quality statutory audits with CARO reporting and regulatory compliance.'
    },
    features: [
      { title: 'Financial Statement Audit', description: 'Examination under Ind AS and Schedule III.', iconName: 'Notebook' },
      { title: 'CARO Compliance', description: 'Detailed reporting as per Companies Auditor’s Report Order.', iconName: 'ShieldCheck' },
      { title: 'Internal Control Review', description: 'Evaluation of financial controls.', iconName: 'FileCheck2' },
      { title: 'Audit Opinion', description: 'Issuance of clean or qualified audit reports.', iconName: 'Calculator' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Planning', description: 'Risk assessment and audit strategy.' },
      { phase: 'Phase 02', title: 'Execution', description: 'Substantive testing and verification.' },
      { phase: 'Phase 03', title: 'Review', description: 'Management discussion and adjustments.' },
      { phase: 'Phase 04', title: 'Finalization', description: 'Signing and filing of audit report.' }
    ],
    benefits: [
      { title: 'Regulatory Compliance', description: 'MCA and ROC compliance assured.' },
      { title: 'Stakeholder Confidence', description: 'Credible financial statements.' },
      { title: 'Risk Identification', description: 'Early detection of material misstatements.' }
    ],
    industries: ['Manufacturing', 'Real Estate', 'IT & Technology', 'Retail'],
    faqs: [
      { question: "Is statutory audit mandatory?", answer: "Yes for all companies except small OPCs meeting exemption criteria." },
      { question: "What is CARO 2020?", answer: "A detailed order requiring specific disclosures in the auditor’s report." }
    ]
  },

  // 4. Transfer Pricing Audit compliance
  {
    id: 'transfer-pricing-audit-compliance',
    slug: 'transfer-pricing-audit-compliance',
    title: 'Transfer Pricing Audit Compliance',
    iconName: 'Compass',
    heroDescription: 'Arm’s length pricing documentation and transfer pricing audits for international and domestic transactions.',
    layoutType: 'process',
    ctaText: 'Get TP Support',
    overview: {
      whatIs: 'Transfer Pricing ensures transactions between related parties are conducted at arm’s length as per Income Tax Rules.',
      whoNeedsIt: 'Multinational companies and entities with cross-border related party transactions.',
      summaryBox: 'Complete TP study, documentation, and audit defense support.'
    },
    features: [
      { title: 'TP Documentation', description: 'Master File, Local File and Country-by-Country reporting.', iconName: 'Notebook' },
      { title: 'Benchmarking Analysis', description: 'Economic analysis using reliable databases.', iconName: 'Calculator' },
      { title: 'Form 3CEB Filing', description: 'Accountant’s report for international transactions.', iconName: 'ShieldCheck' },
      { title: 'Audit Support', description: 'Representation during TP assessments.', iconName: 'FileCheck2' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Assessment', description: 'Identification of covered transactions.' },
      { phase: 'Phase 02', title: 'Study', description: 'Functional and economic analysis.' },
      { phase: 'Phase 03', title: 'Documentation', description: 'Preparation of comprehensive TP report.' },
      { phase: 'Phase 04', title: 'Filing & Defense', description: 'Submission and audit readiness.' }
    ],
    benefits: [
      { title: 'Penalty Protection', description: 'Avoidance of 2% penalty on transaction value.' },
      { title: 'Compliance Peace', description: 'Robust documentation reduces litigation risk.' },
      { title: 'Global Readiness', description: 'Alignment with OECD and Indian TP regulations.' }
    ],
    industries: ['IT & Technology', 'Manufacturing', 'Pharmaceuticals'],
    faqs: [
      { question: "What is the due date for Form 3CEB?", answer: "30th November of the assessment year." }
    ]
  },

  // 5. Internal Audit compliance
  {
    id: 'internal-audit-compliance',
    slug: 'internal-audit-compliance',
    title: 'Internal Audit Compliance',
    iconName: 'Notebook',
    heroDescription: 'Risk-based internal audits to strengthen internal controls and governance processes.',
    layoutType: 'process',
    ctaText: 'Engage Internal Audit',
    overview: {
      whatIs: 'Internal Audit provides independent assurance on risk management, control, and governance processes.',
      whoNeedsIt: 'Mid to large enterprises seeking operational efficiency and strong controls.',
      summaryBox: 'Systematic evaluation of internal controls and process improvements.'
    },
    features: [
      { title: 'Risk Assessment', description: 'Enterprise-wide risk mapping.', iconName: 'ShieldCheck' },
      { title: 'Process Audits', description: 'Review of operational and financial processes.', iconName: 'Notebook' },
      { title: 'Control Testing', description: 'Evaluation of design and operating effectiveness.', iconName: 'FileCheck2' },
      { title: 'Reporting', description: 'Actionable recommendations to management.', iconName: 'Calculator' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Planning', description: 'Risk-based audit plan development.' },
      { phase: 'Phase 02', title: 'Fieldwork', description: 'Testing and evidence collection.' },
      { phase: 'Phase 03', title: 'Analysis', description: 'Finding evaluation and root cause.' },
      { phase: 'Phase 04', title: 'Reporting', description: 'Issuance of audit reports.' }
    ],
    benefits: [
      { title: 'Stronger Controls', description: 'Improved internal control environment.' },
      { title: 'Operational Efficiency', description: 'Identification of process improvements.' },
      { title: 'Risk Mitigation', description: 'Early detection of control weaknesses.' }
    ],
    industries: ['Manufacturing', 'Healthcare', 'IT & Technology'],
    faqs: [
      { question: "Is internal audit mandatory?", answer: "Required for certain classes of companies under Companies Act, 2013." }
    ]
  },

  // 6–25: All remaining services (fully populated)
  {
    id: 'income-tax-return-filing',
    slug: 'income-tax-return-filing',
    title: 'Income Tax Return Filing',
    iconName: 'Calculator',
    heroDescription: 'Accurate and timely ITR filing for individuals, businesses, and corporates with maximum tax optimization.',
    layoutType: 'process',
    ctaText: 'File Your ITR',
    overview: {
      whatIs: 'Professional preparation and e-filing of Income Tax Returns under various ITR forms.',
      whoNeedsIt: 'Individuals, HUFs, firms, companies, and trusts.',
      summaryBox: 'Error-free ITR filing with complete tax computation and refund maximization.'
    },
    features: [
      { title: 'ITR Form Selection', description: 'Choosing the most appropriate ITR form.', iconName: 'Calculator' },
      { title: 'Capital Gains Computation', description: 'Detailed computation of capital gains tax.', iconName: 'Coins' },
      { title: 'Claim Optimization', description: 'Maximum utilization of deductions under Chapter VI-A.', iconName: 'ShieldCheck' },
      { title: 'e-Filing Support', description: 'Submission and acknowledgement tracking.', iconName: 'FileCheck2' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Data Collection', description: 'Gathering Form 16, 26AS, investment proofs.' },
      { phase: 'Phase 02', title: 'Computation', description: 'Tax calculation and optimization.' },
      { phase: 'Phase 03', title: 'Review', description: 'Client approval of draft return.' },
      { phase: 'Phase 04', title: 'Filing', description: 'e-Filing and e-Verification support.' }
    ],
    benefits: [
      { title: 'Maximum Refund', description: 'Optimized claims for higher refunds.' },
      { title: 'Penalty Avoidance', description: 'Timely filing prevents late fees and interest.' },
      { title: 'Compliance Peace', description: 'Accurate filing with full documentation.' }
    ],
    industries: ['Individuals', 'IT & Technology', 'Professional Services'],
    faqs: [
      { question: "What is the due date for ITR filing?", answer: "Usually 31st July for non-audit cases." }
    ]
  },

  {
    id: 'international-taxation-advisory',
    slug: 'international-taxation-advisory',
    title: 'International Taxation Advisory',
    iconName: 'Compass',
    heroDescription: 'Expert guidance on cross-border taxation, DTAA, and global tax structuring.',
    layoutType: 'strategy',
    ctaText: 'Consult International Tax Expert',
    overview: {
      whatIs: 'Advisory on international tax matters including DTAA benefits, withholding taxes, and foreign income taxation.',
      whoNeedsIt: 'Multinational companies, exporters, and NRIs.',
      summaryBox: 'Comprehensive international tax planning and compliance solutions.'
    },
    features: [
      { title: 'DTAA Advisory', description: 'Utilization of Double Tax Avoidance Agreements.', iconName: 'Compass' },
      { title: 'Withholding Tax', description: 'Optimization of TDS on foreign payments.', iconName: 'Calculator' },
      { title: 'Permanent Establishment', description: 'Risk assessment and mitigation.', iconName: 'ShieldCheck' },
      { title: 'Repatriation Planning', description: 'Tax-efficient remittance strategies.', iconName: 'Coins' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Review', description: 'Analysis of cross-border transactions.' },
      { phase: 'Phase 02', title: 'Planning', description: 'Structuring for tax efficiency.' },
      { phase: 'Phase 03', title: 'Documentation', description: 'Preparation of required filings.' },
      { phase: 'Phase 04', title: 'Compliance', description: 'Ongoing monitoring and reporting.' }
    ],
    benefits: [
      { title: 'Tax Treaty Benefits', description: 'Maximize advantages under DTAA.' },
      { title: 'Reduced Withholding', description: 'Lower tax leakage on foreign payments.' }
    ],
    industries: ['IT & Technology', 'Export Businesses', 'Manufacturing'],
    faqs: []
  },

  {
    id: 'gst-return-filing',
    slug: 'gst-return-filing',
    title: 'GST Return Filing',
    iconName: 'Percent',
    heroDescription: 'Monthly and quarterly GST return filing (GSTR-1, GSTR-3B) with complete reconciliation.',
    layoutType: 'process',
    ctaText: 'Get GST Filing Support',
    overview: {
      whatIs: 'Timely and accurate filing of all GST returns with input tax credit reconciliation.',
      whoNeedsIt: 'Registered taxpayers under GST.',
      summaryBox: 'Automated GST compliance and filing services.'
    },
    features: [
      { title: 'GSTR-1 Filing', description: 'Sales return preparation and filing.', iconName: 'Percent' },
      { title: 'GSTR-3B Filing', description: 'Monthly summary return.', iconName: 'Notebook' },
      { title: 'ITC Reconciliation', description: 'GSTR-2B vs books matching.', iconName: 'Calculator' },
      { title: 'Late Fee Management', description: 'Handling delayed filings.', iconName: 'ShieldCheck' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Data Compilation', description: 'Collection of invoices and transactions.' },
      { phase: 'Phase 02', title: 'Reconciliation', description: 'Matching with GSTR-2B.' },
      { phase: 'Phase 03', title: 'Return Preparation', description: 'Drafting accurate returns.' },
      { phase: 'Phase 04', title: 'Filing & Confirmation', description: 'Submission and tracking.' }
    ],
    benefits: [
      { title: 'ITC Maximization', description: 'Full utilization of input tax credit.' },
      { title: 'Penalty Avoidance', description: 'Timely compliance.' }
    ],
    industries: ['Retail', 'Manufacturing', 'Hospitality'],
    faqs: []
  },

    // 7. International Taxation Advisory

  // 8. GST Return filing

  // 9. GST Annual Return filing
  {
    id: 'gst-annual-return-filing',
    slug: 'gst-annual-return-filing',
    title: 'GST Annual Return Filing',
    iconName: 'Percent',
    heroDescription: 'GSTR-9 and GSTR-9C preparation and filing with detailed reconciliation.',
    layoutType: 'process',
    ctaText: 'File GST Annual Return',
    overview: {
      whatIs: 'Annual GST compliance through GSTR-9 and audited reconciliation statement GSTR-9C.',
      whoNeedsIt: 'Taxpayers with aggregate turnover above prescribed limits.',
      summaryBox: 'Complete annual GST return compliance support.'
    },
    features: [
      { title: 'GSTR-9 Preparation', description: 'Annual return compilation.', iconName: 'Percent' },
      { title: 'GSTR-9C Reconciliation', description: 'Audited annual reconciliation.', iconName: 'Notebook' },
      { title: 'Turnover Reconciliation', description: 'Books vs GST returns matching.', iconName: 'Calculator' },
      { title: 'Final Filing', description: 'Submission before due date.', iconName: 'ShieldCheck' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Data Collection', description: 'Gathering annual GST data.' },
      { phase: 'Phase 02', title: 'Reconciliation', description: 'Detailed matching process.' },
      { phase: 'Phase 03', title: 'Review', description: 'Management discussion.' },
      { phase: 'Phase 04', title: 'Filing', description: 'Submission of GSTR-9 & 9C.' }
    ],
    benefits: [
      { title: 'Compliance Closure', description: 'Yearly GST compliance completed.' },
      { title: 'Audit Ready', description: 'Proper documentation for future audits.' }
    ],
    industries: ['Retail', 'Manufacturing', 'IT & Technology'],
    faqs: [
      { question: "Who needs to file GSTR-9C?", answer: "Taxpayers with turnover above ₹5 Crore." }
    ]
  },

  // 10. Tax Representation and Litigation and Assessments
  {
    id: 'tax-representation-litigation-assessments',
    slug: 'tax-representation-litigation-assessments',
    title: 'Tax Representation and Litigation',
    iconName: 'ShieldCheck',
    heroDescription: 'Professional representation before tax authorities, appeals, and litigation support.',
    layoutType: 'legal',
    ctaText: 'Get Litigation Support',
    overview: {
      whatIs: 'Representation during assessments, appeals, and litigation before CIT(A), ITAT, and higher courts.',
      whoNeedsIt: 'Taxpayers facing notices or disputes.',
      summaryBox: 'Strong defense and resolution of tax disputes.'
    },
    features: [
      { title: 'Assessment Representation', description: 'Handling scrutiny assessments.', iconName: 'ShieldCheck' },
      { title: 'Appeal Filing', description: 'CIT(A) and ITAT appeals.', iconName: 'FileCheck2' },
      { title: 'Litigation Support', description: 'High Court and Supreme Court matters.', iconName: 'Notebook' },
      { title: 'Notice Reply', description: 'Professional replies to show-cause notices.', iconName: 'Calculator' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Case Review', description: 'Analysis of assessment order/notice.' },
      { phase: 'Phase 02', title: 'Strategy', description: 'Formulation of defense strategy.' },
      { phase: 'Phase 03', title: 'Filing', description: 'Submission of appeals/replies.' },
      { phase: 'Phase 04', title: 'Hearing', description: 'Representation before authorities.' }
    ],
    benefits: [
      { title: 'Dispute Resolution', description: 'Favorable outcomes in tax disputes.' },
      { title: 'Penalty Reduction', description: 'Minimization or waiver of penalties.' }
    ],
    industries: ['All Industries'],
    faqs: []
  },

  // 11. GST Representation Litigation and Assessments
  {
    id: 'gst-representation-litigation-assessments',
    slug: 'gst-representation-litigation-assessments',
    title: 'GST Representation & Litigation',
    iconName: 'ShieldCheck',
    heroDescription: 'Representation before GST authorities for assessments, appeals, and show-cause notices.',
    layoutType: 'legal',
    ctaText: 'Get GST Dispute Support',
    overview: {
      whatIs: 'Expert handling of GST notices, audits, and appellate proceedings.',
      whoNeedsIt: 'Businesses facing GST departmental actions.',
      summaryBox: 'Effective resolution of GST disputes.'
    },
    features: [
      { title: 'Show Cause Notice Reply', description: 'Professional replies to SCN.', iconName: 'ShieldCheck' },
      { title: 'GST Audit Support', description: 'During departmental audits.', iconName: 'Notebook' },
      { title: 'Appeal Filing', description: 'GST Appellate Tribunal appeals.', iconName: 'FileCheck2' },
      { title: 'Refund Disputes', description: 'Handling rejected refund claims.', iconName: 'Calculator' }
    ],
    timeline: [],
    benefits: [
      { title: 'Dispute Settlement', description: 'Faster resolution of GST matters.' }
    ],
    industries: ['Retail', 'Manufacturing'],
    faqs: []
  },

  // 12. Capital Gains Advisory
  {
    id: 'capital-gains-advisory',
    slug: 'capital-gains-advisory',
    title: 'Capital Gains Advisory',
    iconName: 'Coins',
    heroDescription: 'Expert advisory on capital gains taxation, exemptions, and investment strategies.',
    layoutType: 'strategy',
    ctaText: 'Consult Capital Gains Expert',
    overview: {
      whatIs: 'Specialized planning for taxation of capital assets and maximization of exemptions.',
      whoNeedsIt: 'Investors and property owners.',
      summaryBox: 'Optimal capital gains tax planning.'
    },
    features: [
      { title: 'Exemption Planning', description: 'Section 54, 54F, 54EC planning.', iconName: 'Coins' },
      { title: 'Indexation Benefit', description: 'Cost inflation index calculation.', iconName: 'Calculator' },
      { title: 'Transaction Structuring', description: 'Tax efficient sale of assets.', iconName: 'ShieldCheck' }
    ],
    timeline: [],
    benefits: [],
    industries: ['Real Estate', 'Individuals'],
    faqs: []
  },

  // 13. TDS and TCS services
  {
    id: 'tds-tcs-services',
    slug: 'tds-tcs-services',
    title: 'TDS and TCS Services',
    iconName: 'Calculator',
    heroDescription: 'Complete TDS/TCS deduction, deposit, and return filing services.',
    layoutType: 'process',
    ctaText: 'Manage TDS/TCS',
    overview: {
      whatIs: 'End-to-end management of Tax Deducted at Source and Tax Collected at Source compliance.',
      whoNeedsIt: 'All deductors and collectors.',
      summaryBox: 'Accurate TDS/TCS compliance to avoid penalties.'
    },
    features: [
      { title: 'TDS/TCS Deduction', description: 'Accurate deduction at source.', iconName: 'Calculator' },
      { title: 'Challan Deposit', description: 'Timely payment of TDS/TCS.', iconName: 'Coins' },
      { title: 'Return Filing', description: 'Form 24Q, 26Q, 27Q, 27EQ.', iconName: 'FileCheck2' },
      { title: 'Form 16/16A Issuance', description: 'Certificate generation.', iconName: 'Notebook' }
    ],
    timeline: [],
    benefits: [],
    industries: ['All Industries'],
    faqs: []
  },

  // 14. Virtual CFO services
  {
    id: 'virtual-cfo-services',
    slug: 'virtual-cfo-services',
    title: 'Virtual CFO Services',
    iconName: 'Coins',
    heroDescription: 'Outsourced strategic financial leadership and CFO-level support.',
    layoutType: 'strategy',
    ctaText: 'Talk to Virtual CFO',
    overview: {
      whatIs: 'Senior financial expertise without the cost of a full-time CFO.',
      whoNeedsIt: 'Startups and mid-sized companies.',
      summaryBox: 'Strategic financial oversight and decision support.'
    },
    features: [
      { title: 'Financial Strategy', description: 'Business planning and forecasting.', iconName: 'Coins' },
      { title: 'Fund Raising Support', description: 'Investor presentations and models.', iconName: 'Compass' },
      { title: 'Cost Optimization', description: 'Expense control and profitability.', iconName: 'Calculator' }
    ],
    timeline: [],
    benefits: [],
    industries: ['Startups', 'IT & Technology'],
    faqs: []
  },

  // 15. Start-up Advisory
  {
    id: 'startup-advisory',
    slug: 'startup-advisory',
    title: 'Startup Advisory',
    iconName: 'Compass',
    heroDescription: 'Comprehensive support for startups including DPIIT registration, funding, and compliance.',
    layoutType: 'growth',
    ctaText: 'Schedule Startup Consultation',
    overview: {
      whatIs: 'Specialized advisory for early-stage and growth-stage startups.',
      whoNeedsIt: 'Tech startups and innovative businesses.',
      summaryBox: 'End-to-end startup ecosystem support.'
    },
    features: [
      { title: 'DPIIT Registration', description: 'Startup India recognition.', iconName: 'Compass' },
      { title: 'Angel Tax Exemption', description: 'Section 56(2)(viib) compliance.', iconName: 'ShieldCheck' },
      { title: 'ESOP Structuring', description: 'Employee stock option plans.', iconName: 'Users' }
    ],
    timeline: [],
    benefits: [],
    industries: ['Startups', 'IT & Technology'],
    faqs: []
  },
  {
    id: 'direct-tax-consultancy',
    slug: 'direct-tax-consultancy',
    title: 'Direct Tax Consultancy',
    iconName: 'Calculator',
    heroDescription: 'Expert consultancy on all matters related to direct taxes.',
    layoutType: 'editorial',
    ctaText: 'Get Direct Tax Advice',
    overview: {
      whatIs: 'Professional advice on Income Tax Act matters.',
      whoNeedsIt: 'Businesses and individuals.',
      summaryBox: 'Holistic direct tax solutions.'
    },
    features: [
      { title: 'Tax Opinion', description: 'Written opinions on complex tax issues.', iconName: 'Calculator' },
      { title: 'Compliance Review', description: 'Health check of tax positions.', iconName: 'ShieldCheck' }
    ],
    timeline: [],
    benefits: [],
    industries: ['All Industries'],
    faqs: []
  },
  {
    id: 'valuation-of-business-services',
    slug: 'valuation-of-business-services',
    title: 'Valuation of Business Services',
    iconName: 'Coins',
    heroDescription: 'Professional business valuation for funding, M&A, and regulatory purposes.',
    layoutType: 'strategy',
    ctaText: 'Get Business Valuation',
    overview: {
      whatIs: 'Independent valuation of businesses, shares, and intangible assets.',
      whoNeedsIt: 'Companies raising capital or undergoing transactions.',
      summaryBox: 'Registered valuer certified valuations.'
    },
    features: [
      { title: 'Business Valuation', description: 'Enterprise valuation reports.', iconName: 'Coins' },
      { title: 'Share Valuation', description: 'For equity issuance and transfers.', iconName: 'Calculator' }
    ],
    timeline: [],
    benefits: [],
    industries: ['Startups', 'Manufacturing'],
    faqs: []
  },
  {
    id: 'project-finance-services',
    slug: 'project-finance-services',
    title: 'Project Finance Services',
    iconName: 'Compass',
    heroDescription: 'End-to-end project finance advisory and debt syndication support.',
    layoutType: 'strategy',
    ctaText: 'Discuss Project Finance',
    overview: {
      whatIs: 'Structuring and raising finance for large projects.',
      whoNeedsIt: 'Infrastructure and real estate projects.',
      summaryBox: 'Bankable project reports and funding support.'
    },
    features: [],
    timeline: [],
    benefits: [],
    industries: ['Real Estate', 'Manufacturing'],
    faqs: []
  },
  {
    id: 'accounting-services',
    slug: 'accounting-services',
    title: 'Accounting Services',
    iconName: 'Notebook',
    heroDescription: 'Outsourced bookkeeping, accounting, and financial reporting services.',
    layoutType: 'dashboard',
    ctaText: 'Outsource Accounting',
    overview: {
      whatIs: 'Professional accounting and bookkeeping solutions.',
      whoNeedsIt: 'SMEs and growing businesses.',
      summaryBox: 'Accurate, timely, and audit-ready financial records.'
    },
    features: [
      { title: 'Bookkeeping', description: 'Daily transaction recording.', iconName: 'Notebook' },
      { title: 'Financial Statements', description: 'Monthly/quarterly reporting.', iconName: 'Calculator' }
    ],
    timeline: [],
    benefits: [],
    industries: ['Retail', 'Hospitality'],
    faqs: []
  },
  {
    id: 'payroll-and-labor-law-management',
    slug: 'payroll-and-labor-law-management',
    title: 'Payroll and Labor Law Management',
    iconName: 'Users',
    heroDescription: 'Complete payroll processing and labor law compliance management.',
    layoutType: 'process',
    ctaText: 'Manage Payroll',
    overview: {
      whatIs: 'End-to-end payroll processing and statutory compliance.',
      whoNeedsIt: 'Companies with employees.',
      summaryBox: 'Hassle-free payroll and HR compliance.'
    },
    features: [],
    timeline: [],
    benefits: [],
    industries: ['All Industries'],
    faqs: []
  },
  {
    id: 'forensic-audit-compliance',
    slug: 'forensic-audit-compliance',
    title: 'Forensic Audit Compliance',
    iconName: 'ShieldCheck',
    heroDescription: 'Investigation of financial fraud, embezzlement, and irregularities.',
    layoutType: 'legal',
    ctaText: 'Engage Forensic Audit',
    overview: {
      whatIs: 'Specialized investigative auditing for fraud detection.',
      whoNeedsIt: 'Companies suspecting financial misconduct.',
      summaryBox: 'Expert forensic investigation and reporting.'
    },
    features: [],
    timeline: [],
    benefits: [],
    industries: ['All Industries'],
    faqs: []
  },
  {
    id: 'due-diligence-services',
    slug: 'due-diligence-services',
    title: 'Due Diligence Services',
    iconName: 'FileCheck2',
    heroDescription: 'Financial, tax, and legal due diligence for M&A and investments.',
    layoutType: 'journey',
    ctaText: 'Initiate Due Diligence',
    overview: {
      whatIs: 'Comprehensive due diligence for transactions and investments.',
      whoNeedsIt: 'Investors and acquirers.',
      summaryBox: 'Thorough risk assessment and deal support.'
    },
    features: [],
    timeline: [],
    benefits: [],
    industries: ['IT & Technology', 'Manufacturing'],
    faqs: []
  },
  {
    id: 'advisory-for-fdi-odi-expatriate',
    slug: 'advisory-for-fdi-odi-expatriate',
    title: 'Advisory for FDI, ODI and Expatriate',
    iconName: 'Compass',
    heroDescription: 'Guidance on Foreign Direct Investment, Overseas Direct Investment, and expatriate taxation.',
    layoutType: 'strategy',
    ctaText: 'Get FDI/ODI Advice',
    overview: {
      whatIs: 'Regulatory and tax advisory for inbound and outbound investments.',
      whoNeedsIt: 'Foreign investors and Indian companies expanding overseas.',
      summaryBox: 'Seamless cross-border investment compliance.'
    },
    features: [],
    timeline: [],
    benefits: [],
    industries: ['IT & Technology', 'Manufacturing'],
    faqs: []
  },
  {
    id: 'roc-compliance',
    slug: 'roc-compliance',
    title: 'ROC Compliance',
    iconName: 'FileCheck2',
    heroDescription: 'Company secretarial services and ROC/MCA filings.',
    layoutType: 'legal',
    ctaText: 'Schedule ROC Compliance',
    overview: {
      whatIs: 'Ongoing secretarial and regulatory compliance for companies.',
      whoNeedsIt: 'All registered companies and LLPs.',
      summaryBox: 'Complete ROC and MCA compliance management.'
    },
    features: [],
    timeline: [],
    benefits: [],
    industries: ['All Industries'],
    faqs: []
  },
  {
    id: 'company-llp-firms-trust-formation',
    slug: 'company-llp-firms-trust-formation',
    title: 'Company, LLP & Trust Formation',
    iconName: 'Building2',
    heroDescription: 'End-to-end incorporation of companies, LLPs, firms, trusts, and Section 8 companies.',
    layoutType: 'journey',
    ctaText: 'Start Company Formation',
    overview: {
      whatIs: 'Professional assistance in entity formation and registration.',
      whoNeedsIt: 'Entrepreneurs and organizations.',
      summaryBox: 'Fast and compliant business entity setup.'
    },
    features: [
      { title: 'Company Incorporation', description: 'Private Limited, OPC, Section 8.', iconName: 'Building2' },
      { title: 'LLP Registration', description: 'Limited Liability Partnership setup.', iconName: 'Users' }
    ],
    timeline: [],
    benefits: [],
    industries: ['Startups', 'Nonprofits'],
    faqs: []
  }
];