import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Button } from '../components/ui/Button';
import { SERVICES_DETAIL_DATA } from '../constants/servicesData';
import { splitReveal, fadeIn, staggerReveal, hoverLift, hoverReset } from '../animations/helpers';
import { cn } from '../utils/cn';
import { 
  ShieldCheck, 
  Percent, 
  Calculator, 
  FileCheck2, 
  Building2, 
  Users, 
  Notebook, 
  Coins, 
  Compass,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Phone,
  Mail
} from 'lucide-react';
import { CONTACT_DATA } from '../constants/data';

// Map icons to names
const IconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  ShieldCheck,
  Percent,
  Calculator,
  FileCheck2,
  Building2,
  Users,
  Notebook,
  Coins,
  Compass
};

const ServiceIcon = ({ name, className, size = 20 }: { name: string; className?: string; size?: number }) => {
  const IconComponent = IconMap[name] || ShieldCheck;
  return <IconComponent className={className} size={size} />;
};

const ServiceDetail: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const formRef = useRef<HTMLFormElement>(null);

  // Find current service in centralized data
  const service = SERVICES_DETAIL_DATA.find(s => s.slug === serviceSlug);

  // Accordion active index
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // GSAP animation references
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const heroBtnRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const personalityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!service) return;

    // Reset accordion state on page change
    setOpenFaqIndex(null);

    const cleanups: (() => void)[] = [];

    // Hero split line animation
    if (titleRef.current) {
      const anim = splitReveal(titleRef.current, 0.15);
      if (anim) cleanups.push(anim.kill);
    }
    if (subtitleRef.current) {
      const anim = fadeIn(subtitleRef.current, undefined, 0);
      if (anim) cleanups.push(anim.kill);
    }
    if (heroDescRef.current) {
      const anim = fadeIn(heroDescRef.current, undefined, 0.3);
      if (anim) cleanups.push(anim.kill);
    }
    if (heroBtnRef.current) {
      const anim = fadeIn(heroBtnRef.current, undefined, 0.4);
      if (anim) cleanups.push(anim.kill);
    }
    if (heroImageRef.current) {
      const anim = fadeIn(heroImageRef.current, undefined, 0.3);
      if (anim) cleanups.push(anim.kill);
    }

    // Overview section reveals
    if (overviewRef.current) {
      const anim = fadeIn(overviewRef.current, undefined, 0.2);
      if (anim) cleanups.push(anim.kill);
    }

    // Features cards stagger
    if (featuresRef.current) {
      const anim = staggerReveal(featuresRef.current, '.feature-card-item', 0.1);
      if (anim) cleanups.push(anim.kill);
    }

    // Process timeline stagger
    if (processRef.current) {
      const anim = staggerReveal(processRef.current, '.process-timeline-item', 0.12);
      if (anim) cleanups.push(anim.kill);
    }

    // Personality widget reveal
    if (personalityRef.current) {
      const anim = fadeIn(personalityRef.current, undefined, 0.2);
      if (anim) cleanups.push(anim.kill);
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [serviceSlug, service]);

  if (!service) {
    return (
      <div className="py-20 text-center select-none min-h-[50vh] flex flex-col justify-center items-center">
        <h2 className="font-serif text-3xl text-primary font-medium">Service Practice Area Not Found</h2>
        <p className="font-sans text-xs text-text-muted mt-sm">The selected practice directory route does not exist.</p>
        <Link to="/services" className="mt-md border border-primary px-md py-xs font-sans text-xs tracking-widest uppercase hover:bg-primary hover:text-bg-canvas transition-colors">
          View Practice Directory
        </Link>
      </div>
    );
  }

  // Card hover lift handlers
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    hoverLift(e.currentTarget, -4);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    hoverReset(e.currentTarget);
  };

  // Form submission
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 1200);
  };

  const scrollToForm = () => {
    const el = document.getElementById('consultation-form');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  // Conditional thematic layout widget based on personality
  const renderVisualPersonalityWidget = () => {
    switch (service.layoutType) {
      case 'editorial':
        if (service.editorialInsight) {
          return (
            <div className="bg-bg-alt border-l-2 border-accent p-lg my-lg">
              <span className="font-sans text-[10px] font-bold text-accent tracking-widest uppercase block mb-xs">
                Executive Tax Insights
              </span>
              <p className="font-sans text-xs md:text-sm text-primary leading-relaxed italic">
                "{service.editorialInsight}"
              </p>
            </div>
          );
        }
        return null;

      case 'dashboard':
        if (service.dashboardMetrics) {
          return (
            <div className="bg-primary text-bg-canvas p-lg my-lg rounded-card-sm border border-accent/20">
              <span className="font-sans text-[10px] font-bold text-accent tracking-widest uppercase block mb-md">
                Service Delivery Dashboard
              </span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
                {service.dashboardMetrics.map((met, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <span className="font-serif text-2xl md:text-3xl font-bold text-accent leading-none">
                      {met.value}
                    </span>
                    <span className="font-sans text-[9px] text-border/80 tracking-wider uppercase mt-[4px]">
                      {met.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return null;

      case 'strategy':
        if (service.strategyPoints) {
          return (
            <div className="border border-border bg-bg-canvas p-lg my-lg rounded-card-sm">
              <span className="font-sans text-[10px] font-bold text-accent tracking-widest uppercase block mb-sm">
                Executive CFO Strategy Canvas
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                {service.strategyPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start space-x-xs">
                    <span className="w-1.5 h-1.5 bg-accent mt-[6px] shrink-0" />
                    <span className="font-sans text-xs text-text-main leading-tight">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        return null;

      case 'process':
        return (
          <div className="border border-border bg-bg-canvas p-lg my-lg rounded-card-sm">
            <span className="font-sans text-[10px] font-bold text-accent tracking-widest uppercase block mb-sm">
              GST Reconciliation &amp; Refund Cycle
            </span>
            <div className="flex flex-col md:flex-row items-center justify-between gap-sm md:gap-xs text-center select-none pt-xs">
              <div className="flex-1 border border-border/80 p-xs bg-bg-alt/40 rounded-card-sm w-full">
                <span className="font-sans text-[10px] font-bold text-primary block">Step 01. Purchase Register</span>
              </div>
              <div className="hidden md:block text-accent font-sans text-xs font-bold px-xxs">&rarr;</div>
              <div className="flex-1 border border-accent/40 p-xs bg-accent/5 rounded-card-sm w-full">
                <span className="font-sans text-[10px] font-bold text-primary block">Step 02. GSTR-2B Matching</span>
              </div>
              <div className="hidden md:block text-accent font-sans text-xs font-bold px-xxs">&rarr;</div>
              <div className="flex-1 border border-border/80 p-xs bg-bg-alt/40 rounded-card-sm w-full">
                <span className="font-sans text-[10px] font-bold text-primary block">Step 03. Net Liability Check</span>
              </div>
            </div>
          </div>
        );

      case 'journey':
        return (
          <div className="border border-border bg-bg-canvas p-lg my-lg rounded-card-sm">
            <span className="font-sans text-[10px] font-bold text-accent tracking-widest uppercase block mb-sm">
              Corporate Onboarding Journey
            </span>
            <div className="flex flex-col md:flex-row items-center justify-between gap-sm md:gap-xs text-center select-none pt-xs">
              <div className="flex-1 border border-border/80 p-xs bg-bg-alt/40 rounded-card-sm w-full">
                <span className="font-sans text-[10px] font-bold text-primary block">01. Name Approval</span>
              </div>
              <div className="hidden md:block text-accent font-sans text-xs font-bold px-xxs">&rarr;</div>
              <div className="flex-1 border border-accent/40 p-xs bg-accent/5 rounded-card-sm w-full">
                <span className="font-sans text-[10px] font-bold text-primary block">02. Incorporation</span>
              </div>
              <div className="hidden md:block text-accent font-sans text-xs font-bold px-xxs">&rarr;</div>
              <div className="flex-1 border border-border/80 p-xs bg-bg-alt/40 rounded-card-sm w-full">
                <span className="font-sans text-[10px] font-bold text-primary block">03. PAN/TAN &amp; Bank</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col bg-bg-base select-text">
      
      {/* 1. EDITORIAL HERO */}
      <section className="w-full bg-bg-canvas py-xxl border-hairline-b relative overflow-hidden" aria-label="Service Details Hero">
        <Container>
          {/* Breadcrumb */}
          <div className="flex items-center space-x-xs mb-md select-none">
            <Link to="/" className="font-sans text-[10px] font-bold text-text-muted hover:text-accent tracking-widest uppercase transition-colors">
              Home
            </Link>
            <span className="font-sans text-[10px] text-border">/</span>
            <Link to="/services" className="font-sans text-[10px] font-bold text-text-muted hover:text-accent tracking-widest uppercase transition-colors">
              Services
            </Link>
            <span className="font-sans text-[10px] text-border">/</span>
            <span className="font-sans text-[10px] font-bold text-accent tracking-widest uppercase">
              {service.title}
            </span>
          </div>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-xxl items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-md pr-0 lg:pr-lg">
              <span 
                ref={subtitleRef}
                className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase"
              >
                PRACTICE AREA
              </span>
              <h1 
                ref={titleRef}
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary font-medium tracking-tight leading-tight"
              >
                {service.title}
              </h1>
              <p 
                ref={heroDescRef}
                className="font-sans text-xs md:text-sm text-text-muted leading-relaxed max-w-[580px] opacity-0"
              >
                {service.heroDescription}
              </p>
              
              <div ref={heroBtnRef} className="pt-xs opacity-0">
                <Button 
                  onClick={scrollToForm}
                  variant="primary"
                  className="px-lg py-sm cursor-pointer select-none"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight size={12} className="ml-xs" />
                </Button>
              </div>
            </div>
            {/* Right Asymmetrical Portrait Image Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative select-none">
              
              {/* Asymmetrical Framed Portrait Box */}
              <div 
                ref={heroImageRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative group w-full max-w-[380px] md:max-w-[420px] aspect-[4/3] md:aspect-[16/10] p-[12px] border border-accent/20 bg-bg-canvas opacity-0 transition-premium shadow-premium-lg cursor-pointer"
              >
                {/* Internal crop box */}
                <div className="relative w-full h-full overflow-hidden border border-border/20 rounded-card-sm bg-bg-alt">
                  <img
  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
  alt={`${service.title} corporate advisory illustration`}
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  loading="eager"
/>
                </div>

                {/* Framing Accents */}
                <div className="absolute top-0 left-0 w-md h-[1.5px] bg-accent" />
                <div className="absolute top-0 left-0 w-[1.5px] h-md bg-accent" />
                <div className="absolute bottom-0 right-0 w-md h-[1.5px] bg-accent" />
                <div className="absolute bottom-0 right-0 w-[1.5px] h-md bg-accent" />
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* 2. ABOUT THE SERVICE */}
      <section 
        ref={overviewRef}
        className="w-full bg-bg-base py-section border-hairline-b" 
        aria-label="About the Practice Area"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-xxl items-stretch">
            
            {/* Description Text */}
            <div className="lg:col-span-7 flex flex-col space-y-md">
              <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
                Practice Overview
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-primary font-medium tracking-tight">
                Corporate Definition &amp; Application
              </h2>
              <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
                {service.overview.whatIs}
              </p>
              
              {/* Insert Conditional Personality-driven UI Widget */}
              {renderVisualPersonalityWidget()}
            </div>

            {/* Application Summary Box */}
            <div className="lg:col-span-5 flex items-stretch mt-sm lg:mt-0 select-none">
              <div className="w-full bg-bg-canvas border border-border p-md md:p-lg flex flex-col justify-between rounded-card-sm shadow-premium-sm">
                <div className="flex flex-col space-y-sm">
                  <span className="font-sans text-[9px] font-bold text-accent tracking-widest uppercase">Target Focus</span>
                  <h3 className="font-serif text-lg font-medium text-primary">Who Requires This Practice</h3>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">
                    {service.overview.whoNeedsIt}
                  </p>
                </div>
                <div className="border-t border-border pt-sm mt-md">
                  <p className="font-sans text-xs font-semibold text-primary italic leading-relaxed">
                    "{service.overview.summaryBox}"
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. KEY FEATURES / CAPABILITIES */}
      <section className="w-full bg-bg-canvas py-section border-hairline-b" aria-label="Practice Capabilities">
        <Container>
          <div className="flex flex-col items-start mb-xl max-w-[700px]">
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
              Core Capabilities
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-primary font-medium tracking-tight mt-xs">
              Scope of Advisory Engagement
            </h2>
          </div>

          <div 
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-4 gap-sm md:gap-md w-full items-stretch"
          >
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="feature-card-item group border border-border bg-bg-canvas p-md flex flex-col justify-between rounded-card-sm transition-premium hover:border-accent/40 hover:shadow-premium-md opacity-0"
              >
                <div className="flex flex-col space-y-sm">
                  <div className="p-xs bg-bg-alt text-primary group-hover:bg-accent group-hover:text-bg-canvas transition-colors duration-300 self-start">
                    <ServiceIcon name={feat.iconName} size={18} />
                  </div>
                  <h3 className="font-serif text-base md:text-lg font-medium text-primary leading-snug">
                    {feat.title}
                  </h3>
                </div>
                <p className="font-sans text-xs text-text-muted leading-relaxed mt-sm">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. PROCESS / ENGAGEMENT TIMELINE */}
      <section data-theme="dark" className="w-full bg-primary py-section border-hairline-b relative overflow-hidden text-bg-canvas" aria-label="Practice Timeline">
        <div className="pointer-events-none absolute w-[40vw] max-w-[500px] h-[40vw] max-h-[500px] rounded-full bg-accent/[0.04] blur-3xl right-0 top-0" />
        
        <Container>
          <div className="relative z-10 flex flex-col items-start mb-xl max-w-[700px]">
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
              Execution Path
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-bg-canvas font-medium tracking-tight mt-xs">
              Chronological Delivery Blueprint
            </h2>
          </div>

          <div 
            ref={processRef}
            className="grid grid-cols-1 md:grid-cols-4 gap-sm md:gap-md w-full relative"
          >
            {service.timeline.map((step, idx) => (
              <div 
                key={idx}
                className="process-timeline-item flex flex-col p-md bg-primary-light/45 border border-border/10 rounded-card-sm shadow-premium-sm relative opacity-0 text-bg-canvas"
              >
                <span className="font-serif text-2xl font-bold text-accent/40">{step.phase}</span>
                <h3 className="font-serif text-base font-medium text-bg-canvas mt-xs">{step.title}</h3>
                <p className="font-sans text-xs text-[#B8C0CC] leading-relaxed mt-xs">{step.description}</p>
                
                {idx < 3 && (
                  <div className="hidden md:block absolute right-[-12px] top-1/2 -translate-y-1/2 w-[24px] h-[1px] bg-border/15 z-10" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. BENEFITS SECTION */}
      <section className="w-full bg-bg-canvas py-section border-hairline-b" aria-label="Practice Outcomes">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-xxl items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-5 flex flex-col space-y-md">
              <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
                Enterprise Value
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-primary font-medium tracking-tight">
                Tangible Business Outcomes
              </h2>
              <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
                By standardizing auditing routines, tax structures, and secretarial requirements, we shield your organization from regulatory penalties and optimize operating cash flows.
              </p>
            </div>

            {/* Right Checklist */}
            <div className="lg:col-span-7 flex flex-col space-y-md pt-sm lg:pt-0">
              {service.benefits.map((ben, idx) => (
                <div key={idx} className="flex items-start space-x-sm border-b border-border/60 pb-sm last:border-0">
                  <div className="w-[14px] h-[14px] text-accent shrink-0 mt-[4px]">
                    <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                  </div>
                  <div className="flex flex-col space-y-[2px]">
                    <span className="font-sans text-xs md:text-sm font-semibold text-primary">
                      {ben.title}
                    </span>
                    <span className="font-sans text-xs text-text-muted leading-relaxed">
                      {ben.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <section className="w-full bg-bg-base py-section border-hairline-b" aria-label="Practice Industries">
        <Container>
          <div className="flex flex-col items-center text-center mb-xl max-w-[700px] mx-auto">
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
              Compliance Reach
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-primary font-medium tracking-tight mt-xs">
              Primary Sectors Served
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-sm max-w-[900px] mx-auto select-none">
            {service.industries.map((ind, idx) => (
              <div 
                key={idx}
                className="px-md py-xs border border-border bg-bg-canvas text-primary font-sans text-xs font-semibold uppercase tracking-wider rounded-none hover:border-accent/40 transition-premium shadow-premium-sm"
              >
                {ind}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. FAQs */}
      <section className="w-full bg-bg-canvas py-section border-hairline-b" aria-label="Service FAQ Accordion">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-xxl">
            
            {/* Left FAQ Intro */}
            <div className="lg:col-span-5 flex flex-col space-y-sm">
              <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
                Practice Inquiry
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-primary font-medium tracking-tight">
                Service-Specific FAQs
              </h2>
              <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
                Review answers regarding compliance classifications, statutory thresholds, and document coordination schedules.
              </p>
            </div>

            {/* Right Accordion List */}
            <div className="lg:col-span-7 flex flex-col space-y-sm select-none">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-border bg-bg-canvas rounded-card-sm overflow-hidden transition-premium"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-md text-left font-serif text-base md:text-lg text-primary hover:text-accent transition-colors focus:outline-none cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown 
                        size={16} 
                        className={cn("text-text-muted transition-transform duration-300 shrink-0 ml-sm", isOpen && "rotate-180 text-accent")}
                      />
                    </button>
                    
                    <div 
                      className={cn(
                        "transition-all duration-500 ease-in-out overflow-hidden max-h-0 border-t border-transparent px-md bg-bg-alt/40",
                        isOpen && "max-h-[200px] py-md border-border"
                      )}
                    >
                      <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </Container>
      </section>

      {/* 8. FINAL CTA FORM */}
      <section 
        id="consultation-form"
        data-theme="dark"
        className="w-full bg-primary py-section overflow-hidden relative text-bg-canvas" 
        aria-label="Practice Consultation Booking"
      >
        {/* Subtle radial gradients for premium depth */}
        <div className="pointer-events-none absolute w-[60vw] max-w-[700px] h-[60vw] max-h-[700px] rounded-full bg-accent/[0.04] blur-3xl left-0 bottom-0" />
        <div className="pointer-events-none absolute w-[40vw] max-w-[500px] h-[40vw] max-h-[500px] rounded-full bg-accent/[0.02] blur-3xl right-0 top-0" />

        <Container>
          <div className="relative z-10 bg-primary-light/35 border border-border/10 rounded-card-lg p-md md:p-xl lg:p-xxl shadow-premium-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-xxl items-stretch">
              
              {/* Left Info Column */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-lg pr-0 lg:pr-lg text-left">
                <div className="flex flex-col space-y-md">
                  <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
                    Onboarding Request
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-bg-canvas font-medium tracking-tight leading-tight">
                    Discuss Your {service.title} Requirement
                  </h2>
                  <p className="font-sans text-xs md:text-sm text-[#B8C0CC] leading-relaxed max-w-[480px]">
                    Schedule a private advisory session to outline compliance parameters, document auditing, or structural tax questions.
                  </p>

                  <div className="flex flex-col space-y-xs pt-xs">
                    <div className="flex items-start space-x-sm">
                      <div className="w-[14px] h-[14px] text-accent shrink-0 mt-[4px]">
                        <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans text-xs md:text-sm font-semibold text-bg-canvas">Confidential Consultation</span>
                        <span className="font-sans text-[11px] text-[#B8C0CC]">Strict compliance with ICAI data protection standards.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-sm">
                      <div className="w-[14px] h-[14px] text-accent shrink-0 mt-[4px]">
                        <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans text-xs md:text-sm font-semibold text-bg-canvas">Partner Callback</span>
                        <span className="font-sans text-[11px] text-[#B8C0CC]">We review and follow up within 24 business hours.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-border/10 pt-xs" />

                {/* Coordinates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm pt-xs">
                  <div className="flex items-start space-x-sm">
                    <div className="p-xxs bg-primary-light/50 text-accent border border-border/10 rounded-none mt-xxs">
                      <Phone size={12} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[9px] font-bold text-[#B8C0CC] tracking-wider uppercase">Direct Line</span>
                      <a href={`tel:${CONTACT_DATA.phone}`} className="font-sans text-xs font-semibold text-bg-canvas hover:text-accent transition-colors mt-xxs">
                        {CONTACT_DATA.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-sm">
                    <div className="p-xxs bg-primary-light/50 text-accent border border-border/10 rounded-none mt-xxs">
                      <Mail size={12} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[9px] font-bold text-[#B8C0CC] tracking-wider uppercase">Secure Email</span>
                      <a href={`mailto:${CONTACT_DATA.email}`} className="font-sans text-xs font-semibold text-bg-canvas hover:text-accent transition-colors mt-xxs">
                        {CONTACT_DATA.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Booking Form */}
              <div className="lg:col-span-6 flex items-center justify-center mt-xl lg:mt-0 relative z-10">
                {formStatus === 'success' ? (
                  <div className="w-full bg-primary-light/45 border border-border/10 p-md md:p-lg flex flex-col items-center justify-center text-center rounded-card-sm shadow-premium-sm min-h-[380px] select-none text-bg-canvas">
                    <CheckCircle2 size={48} className="text-accent" />
                    <h3 className="font-serif text-xl md:text-2xl text-bg-canvas font-medium tracking-tight mt-md">
                      Callback Scheduled
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-[#B8C0CC] leading-relaxed max-w-[320px] mt-sm">
                      Thank you. Your request for {service.title} consultancy has been securely logged. A partner will contact you directly within 24 business hours.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="font-sans text-[10px] md:text-xs font-bold tracking-widest text-accent hover:text-bg-canvas uppercase mt-lg border-b border-accent hover:border-bg-canvas transition-colors pb-xxs cursor-pointer bg-transparent"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form 
                    ref={formRef}
                    onSubmit={handleFormSubmit}
                    className="w-full bg-primary-light/45 border border-border/10 p-md md:p-lg rounded-card-sm shadow-premium-sm flex flex-col justify-between space-y-md text-bg-canvas"
                  >
                    <div className="flex items-center justify-between border-b border-border/10 pb-sm select-none">
                      <span className="font-sans text-[10px] font-bold text-accent tracking-widest uppercase">
                        Selected: {service.title}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                      <div className="flex flex-col space-y-xxs">
                        <label htmlFor="detail-name" className="font-sans text-[10px] font-bold text-bg-canvas tracking-wider uppercase">
                          Full Name *
                        </label>
                        <input
                          id="detail-name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleFormChange}
                          className="font-sans text-xs bg-primary-light/50 border border-border/10 p-xs rounded-none text-bg-canvas focus:border-accent focus:ring-0 focus:outline-none transition-colors placeholder-[#B8C0CC]/40"
                          placeholder="Rajesh Mehta"
                        />
                      </div>
                      <div className="flex flex-col space-y-xxs">
                        <label htmlFor="detail-email" className="font-sans text-[10px] font-bold text-bg-canvas tracking-wider uppercase">
                          Email Address *
                        </label>
                        <input
                          id="detail-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          className="font-sans text-xs bg-primary-light/50 border border-border/10 p-xs rounded-none text-bg-canvas focus:border-accent focus:ring-0 focus:outline-none transition-colors placeholder-[#B8C0CC]/40"
                          placeholder="rajesh@mehta.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                      <div className="flex flex-col space-y-xxs">
                        <label htmlFor="detail-phone" className="font-sans text-[10px] font-bold text-bg-canvas tracking-wider uppercase">
                          Phone Number *
                        </label>
                        <input
                          id="detail-phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          className="font-sans text-xs bg-primary-light/50 border border-border/10 p-xs rounded-none text-bg-canvas focus:border-accent focus:ring-0 focus:outline-none transition-colors placeholder-[#B8C0CC]/40"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="flex flex-col space-y-xxs">
                        <label htmlFor="detail-company" className="font-sans text-[10px] font-bold text-bg-canvas tracking-wider uppercase">
                          Company Name
                        </label>
                        <input
                          id="detail-company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleFormChange}
                          className="font-sans text-xs bg-primary-light/50 border border-border/10 p-xs rounded-none text-bg-canvas focus:border-accent focus:ring-0 focus:outline-none transition-colors placeholder-[#B8C0CC]/40"
                          placeholder="Mehta Industries"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-xxs">
                      <label htmlFor="detail-message" className="font-sans text-[10px] font-bold text-bg-canvas tracking-wider uppercase">
                        Compliance Context Details
                      </label>
                      <textarea
                        id="detail-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleFormChange}
                        className="font-sans text-xs bg-primary-light/50 border border-border/10 p-xs rounded-none text-bg-canvas focus:border-accent focus:ring-0 focus:outline-none resize-none placeholder-[#B8C0CC]/40"
                        placeholder={`Provide context for your ${service.title} requirements...`}
                      />
                    </div>

                    <div className="pt-xs flex flex-col space-y-xs">
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-accent text-primary hover:bg-bg-canvas hover:text-primary hover:border-bg-canvas text-xs font-semibold tracking-widest uppercase p-sm rounded-none border border-accent transition-all duration-300 flex items-center justify-center space-x-sm cursor-pointer select-none disabled:opacity-50"
                      >
                        <span>{formStatus === 'submitting' ? 'Submitting...' : service.ctaText}</span>
                        <ArrowRight size={12} className="ml-xxs" />
                      </button>
                    </div>

                  </form>
                )}
              </div>

            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default ServiceDetail;
