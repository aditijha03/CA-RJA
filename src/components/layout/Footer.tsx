import React from 'react';
import { FOOTER_LINKS, FOOTER_DATA, CONTACT_DATA, SOCIAL_LINKS } from '../../constants/data';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-bg-canvas border-hairline-t py-xxl text-text-main relative overflow-hidden">
      {/* Financial Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(11, 35, 65, 0.25) 2px, transparent 2px)', backgroundSize: '32px 32px' }}
      ></div>

      {/* Brand Watermark */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0 flex justify-center items-center p-8">
        <img src={logoImg} alt="" className="w-auto h-full max-h-[80%] object-contain" />
      </div>

      <div className="mx-auto max-w-[1440px] px-sm md:px-lg xl:px-xl relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-xl pb-xl border-hairline-b">
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col space-y-md">
            <Link to="/" className="flex flex-col select-none">
              <span className="font-serif text-lg font-bold tracking-wider text-primary uppercase">
                R. Jhunjhunwala
              </span>
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-accent uppercase">
                &amp; Associates • Est. 2016
              </span>
            </Link>
            <p className="font-sans text-sm text-gray-700 leading-relaxed max-w-[320px]">
              Trusted Chartered Accountants helping startups, SMEs, and corporate enterprises navigate tax compliance, statutory audits, and financial growth.
            </p>
            {/* Socials */}
            <div className="flex items-center space-x-md pt-xs">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs font-semibold tracking-wider text-gray-700 hover:text-accent uppercase transition-colors"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-5 grid grid-cols-2 gap-md">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title} className="flex flex-col space-y-sm">
                <span className="font-sans text-xs font-bold tracking-[0.25em] text-accent uppercase">
                  {section.title}
                </span>
                <ul className="flex flex-col space-y-xs">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('http') ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-sm text-gray-700 hover:text-primary transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="font-sans text-sm text-gray-700 hover:text-primary transition-colors"
                          onClick={() => {
                            if (!link.href.includes('#')) {
                              window.scrollTo(0, 0);
                            }
                          }}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Coordinates */}
          <div className="md:col-span-3 flex flex-col space-y-sm">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-accent uppercase">
              Contact Us
            </span>
            <div className="flex flex-col space-y-xs font-sans text-sm text-gray-700 leading-relaxed">
              <a href={`tel:${CONTACT_DATA.phone}`} className="hover:text-primary transition-colors">
                Phone: {CONTACT_DATA.phone}
              </a>
              <a href={`mailto:${CONTACT_DATA.email}`} className="hover:text-primary transition-colors">
                Email: {CONTACT_DATA.email}
              </a>
              <p className="pt-xxs whitespace-pre-line">
                {CONTACT_DATA.address}
              </p>
              <a
                href={CONTACT_DATA.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-accent uppercase tracking-widest hover:text-primary transition-colors pt-xs"
              >
                View on Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="py-lg border-hairline-b">
          <p className="font-sans text-xs text-gray-700/75 leading-relaxed text-justify">
            {FOOTER_DATA.disclaimer}
          </p>
        </div>

        {/* Sub-Footer */}
        <div className="pt-lg flex flex-col md:flex-row md:items-center md:justify-between space-y-md md:space-y-0">
          <span className="font-sans text-xs text-gray-700">
            {FOOTER_DATA.legal.copyright.replace('2026', currentYear.toString())}
          </span>
          <div className="flex items-center space-x-md font-sans text-xs text-gray-700">
            <Link to={FOOTER_DATA.legal.privacy.replace('#', '/')} className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-border">|</span>
            <Link to={FOOTER_DATA.legal.terms.replace('#', '/')} className="hover:text-primary transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
