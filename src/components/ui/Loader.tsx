import React, { useEffect, useRef } from 'react';
import { runLoaderReveal } from '../../animations/helpers';

interface LoaderProps {
  onLoadingComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && monogramRef.current && lineRef.current) {
      // Trigger the GSAP sequence
      runLoaderReveal(
        containerRef.current,
        monogramRef.current,
        lineRef.current,
        onLoadingComplete
      );
    }
  }, [onLoadingComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-base"
      style={{ clipPath: 'inset(0 0 0% 0)' }}
      role="status"
      aria-label="Loading R Jhunjhunwala & Associates"
    >
      <div className="flex flex-col items-center select-none">
        {/* Monogram */}
        <div
          ref={monogramRef}
          className="flex flex-col items-center text-center opacity-100 transform translate-y-0"
        >
          <span className="font-serif text-3xl font-medium tracking-wider text-primary md:text-4xl">
            RJA
          </span>
          <span className="mt-xs font-sans text-xs font-medium tracking-[0.25em] text-accent uppercase">
            Est. 2016
          </span>
        </div>

        {/* Custom Progress Bar Frame */}
        <div className="relative mt-lg h-[1px] w-[140px] overflow-hidden bg-border md:w-[180px]">
          <div
            ref={lineRef}
            className="absolute left-0 top-0 h-full w-0 bg-accent transition-colors"
          />
        </div>
      </div>
    </div>
  );
};
