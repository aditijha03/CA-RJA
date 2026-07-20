import { useEffect, useRef } from 'react';
import { Building2, Target, Shield, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MagneticButton } from '../components/ui/MagneticButton';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { hoverLift, hoverReset } from '../animations/helpers';
import { Helmet } from 'react-helmet-async';
import logoImg from '../assets/logo.png';
import { ClientSlider } from '../components/common/ClientSlider';
import { NEW_CLIENTS_DATA } from '../constants/data';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const clipRectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
      );
    }

    contentRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      }
    });

    ScrollTrigger.create({
      trigger: '.team-grid',
      start: 'top 85%',
      onEnter: () => {
        gsap.to('.team-reveal-overlay', {
          scaleY: 0,
          duration: 1.2,
          ease: 'expo.inOut',
          stagger: 0.2
        });
      }
    });

    ScrollTrigger.create({
      trigger: stat1Ref.current,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        if (stat1Ref.current) {
          gsap.fromTo(stat1Ref.current, { innerHTML: 0 }, {
            innerHTML: 10,
            duration: 2,
            ease: 'power2.out',
            snap: { innerHTML: 1 }
          });
        }
        if (stat2Ref.current) {
          gsap.fromTo(stat2Ref.current, { innerHTML: 0 }, {
            innerHTML: 1000,
            duration: 2.5,
            ease: 'power2.out',
            snap: { innerHTML: 1 }
          });
        }
      }
    });

    gsap.utils.toArray('.image-reveal-overlay').forEach((overlay: any) => {
      ScrollTrigger.create({
        trigger: overlay.parentElement,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(overlay, {
            scaleY: 0,
            duration: 1.5,
            ease: 'expo.inOut'
          });
        }
      });
    });

    // Winding SVG Path Animation    // 3. Draw the SVG Path using robust SVG Masking
    if (timelineRef.current && clipRectRef.current) {
      ScrollTrigger.create({
        trigger: timelineRef.current,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
        animation: gsap.to(clipRectRef.current, {
          attr: { height: 100 },
          ease: 'none'
        })
      });
    }

    gsap.utils.toArray('.timeline-item').forEach((item: any) => {
      const dot = item.querySelector('.timeline-dot');
      const innerDot = item.querySelector('.inner-dot');
      const content = item.querySelector('.timeline-content');
      
      gsap.set(content, { opacity: 0, x: item.classList.contains('text-left-content') ? -50 : 50 });

      ScrollTrigger.create({
        trigger: item,
        start: 'top 60%',
        onEnter: () => {
          gsap.to(dot, { backgroundColor: '#C6A15B', borderColor: '#C6A15B', scale: 1.2, duration: 0.4, ease: 'back.out(1.7)' });
          gsap.to(innerDot, { opacity: 0, duration: 0.2 });
          gsap.to(content, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' });
        },
        onLeaveBack: () => {
          gsap.to(dot, { backgroundColor: '#ffffff', borderColor: 'rgba(11, 35, 65, 0.2)', scale: 1, duration: 0.4 });
          gsap.to(innerDot, { opacity: 1, duration: 0.4 });
          gsap.to(content, { opacity: 0, x: item.classList.contains('text-left-content') ? -50 : 50, duration: 0.4 });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };



  const values = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Integrity & Trust",
      description: "We uphold the highest standards of professional ethics, ensuring transparency and honesty in all our engagements."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "Delivering superior quality services through continuous learning and rigorous quality control processes."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Client-Centric Approach",
      description: "We believe in building lasting relationships by understanding and addressing our clients' unique business needs."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Adapting to the dynamic business environment with innovative financial strategies and technological integration."
    }
  ];

  const pyramidRows = [
    // Row 1
    [
      { name: "CA. Rohit Jhunjhunwala", role: "Founder & Direct Tax Head", image: "/assets/images/team/CA. Rohit Jhunjhunwala - Founder & Direct Tax Head.png", bio: "" }
    ],
    // Row 2
    [
      { name: "CA. Mitesh Gogri", role: "CFO Service & Indirect Tax Head", image: "/assets/images/team/CA. Mitesh Gogri - CFO Service & Indirect Tax Head.png", bio: "" },
      { name: "CS. Priti Narnolia", role: "Compliance Head", image: "/assets/images/team/CS. Priti Narnolia - Compliance Head.png" }
    ],
    // Row 3
    [
      { name: "CA. Isha Jhunjhunwala", role: "Business Valuation Head", image: "/assets/images/team/CA. Isha Jhunjhunwala - Business Valuation Head.png" },
      { name: "CA. Nikita Agarwal", role: "GST Litigation and RERA Head", image: "/assets/images/team/CA. Nikita Agarwal - GST Litigation and RERA Head.png" },
      { name: "Prince Patel", role: "Audit Manager", image: "/assets/images/team/Prince Patel - Audit Manager.png" }
    ],
    // Row 4
    [
      { name: "CS. Kamna Vyas", role: "Senior Compliance Officer", image: "/assets/images/team/CS. Kamna Vyas - Senior Compliance Officer.png" },
      { name: "Kajal Makwana", role: "Senior Accountant", image: "/assets/images/team/Kajal Makwana - Senior Accountant.png" },
      { name: "Kunal Kalambe", role: "Senior Accountant", image: "/assets/images/team/Kunal Kalambe - Senior Accountant.png" },
      { name: "Mayur Parmar", role: "Senior Accountant", image: "/assets/images/team/Mayur Parmar - Senior Accountant.png" }
    ],
    // Row 5
    [
      { name: "Archana Gad", role: "Accountant", image: "/assets/images/team/Archana Gad - Accountant.png" },
      { name: "Chaitrali Deshmukh", role: "Junior Accountant", image: "/assets/images/team/Chaitrali Deshmukh - Junior Accountant.png" },
      { name: "Priya Purohit", role: "Junior Compliance Officer", image: "/assets/images/team/Priya Purohit - Junior Compliance Officer.png" },
      { name: "Riddhi Ranavade", role: "Junior Accountant", image: "/assets/images/team/Riddhi Ranavade - Junior Accountant.png" },
      { name: "Sundar Konar", role: "Junior Accountant", image: "/assets/images/team/SundarKonar - Junior Accountant.png" }
    ]
  ];

  return (
    <div className="min-h-screen bg-bg-base text-text-main pb-16 font-sans relative overflow-hidden">
      <Helmet>
        <title>About Us | R. Jhunjhunwala &amp; Associates</title>
        <meta name="description" content="Discover the legacy of R. Jhunjhunwala &amp; Associates, a premier Chartered Accountancy firm delivering comprehensive financial, advisory, and compliance solutions since 2016." />
      </Helmet>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-partners-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-partners-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes floating {
          0% { transform: translateY(0px) scale(1.02); }
          50% { transform: translateY(-15px) scale(1.05); }
          100% { transform: translateY(0px) scale(1.02); }
        }
      `}</style>
      {/* Blueprint Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{ backgroundImage: 'radial-gradient(#0B2341 1px, transparent 1px)', backgroundSize: '48px 48px' }}
      ></div>
      {/* Subtle Noise/Grain Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 mix-blend-multiply z-0"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      ></div>
      {/* Hero Section (Cinematic Landscape) */}
      <div className="relative w-full flex flex-col items-center">
        {/* Background Area (Stops after CTAs) */}
        <section data-theme="dark" className="relative w-full flex justify-center pt-[80px] pb-32 overflow-hidden border-hairline-b">
          {/* Full Landscape Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/assets/images/about/hero_bg_landscape.png" 
              alt="Luxurious corporate boardroom" 
              className="w-full h-full object-cover animate-[floating_15s_ease-in-out_infinite]"
            />
            {/* Dark Cinematic Overlay */}
            <div className="absolute inset-0 bg-[#0B2341]/70 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B2341]/60 via-transparent via-85% to-bg-base"></div>
          </div>

          {/* Content Wrapper */}
          <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-sans text-xs font-bold tracking-[0.15em] uppercase mb-8 opacity-0 backdrop-blur-md border border-white/20 shadow-lg" ref={addToRefs}>
              <Award className="w-4 h-4 text-accent" />
              <span className="text-white">Trusted Chartered Accountants</span>
            </div>
            
            <h1 
              ref={headerRef} 
              className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight mb-8 drop-shadow-2xl"
            >
              Empowering Growth Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2C88F] to-[#C6A15B]">Financial Excellence.</span>
            </h1>
            
            <p className="max-w-2xl text-lg md:text-xl text-white/80 font-sans leading-relaxed opacity-0 mb-12 drop-shadow-lg" ref={addToRefs}>
              R. Jhunjhunwala & Associates is a premier Chartered Accountancy firm committed to delivering comprehensive financial, advisory, and compliance solutions that drive sustainable business success.
            </p>
            
            {/* CTA Buttons matched to Homepage */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0" ref={addToRefs}>
              <MagneticButton>
                <Button variant="accent" href="/contact">Schedule a Consultation</Button>
              </MagneticButton>
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-[14px] bg-transparent border border-white/30 text-white rounded-sm font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Floating Trust Badge Pills (Overlapping the edge) */}
        <div className="container mx-auto px-6 lg:px-12 relative z-20 flex flex-col md:flex-row items-center justify-center gap-6 -mt-10 mb-16 opacity-0" ref={addToRefs}>
          <div className="flex items-center gap-4 bg-[#0B2341]/80 backdrop-blur-md border border-[#0B2341]/50 px-6 py-4 rounded-full shadow-xl">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-[#0B2341] object-cover" src="/assets/images/about/rajesh_founder.png" alt="Rajesh" />
              <img className="w-10 h-10 rounded-full border-2 border-[#0B2341] object-cover" src="/assets/images/about/sneha_partner.png" alt="Sneha" />
              <img className="w-10 h-10 rounded-full border-2 border-[#0B2341] object-cover" src="/assets/images/about/amit_partner.png" alt="Amit" />
            </div>
            <div className="text-left border-l border-white/20 pl-4">
              <p className="font-bold text-white text-sm">Backed by Experts</p>
              <p className="text-white/70 text-xs">Over 40 years combined</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#0B2341]/80 backdrop-blur-md border border-[#0B2341]/50 px-6 py-4 rounded-full shadow-xl">
            <div className="bg-accent p-2.5 rounded-full text-white shadow-md">
              <Target className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="font-bold text-white text-base leading-none mb-1">500+</p>
              <p className="text-white/70 text-[10px] uppercase tracking-[0.1em] leading-none">Businesses Scaled</p>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditations & Partners Banner */}
      <ClientSlider 
        title="Trusted By & Registered With" 
        clients={NEW_CLIENTS_DATA} 
        reverse={true} 
      />

      {/* Firm Overview */}
      <section className="bg-[#0B2341]/5 backdrop-blur-xl border border-[#0B2341]/10 py-24 rounded-[40px] mx-4 md:mx-12 shadow-premium-md mt-12 relative overflow-hidden">
        {/* Background Typography Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[12rem] lg:text-[18rem] font-serif font-black text-[#0B2341]/[0.03] pointer-events-none whitespace-nowrap select-none">
          EST. 2018
        </div>
        {/* Decorative Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#0B2341]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 ref={addToRefs} className="text-3xl md:text-4xl font-serif font-bold text-text-main opacity-0">A Legacy of Trust and Professionalism</h2>
              <p ref={addToRefs} className="text-lg text-text-muted leading-relaxed opacity-0">
                Founded with a vision to provide exceptional financial services, R. Jhunjhunwala & Associates has grown into a trusted partner for businesses across various sectors. Our expertise spans Audit, Taxation, GST, ROC Compliance, Financial Advisory, and Accounting Services.
              </p>
              <p ref={addToRefs} className="text-lg text-text-muted leading-relaxed opacity-0">
                We combine deep industry knowledge with a proactive approach to help our clients navigate complex regulatory environments, mitigate risks, and capitalize on new opportunities. Our team of seasoned professionals is dedicated to your financial well-being and corporate success.
              </p>
              <div ref={addToRefs} className="pt-6 opacity-0">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-4xl font-bold text-primary mb-2 font-serif"><span ref={stat1Ref}>10</span>+</h3>
                    <p className="text-text-muted font-medium">Years of Excellence</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-primary mb-2 font-serif"><span ref={stat2Ref}>1000</span>+</h3>
                    <p className="text-text-muted font-medium">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div ref={addToRefs} className="relative opacity-0">
              <div className="aspect-[4/5] rounded-card-lg overflow-hidden shadow-premium-lg relative">
                <div className="image-reveal-overlay absolute inset-0 bg-bg-base z-20 origin-top"></div>
                <img 
                  src="/assets/images/about/firm_overview.png" 
                  alt="Professional corporate meeting" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-bg-base p-8 rounded-card-lg shadow-premium-lg hidden md:block max-w-xs">
                <Building2 className="w-10 h-10 mb-4 text-bg-base" />
                <h4 className="text-xl font-bold mb-2 font-serif text-bg-base">Comprehensive Solutions</h4>
                <p className="text-bg-base/80 text-sm">Tailored financial strategies to meet your unique business objectives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firm History Timeline - Winding SVG Path */}
      <section id="timeline-section" className="bg-bg-alt py-32 relative overflow-hidden">
        
        {/* Financial Grid Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(11, 35, 65, 0.25) 2px, transparent 2px)', backgroundSize: '32px 32px' }}
        ></div>

        {/* Brand Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[650px] opacity-[0.08] pointer-events-none z-0 flex justify-center items-center">
          <img src={logoImg} alt="" className="w-full h-auto object-contain scale-[1.35] md:scale-[1.75]" />
        </div>

        {/* Background Winding Path SVG */}


        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 mb-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-text-main">A Legacy in Motion</h2>
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed">
              Trace our journey from a small office in Mumbai to a trusted advisory partner for over 500 businesses.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto relative" ref={timelineRef}>
          {/* Background Winding Path SVG */}
          <svg 
            className="absolute top-0 bottom-0 left-[30px] md:left-1/2 w-[40px] md:w-[120px] -translate-x-[20px] md:-translate-x-1/2 h-full z-0 pointer-events-none" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id="timeline-clip">
                <rect ref={clipRectRef} x="0" y="0" width="100" height="0" />
              </clipPath>
            </defs>

            {/* Desktop Curves */}
            <path 
              className="hidden md:block"
              d="M 50,0 C 50,6.25 90,6.25 90,12.5 C 90,25 10,25 10,37.5 C 10,50 90,50 90,62.5 C 90,75 10,75 10,87.5 C 10,93.75 50,93.75 50,100"
              fill="none" stroke="rgba(198,161,91,0.2)" strokeWidth="2" vectorEffect="non-scaling-stroke"
            />
            {/* Mobile Straight Line */}
            <path 
              className="md:hidden"
              d="M 50,0 L 50,100"
              fill="none" stroke="rgba(198,161,91,0.2)" strokeWidth="2" vectorEffect="non-scaling-stroke"
            />
            
            <g clipPath="url(#timeline-clip)">
              {/* Desktop Animated Foreground */}
              <path 
                className="hidden md:block"
                d="M 50,0 C 50,6.25 90,6.25 90,12.5 C 90,25 10,25 10,37.5 C 10,50 90,50 90,62.5 C 90,75 10,75 10,87.5 C 10,93.75 50,93.75 50,100"
                fill="none" stroke="#C6A15B" strokeWidth="4" vectorEffect="non-scaling-stroke"
              />
              {/* Mobile Animated Foreground */}
              <path 
                className="md:hidden"
                d="M 50,0 L 50,100"
                fill="none" stroke="#C6A15B" strokeWidth="4" vectorEffect="non-scaling-stroke"
              />
            </g>
          </svg>
          
          <div className="space-y-24 md:space-y-0 relative z-10 py-12">
            {[
  {
    watermark: "01",
    title: "Discover",
    subtitle: "Initial Consultation",
    desc: "Understand your business, financial goals, and compliance requirements through a personalized consultation with our experienced Chartered Accountants."
  },
  {
    watermark: "02",
    title: "Analyze",
    subtitle: "Document Assessment",
    desc: "Carefully review your financial records, identify compliance requirements, and uncover opportunities for optimization and risk reduction."
  },
  {
    watermark: "03",
    title: "Execute",
    subtitle: "Strategic Implementation",
    desc: "Deliver accurate tax filings, audits, GST services, registrations, and advisory solutions with complete transparency and precision."
  },
  {
    watermark: "04",
    title: "Support",
    subtitle: "Ongoing Compliance",
    desc: "Provide continuous compliance management, proactive financial guidance, and dedicated support to help your business grow with confidence."
  }
].map((milestone, i) => (
              <div 
                key={i} 
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center md:h-[400px] timeline-item ${i % 2 === 0 ? 'text-left-content' : 'text-right-content'}`}
              >
                {/* Timeline Dot (Mapped exactly to the SVG inflection points) */}
                <div className={`absolute left-[30px] md:left-1/2 top-0 md:top-1/2 z-10 mt-1 md:mt-0 md:-translate-y-1/2 ${i % 2 === 0 ? 'md:translate-x-[48px]' : 'md:-translate-x-[48px]'}`}>
                  <div className="timeline-dot w-6 h-6 bg-bg-base rounded-full border-[3px] border-primary/20 -translate-x-1/2 transition-all duration-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary/20 inner-dot transition-all duration-500"></div>
                  </div>
                </div>
                
                {/* Content Box */}
                <div className={`timeline-content col-span-1 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:col-start-1 md:pr-12 lg:pr-24' : 'md:col-start-2 md:pl-12 lg:pl-24'}`}>
                  <div className="bg-white/80 backdrop-blur-md border border-[#0B2341]/5 rounded-[2rem] p-8 md:p-10 shadow-premium-sm relative overflow-hidden group hover:shadow-premium-md transition-all duration-500 text-left">
                    {/* Giant Background Year Watermark */}
                    <div className="text-7xl md:text-9xl font-serif font-black text-[#0B2341]/[0.03] absolute -z-10 -bottom-4 -right-4 pointer-events-none group-hover:scale-105 group-hover:text-primary/5 transition-all duration-700">
                      {milestone.watermark}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{milestone.title}</h3>
                    {milestone.subtitle && (
                      <h4 className="text-xl md:text-2xl font-bold text-text-main mb-3">{milestone.subtitle}</h4>
                    )}
                    <p className="text-text-muted leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Vision Blockquote */}
      <section data-theme="dark" className="bg-primary text-bg-base py-24 relative overflow-hidden my-12 mx-4 md:mx-12 rounded-card-lg shadow-premium-lg z-10 opacity-0" ref={addToRefs}>
        <div className="absolute top-0 right-12 opacity-[0.05] pointer-events-none font-serif text-[24rem] leading-none text-white select-none translate-y-12">
          "
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-10 italic text-bg-base/90">
            "True financial advisory is not about balancing the books of yesterday; it is about engineering the growth of tomorrow. We build trust by delivering clarity in an increasingly complex world."
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="w-16 h-px bg-accent/50"></div>
            <div>
              <p className="text-2xl md:text-3xl font-bold font-serif text-white">CA. Rohit Jhunjhunwala</p>
              <p className="text-accent text-sm md:text-base tracking-widest uppercase mt-2">Founder & Direct Tax Head</p>
            </div>
            <div className="w-16 h-px bg-accent/50"></div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-bg-canvas text-text-main py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 ref={addToRefs} className="text-3xl md:text-4xl font-serif font-bold mb-6 opacity-0">Our Core Values</h2>
            <p ref={addToRefs} className="text-lg text-text-muted opacity-0">
              The principles that guide our practice and shape our culture, ensuring we consistently deliver the highest quality of service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                ref={addToRefs}
                onMouseEnter={(e) => hoverLift(e.currentTarget, -6)}
                onMouseLeave={(e) => hoverReset(e.currentTarget)}
                className="bg-[#0B2341]/[0.03] backdrop-blur-md border border-[#0B2341]/10 p-8 rounded-3xl transition-premium shadow-premium-sm hover:border-accent/40 hover:shadow-premium-md opacity-0 group relative overflow-hidden flex flex-col h-full cursor-pointer"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="backdrop-blur-sm border border-[#0B2341]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent [&_svg]:transition-colors [&_svg]:duration-300 [&_svg]:group-hover:text-bg-canvas transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-serif text-text-main">{value.title}</h3>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-bg-alt py-24 relative overflow-hidden border-t border-[#0B2341]/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#0B2341]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0B2341]/5 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Financial Grid Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(11, 35, 65, 0.25) 2px, transparent 2px)', backgroundSize: '32px 32px' }}
        ></div>

        {/* Brand Watermark */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0 flex justify-center items-center overflow-hidden">
          <img src={logoImg} alt="" className="w-full max-w-[1440px] h-auto object-contain" />
        </div>
        
        <div className="w-full px-4 md:px-8 xl:px-12 relative z-10 max-w-[2400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 ref={addToRefs} className="text-3xl md:text-4xl font-serif font-bold mb-6 opacity-0 text-text-main">Our Team</h2>
            <p ref={addToRefs} className="text-lg text-text-muted opacity-0">
              Meet the experienced professionals dedicated to driving your financial success with integrity and expertise.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-12 lg:gap-16 team-grid mb-24 w-full">
            {pyramidRows.map((row, rowIndex) => {
              // Determine card sizing based on hierarchy
              let cardSizeClass = "w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(20%-1.6rem)] max-w-[380px]";
              
              if (rowIndex <= 1) {
                // Top 3 Members (Row 1 and Row 2) get the largest size
                cardSizeClass = "w-full sm:w-[calc(80%-1rem)] md:w-[calc(50%-1rem)] lg:w-[calc(35%-1.6rem)] max-w-[500px]";
              }

              return (
                <div key={rowIndex} className="flex flex-wrap justify-center gap-6 lg:gap-8 w-full">
                  {row.map((member, memberIndex) => (
                    <div 
                      key={memberIndex} 
                      ref={addToRefs} 
                      className={`group opacity-0 flex flex-col items-center text-center ${cardSizeClass}`}
                    >
                      <div 
                        className={`w-full aspect-[4/5] overflow-hidden rounded-card-lg mb-4 shadow-premium-sm relative cursor-pointer bg-bg-alt ${rowIndex === 0 ? 'ring-2 ring-primary/20' : ''}`}
                        onMouseEnter={(e) => hoverLift(e.currentTarget, -5)}
                        onMouseLeave={(e) => hoverReset(e.currentTarget)}
                      >
                        <div className="team-reveal-overlay absolute inset-0 bg-bg-base z-20 origin-top"></div>
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                      </div>
                      <h3 className={`font-serif mb-1 text-text-main ${rowIndex <= 1 ? 'text-3xl font-bold' : 'text-xl font-bold'}`}>{member.name}</h3>
                      <p className={`text-primary font-medium ${rowIndex <= 1 ? 'text-lg' : 'text-sm'}`}>{member.role}</p>
                      {/* @ts-ignore */}
                      {member.bio && (
                        <p className="text-text-muted leading-relaxed mt-2 text-sm">
                          {/* @ts-ignore */}
                          {member.bio}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bg-base">
        <div className="container mx-auto px-6 lg:px-12">
          <div ref={addToRefs} className="bg-primary/10 rounded-card-lg p-12 text-center max-w-4xl mx-auto border border-primary/20 shadow-premium-sm opacity-0">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-main mb-6">Ready to Transform Your Financial Future?</h2>
            <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
              Partner with us for expert guidance, meticulous compliance, and strategic financial advisory tailored to your business needs.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-bg-base font-medium rounded-full hover:bg-primary-light transition-premium shadow-premium-md hover:shadow-premium-lg group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}