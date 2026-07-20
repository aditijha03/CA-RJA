import {
  Factory,
  Building2,
  HeartPulse,
  Cpu,
  ShoppingBag,
  Landmark,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Receipt,
  PieChart,
  ClipboardList,
  Scale,
  TrendingUp,
  FileSpreadsheet,
  Users,
  Building,
  BadgeIndianRupee,
  FileCheck2,
  Banknote,
  Boxes,
  Gauge,
  Percent,
  Calculator,
} from "lucide-react";

/**
 * Each industry entry is intentionally verbose — this data drives every
 * section of Industries.jsx (hero, overview, challenges, services, CTA).
 *
 * Structure:
 * - slug: used for routing (/industries/:slug)
 * - title / tagline / heroImage / description: hero + overview copy
 * - stats: 4 quick proof points shown in the hero
 * - highlights: the two floating cards in the overview section
 * - overviewPoints: the 3 "Business-Focused / Secure / Future Ready" style
 *   checklist items, rewritten to be CA-specific per industry
 * - challenges: the pain points this industry brings to a CA firm
 * - services: the actual CA services offered to solve those challenges
 */

export const INDUSTRIES = {
  manufacturing: {
    slug: "manufacturing",
    title: "Manufacturing",
    tagline: "Precision Financial Control for Industrial Growth",
    heroImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600",
    description:
      "We help manufacturers and industrial units manage complex costing structures, multi-state GST compliance, plant-level audits, and working capital cycles — so leadership can focus on production, not paperwork.",
    stats: [
      { value: "180+", label: "Manufacturing Clients Served" },
      { value: "₹450Cr+", label: "Annual Turnover Audited" },
      { value: "12+", label: "States GST Handled" },
      { value: "0", label: "Penalty Notices in FY24" },
    ],
    highlights: [
      {
        icon: ShieldCheck,
        title: "Cost Audit Ready",
        description:
          "Books structured for cost audit and CARO reporting from day one.",
      },
      {
        icon: Boxes,
        title: "Inventory-Linked Accounting",
        description:
          "Stock valuation, FIFO/weighted average, and scrap accounting built in.",
      },
    ],
    overviewPoints: [
      {
        icon: CheckCircle2,
        title: "Costing-First Bookkeeping",
        description:
          "Product-wise and job-wise costing mapped directly into your books, not reconstructed at year-end.",
      },
      {
        icon: CheckCircle2,
        title: "Multi-Location GST Compliance",
        description:
          "Factory, depot, and job-work locations reconciled under a single GSTIN framework with zero mismatch filings.",
      },
      {
        icon: CheckCircle2,
        title: "Bank & Working Capital Ready",
        description:
          "CMA data, stock statements, and drawing power reports prepared monthly for seamless cash-credit renewals.",
      },
    ],
    challenges: [
      {
        icon: Boxes,
        title: "Inventory & Costing Complexity",
        description:
          "Raw material, WIP, and finished goods valuation across multiple plants makes accurate costing difficult without a dedicated system.",
      },
      {
        icon: FileCheck2,
        title: "GST on Job Work & Inter-State Transfers",
        description:
          "Job-work challans, stock transfers, and e-way bills across states create constant compliance exposure.",
      },
      {
        icon: Banknote,
        title: "Working Capital Pressure",
        description:
          "Long receivable cycles from dealers and distributors strain liquidity and complicate bank reporting.",
      },
      {
        icon: Scale,
        title: "Statutory & Cost Audit Overlap",
        description:
          "Meeting Companies Act, Income Tax, and Cost Records requirements simultaneously without duplicated effort.",
      },
      {
        icon: Gauge,
        title: "Capacity vs. Capital Expenditure Planning",
        description:
          "Deciding when to expand capacity requires accurate ROI and depreciation modelling most units don't have in-house.",
      },
      {
        icon: Users,
        title: "Labour Law & Payroll Compliance",
        description:
          "PF, ESI, bonus, and contract labour compliance across factory floors is often managed manually and inconsistently.",
      },
    ],
    services: [
      {
        icon: Calculator,
        title: "Cost Accounting & MIS",
        description:
          "Product-wise profitability, variance analysis, and monthly MIS dashboards for plant heads and promoters.",
      },
      {
        icon: Receipt,
        title: "GST & E-Way Bill Compliance",
        description:
          "End-to-end GST return filing, reconciliation, and job-work documentation across all registered states.",
      },
      {
        icon: FileSpreadsheet,
        title: "Statutory & Tax Audit",
        description:
          "Companies Act, Income Tax, and applicable Cost Audit engagements handled by a single coordinated team.",
      },
      {
        icon: BadgeIndianRupee,
        title: "CMA Data & Bank Liaison",
        description:
          "Preparation of CMA reports, projected financials, and direct liaison with bankers for CC/OD limit renewals.",
      },
    ],
    clients: [
      { name: "Enpar Steels Pvt. Ltd.", logo: "/assets/images/clients/enpar.png" },
      { name: "Stakall LLP", logo: "/assets/images/clients/Stakall.png" }
    ],
    faqs: [
      {
        question: "Can you handle costing across multiple plants?",
        answer:
          "Yes. We set up plant-wise and product-wise cost centres so profitability is visible at every level, not just at the consolidated company level.",
      },
      {
        question: "Do you manage job-work and inter-state stock transfer compliance?",
        answer:
          "Yes, including job-work challans, delivery challans, e-way bills, and reconciliation of goods sent for processing across state lines.",
      },
      {
        question: "How do you support bank and CC limit renewals?",
        answer:
          "We prepare monthly CMA data, stock statements, and drawing power reports so renewals move quickly instead of stalling on missing documentation.",
      },
    ],
  },

  "real-estate": {
    slug: "real-estate",
    title: "Real Estate & Construction",
    tagline: "Building Financial Foundations as Strong as Your Projects",
    heroImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600",
    description:
      "From RERA compliance to project-wise costing and joint development accounting, we give developers, builders, and contractors the financial clarity needed to deliver projects on time and within budget.",
    stats: [
      { value: "95+", label: "Projects Under Advisory" },
      { value: "₹1,200Cr+", label: "Project Value Managed" },
      { value: "100%", label: "RERA Filings On Time" },
      { value: "10+", label: "Years in Real Estate Finance" },
    ],
    highlights: [
      {
        icon: Building,
        title: "Project-Wise P&L",
        description:
          "Separate profitability tracking for every tower, phase, and JV arrangement.",
      },
      {
        icon: ShieldCheck,
        title: "RERA & Escrow Compliance",
        description:
          "Escrow account monitoring and quarterly RERA disclosures handled proactively.",
      },
    ],
    overviewPoints: [
      {
        icon: CheckCircle2,
        title: "Project-Based Financial Structuring",
        description:
          "Separate ledgers and P&Ls for each project or phase, aligned with RERA and lender reporting formats.",
      },
      {
        icon: CheckCircle2,
        title: "JV & Landowner Accounting",
        description:
          "Clear treatment of joint development agreements, revenue sharing, and landowner allotments.",
      },
      {
        icon: CheckCircle2,
        title: "Construction-Linked Tax Planning",
        description:
          "GST on under-construction sales, TDS on contractor payments, and capital gains planning for landowners handled together.",
      },
    ],
    challenges: [
      {
        icon: ClipboardList,
        title: "RERA Compliance & Escrow Monitoring",
        description:
          "Maintaining the 70% escrow rule and filing timely quarterly progress reports across multiple registered projects.",
      },
      {
        icon: Building,
        title: "Joint Development & Landowner Settlements",
        description:
          "Accounting for JDAs, revenue-sharing arrangements, and landowner unit allotments accurately and transparently.",
      },
      {
        icon: Percent,
        title: "GST on Under-Construction Sales",
        description:
          "Applying the correct GST rate and input tax credit reversal rules on residential and commercial bookings.",
      },
      {
        icon: Banknote,
        title: "Project Financing & Lender Reporting",
        description:
          "Meeting NBFC and bank disbursement conditions with construction-linked progress and fund utilisation certificates.",
      },
      {
        icon: FileCheck2,
        title: "TDS on Contractors & Sub-Contractors",
        description:
          "Managing Section 194C/194M compliance across a large, often unorganised, contractor and labour base.",
      },
      {
        icon: Scale,
        title: "Capital Gains for Landowners",
        description:
          "Structuring landowner consideration to optimise capital gains tax under Section 45(5A) and related provisions.",
      },
    ],
    services: [
      {
        icon: FileSpreadsheet,
        title: "Project Accounting & Costing",
        description:
          "Tower and phase-wise cost tracking, budget-vs-actual reporting, and margin analysis for every project.",
      },
      {
        icon: ClipboardList,
        title: "RERA Compliance Management",
        description:
          "Escrow account tracking, QPR filings, and coordination with RERA authorities for smooth registrations.",
      },
      {
        icon: Receipt,
        title: "GST & TDS Advisory",
        description:
          "Rate determination, ITC reversal computation, and contractor TDS compliance under one roof.",
      },
      {
        icon: Scale,
        title: "JV Structuring & Tax Planning",
        description:
          "Advisory on joint development structuring, landowner tax planning, and exit strategies.",
      },
    ],
    faqs: [
      {
        question: "Do you handle RERA escrow account compliance?",
        answer:
          "Yes — we monitor the 70% escrow rule, prepare quarterly progress reports, and coordinate directly with RERA authorities on your behalf.",
      },
      {
        question: "Can you account for joint development agreements?",
        answer:
          "Yes. We structure and account for JDAs, revenue-sharing arrangements, and landowner unit allotments with clear, defensible documentation.",
      },
      {
        question: "How do you handle GST on under-construction sales?",
        answer:
          "We apply the correct GST rate based on project type and manage input tax credit reversal calculations to avoid notices later.",
      },
    ],
  },

  healthcare: {
    slug: "healthcare",
    title: "Healthcare",
    tagline: "Financial Health for Hospitals, Clinics & Diagnostics",
    heroImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600",
    description:
      "We support hospitals, clinics, diagnostic labs, and healthcare chains with specialised accounting, GST exemption handling, and trust & Section 8 compliance — so caregivers can stay focused on patients.",
    stats: [
      { value: "60+", label: "Healthcare Entities Served" },
      { value: "25+", label: "Hospitals & Clinics" },
      { value: "100%", label: "12A/80G Renewals On Time" },
      { value: "10+", label: "Years Healthcare Focus" },
    ],
    highlights: [
      {
        icon: ShieldCheck,
        title: "Trust & 12A/80G Compliance",
        description:
          "Charitable and Section 8 healthcare entities kept fully compliant year-round.",
      },
      {
        icon: PieChart,
        title: "Department-Wise Profitability",
        description:
          "Revenue and cost tracked by department — OPD, IPD, diagnostics, pharmacy.",
      },
    ],
    overviewPoints: [
      {
        icon: CheckCircle2,
        title: "Departmental Financial Reporting",
        description:
          "Separate revenue and cost visibility for OPD, IPD, diagnostics, and pharmacy operations within a single set of books.",
      },
      {
        icon: CheckCircle2,
        title: "Trust, Society & Section 8 Compliance",
        description:
          "12A, 80G, and FCRA (where applicable) filings managed alongside statutory audits for charitable healthcare entities.",
      },
      {
        icon: CheckCircle2,
        title: "GST Exemption Accuracy",
        description:
          "Correct application of healthcare service exemptions while ensuring input tax credit isn't wrongly claimed or missed.",
      },
    ],
    challenges: [
      {
        icon: PieChart,
        title: "Department-Wise Cost Tracking",
        description:
          "Understanding true profitability of OPD, IPD, diagnostics, and pharmacy separately, not as one blended number.",
      },
      {
        icon: Percent,
        title: "GST Exemption vs. Taxable Services",
        description:
          "Distinguishing exempt healthcare services from taxable ones (like cosmetic procedures or rented premises) to avoid notices.",
      },
      {
        icon: ShieldCheck,
        title: "Trust & Society Regulatory Filings",
        description:
          "Keeping 12A, 80G, and annual trust filings current while running day-to-day hospital operations.",
      },
      {
        icon: Users,
        title: "Doctor Payouts & Consultancy TDS",
        description:
          "Structuring visiting consultant payouts correctly under Section 194J and professional fee agreements.",
      },
      {
        icon: FileCheck2,
        title: "Insurance & TPA Reconciliation",
        description:
          "Matching billed amounts against insurer and TPA settlements, which often arrive with deductions and delays.",
      },
      {
        icon: Banknote,
        title: "Equipment Financing & Depreciation",
        description:
          "Planning capital expenditure on diagnostic and medical equipment with correct depreciation and funding mix.",
      },
    ],
    services: [
      {
        icon: FileSpreadsheet,
        title: "Departmental Accounting & MIS",
        description:
          "Revenue and cost centres built around OPD, IPD, diagnostics, and pharmacy for clear profitability views.",
      },
      {
        icon: ShieldCheck,
        title: "Trust & Section 8 Compliance",
        description:
          "12A, 80G registration, renewal, and annual compliance for charitable and not-for-profit healthcare entities.",
      },
      {
        icon: Receipt,
        title: "GST Advisory for Healthcare",
        description:
          "Exemption mapping, ITC eligibility review, and GST health-check to prevent unnecessary tax exposure.",
      },
      {
        icon: Users,
        title: "Doctor Payout Structuring",
        description:
          "Consultancy agreements and TDS structuring for visiting doctors, specialists, and diagnostic partners.",
      },
    ],
    faqs: [
      {
        question: "Can you separate profitability by department?",
        answer:
          "Yes — we build cost and revenue centres around OPD, IPD, diagnostics, and pharmacy so each department's true performance is visible.",
      },
      {
        question: "Do you handle trust and 12A/80G compliance?",
        answer:
          "Yes, including registration, renewal, and annual filings for charitable and Section 8 healthcare entities alongside your statutory audit.",
      },
      {
        question: "How do you manage GST exemptions correctly?",
        answer:
          "We map exempt versus taxable healthcare services and run periodic health-checks so you never over- or under-claim input tax credit.",
      },
    ],
  },

  "it-startups": {
    slug: "it-startups",
    title: "IT & Startups",
    tagline: "Finance Infrastructure for Fast-Moving Companies",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",
    description:
      "From incorporation to Series A, we help SaaS companies, IT service firms, and early-stage startups build investor-ready books, manage ESOPs, and stay compliant across export and domestic revenue streams.",
    stats: [
      { value: "70+", label: "Startups Onboarded" },
      { value: "₹200Cr+", label: "Funding Rounds Supported" },
      { value: "100%", label: "Due Diligence Success Rate" },
      { value: "40+", label: "ESOP Structures Designed" },
    ],
    highlights: [
      {
        icon: TrendingUp,
        title: "Investor-Ready Financials",
        description:
          "Books maintained to institutional standards from the seed stage onward.",
      },
      {
        icon: Layers,
        title: "ESOP & Cap Table Management",
        description:
          "Vesting schedules and cap tables kept accurate through every funding round.",
      },
    ],
    overviewPoints: [
      {
        icon: CheckCircle2,
        title: "Investor & Due-Diligence Ready Books",
        description:
          "Financials structured to Ind AS-aligned formats so due diligence during fundraises moves quickly, not slowly.",
      },
      {
        icon: CheckCircle2,
        title: "Export & SEZ/STPI Compliance",
        description:
          "FIRC tracking, LUT filings, and export incentive claims managed for IT/ITES revenue earned in foreign currency.",
      },
      {
        icon: CheckCircle2,
        title: "ESOP & Founder Structuring",
        description:
          "ESOP pool design, vesting schedules, and founder equity structuring aligned with future funding rounds.",
      },
    ],
    challenges: [
      {
        icon: Layers,
        title: "Cap Table & ESOP Complexity",
        description:
          "Tracking multiple funding rounds, SAFE notes, and employee stock options without errors that surface during diligence.",
      },
      {
        icon: TrendingUp,
        title: "Burn Rate & Runway Visibility",
        description:
          "Founders need real-time visibility into burn rate and runway, not quarter-old numbers from a traditional accountant.",
      },
      {
        icon: Percent,
        title: "Export of Services & GST/LUT",
        description:
          "Correctly claiming export benefits, filing LUTs, and managing zero-rated GST on foreign client invoices.",
      },
      {
        icon: FileCheck2,
        title: "Angel Tax & Valuation Compliance",
        description:
          "Navigating Section 56(2)(viib) and valuation report requirements when raising capital from resident investors.",
      },
      {
        icon: Scale,
        title: "Multi-Entity & Cross-Border Structuring",
        description:
          "Structuring US/Singapore holding companies alongside the Indian operating entity in a tax-efficient way.",
      },
      {
        icon: Users,
        title: "Contractor vs. Employee Classification",
        description:
          "Getting payroll, TDS, and PF/ESI treatment right for a mixed team of employees, freelancers, and consultants.",
      },
    ],
    services: [
      {
        icon: FileSpreadsheet,
        title: "Startup Bookkeeping & MIS",
        description:
          "Monthly closes, burn-rate dashboards, and investor-ready MIS reports built for board meetings.",
      },
      {
        icon: Layers,
        title: "Cap Table & ESOP Advisory",
        description:
          "ESOP scheme design, vesting tracking, and cap table maintenance across funding rounds.",
      },
      {
        icon: Receipt,
        title: "GST, LUT & Export Compliance",
        description:
          "Zero-rated invoicing, LUT renewals, and FIRC reconciliation for export-of-service revenue.",
      },
      {
        icon: Scale,
        title: "Fundraise & Due Diligence Support",
        description:
          "Data room preparation, financial due diligence support, and valuation report coordination for funding rounds.",
      },
    ],
    clients: [
      { name: "Lighthouse Technologies Pvt. Ltd.", logo: "/assets/images/clients/lighthouse.png" },
      { name: "Saswat Financial Technologies Pvt. Ltd.", logo: "/assets/images/clients/saswat.png" }
    ],
    faqs: [
      {
        question: "Can you manage our cap table across funding rounds?",
        answer:
          "Yes — we maintain cap tables, ESOP vesting schedules, and SAFE/CCPS conversions accurately through every round, so diligence doesn't surface surprises.",
      },
      {
        question: "Do you handle GST for export of services?",
        answer:
          "Yes, including LUT filing, zero-rated invoicing, and FIRC reconciliation for revenue billed to foreign clients.",
      },
      {
        question: "Can you support us through a fundraise?",
        answer:
          "We prepare data rooms, support financial due diligence, and coordinate with valuation professionals so the process moves at investor speed.",
      },
    ],
  },

  "retail-fmcg": {
    slug: "retail-fmcg",
    title: "Retail & FMCG",
    tagline: "Sharper Margins Across Every Store and SKU",
    heroImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600",
    description:
      "We help retail chains, FMCG distributors, and e-commerce sellers manage multi-outlet accounting, GST across state warehouses, and thin-margin inventory control with precision.",
    stats: [
      { value: "140+", label: "Retail & FMCG Clients" },
      { value: "600+", label: "Store Locations Reconciled" },
      { value: "99.5%", label: "Inventory Accuracy Achieved" },
      { value: "8+", label: "Marketplaces Supported" },
    ],
    highlights: [
      {
        icon: Boxes,
        title: "SKU-Level Margin Tracking",
        description:
          "Profitability visibility down to individual products and store locations.",
      },
      {
        icon: Receipt,
        title: "Multi-State GST Handled",
        description:
          "Warehouse and store GSTINs reconciled monthly without mismatch.",
      },
    ],
    overviewPoints: [
      {
        icon: CheckCircle2,
        title: "Store & SKU-Level Profitability",
        description:
          "Granular margin tracking by store, category, and SKU so pricing and promotion decisions are backed by real numbers.",
      },
      {
        icon: CheckCircle2,
        title: "Marketplace & Multi-Channel Reconciliation",
        description:
          "Amazon, Flipkart, Quick-commerce, and offline sales reconciled against payouts, commissions, and TCS deductions.",
      },
      {
        icon: CheckCircle2,
        title: "Thin-Margin Tax Efficiency",
        description:
          "GST input credit optimisation and inventory valuation methods chosen to protect already-thin retail margins.",
      },
    ],
    challenges: [
      {
        icon: Boxes,
        title: "Multi-Location Inventory Reconciliation",
        description:
          "Keeping stock accurate across stores, warehouses, and in-transit goods without daily manual reconciliation.",
      },
      {
        icon: Receipt,
        title: "GST Across Multiple State Registrations",
        description:
          "Filing and reconciling GST for warehouses and stores spread across several states each month.",
      },
      {
        icon: FileCheck2,
        title: "Marketplace TCS & Commission Reconciliation",
        description:
          "Matching e-commerce marketplace settlements against TCS credits, commissions, and return adjustments.",
      },
      {
        icon: Percent,
        title: "Thin Margins & Cost Leakage",
        description:
          "Identifying shrinkage, wastage, and pricing errors that quietly erode already-thin retail margins.",
      },
      {
        icon: Banknote,
        title: "Vendor Credit & Payment Cycles",
        description:
          "Balancing distributor credit terms with cash flow needs across a large, fast-moving vendor base.",
      },
      {
        icon: Scale,
        title: "MRP & Consumer Compliance",
        description:
          "Meeting Legal Metrology, FSSAI, and MRP labelling requirements alongside routine tax compliance.",
      },
    ],
    services: [
      {
        icon: FileSpreadsheet,
        title: "Multi-Outlet Bookkeeping",
        description:
          "Store and warehouse-wise books consolidated into a single accurate financial picture every month.",
      },
      {
        icon: Receipt,
        title: "Multi-State GST Filing",
        description:
          "End-to-end GST compliance across every state registration, including e-way bills and reconciliations.",
      },
      {
        icon: Boxes,
        title: "Inventory & Margin Analytics",
        description:
          "SKU and category-level margin dashboards to guide pricing, promotions, and purchasing decisions.",
      },
      {
        icon: FileCheck2,
        title: "Marketplace Settlement Reconciliation",
        description:
          "Automated matching of e-commerce payouts, TCS, and commissions against your books.",
      },
    ],
    clients: [
      { name: "Joinmay Mumbai Electronics Pvt. Ltd. (VIVO Mobiles)", logo: "/assets/images/clients/joinmay.jpg" }
    ],
    faqs: [
      {
        question: "Can you reconcile inventory across multiple stores?",
        answer:
          "Yes — we build store and warehouse-wise stock tracking so inventory is accurate without daily manual reconciliation.",
      },
      {
        question: "Do you handle GST across multiple state registrations?",
        answer:
          "Yes, including monthly filing, e-way bills, and reconciliation for every warehouse and store GSTIN you operate.",
      },
      {
        question: "Can you reconcile marketplace settlements against our books?",
        answer:
          "Yes — we match Amazon, Flipkart, and quick-commerce payouts against TCS credits, commissions, and returns to catch discrepancies early.",
      },
    ],
  },

  "nbfc-financial-services": {
    slug: "nbfc-financial-services",
    title: "NBFC & Financial Services",
    tagline: "Compliance Confidence for Regulated Lenders",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600",
    description:
      "We support NBFCs, microfinance institutions, and financial service providers with RBI compliance, NPA classification, and statutory reporting that satisfies regulators, auditors, and rating agencies alike.",
    stats: [
      { value: "35+", label: "NBFCs & MFIs Advised" },
      { value: "₹800Cr+", label: "Loan Book Reviewed" },
      { value: "100%", label: "RBI Returns Filed On Time" },
      { value: "20+", label: "Years Financial Sector Experience" },
    ],
    highlights: [
      {
        icon: ShieldCheck,
        title: "RBI Reporting Accuracy",
        description:
          "NBS returns and prudential norms compliance handled with precision.",
      },
      {
        icon: Gauge,
        title: "NPA Classification Engine",
        description:
          "Automated ageing and provisioning aligned with RBI norms.",
      },
    ],
    overviewPoints: [
      {
        icon: CheckCircle2,
        title: "RBI-Compliant Reporting",
        description:
          "NBS-1 to NBS-9 returns, prudential norms, and capital adequacy computations filed accurately and on schedule.",
      },
      {
        icon: CheckCircle2,
        title: "NPA & Provisioning Accuracy",
        description:
          "Asset classification and provisioning aligned with RBI's income recognition and asset classification (IRAC) norms.",
      },
      {
        icon: CheckCircle2,
        title: "Statutory & Concurrent Audit Coordination",
        description:
          "Statutory, internal, and concurrent audits coordinated so findings are addressed once, not chased repeatedly.",
      },
    ],
    challenges: [
      {
        icon: Gauge,
        title: "NPA Classification & Provisioning",
        description:
          "Applying RBI's IRAC norms consistently across a growing and diverse loan book without manual errors.",
      },
      {
        icon: FileCheck2,
        title: "RBI Regulatory Returns",
        description:
          "Timely and accurate filing of NBS returns, statutory auditor certificates, and periodic RBI disclosures.",
      },
      {
        icon: Scale,
        title: "Capital Adequacy & Leverage Norms",
        description:
          "Maintaining CRAR and leverage ratios within RBI-prescribed limits while planning for growth.",
      },
      {
        icon: Banknote,
        title: "Co-Lending & Securitisation Accounting",
        description:
          "Accounting for co-lending arrangements, loan assignments, and securitisation transactions correctly under Ind AS.",
      },
      {
        icon: ShieldCheck,
        title: "Fair Practices Code & KYC Audit",
        description:
          "Ensuring lending practices, interest rate disclosures, and KYC processes withstand regulatory scrutiny.",
      },
      {
        icon: Users,
        title: "Multi-Branch Loan Portfolio Reconciliation",
        description:
          "Reconciling disbursements, collections, and overdue accounts across a wide branch or DSA network.",
      },
    ],
    services: [
      {
        icon: FileSpreadsheet,
        title: "RBI Regulatory Compliance",
        description:
          "NBS return filing, prudential norm tracking, and capital adequacy computation managed end-to-end.",
      },
      {
        icon: Gauge,
        title: "NPA & Provisioning Management",
        description:
          "IRAC-compliant asset classification, ageing analysis, and provisioning workflows built into your systems.",
      },
      {
        icon: Scale,
        title: "Statutory & Concurrent Audit",
        description:
          "Coordinated audit engagements covering statutory, internal, and concurrent audit requirements.",
      },
      {
        icon: Banknote,
        title: "Ind AS & Securitisation Advisory",
        description:
          "Technical accounting support for co-lending, assignment, and securitisation transactions under Ind AS 109.",
      },
    ],
    clients: [
      { name: "SFT Finance Pvt. Ltd. (NBFC)", logo: "/assets/images/clients/stft.png" }
    ],
    faqs: [
      {
        question: "Can you manage our RBI regulatory filings end-to-end?",
        answer:
          "Yes — we handle NBS return preparation, prudential norm tracking, and capital adequacy computation on a fixed quarterly calendar.",
      },
      {
        question: "Do you help with NPA classification and provisioning?",
        answer:
          "Yes. We apply RBI's IRAC norms consistently across your loan book and build ageing and provisioning workflows into your systems.",
      },
      {
        question: "Can you support co-lending or securitisation accounting?",
        answer:
          "Yes — we provide Ind AS 109-compliant accounting support for co-lending arrangements, loan assignments, and securitisation transactions.",
      },
    ],
  },
};

// Shared 4-step engagement process, rendered with the active industry's
// name interpolated at the component level — keeps this page feeling like
// a full, deliberate page rather than a thin data dump per industry.
export const ENGAGEMENT_PROCESS = [
  {
    step: "01",
    title: "Diagnostic Review",
    description:
      "We start by reviewing your existing books, filings, and compliance history to spot gaps before they become penalties.",
  },
  {
    step: "02",
    title: "System & Process Setup",
    description:
      "Chart of accounts, GST registrations, and reporting formats are configured to match how your business actually operates.",
  },
  {
    step: "03",
    title: "Ongoing Compliance & Reporting",
    description:
      "Monthly bookkeeping, statutory filings, and MIS reports are delivered on a fixed calendar — no year-end scramble.",
  },
  {
    step: "04",
    title: "Advisory & Growth Planning",
    description:
      "Quarterly reviews cover tax planning, financing options, and structural changes as your business scales.",
  },
];

// Ordered list used for navigation tabs / menus across the site
export const INDUSTRY_LIST = [
  { slug: "manufacturing", title: "Manufacturing", icon: Factory },
  { slug: "real-estate", title: "Real Estate & Construction", icon: Building2 },
  { slug: "healthcare", title: "Healthcare", icon: HeartPulse },
  { slug: "it-startups", title: "IT & Startups", icon: Cpu },
  { slug: "retail-fmcg", title: "Retail & FMCG", icon: ShoppingBag },
  {
    slug: "nbfc-financial-services",
    title: "NBFC & Financial Services",
    icon: Landmark,
  },
];

export const DEFAULT_INDUSTRY_SLUG = "manufacturing";