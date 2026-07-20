import React from 'react';
import { Building2 } from 'lucide-react';
import { Container } from './Container';

export interface ClientData {
  name: string;
  id: string;
  logo: string;
}

interface ClientSliderProps {
  title?: string;
  clients: ClientData[];
  className?: string;
  reverse?: boolean;
  variant?: 'inline' | 'card';
}

export const ClientSlider: React.FC<ClientSliderProps> = ({ 
  title = "Client Endorsements", 
  clients,
  className = "",
  reverse = false,
  variant = 'inline'
}) => {
  return (
    <section className={`py-12 relative overflow-hidden bg-bg-base border-y border-border ${className}`}>
      <style>
        {`
          @keyframes slideMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: slideMarquee 30s linear infinite;
          }
          .marquee-track.reverse {
            animation-direction: reverse;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          .marquee-content {
            display: flex;
            align-items: center;
            gap: ${variant === 'card' ? '2rem' : '4rem'};
            padding-right: ${variant === 'card' ? '2rem' : '4rem'};
          }
        `}
      </style>

      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10" />

      {/* Edge fading overlays */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-bg-base to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-bg-base to-transparent z-10 pointer-events-none" />

      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-0 overflow-hidden">
          {title && (
            <div className="shrink-0 flex items-center md:pr-8 md:border-r border-border z-20">
              <span className="text-sm font-bold tracking-[0.25em] text-accent uppercase whitespace-nowrap">
                {title}
              </span>
            </div>
          )}

          <div className="overflow-hidden relative w-full">
            {/* The track contains two identical content blocks to ensure seamless looping */}
            <div className={`marquee-track opacity-80 hover:opacity-100 transition-opacity duration-500 ${reverse ? 'reverse' : ''}`}>
              <div className="marquee-content">
                {clients.map((client) => (
                  variant === 'card' ? (
                    <div key={`c1-${client.id}`} className="flex flex-col items-center justify-between p-6 md:p-8 bg-bg-canvas/50 backdrop-blur-md border border-border rounded-xl shadow-premium-sm group min-w-[280px] md:min-w-[320px] h-[220px] md:h-[260px] cursor-default hover:border-accent/30 transition-all duration-300">
                      <div className="flex-1 flex items-center justify-center w-full relative">
                        <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <img src={client.logo} alt={client.name} className="max-w-[160px] max-h-[100px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10 drop-shadow-sm" />
                      </div>
                      <span className="font-sans text-sm md:text-base font-bold text-text-main group-hover:text-primary transition-colors duration-300 text-center mt-6 w-full px-2">
                        {client.name}
                      </span>
                    </div>
                  ) : (
                    <div key={`c1-${client.id}`} className="flex items-center space-x-4 group cursor-default">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border bg-bg-canvas flex items-center justify-center p-2 group-hover:border-accent/40 group-hover:shadow-premium-sm transition-all duration-300 shrink-0 overflow-hidden">
                        <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                      </div>
                      <span className="font-serif text-lg md:text-xl font-bold text-text-main group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                        {client.name}
                      </span>
                    </div>
                  )
                ))}
              </div>
              <div className="marquee-content">
                {clients.map((client) => (
                  variant === 'card' ? (
                    <div key={`c2-${client.id}`} className="flex flex-col items-center justify-between p-6 md:p-8 bg-bg-canvas/50 backdrop-blur-md border border-border rounded-xl shadow-premium-sm group min-w-[280px] md:min-w-[320px] h-[220px] md:h-[260px] cursor-default hover:border-accent/30 transition-all duration-300">
                      <div className="flex-1 flex items-center justify-center w-full relative">
                        <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <img src={client.logo} alt={client.name} className="max-w-[160px] max-h-[100px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10 drop-shadow-sm" />
                      </div>
                      <span className="font-sans text-sm md:text-base font-bold text-text-main group-hover:text-primary transition-colors duration-300 text-center mt-6 w-full px-2">
                        {client.name}
                      </span>
                    </div>
                  ) : (
                    <div key={`c2-${client.id}`} className="flex items-center space-x-4 group cursor-default">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border bg-bg-canvas flex items-center justify-center p-2 group-hover:border-accent/40 group-hover:shadow-premium-sm transition-all duration-300 shrink-0 overflow-hidden">
                        <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                      </div>
                      <span className="font-serif text-lg md:text-xl font-bold text-text-main group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                        {client.name}
                      </span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
