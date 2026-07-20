import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { INSIGHTS_DATA } from '../constants/data';
import { fadeIn, staggerReveal } from '../animations/helpers';
import {
  ArrowRight,
  Receipt,
  Percent,
  ClipboardCheck,
  FileText,
  Briefcase
} from 'lucide-react';

const ResourceIconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Receipt,
  Percent,
  ClipboardCheck,
  FileText,
  Briefcase
};

interface ResourceItem {
  id: string;
  title: string;
  desc: string;
  iconName: string;
}

const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'res-tax',
    title: 'Tax Updates',
    desc: 'Direct tax circulars, corporate rates, and filing deadlines.',
    iconName: 'Receipt'
  },
  {
    id: 'res-gst',
    title: 'GST Notifications',
    desc: 'Input tax credit guidelines, GSTR revisions, and e-way rules.',
    iconName: 'Percent'
  },
  {
    id: 'res-comp',
    title: 'Compliance Checklist',
    desc: 'ROC annual filing, board minutes, and audit readiness lists.',
    iconName: 'ClipboardCheck'
  },
  {
    id: 'res-budget',
    title: 'Budget Highlights',
    desc: 'Amendments on capital gains, import duties, and startup tax.',
    iconName: 'FileText'
  },
  {
    id: 'res-reg',
    title: 'Registration Guide',
    desc: 'Private limited incorporation and MSME certification steps.',
    iconName: 'Briefcase'
  }
];

/** None of these teaser cards have their own detail route, so the whole
 *  section funnels into the full Knowledge Centre rather than dead-ending
 *  on '#'. */
const INSIGHTS_ROUTE = '/insights';

export const Insights: React.FC = () => {
  const leftColRef = useRef<HTMLAnchorElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    // Left Column Featured entrance
    if (leftColRef.current) {
      const img = leftColRef.current.querySelector('.featured-img-box');
      const text = leftColRef.current.querySelector('.featured-text-box');
      if (img) {
        const anim = fadeIn(img as HTMLElement, undefined, 0.2);
        if (anim) cleanups.push(anim.kill);
      }
      if (text) {
        const anim = fadeIn(text as HTMLElement, undefined, 0.3);
        if (anim) cleanups.push(anim.kill);
      }
    }

    // Right Column secondary list entrance
    if (rightColRef.current) {
      const anim = staggerReveal(rightColRef.current, '.secondary-article-item', 0.15);
      if (anim) cleanups.push(anim.kill);
    }

    // Bottom resources grid entrance
    if (resourcesRef.current) {
      const anim = staggerReveal(resourcesRef.current, '.resource-card-item', 0.1);
      if (anim) cleanups.push(anim.kill);
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  const featuredArt = INSIGHTS_DATA.find(art => art.isFeatured) || INSIGHTS_DATA[0];
  const secondaryArts = INSIGHTS_DATA.filter(art => !art.isFeatured);

  return (
    <section
      id="insights"
      className="w-full bg-bg-alt py-section border-hairline-b overflow-hidden"
      aria-label="Insights &amp; Publications Library"
    >
      <Container>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-xl select-none">
          <div className="flex flex-col space-y-xs max-w-[600px]">
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
              Knowledge Hub
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-medium tracking-tight mt-xs">
              Insights &amp; Resources
            </h2>
            <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
              Thought leadership analyses, regulatory briefings, and compliance guides authored by our managing partners.
            </p>
          </div>
          <Link
            to={INSIGHTS_ROUTE}
            className="inline-flex items-center font-sans text-[10px] md:text-xs font-semibold tracking-widest text-primary uppercase select-none pb-[2px] border-b border-transparent hover:border-primary focus-visible:border-primary focus-visible:outline-none transition-all duration-300 self-start mt-md md:mt-0 group"
          >
            <span>View All Insights</span>
            <ArrowRight size={12} className="ml-xs transition-transform duration-300 group-hover:translate-x-xs" />
          </Link>
        </div>

        {/* ARTICLES ROW (Asymmetric Magazine Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-xxl items-stretch w-full">

          {/* Left Column: Featured Article (8 cols) */}
          <Link
            to={INSIGHTS_ROUTE}
            ref={leftColRef}
            aria-label={`Read more on the Insights page: ${featuredArt.title}`}
            className="col-span-1 lg:col-span-8 flex flex-col justify-between bg-bg-canvas border border-border rounded-card-sm overflow-hidden shadow-premium-sm group cursor-pointer transition-colors duration-300 hover:border-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            {/* Image frame */}
            <div className="featured-img-box w-full aspect-[16/10] md:aspect-[21/10] overflow-hidden border-b border-border bg-bg-alt opacity-0">
              <img
                src={featuredArt.imageUrl}
                alt={featuredArt.title}
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Context Box */}
            <div className="featured-text-box p-md md:p-lg flex-1 flex flex-col justify-between opacity-0">
              <div className="flex flex-col space-y-sm">

                {/* Meta header */}
                <div className="flex items-center space-x-md text-[10px] font-sans text-text-muted font-bold tracking-wider uppercase">
                  <span className="text-accent">{featuredArt.category}</span>
                  <span>•</span>
                  <span>{featuredArt.date}</span>
                  <span>•</span>
                  <span>{featuredArt.readTime}</span>
                </div>

                <h3 className="font-serif text-xl md:text-2xl text-primary font-medium tracking-tight leading-snug group-hover:text-accent transition-colors duration-300">
                  {featuredArt.title}
                </h3>

                <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
                  {featuredArt.summary}
                </p>
              </div>

              {/* Author & Read trigger */}
              <div className="flex items-center justify-between border-t border-border/60 pt-sm mt-md">
                <cite className="font-sans text-[11px] font-semibold text-text-muted not-italic">
                  By {featuredArt.author || 'R. Jhunjhunwala'}
                </cite>

                <span className="inline-flex items-center font-sans text-[10px] md:text-xs font-semibold tracking-widest text-primary uppercase select-none pb-[2px] border-b border-transparent group-hover:border-primary transition-all duration-300">
                  <span>Read Article</span>
                  <ArrowRight size={12} className="ml-xs transition-transform duration-300 group-hover:translate-x-xs" />
                </span>
              </div>
            </div>

          </Link>

          {/* Right Column: Stacked Secondary Articles (4 cols) */}
          <div
            ref={rightColRef}
            className="col-span-1 lg:col-span-4 flex flex-col space-y-md"
          >
            {secondaryArts.map((art) => (
              <Link
                key={art.id}
                to={INSIGHTS_ROUTE}
                aria-label={`Read more on the Insights page: ${art.title}`}
                className="secondary-article-item bg-bg-canvas border border-border rounded-card-sm p-md flex flex-col justify-between flex-1 cursor-pointer select-none group shadow-premium-sm hover:border-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 transition-colors duration-300 opacity-0"
              >
                <div className="flex flex-col space-y-sm">
                  {/* Meta tags */}
                  <div className="flex items-center space-x-sm text-[9px] font-sans text-text-muted font-bold tracking-wider uppercase">
                    <span className="text-accent">{art.category}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-serif text-base md:text-lg text-primary font-medium tracking-tight leading-snug group-hover:text-accent transition-colors duration-300">
                    {art.title}
                  </h3>

                  <p className="font-sans text-xs text-text-muted leading-relaxed line-clamp-2">
                    {art.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-border/40 pt-sm mt-sm">
                  <span className="font-sans text-[9px] text-text-muted">{art.date}</span>
                  <span className="inline-flex items-center font-sans text-[9px] md:text-[10px] font-semibold tracking-widest text-primary uppercase select-none pb-[2px] border-b border-transparent group-hover:border-primary transition-all duration-300">
                    <span>Read Article</span>
                    <ArrowRight size={10} className="ml-xs transition-transform duration-300 group-hover:translate-x-xs" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* BOTTOM RESOURCES ROW (5-Column Briefings Grid) */}
        <div className="w-full border-t border-border mt-xl pt-lg">

          <div className="mb-md select-none">
            <span className="font-sans text-[9px] font-bold text-accent tracking-[0.2em] uppercase">
              Quick Reference Briefings &amp; Circulars
            </span>
          </div>

          <div
            ref={resourcesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-sm md:gap-md w-full items-stretch"
          >
            {RESOURCES_DATA.map((res) => {
              const IconComponent = ResourceIconMap[res.iconName] || FileText;
              return (
                <Link
                  key={res.id}
                  to={INSIGHTS_ROUTE}
                  aria-label={`View ${res.title} on the Insights page`}
                  className="resource-card-item group bg-bg-canvas border border-border rounded-card-sm p-sm md:p-md flex flex-col justify-between cursor-pointer select-none transition-premium shadow-premium-sm hover:border-accent/40 hover:shadow-premium-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 opacity-0"
                >
                  <div className="flex flex-col space-y-sm">
                    {/* Header with Icon */}
                    <div className="flex items-center justify-between">
                      <div className="p-xs bg-bg-alt text-primary group-hover:bg-accent group-hover:text-bg-canvas transition-colors duration-300">
                        <IconComponent size={16} />
                      </div>

                      <ArrowRight
                        size={12}
                        className="text-text-muted transition-transform duration-300 group-hover:translate-x-xs group-hover:text-accent"
                      />
                    </div>

                    <h3 className="font-serif text-sm md:text-base text-primary font-medium tracking-tight">
                      {res.title}
                    </h3>

                    <p className="font-sans text-[11px] text-text-muted leading-relaxed">
                      {res.desc}
                    </p>
                  </div>

                  {/* Underline accent indicator */}
                  <div className="w-0 h-[1.5px] bg-accent mt-sm group-hover:w-full transition-all duration-500 origin-left" />
                </Link>
              );
            })}
          </div>

        </div>

      </Container>
    </section>
  );
};