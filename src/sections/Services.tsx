import React, { useEffect, useRef } from 'react';
import { Container } from '../components/common/Container';
import { SERVICES_OVERVIEW, SERVICES_DATA, BUTTON_LABELS } from '../constants/data';
import { splitReveal, fadeIn, staggerReveal, hoverLift, hoverReset } from '../animations/helpers';
import { cn } from '../utils/cn';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Percent, 
  Calculator, 
  FileCheck2, 
  Building2, 
  Users, 
  Store, 
  Notebook, 
  CreditCard, 
  Coins, 
  Briefcase, 
  Compass,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

const IconMap: Record<string, React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>> = {
  ShieldCheck, Percent, Calculator, FileCheck2, Building2, Users,
  Store, Notebook, CreditCard, Coins, Briefcase, Compass,
};

const slugMap: Record<string, string> = {
  'srv-usacct': 'foreign-accounting',
  'srv-audit': 'statutory-audit-compliance',
  'srv-gst': 'gst-return-filing',
  'srv-tax': 'income-tax-return-filing',
  'srv-roc': 'roc-compliance',
  'srv-incorp': 'company-llp-firms-trust-formation',
  'srv-adv': 'virtual-cfo-services'
};
const ServiceIcon = ({ name, className, size = 20 }: { name: string; className?: string; size?: number }) => {
  const IconComponent = IconMap[name] || ShieldCheck;
  return <IconComponent size={size} strokeWidth={1.6} className={className} />;
};
const STATS = [
  { value: '10+', label: 'Years in Practice' },
  { value: '1000+', label: 'Businesses Served' },
  { value: '2000+', label: 'Filings Completed' },
  { value: '98%', label: 'Client Retention' },
];

export const Services: React.FC = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const homeServices = SERVICES_DATA
    .filter(srv => ['srv-usacct', 'srv-audit', 'srv-gst', 'srv-tax', 'srv-roc', 'srv-incorp'].includes(srv.id))
    .map((srv, index) => ({ ...srv, num: `0${index + 1}` }));

  useEffect(() => {
    const cleanups: (() => void)[] = [];
    if (titleRef.current) { const anim = splitReveal(titleRef.current, 0.1); if (anim) cleanups.push(anim.kill); }
    if (descRef.current) { const anim = fadeIn(descRef.current, undefined, 0.3); if (anim) cleanups.push(anim.kill); }
    if (gridRef.current) { const anim = staggerReveal(gridRef.current, '.bento-card-item', 0.1); if (anim) cleanups.push(anim.kill); }
    return () => cleanups.forEach((c) => c());
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => hoverLift(e.currentTarget, -6);
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => hoverReset(e.currentTarget);

  return (
    <section id="services" className="w-full bg-bg-base py-section border-hairline-b" aria-label="Corporate CA Services Directory">
      <Container>

        {/* Header */}
        <div className="flex flex-col items-start text-left max-w-[700px]">
          <div className="flex items-center gap-sm">
            <div className="w-[12px] h-[1px] bg-accent" />
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
              {SERVICES_OVERVIEW.tagline}
            </span>
          </div>
          <h2 ref={titleRef} className="font-serif text-3xl md:text-4xl text-primary font-medium tracking-tight mt-sm leading-tight">
            {SERVICES_OVERVIEW.title}
          </h2>
          <p ref={descRef} className="font-sans text-sm md:text-base text-text-muted leading-relaxed mt-sm opacity-0 max-w-[560px]">
            {SERVICES_OVERVIEW.description}
          </p>
        </div>

        {/* Stat bar — credibility signals, borders divide not boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-border mt-xl divide-x divide-border">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col py-md md:py-lg px-sm">
              <span className="font-serif text-2xl md:text-3xl text-primary font-medium">{stat.value}</span>
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-text-muted mt-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-sm md:gap-md w-full items-stretch mt-xl">
          {homeServices.map((srv) => {
            const isFeatured = srv.id === 'srv-usacct' || srv.id === 'srv-incorp';

            return (
              <div
                key={srv.id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  const slug = slugMap[srv.id];
                  if (slug) {
                    navigate(`/services/${slug}`);
                  }
                }}
                className={cn(
                  'bento-card-item group transition-premium select-none cursor-pointer flex flex-col justify-between rounded-card-sm',
                  isFeatured
                    ? 'col-span-12 lg:col-span-6 bg-primary text-bg-canvas p-lg md:p-xl shadow-premium-md hover:shadow-premium-lg'
                    : 'col-span-12 md:col-span-6 lg:col-span-4 bg-bg-canvas border-l-[3px] border-t border-r border-b border-border border-l-accent/60 p-md md:p-lg shadow-premium-sm hover:shadow-premium-md hover:border-l-accent'
                )}
              >
                {isFeatured ? (
                  <>
                    <div className="flex items-start justify-between">
                      <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-accent uppercase">
                        Featured · {srv.num}
                      </span>
                      <div className="w-11 h-11 rounded-full bg-bg-canvas/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                        <ServiceIcon name={srv.iconName} size={20} />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl md:text-[1.75rem] text-bg-canvas font-medium tracking-tight leading-snug mt-md">
                      {srv.title}
                    </h3>
                    <p className="font-sans text-sm text-border/70 leading-relaxed mt-sm max-w-[420px]">
                      {srv.description}
                    </p>

                    <span className="inline-flex items-center font-sans text-xs font-semibold tracking-widest text-accent uppercase select-none pb-[2px] mt-lg self-start border-b border-transparent group-hover:border-accent transition-all duration-300">
                      <span>{BUTTON_LABELS.consultation}</span>
                      <ArrowRight size={13} className="ml-xs transition-transform duration-300 group-hover:translate-x-xs" />
                    </span>
                  </>
                ) : (
                  <>
                    <div className="flex items-start justify-between">
                      <span className="font-serif text-lg text-accent tracking-widest tabular-nums">{srv.num}</span>
                      <div className="w-10 h-10 rounded-full bg-bg-alt text-primary flex items-center justify-center group-hover:bg-accent group-hover:text-bg-canvas transition-colors duration-300">
                        <ServiceIcon name={srv.iconName} size={18} />
                      </div>
                    </div>

                    <h3 className="font-serif text-lg md:text-xl text-primary font-medium tracking-tight mt-sm">
                      {srv.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed mt-xs">
                      {srv.description}
                    </p>

                    <span className="inline-flex items-center font-sans text-[10px] md:text-xs font-semibold tracking-widest text-primary uppercase select-none pb-[2px] mt-md border-b border-transparent group-hover:border-primary transition-all duration-300 self-start">
                      <span>Learn More</span>
                      <ArrowRight size={10} className="ml-xs transition-transform duration-300 group-hover:translate-x-xs" />
                    </span>
                  </>
                )}
              </div>
            );
          })}

          {/* CTA card — genuinely different layout, not a repainted service card */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="bento-card-item group col-span-12 bg-bg-alt border border-border rounded-card-sm p-lg md:p-xl flex flex-col md:flex-row md:items-center md:justify-between gap-md transition-premium select-none cursor-pointer hover:border-accent/50 hover:shadow-premium-md"
          >
            <div className="flex flex-col md:max-w-[520px]">
              <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-accent uppercase">
                Advisory Onboarding
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-primary font-medium tracking-tight mt-xs leading-snug">
                Need a custom compliance structure?
              </h3>
              <p className="font-sans text-sm text-text-muted leading-relaxed mt-sm">
                Consult with our managing partners for structured audits, tax planning litigation, or bespoke accounting programs built around your business.
              </p>
            </div>

            
             <button 
              onClick={(e) => {
                e.stopPropagation();
                navigate('/contact');
              }}
              className="inline-flex items-center justify-center gap-xs font-sans text-xs font-semibold tracking-widest text-bg-canvas bg-primary uppercase px-lg py-sm rounded-card-sm shrink-0 hover:bg-accent transition-colors duration-300 self-start md:self-center"
            >
              <span>{BUTTON_LABELS.consultation}</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
};