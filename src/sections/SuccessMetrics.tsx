import React, { useEffect, useRef } from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/ui/Button';
import { splitReveal, fadeIn, counter } from '../animations/helpers';
import gsap from 'gsap';

export const SuccessMetrics: React.FC = () => {
  const leftColRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanups: (() => void)[] = [];
    const container = dashboardRef.current;
    if (!container) return;

    // Left column reveals
    if (leftColRef.current) {
      const title = leftColRef.current.querySelector('h2');
      const desc = leftColRef.current.querySelector('.desc-text');
      const support = leftColRef.current.querySelector('.support-text');
      const btn = leftColRef.current.querySelector('.btn-wrapper');
      
      if (title) {
        const anim = splitReveal(title, 0.1);
        if (anim) cleanups.push(anim.kill);
      }
      if (desc) {
        const anim = fadeIn(desc as HTMLElement, undefined, 0.3);
        if (anim) cleanups.push(anim.kill);
      }
      if (support) {
        const anim = fadeIn(support as HTMLElement, undefined, 0.4);
        if (anim) cleanups.push(anim.kill);
      }
      if (btn) {
        const anim = fadeIn(btn as HTMLElement, undefined, 0.5);
        if (anim) cleanups.push(anim.kill);
      }
    }

    // 1. Stagger counter numbers in the dashboard
    const counters = container.querySelectorAll('.metric-number');
    counters.forEach((el) => {
      const targetVal = parseFloat(el.getAttribute('data-value') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      const anim = counter(el as HTMLElement, targetVal, suffix);
      if (anim) cleanups.push(anim.kill);
    });

    // 2. SVG Line drawing for Tax Savings Chart
    const pathTax = container.querySelector('.chart-line-tax') as SVGPathElement;
    if (pathTax) {
      const length = pathTax.getTotalLength() || 320;
      gsap.set(pathTax, { strokeDasharray: length, strokeDashoffset: length });
      
      const tween = gsap.to(pathTax, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: pathTax,
          start: 'top 92%',
          toggleActions: 'play none none none',
        }
      });
      cleanups.push(() => {
        if (tween.scrollTrigger) tween.scrollTrigger.kill();
        tween.kill();
      });
    }

    // 3. SVG Radial Circle progress for Compliance Accuracy
    const circleCompliance = container.querySelector('.chart-circle-compliance') as SVGCircleElement;
    if (circleCompliance) {
      const length = 2 * Math.PI * 34; // r=34, circumference = ~213.62
      gsap.set(circleCompliance, { strokeDasharray: length, strokeDashoffset: length });
      
      const targetOffset = length * (1 - 0.999); // 99.9% filled
      const tween = gsap.to(circleCompliance, {
        strokeDashoffset: targetOffset,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: circleCompliance,
          start: 'top 92%',
          toggleActions: 'play none none none',
        }
      });
      cleanups.push(() => {
        if (tween.scrollTrigger) tween.scrollTrigger.kill();
        tween.kill();
      });
    }

    // 4. Stagger SVG Vertical growth bars for Clients Served
    const growthBars = container.querySelectorAll('.chart-growth-bar');
    const barContainer = container.querySelector('.chart-bars-container');
    if (growthBars.length && barContainer) {
      const tween = gsap.fromTo(growthBars, 
        { scaleY: 0, transformOrigin: 'bottom' },
        {
          scaleY: 1,
          duration: 1.4,
          stagger: 0.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: barContainer,
            start: 'top 92%',
            toggleActions: 'play none none none',
          }
        }
      );
      cleanups.push(() => {
        if (tween.scrollTrigger) tween.scrollTrigger.kill();
        tween.kill();
      });
    }

    // 5. Area Sparkline reveal for Registered Businesses
    const pathArea = container.querySelector('.chart-area-path') as SVGPathElement;
    const pathAreaFill = container.querySelector('.chart-area-fill') as SVGPathElement;
    if (pathArea && pathAreaFill) {
      const length = pathArea.getTotalLength() || 150;
      gsap.set(pathArea, { strokeDasharray: length, strokeDashoffset: length });
      gsap.set(pathAreaFill, { opacity: 0, scaleY: 0.5, transformOrigin: 'bottom' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pathArea,
          start: 'top 92%',
          toggleActions: 'play none none none',
        }
      });

      tl.to(pathArea, { strokeDashoffset: 0, duration: 1.5, ease: 'power3.out' })
        .to(pathAreaFill, { opacity: 1, scaleY: 1, duration: 0.8, ease: 'power2.out' }, '-=0.8');

      cleanups.push(() => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
      });
    }

    // Subtle parallax on the entire dashboard container
    const tweenParallax = gsap.fromTo(container, 
      { y: 40 },
      {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        }
      }
    );
    cleanups.push(() => {
      if (tweenParallax.scrollTrigger) tweenParallax.scrollTrigger.kill();
      tweenParallax.kill();
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <section 
      id="success-metrics" 
      className="w-full bg-gradient-to-tr from-neutral-50 via-stone-50 to-amber-50/30 py-20 lg:py-32 border-b border-neutral-200 overflow-hidden relative text-neutral-800"
      aria-label="Firm Performance &amp; Success Metrics"
    >
      {/* Precision Micro Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Light Luxury Ambient Radial Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Descriptions & Actions */}
          <div 
            ref={leftColRef}
            className="lg:col-span-4 flex flex-col justify-center space-y-6 pr-0 lg:pr-4"
          >
            <div className="flex items-center space-x-2">
              <span className="h-[1px] w-6 bg-amber-600" />
              <span className="font-mono text-[10px] md:text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                Performance Index
              </span>
            </div>
            
            <h2 className="font-serif text-4xl xl:text-5xl text-neutral-900 font-normal tracking-tight leading-tight">
              Measuring Trust.<br />
              <span className="text-neutral-500 italic">Delivering Impact.</span>
            </h2>
            
            <p className="desc-text font-sans text-sm text-neutral-600 leading-relaxed opacity-0">
              We translate complex statutory compliance structures into optimized financial performance. Our track record is documented across institutional filings and corporate capital assets.
            </p>
            
            <p className="support-text font-sans text-xs text-neutral-500 leading-relaxed border-l-2 border-amber-600/30 pl-4 opacity-0">
              Metrics correspond to active corporate logs, verified annual returns, and cross-border entities structured under continuous compliance guidance.
            </p>

            <div className="btn-wrapper pt-2 opacity-0">
              <Button variant="outline" className="border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100" href="#contact">
                Request Practice Profile
              </Button>
            </div>
          </div>

          {/* Right Column: Executive Dashboard Grid */}
          <div 
            ref={dashboardRef}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full items-stretch"
          >
            
            {/* Widget 1: Tax Savings (₹12Cr+) */}
            <div className="md:col-span-2 bg-white border border-neutral-200 p-6 flex flex-col justify-between rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden select-none min-h-[200px]">
              <div className="flex justify-between items-start z-10">
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] font-bold text-amber-700 tracking-wider uppercase">
                    Tax Savings Enabled
                  </span>
                  <span 
                    className="metric-number font-serif text-4xl md:text-5xl font-medium text-neutral-900 mt-1"
                    data-value={12}
                    data-suffix="Cr+"
                  >
                    0
                  </span>
                </div>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest border border-neutral-200 px-2 py-0.5 rounded-full bg-neutral-50">
                  Direct Tax Index
                </span>
              </div>
              
              {/* Dynamic SVG Line Chart */}
              <div className="w-full h-[70px] mt-4 relative left-0 bottom-0 overflow-visible">
                <svg className="w-full h-full" viewBox="0 0 320 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="line-gradient-light" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#b45309" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#d97706" stopOpacity="1" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 10,52 Q 80,12 160,38 T 310,6"
                    fill="none"
                    stroke="url(#line-gradient-light)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="chart-line-tax"
                  />
                </svg>
              </div>
            </div>

            {/* Widget 2: Compliance Accuracy (99.9%) */}
            <div className="bg-white border border-neutral-200 p-6 flex flex-col justify-between items-center text-center rounded-xl shadow-sm select-none min-h-[200px]">
              <span className="font-mono text-[9px] font-bold text-amber-700 tracking-wider uppercase self-start">
                Filing Accuracy
              </span>
              
              {/* Radial Circle Progress */}
              <div className="relative w-[88px] h-[88px] flex items-center justify-center my-2">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="44"
                    cy="44"
                    r="34"
                    stroke="currentColor"
                    className="text-neutral-100"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="44"
                    cy="44"
                    r="34"
                    stroke="currentColor"
                    className="text-amber-600 chart-circle-compliance"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span 
                    className="metric-number font-serif text-base font-semibold text-neutral-900"
                    data-value={99.9}
                    data-suffix="%"
                  >
                    0
                  </span>
                </div>
              </div>

              <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                Audit Threshold
              </span>
            </div>

            {/* Widget 3: Clients Served */}
            <div className="bg-white border border-neutral-200 p-6 flex flex-col justify-between rounded-xl shadow-sm select-none min-h-[200px]">
              <div className="flex flex-col">
                <span className="font-mono text-[9px] font-bold text-amber-700 tracking-wider uppercase">
                  Advisory Accounts
                </span>
                <span 
                  className="metric-number font-serif text-3xl font-medium text-neutral-900 mt-1"
                  data-value={2500}
                  data-suffix="+"
                >
                  0
                </span>
              </div>

              {/* Minimalist Micro Bar Chart */}
              <div className="chart-bars-container flex items-end justify-between h-[50px] px-1 mt-4 w-full">
                {[25, 48, 38, 70, 100].map((height, i) => (
                  <div 
                    key={i} 
                    className="w-[14%] bg-neutral-100 rounded-sm relative h-full overflow-hidden"
                  >
                    <div 
                      className="chart-growth-bar absolute bottom-0 left-0 w-full bg-gradient-to-t from-amber-600 to-amber-500 rounded-sm" 
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
              <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-tight mt-2">
                Active global corps
              </span>
            </div>

            {/* Widget 4: Businesses Registered */}
            <div className="bg-white border border-neutral-200 p-6 flex flex-col justify-between rounded-xl shadow-sm relative overflow-hidden select-none min-h-[200px]">
              <div className="flex flex-col z-10">
                <span className="font-mono text-[9px] font-bold text-amber-700 tracking-wider uppercase">
                  Incorporations
                </span>
                <span 
                  className="metric-number font-serif text-3xl font-medium text-neutral-900 mt-1"
                  data-value={2000}
                  data-suffix="+"
                >
                  0
                </span>
              </div>

              {/* Area Wave Sparkline Vector Graphic */}
              <div className="w-full h-[50px] mt-4 relative overflow-visible">
                <svg className="w-full h-full" viewBox="0 0 150 40" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="area-gradient-light" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,40 L 0,33 Q 35,12 75,26 T 150,4 L 150,40 Z"
                    fill="url(#area-gradient-light)"
                    className="chart-area-fill"
                  />
                  <path
                    d="M 0,33 Q 35,12 75,26 T 150,4"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="chart-area-path"
                  />
                </svg>
              </div>
              <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-tight">
                Entities Scaled
              </span>
            </div>

            {/* Widget 5: Years of Experience */}
            <div className="bg-white border border-neutral-200 p-6 flex flex-col justify-between rounded-xl shadow-sm relative overflow-hidden select-none min-h-[200px]">
              {/* Clean Contemporary Watermark */}
              <div className="absolute -right-2 -bottom-6 font-serif text-8xl font-bold text-neutral-100 select-none pointer-events-none">
                10
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-[9px] font-bold text-amber-700 tracking-wider uppercase">
                  Practice Tenure
                </span>
                <span 
                  className="metric-number font-serif text-3xl font-medium text-neutral-900 mt-1"
                  data-value={10}
                  data-suffix="+"
                >
                  0
                </span>
              </div>

              {/* Structural Corporate Timeline Grid */}
              <div className="flex flex-col space-y-1.5 border-l border-amber-600/20 pl-3 mt-4 py-1 relative z-10">
                <div className="flex items-center space-x-2 text-[10px] font-mono">
                  <span className="font-bold text-neutral-700">2016</span>
                  <span className="text-neutral-400">• Founded</span>
                </div>
                <div className="flex items-center space-x-2 text-[10px] font-mono">
                  <span className="font-bold text-neutral-700">2018</span>
                  <span className="text-neutral-400">• Expansion</span>
                </div>
                <div className="flex items-center space-x-2 text-[10px] font-mono">
                  <span className="font-bold text-amber-700">2026</span>
                  <span className="text-neutral-400 font-medium">• Current Era</span>
                </div>
              </div>

              <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-tight">
                Continuous Operations
              </span>
            </div>

            {/* Widget 6: Support Full Width Row Banner */}
            <div className="md:col-span-3 bg-neutral-900 text-white border border-neutral-800 p-6 flex flex-col md:flex-row md:items-center justify-between rounded-xl shadow-md select-none gap-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-at-t from-neutral-800 via-transparent to-transparent opacity-40 pointer-events-none" />
              
              <div className="flex items-start space-x-4 relative z-10">
                <div className="relative mt-1.5">
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-amber-400 uppercase leading-none">
                    Infrastructure Status
                  </span>
                  <span className="font-serif text-xl md:text-2xl text-neutral-100 font-normal mt-1">
                    24/7 Client Advisory Portal
                  </span>
                </div>
              </div>

              {/* SLA Specification Pillars */}
              <div className="grid grid-cols-3 gap-4 text-left max-w-[440px] w-full border-t border-neutral-800 md:border-t-0 pt-4 md:pt-0 relative z-10">
                <div className="flex flex-col border-r border-neutral-800 pr-2">
                  <span className="font-mono text-[8px] font-bold text-neutral-400 uppercase tracking-wider">SLA Response</span>
                  <span className="font-sans text-xs text-neutral-200 font-medium mt-1">{"< 2 Hours"}</span>
                </div>
                <div className="flex flex-col border-r border-neutral-800 pr-2">
                  <span className="font-mono text-[8px] font-bold text-neutral-400 uppercase tracking-wider">Encryption</span>
                  <span className="font-sans text-xs text-neutral-200 font-medium mt-1">AES-256 Bit</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] font-bold text-neutral-400 uppercase tracking-wider">Escalation</span>
                  <span className="font-sans text-xs text-amber-400 font-medium mt-1">Partner Line</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};