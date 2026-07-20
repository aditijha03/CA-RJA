import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../components/common/Container';
import { INDUSTRIES_DATA } from '../constants/data';
import { splitReveal, fadeIn, staggerReveal } from '../animations/helpers';
import { cn } from '../utils/cn';
import { ArrowUpRight, ShieldCheck, Fingerprint, Layers, Compass } from 'lucide-react';

const formatNum = (idx: number) => (idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`);
const Designators = [Fingerprint, Layers, Compass, ShieldCheck];

const industryHref = (ind: { id: string; slug?: string }) => `/industries/${ind.slug || ind.id}`;

export const Industries: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const leftColRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const displayPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanups: (() => void)[] = [];
    if (leftColRef.current) {
      const title = leftColRef.current.querySelector('h2');
      const desc = leftColRef.current.querySelector('.desc-text');
      const stamp = leftColRef.current.querySelector('.stamp-badge');
      if (title) { const anim = splitReveal(title, 0.08); if (anim) cleanups.push(anim.kill); }
      if (desc) { const anim = fadeIn(desc as HTMLElement, undefined, 0.25); if (anim) cleanups.push(anim.kill); }
      if (stamp) { const anim = fadeIn(stamp as HTMLElement, undefined, 0.35); if (anim) cleanups.push(anim.kill); }
    }
    if (trackRef.current) {
      const anim = staggerReveal(trackRef.current, '.editorial-trigger-link', 0.05);
      if (anim) cleanups.push(anim.kill);
    }
    if (displayPanelRef.current) {
      const anim = fadeIn(displayPanelRef.current, undefined, 0.3);
      if (anim) cleanups.push(anim.kill);
    }
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  const activeIndustry = INDUSTRIES_DATA[activeIdx] || { id: '', name: '', markets: '', imageUrl: '' };

  return (
    <section id="industries" className="w-full bg-[#faf9f6] py-24 lg:py-36 border-b border-neutral-300/40 overflow-hidden relative" aria-label="Industries Portfolio">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e0_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-70" />
      <Container className="relative z-10">
        
        {/* DESKTOP (1024px+) - Horizontal Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Sticky Intro) */}
          <div ref={leftColRef} className="col-span-3 flex flex-col space-y-8 sticky top-40">
            <div className="space-y-6">
              <div className="stamp-badge inline-flex items-center gap-2 bg-neutral-900 text-white px-3 py-1 rounded-full opacity-0">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-neutral-300">Global Practice Matrix</span>
              </div>
              <h2 className="font-serif text-4xl text-neutral-900 font-normal tracking-tight leading-[1.12]">
                Sectors We <br /><span className="text-amber-800 font-light italic font-serif">Navigate &amp; Fortify.</span>
              </h2>
            </div>
          </div>

          {/* Middle Column (Horizontal Flex Cards) */}
          <div ref={trackRef} className="col-span-6 flex flex-row flex-wrap gap-4">
            {INDUSTRIES_DATA.map((ind, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <a
                  key={ind.id}
                  href={industryHref(ind)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={cn(
                    'editorial-trigger-link w-[calc(50%-8px)] p-6 bg-white border border-neutral-200 rounded-2xl transition-all duration-300 flex flex-col group',
                    isSelected ? 'shadow-lg border-amber-500' : 'hover:border-neutral-300'
                  )}
                >
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] text-neutral-400">0{idx + 1}</span>
                    <ArrowUpRight size={14} className={cn("text-neutral-300 transition-colors", isSelected && "text-amber-600")} />
                  </div>
                  <h3 className="font-serif text-lg mt-3 text-neutral-900">{ind.name}</h3>
                  <p className="font-sans text-xs text-neutral-500 mt-2 leading-relaxed line-clamp-3">
                    {ind.markets}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Right Column (Sticky Showcase) */}
          <div ref={displayPanelRef} className="col-span-3 sticky top-40">
             <div className="aspect-[3/4] bg-white p-2 rounded-3xl border border-neutral-200 shadow-xl overflow-hidden">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <img src={activeIndustry.imageUrl} alt={activeIndustry.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-end p-6 justify-end flex-col">
                        <span className="text-white text-xs font-mono uppercase tracking-widest">Active Target</span>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Note: Ensure Tablet and Mobile blocks are included here as per your original file */}
      </Container>
    </section>
  );
};