import React, { useEffect, useRef } from 'react';
import { Container } from '../components/common/Container';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Trophy,
  Building2,
  MapPin,
  Lock,
  Clock,
  Award,
  FileText,
  Users,
  Shield,
  Clock3,
} from "lucide-react";
import { fadeIn, splitReveal, hoverLift, hoverReset, counter } from '../animations/helpers';
import { cn } from '../utils/cn';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cleanups: (() => void)[] = [];

    // Query all elements for animation
    const taglines = section.querySelectorAll('.animate-tagline');
    const titles = section.querySelectorAll('.animate-title');
    const descs = section.querySelectorAll('.animate-desc');
    const buttons = section.querySelectorAll('.animate-buttons');
    const imageFrames = section.querySelectorAll('.animate-image-frame');
    const trustGrids = section.querySelectorAll('.animate-trust-grid');
    const statsBars = section.querySelectorAll('.animate-stats-bar');
    const credentials = section.querySelectorAll('.animate-credentials');

    taglines.forEach((el) => {
      const anim = fadeIn(el as HTMLElement, undefined, 0.1);
      if (anim) cleanups.push(anim.kill);
    });

    titles.forEach((el) => {
      const anim = splitReveal(el as HTMLElement, 0.2);
      if (anim) cleanups.push(anim.kill);
    });

    descs.forEach((el) => {
      const anim = fadeIn(el as HTMLElement, undefined, 0.45);
      if (anim) cleanups.push(anim.kill);
    });

    buttons.forEach((el) => {
      const anim = fadeIn(el as HTMLElement, undefined, 0.6);
      if (anim) cleanups.push(anim.kill);
    });

    imageFrames.forEach((el) => {
      const anim = fadeIn(el as HTMLElement, undefined, 0.65);
      if (anim) cleanups.push(anim.kill);
    });

    trustGrids.forEach((el) => {
      const anim = fadeIn(el as HTMLElement, undefined, 0.75);
      if (anim) cleanups.push(anim.kill);
    });

    statsBars.forEach((el) => {
      const anim = fadeIn(el as HTMLElement, undefined, 0.85);
      if (anim) cleanups.push(anim.kill);
    });

    credentials.forEach((el) => {
      const anim = fadeIn(el as HTMLElement, undefined, 0.95);
      if (anim) cleanups.push(anim.kill);
    });

    // Stats Bar counter animation trigger
    const statCounters = section.querySelectorAll('.hero-stat-counter');
    statCounters.forEach((el) => {
      const targetVal = parseFloat(el.getAttribute('data-target') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      if (targetVal) {
        const anim = counter(el as HTMLElement, targetVal, suffix);
        if (anim) cleanups.push(anim.kill);
      }
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  const handleMouseEnter = () => {
    if (imageFrameRef.current) {
      hoverLift(imageFrameRef.current, -6);
    }
  };

  const handleMouseLeave = () => {
    if (imageFrameRef.current) {
      hoverReset(imageFrameRef.current);
    }
  };

  const CREDENTIALS = [
    { name: 'ICAI', desc: 'MEMBER', logo: (
      <div className="flex items-center space-x-xs">
        <div className="w-[28px] h-[28px] rounded-full bg-[#071D49]/5 border border-[#071D49]/20 flex items-center justify-center font-serif text-[7.5px] font-bold text-[#071D49] shrink-0">ICAI</div>
        <span className="font-sans text-[14px] font-bold text-[#071D49] tracking-tight leading-none">ICAI</span>
      </div>
    )},
    { name: 'MSME', desc: 'REGISTERED', logo: (
      <div className="flex flex-col items-center">
        <span className="font-sans text-[14px] font-extrabold text-[#071D49] tracking-tighter leading-none border-b-2 border-[#071D49] pb-[1px]">MSME</span>
      </div>
    )},
    { name: 'Startup India', desc: 'RECOGNIZED', logo: (
      <div className="flex items-center font-sans text-[13px] font-extrabold text-[#071D49] tracking-tight leading-none">
        <span>Startup</span>
        <span className="text-[#C9962B] ml-[3px] border-b-2 border-[#C9962B] pb-[1px]">India</span>
      </div>
    )},
    { name: 'GST', desc: 'GSTN\nAPPROVED', logo: (
      <div className="px-[8px] py-[3px] bg-[#071D49] text-white font-sans text-[10px] font-extrabold tracking-wider rounded-[3px] leading-none">GST</div>
    )},
    { name: 'e-Filing', desc: 'INCOME TAX\nDEPARTMENT', logo: (
      <div className="flex items-center font-sans text-[13px] font-extrabold text-[#006699] tracking-tight leading-none">
        <span>e-</span>
        <span className="border-b border-[#006699] pb-[1px]">Filing</span>
      </div>
    )},
    { name: 'ROC', desc: 'MINISTRY OF\nCORPORATE AFFAIRS', logo: (
      <span className="font-sans text-[14px] font-extrabold text-[#071D49] tracking-wider leading-none">ROC</span>
    )}
  ];

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative w-full bg-[#FAFAFA] overflow-hidden border-b border-[#E7E7E7]"
      aria-label="R Jhunjhunwala & Associates Landing Hero"
    >
      {/* Background Radial Glow & Faint Texture */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Faint luxury radial glow behind hero image (desktop right side) */}
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#C9962B]/3 blur-[120px] hidden lg:block" />
        {/* Faint luxury dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#071d49_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
      </div>

      {/* Desktop-dedicated layout */}
      <Container className="relative hidden lg:flex flex-col pt-2 pb-6 z-10">
        
        {/* Main Grid: Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-md items-center py-1">
          
          {/* Left Column: 48% (spans 6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-sm">
            
            {/* Tagline / Eyebrow */}
            <div className="flex items-center space-x-xs animate-tagline opacity-0">
              <div className="w-[14px] h-[1.5px] bg-[#C9962B]" />
              <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C9962B] uppercase">
                ESTABLISHED TRUST. EXCELLENCE DRIVEN.
              </span>
            </div>

            {/* Typography Heading */}
            <h1
              className="font-serif lg:text-[62px] xl:text-[66px] text-[#071D49] leading-[1.1] font-medium tracking-tight mt-0 animate-title"
            >
              Audit Excellence.<br />
              <span className="font-serif italic font-normal text-[#071D49]">Business Growth</span>
              <span className="text-[#C9962B]">.</span>
            </h1>

            {/* Subheading description */}
            <p
  className="font-sans text-sm text-[#5E6472] leading-relaxed max-w-[500px] animate-desc opacity-0 mt-0"
>
  <span className="text-[#071D49] font-semibold">
    R Jhunjhunwala & Associates
  </span>{" "}
  is a trusted Chartered Accountant firm offering{" "}
  <span className="text-[#071D49]">Tax Consultancy</span>,{" "}
  <span className="text-[#071D49]">GST Services</span>, Income Tax Filing,
  Audit & Assurance, Accounting, Company Registration, ROC Compliance, and
  Business Advisory solutions for{" "}
  <span className="text-[#C9962B]">startups, SMEs, and growing enterprises</span>{" "}
  across India.
</p>

            {/* Action buttons */}
            <div
              className="flex flex-row items-center space-x-md w-auto pt-xs animate-buttons opacity-0"
            >
              <Link
                to="/contact"
                className="h-[54px] px-10 inline-flex items-center justify-center bg-gradient-to-r from-[#C9962B] to-[#D9A63B] text-white font-sans text-xs font-bold tracking-widest uppercase transition-premium shadow-[0_4px_16px_rgba(201,150,43,0.15)] hover:shadow-[0_8px_24px_rgba(201,150,43,0.25)] hover:-translate-y-[3px] select-none cursor-pointer border border-[#C9962B]/20 rounded-none"
              >
                <span>Schedule Free Consultation</span>
                <span className="ml-xs">&rarr;</span>
              </Link>
              <a
                href="#services"
                className="h-[54px] px-10 inline-flex items-center justify-center bg-white text-[#071D49] border border-[#071D49] font-sans text-xs font-bold tracking-widest uppercase transition-premium hover:bg-[#071D49]/5 select-none cursor-pointer rounded-none"
              >
                Explore Services
              </a>
            </div>

            {/* Trust items */}
            {/* Premium Trust Ribbon */}
<div className="w-full border-t border-[#E8E8E8] pt-2 mt-6 animate-trust-grid opacity-0">
  <div className="flex items-center justify-between">

    {[
      {
        title: "ESTABLISHED",
        subtitle: "2016",
        icon: Building2,
      },
      {
        title: "ICAI",
        subtitle: "Registered Firm",
        icon: ShieldCheck,
      },
      {
        title: "QUALIFIED TEAM",
        subtitle: "CA Professionals",
        icon: Users,
      },
      {
        title: "ETHICAL &",
        subtitle: "Confidential",
        icon: Shield,
      },
      {
        title: "TIMELY",
        subtitle: "Compliance Support",
        icon: Clock3,
      },
    ].map((item, index) => (
      <React.Fragment key={index}>

        <div className="flex items-center gap-3">

          <item.icon
            size={20}
            strokeWidth={1.8}
            className="text-[#C9962B] shrink-0"
          />

          <div className="leading-tight">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#071D49]">
              {item.title}
            </p>

            <p className="text-[10px] text-[#5E6472]">
              {item.subtitle}
            </p>
          </div>

        </div>

        {index !== 4 && (
          <div className="h-9 w-px bg-[#E5E5E5]" />
        )}

      </React.Fragment>
    ))}

  </div>
</div>

          </div>

          {/* Right Column: 52% (spans 6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-end justify-center w-full select-none">
            
            {/* Photo frame with L-shapes */}
            <div 
              ref={imageFrameRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
             className="relative w-full max-w-[650px] aspect-[720/430] bg-white border-[8px] border-white p-0 rounded-xl overflow-visible shadow-[0_24px_60px_rgba(7,29,73,0.10)] hover:shadow-[0_32px_80px_rgba(7,29,73,0.14)] transition-all duration-500 cursor-pointer opacity-0 animate-slow-float animate-image-frame"
            >
              {/* L-shapes */}
              <div className="absolute top-[-10px] left-[-10px] w-6 h-6 border-t-2 border-l-2 border-[#C9962B] pointer-events-none rounded-tl-[10px]" />
              <div className="absolute bottom-[-10px] right-[-10px] w-6 h-6 border-b-2 border-r-2 border-[#C9962B] pointer-events-none rounded-br-[10px]" />

              {/* Crop box */}
              <div className="relative w-full h-full overflow-hidden rounded-[8px]">
                <img
                  src="/assets/images/hero1.png"
                  alt="R Jhunjhunwala & Associates Partners reviewing client reports"
                  className="w-full h-full object-cover scale-100 hover:scale-[1.02] transition-transform duration-[800ms] ease-out"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 z-30 bg-[#071D49]/90 backdrop-blur-[4px] text-white p-3 rounded-lg shadow-premium-lg flex flex-col items-center justify-center min-w-[100px] border border-white/10 select-none">
                <Trophy size={16} className="text-[#C9962B] mb-1" />
                <span className="font-sans text-xl font-bold leading-none text-[#C9962B]">10+</span>
                <span className="font-sans text-[8px] font-semibold text-white/90 tracking-wider uppercase text-center mt-1 leading-tight">
                  Years of <br /> Excellence
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Floating Social Bar */}
<div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 bg-white shadow-[0_12px_36px_-6px_rgba(7,29,73,0.1)] py-5 px-4 rounded-full flex flex-col space-y-6 items-center border border-[#E7E7E7] pointer-events-auto">
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn" className="text-[#0077B5] hover:scale-115 transition-transform duration-200">
    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .56 1 1.39v4.73h2.8M6.5 8.37a1.37 1.37 0 0 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.13H5v8.37h3z"/></svg>
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook" className="text-[#1877F2] hover:scale-115 transition-transform duration-200">
    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram" className="text-[#E4405F] hover:scale-115 transition-transform duration-200">
    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
  </a>
  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp" className="text-[#25D366] hover:scale-115 transition-transform duration-200">
    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.797 1.452 5.432 0 9.851-4.416 9.854-9.848.002-2.63-1.02-5.101-2.871-6.957C16.566 1.958 14.1 .936 11.999.936c-5.442 0-9.866 4.417-9.87 9.85-.001 2.225.586 4.391 1.696 6.32l-.999 3.65 3.821-.992zm11.233-5.246c-.268-.134-1.588-.784-1.834-.874-.246-.09-.425-.134-.604.134-.179.269-.693.874-.85 1.053-.157.179-.313.202-.581.067-.268-.134-1.134-.419-2.16-1.336-.799-.713-1.337-1.593-1.494-1.862-.157-.269-.017-.414.118-.548.121-.12.268-.313.403-.47.134-.157.179-.269.268-.449.09-.179.045-.336-.022-.47-.067-.134-.604-1.456-.827-1.993-.217-.523-.455-.453-.624-.461-.16-.008-.344-.01-.528-.01-.184 0-.485.069-.74.346-.253.278-.968.947-.968 2.31 0 1.363.992 2.68 1.104 2.833.112.153 1.953 2.982 4.73 4.181.661.285 1.177.455 1.579.583.664.211 1.269.181 1.748.11.534-.08 1.588-.65 1.811-1.277.224-.628.224-1.166.157-1.277-.067-.111-.246-.179-.514-.313z"/></svg>
  </a>
</div>

        {/* Bottom Statistics Bar */}
        <div 
          data-theme="dark"
          className="w-full bg-[#071D49] rounded-card-sm border border-white/5 shadow-[0_16px_36px_-8px_rgba(7,29,73,0.12)] mt-3 lg:mt-4 py-4 lg:py-0 lg:h-[76px] relative z-10 select-none overflow-hidden animate-stats-bar opacity-0"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 h-full items-center">
            {[
              { val: 10, suffix: '+', displayVal: '10+', label: 'Years of Experience', icon: Trophy },
              { val: 1000, suffix: '+', displayVal: '1000+', label: 'Businesses Served', icon: Building2 },
              { val: 2000, suffix: '+', displayVal: '2000+', label: 'GST Returns Filed', icon: FileText },
              { val: 20, suffix: '+', displayVal: '20+', label: 'Industries Served', icon: Award },
              { val: null, suffix: '', displayVal: 'PAN India', label: 'Service Coverage', icon: MapPin }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "flex items-center space-x-sm justify-center py-3 px-4 h-full text-left border-white/10 border-b md:border-b-0 border-r md:border-r last:border-b-0 last:border-r-0",
                  idx === 4 ? "col-span-2 md:col-span-1 border-r-0" : "",
                  (idx === 1 || idx === 3) && "border-r-0 md:border-r"
                )}
              >
                <div className="text-[#C9962B] shrink-0">
                  <item.icon size={26} />
                </div>
                <div className="flex flex-col">
                  {item.val !== null ? (
                    <span 
                      className="hero-stat-counter font-sans text-base md:text-lg font-bold text-white leading-tight"
                      data-target={item.val}
                      data-suffix={item.suffix}
                    >
                      {item.displayVal}
                    </span>
                  ) : (
                    <span className="font-sans text-base md:text-lg font-bold text-white leading-tight">
                      {item.displayVal}
                    </span>
                  )}
                  <span className="font-sans text-[11px] text-white/70  tracking-[0.08em]
font-medium leading-none mt-1">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Credentials section */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-md w-full mt-xs pb-md animate-credentials"
        >
          {/* Credentials Card */}
          <div className="lg:col-span-8 bg-white py-4 px-6 rounded-xl border border-[#E8E8E8] shadow-[0_10px_35px_rgba(7,29,73,0.04)] flex items-center hover:border-[#C9962B]/10 hover:shadow-premium-md transition-all duration-300">
            {/* Title Column */}
            <div className="w-[18%] pr-4 border-r border-[#E7E7E7]/80 flex items-center h-full">
              <span className="font-sans text-[10px] font-extrabold text-[#071D49] tracking-wider uppercase block leading-tight">
                Our Credentials <br />
                &amp; Associations
              </span>
            </div>
            {/* Logos Grid */}
            <div className="flex-1 grid grid-cols-6 items-stretch py-1 pl-4">
              {CREDENTIALS.map((item, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "flex flex-col items-center justify-between text-center px-xs min-h-[72px]",
                    idx < 5 ? "border-r border-[#E7E7E7]/70" : ""
                  )}
                >
                  <div className="h-[36px] flex items-center justify-center">
                    {item.logo}
                  </div>
                  <span className="text-[7.5px] font-extrabold uppercase tracking-[0.12em] text-[#5E6472] leading-tight block mt-3 whitespace-pre-line">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Card */}
          <div className="lg:col-span-4 bg-white py-4 px-6 rounded-xl border border-[#E8E8E8] shadow-[0_10px_35px_rgba(7,29,73,0.04)] flex items-center space-x-md text-left hover:border-[#C9962B]/10 hover:shadow-premium-md transition-all duration-300">
            <img 
              src="/assets/images/team/CA. Rohit Jhunjhunwala - Founder & Direct Tax Head.png" 
              alt="CA. Rohit Jhunjhunwala" 
              className="w-[64px] h-[64px] rounded-full object-cover shrink-0 border border-[#C9962B]/20 bg-[#F7F8FA] shadow-sm"
            />
            <div className="flex-1 flex flex-col justify-center space-y-1">
              <h4 className="font-sans text-[11px] font-bold text-[#071D49] leading-tight">
                Message from Founder
              </h4>
              <p className="font-sans text-[9.5px] text-[#5E6472] leading-relaxed">
                At R Jhunjhunwala & Associates, we believe in building long-term relationships by delivering Compliance, Transparency and Value to every client.
              </p>
              <div className="pt-0.5">
                <span className="font-sans text-[9px] font-bold text-[#071D49] block leading-none">
                  – CA. Rohit Jhunjhunwala
                </span>
                <span className="font-sans text-[7.5px] text-[#5E6472] uppercase tracking-wider font-semibold block mt-0.5">
                  Founder & Direct Tax Head
                </span>
              </div>
            </div>
          </div>
        </div>

      </Container>

      {/* Mobile-dedicated layout */}
      <Container className="relative flex flex-col pt-[22px] pb-md block lg:hidden w-full space-y-md z-10">
        
        {/* 1. Small Branding Header */}
       

        {/* 2. Trust Label / Tagline */}
        <div className="flex items-center justify-center space-x-xs animate-tagline opacity-0">
          <div className="w-[12px] h-[1.5px] bg-[#C9962B]" />
          <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-[#C9962B] uppercase">
            ESTABLISHED TRUST. EXCELLENCE DRIVEN.
          </span>
          <div className="w-[12px] h-[1.5px] bg-[#C9962B]" />
        </div>

        {/* 3. Heading */}
        <h1 className="font-serif text-[42px] text-center text-[#071D49] leading-[1.15] font-medium tracking-tight animate-title mt-0">
          Chartered Accountants.<br />
          <span className="font-serif italic font-normal text-[#071D49]">Business Growth</span>
          <span className="text-[#C9962B]">.</span>
        </h1>

        {/* 4. Hero Image (Directly below heading for mobile engagement) */}
        <div className="flex justify-center w-full animate-image-frame opacity-0">
          <div className="relative w-full max-w-[380px] aspect-[720/470] bg-white border-[6px] border-white p-0 shadow-premium-lg rounded-lg select-none">
            {/* L-shapes */}
            <div className="absolute top-[-8px] left-[-8px] w-5 h-5 border-t-2 border-l-2 border-[#C9962B] pointer-events-none rounded-tl-lg" />
            <div className="absolute bottom-[-8px] right-[-8px] w-5 h-5 border-b-2 border-r-2 border-[#C9962B] pointer-events-none rounded-br-lg" />

            <div className="relative w-full h-full overflow-hidden rounded-md">
              <img
                src="/assets/images/hero1.png"
                alt="Partners reviewing client reports"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-4 left-4 z-30 bg-[#071D49]/95 backdrop-blur-[4px] text-white p-2 rounded shadow-premium-md flex flex-col items-center justify-center min-w-[76px] border border-white/12">
              <Trophy size={12} className="text-[#C9962B] mb-0.5" />
              <span className="font-sans text-sm font-bold leading-none text-[#C9962B]">10+</span>
              <span className="font-sans text-[6.5px] font-semibold text-white/90 tracking-wider uppercase text-center mt-0.5 leading-tight">
                Years of <br /> Excellence
              </span>
            </div>
          </div>
        </div>

        {/* 5. Description */}
        <p className="font-sans text-xs text-center text-[#5E6472] leading-relaxed max-w-[420px] mx-auto animate-desc opacity-0 mt-0">
          R Jhunjhunwala & Associates is a trusted Chartered Accountant firm offering Tax Consultancy, GST Services, Income Tax Filing, Audit & Assurance, Accounting, Company Registration, ROC Compliance, and Business Advisory solutions across India.
        </p>

        {/* 6. CTA Buttons (Full-width, large tap targets) */}
        <div className="flex flex-col space-y-xs w-full max-w-[380px] mx-auto pt-xxs animate-buttons opacity-0">
          <Link
            to="/contact"
            className="w-full h-[52px] inline-flex items-center justify-center bg-gradient-to-r from-[#C9962B] to-[#D9A63B] text-white font-sans text-xs font-semibold tracking-widest uppercase transition-premium shadow-premium-md"
          >
            <span>Schedule Free Consultation</span>
            <span className="ml-xs">&rarr;</span>
          </Link>
          <a
            href="#services"
            className="w-full h-[52px] inline-flex items-center justify-center bg-white text-[#071D49] border border-[#071D49] font-sans text-xs font-semibold tracking-widest uppercase transition-premium"
          >
            Explore Services
          </a>
        </div>

        {/* 7. Scrollable Trust Badges */}
        <div  className="w-full border-t border-b border-[#E7E7E7]/60 py-sm overflow-x-auto scrollbar-none flex space-x-md">
          {[
            { label: 'ICAI Registered', icon: ShieldCheck, desc: 'Firm' },
            { label: '10+ Years of', icon: Trophy, desc: 'Experience' },
            { label: '500+ Businesses', icon: Building2, desc: 'Served' },
            { label: 'PAN India', icon: MapPin, desc: 'Service Coverage' },
            { label: 'Confidential', icon: Lock, desc: '& Secure' },
            { label: 'Timely Compliance', icon: Clock, desc: 'Guaranteed' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center space-y-[2px] min-w-[110px] shrink-0">
              <item.icon size={14} className="text-[#C9962B]" />
              <span className="font-sans text-[8.5px] font-bold text-[#071D49] tracking-wider uppercase leading-none mt-1">
                {item.label}
              </span>
              <span className="font-sans text-[7.5px] text-[#5E6472] leading-none">
                {item.desc}
              </span>
            </div>
          ))}
        </div>

        {/* 8. Statistics Strip (Mobile horizontal scroll matching desktop) */}
        <div className="w-full max-w-[100vw] overflow-x-auto scrollbar-none animate-fade-in px-4 -mx-4 pb-2">
          <div 
            data-theme="dark"
            className="w-max bg-[#071D49] rounded-card-sm border border-white/5 shadow-[0_16px_36px_-8px_rgba(7,29,73,0.12)] relative z-10 select-none flex h-[70px] items-center"
          >
            {[
              { val: 10, suffix: '+', displayVal: '10+', label: 'Years of Experience', icon: Trophy },
              { val: 1000, suffix: '+', displayVal: '1000+', label: 'Businesses Served', icon: Building2 },
              { val: 2000, suffix: '+', displayVal: '2000+', label: 'GST Returns Filed', icon: FileText },
              { val: 20, suffix: '+', displayVal: '20+', label: 'Industries Served', icon: Award },
              { val: null, suffix: '', displayVal: 'PAN India', label: 'Service Coverage', icon: MapPin }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "flex items-center space-x-sm justify-center px-4 h-full text-left border-white/10",
                  idx !== 4 ? "border-r" : ""
                )}
              >
                <div className="text-[#C9962B] shrink-0">
                  <item.icon size={22} />
                </div>
                <div className="flex flex-col pr-1">
                  {item.val !== null ? (
                    <span 
                      className="hero-stat-counter font-sans text-sm font-bold text-white leading-tight"
                      data-target={item.val}
                      data-suffix={item.suffix}
                    >
                      {item.displayVal}
                    </span>
                  ) : (
                    <span className="font-sans text-sm font-bold text-white leading-tight">
                      {item.displayVal}
                    </span>
                  )}
                  <span className="font-sans text-[10px] text-white/70 tracking-[0.08em] font-medium leading-none mt-1 whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 9. Credentials Cards */}
        <div className="w-full max-w-[380px] mx-auto flex flex-col space-y-sm pt-xs animate-credentials opacity-0">
          {/* Credentials */}
          <div className="bg-white p-sm rounded-lg border border-[#E7E7E7] shadow-premium-sm flex flex-col">
            <span className="font-sans text-[8px] font-bold text-[#071D49] tracking-wider uppercase block text-center mb-3">
              Our Credentials &amp; Associations
            </span>
            <div className="grid grid-cols-3 gap-y-sm gap-x-xs justify-items-center items-center">
              {CREDENTIALS.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center">
                  <div className="h-[28px] flex items-center justify-center mb-1">
                    {item.logo}
                  </div>
                  <span className="font-sans text-[7px] font-bold tracking-wider text-[#5E6472] uppercase leading-tight">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="bg-white p-sm rounded-lg border border-[#E7E7E7] shadow-premium-sm flex flex-col items-center text-center">
            <img 
              src="/assets/images/team/CA. Rohit Jhunjhunwala - Founder & Direct Tax Head.png" 
              alt="CA. Rohit Jhunjhunwala" 
              className="w-[48px] h-[48px] rounded-full object-cover border border-[#C9962B]/30 mb-2 shadow-premium-sm"
            />
            <div className="relative">
              <span className="absolute top-[-10px] left-1/2 -translate-x-1/2 font-serif text-[32px] text-[#C9962B]/15 leading-none select-none">“</span>
              <p className="font-sans text-[10px] text-[#5E6472] leading-relaxed italic px-sm">
                Our commitment is to deliver accurate, compliant and timely solutions with transparency, integrity and a client-first approach.
              </p>
            </div>
            <div className="mt-2">
              <h4 className="font-serif text-[11px] font-bold text-[#071D49]">CA. Rohit Jhunjhunwala</h4>
              <span className="font-sans text-[7.5px] text-[#C9962B] uppercase tracking-wider font-semibold">Founder & Direct Tax Head</span>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};