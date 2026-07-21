import React, { useEffect, useRef } from 'react';
import { Container } from '../components/common/Container';
import { WHY_CHOOSE_US_DATA } from '../constants/data';
import { splitReveal, fadeIn, staggerReveal } from '../animations/helpers';
import gsap from 'gsap';

const HandcraftedCheck: React.FC = () => (
  <svg
    className="w-[12px] h-[12px] text-accent shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
  </svg>
);

export const WhyChooseUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const floatingCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    if (titleRef.current) {
      const anim = splitReveal(titleRef.current, 0.1);
      if (anim) cleanups.push(anim.kill);
    }
    if (descRef.current) {
      const anim = fadeIn(descRef.current, undefined, 0.3);
      if (anim) cleanups.push(anim.kill);
    }
    if (listRef.current) {
      const anim = staggerReveal(listRef.current, '.trust-point-item', 0.2);
      if (anim) cleanups.push(anim.kill);
    }
    if (imageFrameRef.current) {
      const anim = fadeIn(imageFrameRef.current, undefined, 0.4);
      if (anim) cleanups.push(anim.kill);
    }
    if (floatingCardRef.current) {
      const card = floatingCardRef.current;
      const animEntrance = fadeIn(card, undefined, 0.6);
      if (animEntrance) cleanups.push(animEntrance.kill);

      const floatTween = gsap.to(card, {
        y: -10,
        duration: 2.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
      cleanups.push(() => floatTween.kill());
    }

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="w-full bg-bg-canvas py-section border-hairline-b"
      aria-label="About Our Advisory Practice"
    >
      <Container>

        <div data-theme="dark" className="relative w-full bg-primary text-bg-canvas border border-accent/20 px-sm py-xl md:px-lg lg:p-xxl overflow-hidden rounded-card-lg shadow-premium-lg">

          {/* Watermark — clipped safely, scales down on small screens so it never overflows the panel */}
          <div className="absolute right-0 top-0 pointer-events-none opacity-[0.04] select-none translate-x-[15%] translate-y-[-15%] overflow-hidden">
            <span className="font-serif text-[9rem] md:text-[14rem] lg:text-[18rem] font-bold text-bg-canvas leading-none">
              RJA
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-xxl items-center">

            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col space-y-md pr-0 lg:pr-lg">

              <div className="flex items-center gap-sm">
                <div className="w-[12px] h-[1px] bg-accent" />
                <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
                  Corporate Manifesto
                </span>
              </div>

              <h2
                ref={titleRef}
                className="font-serif text-2xl md:text-3xl lg:text-4xl text-bg-canvas font-medium leading-tight tracking-tight"
              >
                Why Businesses Trust <br className="hidden md:inline" />
                R Jhunjhunwala &amp; Associates
              </h2>

              <p
                ref={descRef}
                className="font-sans text-xs md:text-sm text-border/80 leading-relaxed max-w-[480px] opacity-0"
              >
                {WHY_CHOOSE_US_DATA.description}
              </p>

              {/* Trust Grid — bordered points instead of floating text, more presence */}
              <div
                ref={listRef}
                className="grid grid-cols-1 sm:grid-cols-2 gap-sm pt-sm"
              >
                {WHY_CHOOSE_US_DATA.items.map((item) => (
                  <div
                    key={item.id}
                    className="trust-point-item group flex items-start gap-sm border border-bg-canvas/10 rounded-card-sm px-sm py-sm opacity-0 transition-colors duration-300 hover:border-accent/40 hover:bg-bg-canvas/[0.03]"
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-[1px] group-hover:bg-accent transition-colors duration-300">
                      <HandcraftedCheck />
                    </div>
                    <span className="font-sans text-xs md:text-sm font-semibold text-bg-canvas leading-snug">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end items-start relative select-none mt-lg lg:mt-0">

              <div
                ref={imageFrameRef}
                className="relative group w-full max-w-[380px] md:max-w-[420px] aspect-[4/3] md:aspect-[16/10] p-[12px] border border-accent/25 bg-primary/80 opacity-0 transition-premium shadow-premium-lg mt-lg lg:mt-0"
              >
                <div className="relative w-full h-full overflow-hidden border border-border/20 rounded-card-sm bg-primary-light">
                  <img
                    src="/assets/images/rja.png"
                    alt={WHY_CHOOSE_US_DATA.imageDesc}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* subtle inner shade so the floating card reads clearly at its corner */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="absolute top-0 left-0 w-md h-[1.5px] bg-accent" />
                <div className="absolute top-0 left-0 w-[1.5px] h-md bg-accent" />
                <div className="absolute bottom-0 right-0 w-md h-[1.5px] bg-accent" />
                <div className="absolute bottom-0 right-0 w-[1.5px] h-md bg-accent" />
              </div>

              {/* Floating Stat — repositioned to sit safely above the frame on all breakpoints, no overlap risk */}
              <div
                ref={floatingCardRef}
                className="absolute -top-4 left-4 md:-top-6 md:-left-6 bg-bg-canvas text-primary px-sm py-xs md:p-md border border-accent/35 shadow-premium-lg rounded-card-sm max-w-[110px] md:max-w-[130px] z-20 opacity-0 flex flex-col items-center justify-center text-center select-none"
              >
                <span className="font-serif text-2xl md:text-3xl font-bold text-accent leading-none">
                  10+
                </span>
                <span className="mt-[4px] font-sans text-[8px] md:text-[9px] font-bold text-text-muted tracking-widest uppercase leading-tight">
                  Years of Practice
                </span>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};