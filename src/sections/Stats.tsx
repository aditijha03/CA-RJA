import React, { useEffect, useRef } from 'react';
import { Container } from '../components/common/Container';
import { STATS_DATA } from '../constants/data';
import { counter } from '../animations/helpers';
import { cn } from '../utils/cn';

export const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cleanups: (() => void)[] = [];
    const counterElements = section.querySelectorAll('.stat-counter');

    counterElements.forEach((el) => {
      const targetVal = parseFloat(el.getAttribute('data-value') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      
      const anim = counter(el as HTMLElement, targetVal, suffix);
      if (anim) {
        cleanups.push(anim.kill);
      }
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="stats"
      className="w-full bg-bg-canvas py-10 md:py-12 border-hairline-b select-none"
      aria-label="Firm Statistics"
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {STATS_DATA.map((stat, index) => (
            <div
              key={stat.id}
              className={cn(
                 "flex flex-col items-center justify-center text-center py-5 px-3 md:py-6 md:px-4",
                // Mobile 2x2 grid borders setup
                index === 0 && "border-r border-b border-border lg:border-b-0 lg:border-r",
                index === 1 && "border-b border-border lg:border-b-0 lg:border-r",
                index === 2 && "border-r border-border lg:border-r",
                index === 3 && "lg:border-r-0",
                // Resetting last border on desktop
                index === STATS_DATA.length - 1 && "lg:border-r-0"
              )}
            >
              {/* Dynamic GSAP Counter */}
              <span
                className="stat-counter font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-primary leading-none"
                data-value={stat.value}
                data-suffix={stat.suffix}
              >
                0
              </span>
              
              {/* Label */}
              <span  className="mx-auto max-w-[1440px] px-sm md:px-lg xl:px-xl flex items-center justify-between py-2 md:py-3 transition-premium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
