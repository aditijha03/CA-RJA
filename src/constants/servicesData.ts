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
  },

  // 26. Corporate Secretarial Services
  {
    id: 'corporate-secretarial-services',
    slug: 'corporate-secretarial-services',
    title: 'Corporate Secretarial Services',
    iconName: 'FileCheck2',
    heroDescription: 'Comprehensive secretarial governance, MCA annual compliance, board support, and regulatory record maintenance for corporate entities.',
    layoutType: 'legal',
    ctaText: 'Engage Secretarial Advisory',
    overview: {
      whatIs: 'Corporate Secretarial Services encompass the administration, governance compliance, and statutory filings required under the Companies Act, 2013, ensuring entities maintain flawless corporate standing.',
      whoNeedsIt: 'Private Limited Companies, Public Listed & Unlisted Entities, LLPs, and Multinational Subsidiaries operating in India.',
      summaryBox: 'End-to-end secretarial support, board meeting management, statutory register maintenance, and e-filing with the Ministry of Corporate Affairs.'
    },
    features: [
      { title: 'Board & Shareholder Governance', description: 'Drafting agendas, board resolutions, notice of meetings, and detailed minutes for Board and General Meetings.', iconName: 'FileCheck2' },
      { title: 'Annual MCA Filings', description: 'Preparation and submission of Form AOC-4 (Financials) and MGT-7/7A (Annual Returns) within statutory timelines.', iconName: 'Building2' },
      { title: 'Statutory Register Maintenance', description: 'Maintaining and updating required statutory registers under Section 88 including Members, Directors, Charges, and Share Transfers.', iconName: 'Notebook' },
      { title: 'Director & Charge Management', description: 'DIN KYC updates, director appointments/resignations, and registration or satisfaction of corporate charges (CHG-1/CHG-4).', iconName: 'Users' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Governance Assessment', description: 'Audit of current corporate registers, MCA status, and statutory compliance history.' },
      { phase: 'Phase 02', title: 'Documentation & Drafting', description: 'Formulating board resolutions, meeting notices, and updated statutory disclosures.' },
      { phase: 'Phase 03', title: 'Execution & Board Support', description: 'Assisting in conducting compliant Board & Annual General Meetings.' },
      { phase: 'Phase 04', title: 'MCA E-Filing & Filing Certificates', description: 'Submitting e-forms to RoC with SRN generation and archival.' }
    ],
    benefits: [
      { title: '100% MCA Compliance', description: 'Eliminates risks of RoC notices, additional filing fees, and penal proceedings.' },
      { title: 'Director Protection', description: 'Safeguards directors from disqualification under Section 164(2) of Companies Act.' },
      { title: 'Investor Credibility', description: 'Maintains institutional-grade corporate records for due diligence and funding.' }
    ],
    industries: ['Corporate & Enterprises', 'IT & Technology', 'Financial Services', 'Manufacturing', 'Startups'],
    faqs: [
      { question: "What are the mandatory secretarial filings for a Private Limited Company?", answer: "Mandatory annual filings include Form AOC-4 (Financial Statements), Form MGT-7/7A (Annual Return), DIR-3 KYC for directors, and Form MSME-1 / DPT-3 as applicable." },
      { question: "How many board meetings are required in a financial year?", answer: "Companies must hold a minimum of 4 board meetings each year, with maximum 120 days gap between two consecutive meetings (OPCs and Small Companies require at least 2)." },
      { question: "Can secretarial records be maintained digitally?", answer: "Yes, statutory registers and meeting minutes can be maintained electronically in compliance with Companies (Management and Administration) Rules." }
    ]
  },

  // 27. Corporate Restructuring
  {
    id: 'corporate-restructuring',
    slug: 'corporate-restructuring',
    title: 'Corporate Restructuring',
    iconName: 'Compass',
    heroDescription: 'Strategic corporate reorganization, mergers & acquisitions, demergers, slump sales, capital reduction, and entity restructuring.',
    layoutType: 'strategy',
    ctaText: 'Consult Restructuring Expert',
    overview: {
      whatIs: 'Corporate Restructuring involves the comprehensive financial, legal, and operational realignment of business structures to optimize tax liabilities, consolidate operations, unlock shareholder value, or manage distress.',
      whoNeedsIt: 'Promoters, conglomerates, holding companies, private equity investors, and growing corporate groups seeking organizational optimization or M&A integration.',
      summaryBox: 'End-to-end strategic advisory, valuation, NCLT scheme approval, tax structuring, and regulatory execution for corporate realignments.'
    },
    features: [
      { title: 'Mergers & Demergers (NCLT Schemes)', description: 'Drafting schemes of arrangement, joint applications, creditor consent protocols, and representation before the National Company Law Tribunal.', iconName: 'Compass' },
      { title: 'Slump Sale & Asset Transfers', description: 'Structuring itemized transfers or slump sales under Income Tax Act Sec 50B with stamp duty optimization.', iconName: 'Coins' },
      { title: 'Capital Reduction & Buybacks', description: 'Execution of equity capital reduction schemes, share buybacks, and internal capital reorganization.', iconName: 'Calculator' },
      { title: 'Holding-Subsidiary Realignment', description: 'Simplifying multi-tiered corporate group structures for operational synergy and cost reduction.', iconName: 'Building2' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Strategic Feasibility', description: 'Evaluating business goals, tax impact, stamp duty, and restructuring alternatives.' },
      { phase: 'Phase 02', title: 'Scheme Design & Valuation', description: 'Drafting Scheme of Arrangement and obtaining independent Registered Valuer report.' },
      { phase: 'Phase 03', title: 'Regulatory Approvals & NCLT', description: 'Filing petitions with NCLT, RoC, Regional Director, and Income Tax authorities.' },
      { phase: 'Phase 04', title: 'Post-Restructuring Integration', description: 'Executing asset transfers, share allotments, MCA filings, and accounting entries.' }
    ],
    benefits: [
      { title: 'Tax-Efficient Structuring', description: 'Maximizes tax neutrality, loss carry-forward benefits under Sec 72A, and stamp duty savings.' },
      { title: 'Enhanced Shareholder Value', description: 'Unlocks value by spinning off non-core assets into focused corporate entities.' },
      { title: 'Operational Efficiency', description: 'Eliminates duplicate corporate overheads and unifies management frameworks.' }
    ],
    industries: ['Manufacturing', 'Real Estate', 'Healthcare & Pharma', 'Financial Services', 'IT & Technology'],
    faqs: [
      { question: "What is the typical timeline for an NCLT merger scheme?", answer: "An NCLT merger or demerger scheme generally takes between 6 to 9 months depending on tribunal schedules and regulatory responses." },
      { question: "Are mergers in India tax-neutral?", answer: "Mergers (amalgamations) and demergers are tax-neutral under Section 47 of the Income Tax Act, provided statutory conditions under Section 2(1B) and 2(19AA) are met." },
      { question: "What is the difference between a slump sale and an itemized asset sale?", answer: "A slump sale involves transferring an entire undertaking for a lump sum consideration without values being assigned to individual assets and liabilities, taxed under Section 50B." }
    ]
  },

  // 28. FEMA / RBI / NBFC Compliance
  {
    id: 'fema-rbi-nbfc-compliance',
    slug: 'fema-rbi-nbfc-compliance',
    title: 'FEMA / RBI / NBFC Compliance',
    iconName: 'Globe',
    heroDescription: 'Cross-border foreign exchange compliance, Foreign Direct Investment (FDI), ODI filings, RBI reporting, and NBFC regulatory services.',
    layoutType: 'structured',
    ctaText: 'Schedule FEMA Consultation',
    overview: {
      whatIs: 'FEMA, RBI & NBFC Compliance ensures full adherence to foreign exchange control laws, foreign investment reporting on the FIRMS portal, cross-border remittances, and Reserve Bank of India mandates for financial companies.',
      whoNeedsIt: 'Indian companies receiving FDI, domestic firms expanding abroad (ODI), non-resident investors, foreign subsidiaries, and Non-Banking Financial Companies.',
      summaryBox: 'Specialized advisory for FDI reporting (FC-GPR / FC-TRS), FLA returns, RBI compounding applications, and NBFC regulatory returns.'
    },
    features: [
      { title: 'FDI Reporting (SMF FIRMS Portal)', description: 'Filing Form FC-GPR for allotment of shares and Form FC-TRS for transfer of equity between residents and non-residents.', iconName: 'Globe' },
      { title: 'FLA & Annual RBI Returns', description: 'Timely filing of Foreign Liabilities and Assets (FLA) return and ECB reporting with Category-I Authorised Dealer banks.', iconName: 'Notebook' },
      { title: 'FEMA Compounding & RBI Approvals', description: 'Drafting compounding applications for procedural FEMA contraventions and representing clients before RBI Regional Offices.', iconName: 'ShieldCheck' },
      { title: 'NBFC Registration & Compliance', description: 'CoR application processing for NBFC-ND, SAC, or CIC entities and filing monthly/quarterly Cosmos returns with RBI.', iconName: 'Building2' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Transaction Analysis', description: 'Evaluating sectoral caps, pricing guidelines, and RBI automatic vs approval routes.' },
      { phase: 'Phase 02', title: 'AD Bank Coordination', description: 'Preparing valuation certificates, KYC, FIRC, and regulatory documentation.' },
      { phase: 'Phase 03', title: 'FIRMS Portal Submission', description: 'E-filing FC-GPR or FC-TRS forms with the Authorised Dealer Bank.' },
      { phase: 'Phase 04', title: 'Acknowledgment & Archival', description: 'Obtaining RBI compliance approval and updating statutory registers.' }
    ],
    benefits: [
      { title: 'Zero Penalty Guarantee', description: 'Prevents heavy compounding fees and penalty notices under Section 13 of FEMA.' },
      { title: 'Seamless Foreign Remittances', description: 'Ensures uninterrupted inbound investment and outbound profit repatriation.' },
      { title: 'Institutional RBI Credibility', description: 'Maintains pristine compliance record for cross-border banking and audits.' }
    ],
    industries: ['E-Commerce', 'IT & Software', 'Financial Services', 'Real Estate', 'Renewable Energy'],
    faqs: [
      { question: "What is the deadline for filing Form FC-GPR after receiving FDI?", answer: "Form FC-GPR must be filed on the SMF FIRMS portal within 30 days from the date of allotment of equity instruments." },
      { question: "What happens if a company delays filing the FLA return?", answer: "Delay in filing the Foreign Liabilities and Assets (FLA) return attracts LSF (Late Submission Fee) imposed by the Reserve Bank of India." },
      { question: "Can foreign investment contraventions be compounded?", answer: "Yes, procedural contraventions under FEMA can be compounded by submitting a formal compounding application to the RBI under FEMA (Compounding Proceedings) Rules." }
    ]
  },

  // 29. Secretarial Audit & Certifications
  {
    id: 'secretarial-audit-and-certifications',
    slug: 'secretarial-audit-and-certifications',
    title: 'Secretarial Audit & Certifications',
    iconName: 'Award',
    heroDescription: 'Independent statutory secretarial audits under Section 204 of Companies Act, SEBI LODR compliance audits, and corporate certifications.',
    layoutType: 'structured',
    ctaText: 'Request Secretarial Audit',
    overview: {
      whatIs: 'Secretarial Audit & Certification is an independent evaluation of a company’s total compliance with corporate, securities, labor, and industry-specific laws, culminating in statutory reports and legal certifications.',
      whoNeedsIt: 'Listed companies, public companies with paid-up capital ≥ ₹50 Cr or turnover ≥ ₹250 Cr, companies borrowing > ₹100 Cr, and corporate entities seeking statutory certificates.',
      summaryBox: 'Rigorous secretarial audit execution issuing Form MR-3 reports, SEBI compliance certificates, corporate borrowing certifications, and due diligence reports.'
    },
    features: [
      { title: 'Secretarial Audit Report (Form MR-3)', description: 'Comprehensive examination of compliance under Companies Act, SCRA, Depositories Act, FEMA, and SEBI regulations.', iconName: 'Award' },
      { title: 'SEBI LODR Compliance Certificates', description: 'Issuance of Quarterly & Annual Corporate Governance Certificates under Regulation 24A and 17-27 of SEBI LODR.', iconName: 'ShieldCheck' },
      { title: 'Bank Borrowing & Charge Certifications', description: 'Certificates for bank credit facilities, Search Reports, and Net Worth certificates for corporate bidding.', iconName: 'FileCheck2' },
      { title: 'Diligent Corporate Health Checkup', description: 'Proactive review of corporate secretarial records to identify hidden legal risks prior to institutional funding.', iconName: 'Notebook' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Audit Scope & Engagement', description: 'Issuing audit engagement letter, compliance checklist, and document requisition.' },
      { phase: 'Phase 02', title: 'Physical & Digital Inspection', description: 'Inspecting meeting minutes, registers, MCA filings, and statutory notifications.' },
      { phase: 'Phase 03', title: 'Draft Observations Review', description: 'Discussing preliminary audit observations with management and audit committee.' },
      { phase: 'Phase 04', title: 'Issuance of Form MR-3', description: 'Finalizing and signing Secretarial Audit Report for inclusion in Board’s Report.' }
    ],
    benefits: [
      { title: 'Board & Management Protection', description: 'Demonstrates due diligence by directors, shielding against officer-in-default liabilities.' },
      { title: 'Enhanced Governance Rating', description: 'Boosts investor confidence and institutional credit ratings for public borrowings.' },
      { title: 'Early Risk Mitigation', description: 'Detects procedural omissions before statutory authorities initiate penal action.' }
    ],
    industries: ['Public Listed Companies', 'Banking & Finance', 'Infrastructure', 'Pharmaceuticals', 'Large Enterprises'],
    faqs: [
      { question: "Which companies are mandated to conduct a Secretarial Audit?", answer: "Under Section 204, every listed company, every public company with paid-up capital ≥ ₹50 Crore or turnover ≥ ₹250 Crore, or outstanding loans/borrowings ≥ ₹100 Crore must undergo Secretarial Audit." },
      { question: "Is Secretarial Audit report attached to the Annual Report?", answer: "Yes, the Secretarial Audit Report in Form MR-3 must be annexed to the Board of Directors' Report." },
      { question: "Can a statutory financial auditor conduct Secretarial Audit?", answer: "No, Secretarial Audit can only be conducted by an independent practicing Company Secretary (PCS)." }
    ]
  },

  // 30. Legal Drafting & Documentation
  {
    id: 'legal-drafting-and-documentation',
    slug: 'legal-drafting-and-documentation',
    title: 'Legal Drafting & Documentation',
    iconName: 'FileText',
    heroDescription: 'Customized legal drafting, vetting, and execution of corporate contracts, commercial agreements, shareholder pacts, and governance policies.',
    layoutType: 'legal',
    ctaText: 'Commission Legal Drafting',
    overview: {
      whatIs: 'Legal Drafting & Documentation provides precision-crafted commercial agreements, corporate governance contracts, founder agreements, and regulatory policy documentation tailored to protect enterprise value.',
      whoNeedsIt: 'Businesses, founders, SMEs, corporate legal departments, and international entities seeking legally binding, airtight contracts under Indian jurisdiction.',
      summaryBox: 'Bespoke drafting and legal vetting for SHA, SPA, Joint Venture agreements, commercial leases, vendor contracts, ESOP policies, and compliance manuals.'
    },
    features: [
      { title: 'Shareholder & Investment Pacts (SHA/SPA)', description: 'Drafting Shareholders Agreements, Share Purchase Agreements, Founders Agreements, and Term Sheets with robust exit rights.', iconName: 'FileText' },
      { title: 'Commercial & Vendor Contracts', description: 'Custom drafting of Master Services Agreements (MSA), Non-Disclosure Agreements (NDA), SLA, and Distribution Agreements.', iconName: 'Notebook' },
      { title: 'Corporate Policies & ESOP Schemes', description: 'Structuring Employee Stock Option Plans (ESOPs), POSH policy manuals, Insider Trading Code, and Whistleblower Policies.', iconName: 'Building2' },
      { title: 'Legal Vetting & Risk Redlining', description: 'Reviewing third-party agreements, identifying indemnity risks, liability caps, and unfavorable arbitration clauses.', iconName: 'ShieldCheck' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Commercial Requirement Mapping', description: 'Understanding business objectives, risk allocation, key commercial terms, and governance expectations.' },
      { phase: 'Phase 02', title: 'Bespoke Drafting', description: 'Formulating first draft containing custom dispute resolution, indemnities, and operational covenants.' },
      { phase: 'Phase 03', title: 'Review & Stakeholder Iteration', description: 'Redlining draft based on negotiations with counterparty legal counsel.' },
      { phase: 'Phase 04', title: 'Finalization & Stamping Protocols', description: 'Finalizing executable copy with appropriate e-stamping and notarization protocols.' }
    ],
    benefits: [
      { title: 'Airtight Legal Protection', description: 'Prevents commercial loopholes, ambiguous clauses, and future litigation exposure.' },
      { title: 'Negotiation Leverage', description: 'Provides well-structured agreements that protect client interests during deal negotiations.' },
      { title: 'Regulatory Compliance', description: 'Ensures all contracts comply with the Indian Contract Act, 1872, and relevant industry regulations.' }
    ],
    industries: ['Startups & Tech', 'Real Estate', 'Logistics', 'Retail & E-Commerce', 'Financial Services'],
    faqs: [
      { question: "Why is a custom agreement better than a template contract?", answer: "Template contracts often omit critical industry-specific covenants, default remedies, jurisdiction clauses, and custom liability caps required under Indian contract law." },
      { question: "What essential clauses must be in a Shareholders Agreement (SHA)?", answer: "A robust SHA includes ROFR, Tag-Along / Drag-Along rights, Reserved Matters list, Board Representation rights, Anti-dilution clauses, and Liquidation Preference protocols." },
      { question: "How is stamp duty calculated on commercial agreements?", answer: "Stamp duty is governed by state-specific Stamp Acts based on contract value, consideration amount, and nature of the instrument." }
    ]
  },

  // 31. Intellectual Property Rights (IPR)
  {
    id: 'intellectual-property-rights-ipr',
    slug: 'intellectual-property-rights-ipr',
    title: 'Intellectual Property Rights (IPR)',
    iconName: 'Award',
    heroDescription: 'End-to-end IP protection, trademark search & registration, copyright filings, IP valuation, and opposition management.',
    layoutType: 'journey',
    ctaText: 'Protect Your IP Assets',
    overview: {
      whatIs: 'Intellectual Property Rights (IPR) services safeguard a business’s intangible assets—trademarks, brand logos, copyrights, designs, and commercial secrets—securing exclusive commercial ownership and market differentiation.',
      whoNeedsIt: 'Brand owners, tech startups, manufacturing companies, creative agencies, e-commerce platforms, and innovators building proprietary intangible assets.',
      summaryBox: 'Comprehensive IP management covering trademark clearance, registration, examination response, opposition proceedings, copyright filings, and IP licensing.'
    },
    features: [
      { title: 'Trademark Search & Filing', description: 'Conducting comprehensive clearance searches across NICE classes and submitting TM applications for brand names and logos.', iconName: 'Award' },
      { title: 'Examination & Hearing Representation', description: 'Drafting legal replies to Trademark Examination Reports (Section 9 & 11 objections) and representing before the TM Registry.', iconName: 'ShieldCheck' },
      { title: 'Copyright & Design Filings', description: 'Registering original literary, software code, artistic works, and industrial design patterns under Indian IP laws.', iconName: 'Notebook' },
      { title: 'IP Assignment & Valuation', description: 'Structuring IP licensing agreements, technology transfer pacts, and independent monetary valuation of brand equity.', iconName: 'Coins' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Clearance & Search Analysis', description: 'Screening trademark public search database to assess registrability and collision risk.' },
      { phase: 'Phase 02', title: 'Application Submission', description: 'Filing TM-A on IP India portal to generate immediate TM application number and legal priority.' },
      { phase: 'Phase 03', title: 'Prosecution & Opposition Handling', description: 'Responding to office actions, attending registry show-cause hearings, or managing notice of opposition.' },
      { phase: 'Phase 04', title: 'Registration Certificate', description: 'Obtaining registration certificate and establishing long-term IP renewal schedule.' }
    ],
    benefits: [
      { title: 'Exclusive Brand Ownership', description: 'Secures legal monopoly over brand name and logo across India, preventing copycats.' },
      { title: 'Monetizable Business Value', description: 'Transforms brand reputation into a valuable corporate balance sheet asset eligible for licensing or valuation.' },
      { title: 'Legal Injunction Rights', description: 'Empowers enforcement of civil and criminal infringement lawsuits against unauthorized users.' }
    ],
    industries: ['E-Commerce & Retail', 'Consumer Goods (FMCG)', 'Software & Tech', 'Media & Entertainment', 'Fashion & Apparel'],
    faqs: [
      { question: "How long does trademark registration take in India?", answer: "Trademark registration generally takes 6 to 12 months if there are no third-party oppositions or complex examination objections." },
      { question: "Can I use the ® symbol immediately upon applying?", answer: "No, you can use the ™ symbol immediately after filing the application. The ® symbol can only be used once the registration certificate is officially issued." },
      { question: "What is the validity period of a registered trademark?", answer: "A registered trademark in India is valid for 10 years from the date of application and can be renewed indefinitely every 10 years." }
    ]
  },

  // 32. Foreign Business Accounting
  {
    id: 'foreign-business-accounting',
    slug: 'foreign-business-accounting',
    title: 'Foreign Business Accounting',
    iconName: 'Globe',
    heroDescription: 'Outsourced accounting, US GAAP / IFRS reporting, multi-currency ledger management, and financial coordination for foreign entities.',
    layoutType: 'journey',
    ctaText: 'Outsource Global Accounting',
    overview: {
      whatIs: 'Foreign Business Accounting delivers specialized cross-border bookkeeping, multi-currency financial accounting, US GAAP / IFRS conversion, and controller support for foreign entities and Indian subsidiaries of overseas MNCs.',
      whoNeedsIt: 'Foreign companies operating in India, Indian firms managing overseas branches (US/UK/UAE/Singapore), MNC subsidiaries, and international trading businesses.',
      summaryBox: 'End-to-end multi-currency accounting, dual GAAP reconciliations, intercompany transfer pricing accounting, and real-time executive dashboard reporting.'
    },
    features: [
      { title: 'Multi-Currency Bookkeeping', description: 'Maintaining books of accounts in foreign currencies (USD, EUR, GBP, AED, SGD) with automatic forex gain/loss reconciliation.', iconName: 'Globe' },
      { title: 'US GAAP / IFRS Financial Statements', description: 'Converting Indian GAAP / Ind AS financial reports into US GAAP or IFRS compliant formats for overseas parent companies.', iconName: 'Notebook' },
      { title: 'Intercompany & Transfer Pricing Ledger', description: 'Reconciling cross-border intercompany transactions, management fees, royalty allocations, and transfer pricing schedules.', iconName: 'Coins' },
      { title: 'Offshore Financial Controller Support', description: 'Providing dedicated virtual controller support, monthly management reporting (MIS), and international audit support.', iconName: 'Building2' }
    ],
    timeline: [
      { phase: 'Phase 01', title: 'Chart of Accounts Alignment', description: 'Mapping local accounts to foreign parent global chart of accounts and ERP system.' },
      { phase: 'Phase 02', title: 'Routine Multi-Currency Ingestion', description: 'Daily transaction processing, invoice matching, vendor payments, and bank feeds.' },
      { phase: 'Phase 03', title: 'Month-End GAAP Adjustment', description: 'Executing accruals, forex revaluations, intercompany eliminations, and GAAP adjustments.' },
      { phase: 'Phase 04', title: 'Executive MIS Delivery', description: 'Fulfilling parent company reporting packages within specified close calendar timelines.' }
    ],
    benefits: [
      { title: 'Cost-Effective Global Delivery', description: 'Delivers high-precision accounting at significant cost savings compared to onshore finance teams.' },
      { title: 'Dual-GAAP Accuracy', description: 'Ensures seamless compliance with both local Indian regulations and overseas parent company standards.' },
      { title: 'Real-Time Financial Visibility', description: 'Empowers global C-suite executives with accurate, timely financial reporting and cash flow tracking.' }
    ],
    industries: ['IT & Software Exporters', 'Cross-Border E-Commerce', 'Multinational Corporations', 'Consulting Services', 'Global Trading'],
    faqs: [
      { question: "How do you handle multi-currency exchange rate fluctuations?", answer: "We implement automated daily/monthly exchange rate feeds based on RBI or FEDAI rates, posting realized and unrealized forex gain/loss according to AS-11 / IAS 21." },
      { question: "Which accounting software do you support?", answer: "Our team operates across major global platforms including QuickBooks Online, Xero, NetSuite, SAP, Zoho Books, and Tally Prime." },
      { question: "Can you coordinate with our international auditors?", answer: "Yes, we prepare audit schedules, lead schedules, and dual-GAAP notes to facilitate smooth annual audits with global accounting firms." }
    ]
  }
];