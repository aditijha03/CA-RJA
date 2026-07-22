import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS, BUTTON_LABELS } from '../../constants/data';
import { cn } from '../../utils/cn';
import { Menu, X, ChevronDown, ArrowRight, House, UserRound, BriefcaseBusiness, Building2, Newspaper, Phone } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const LINK_ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  'Home': House,
  'About': UserRound,
  'Services': BriefcaseBusiness,
  'Industries': Building2,
  'Insights': Newspaper,
  'Contact': Phone
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = 'home';
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
const dropdownRef = useRef<HTMLDivElement>(null);
const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // === 33 SERVICES LIST (Updated) ===
  const SERVICES_ITEMS = [
    { label: 'Foreign Accounting', href: '/services/foreign-accounting' },
    { label: 'Tax Planning and Advisory', href: '/services/tax-planning-and-advisory' },
    { label: 'Tax Audit Compliance', href: '/services/tax-audit-compliance' },
    { label: 'Statutory Audit Compliance', href: '/services/statutory-audit-compliance' },
    { label: 'Transfer Pricing Audit Compliance', href: '/services/transfer-pricing-audit-compliance' },
    { label: 'Internal Audit Compliance', href: '/services/internal-audit-compliance' },
    { label: 'Income Tax Return Filing', href: '/services/income-tax-return-filing' },
    { label: 'International Taxation Advisory', href: '/services/international-taxation-advisory' },
    { label: 'GST Return Filing', href: '/services/gst-return-filing' },
    { label: 'GST Annual Return Filing', href: '/services/gst-annual-return-filing' },
    { label: 'Tax Representation and Litigation', href: '/services/tax-representation-litigation-assessments' },
    { label: 'GST Representation & Litigation', href: '/services/gst-representation-litigation-assessments' },
    { label: 'Capital Gains Advisory', href: '/services/capital-gains-advisory' },
    { label: 'TDS and TCS Services', href: '/services/tds-tcs-services' },
    { label: 'Virtual CFO Services', href: '/services/virtual-cfo-services' },
    { label: 'Startup Advisory', href: '/services/startup-advisory' },
    { label: 'Direct Tax Consultancy', href: '/services/direct-tax-consultancy' },
    { label: 'Valuation of Business Services', href: '/services/valuation-of-business-services' },
    { label: 'Project Finance Services', href: '/services/project-finance-services' },
    { label: 'Accounting Services', href: '/services/accounting-services' },
    { label: 'Payroll and Labor Law Management', href: '/services/payroll-and-labor-law-management' },
    { label: 'Forensic Audit Compliance', href: '/services/forensic-audit-compliance' },
    { label: 'Due Diligence Services', href: '/services/due-diligence-services' },
    { label: 'FDI, ODI & Expatriate Advisory', href: '/services/advisory-for-fdi-odi-expatriate' },
    { label: 'ROC Compliance', href: '/services/roc-compliance' },
    { label: 'Company, LLP & Trust Formation', href: '/services/company-llp-firms-trust-formation' },
    { label: 'Corporate Secretarial Services', href: '/services/corporate-secretarial-services' },
    { label: 'Corporate Restructuring', href: '/services/corporate-restructuring' },
    { label: 'FEMA / RBI / NBFC Compliance', href: '/services/fema-rbi-nbfc-compliance' },
    { label: 'Secretarial Audit & Certifications', href: '/services/secretarial-audit-and-certifications' },
    { label: 'Legal Drafting & Documentation', href: '/services/legal-drafting-and-documentation' },
    { label: 'Intellectual Property Rights (IPR)', href: '/services/intellectual-property-rights-ipr' },
    { label: 'Foreign Business Accounting', href: '/services/foreign-business-accounting' }
  ];

  // GSAP animation for desktop services dropdown
  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current) {
      gsap.killTweensOf(dropdownRef.current);
      gsap.killTweensOf('.dropdown-item');
      
      gsap.set(dropdownRef.current, { y: 12, opacity: 0, display: 'block', pointerEvents: 'auto' });
      gsap.set('.dropdown-item', { x: -6, opacity: 0 });

      gsap.to(dropdownRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power3.out'
      });
      
      gsap.to('.dropdown-item', {
        x: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.22,
        ease: 'power2.out',
        delay: 0.04
      });
    } else if (dropdownRef.current) {
      gsap.killTweensOf(dropdownRef.current);
      gsap.to(dropdownRef.current, {
        y: 8,
        opacity: 0,
        duration: 0.22,
        ease: 'power3.in',
        onComplete: () => {
          if (dropdownRef.current) {
            gsap.set(dropdownRef.current, { display: 'none', pointerEvents: 'none' });
          }
        }
      });
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const navbarHeight = 72;
      const checkPoint = navbarHeight / 2;
      const darkSections = document.querySelectorAll('[data-theme="dark"]');
      
      let isDark = false;
      
      darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= checkPoint && rect.bottom >= checkPoint) {
          isDark = true;
        }
      });
      
      setTheme(isDark ? 'dark' : 'light');
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-colors duration-300 w-full bg-transparent border-b border-transparent",
          isScrolled && (theme === 'dark' 
            ? "bg-black/20 backdrop-blur-md border-white/10 shadow-premium-sm" 
            : "bg-bg-canvas/95 backdrop-blur-md border-hairline shadow-premium-sm"
          )
        )}
      >
        <div className="mx-auto max-w-[1440px] px-sm md:px-lg xl:px-xl flex items-center justify-between transition-premium py-3 lg:py-4 relative min-h-[72px]">
          
          {/* Logo & Branding */}
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-sm select-none group text-left z-10 shrink-0"
          >
            <img
              src={logoImg}
              alt="R. Jhunjhunwala & Associates Logo"
              className="h-[44px] md:h-[50px] object-contain shrink-0"
            />
            <div className="flex flex-col">
              <span className={cn(
                "font-serif text-[18px] md:text-[20px] font-bold tracking-wide uppercase leading-none transition-colors",
                theme === 'dark' ? "text-white" : "text-primary"
              )}>
                R JHUNJHUNWALA
              </span>
              <span className={cn(
                "font-sans text-[8px] font-semibold tracking-[0.22em] uppercase leading-none mt-1.5 transition-colors",
                theme === 'dark' ? "text-white/70" : "text-accent"
              )}>
                &amp; ASSOCIATES • EST. 2016
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center space-x-4 xl:space-x-8 h-full px-4">
            {NAV_LINKS.map((link) => {
              let isActive = false;
              if (link.href === '/') {
                isActive = location.pathname === '/' && activeSection === 'home';
              } else if (link.href.startsWith('/#')) {
                isActive = location.pathname === '/' && activeSection === link.href.replace('/#', '');
              } else {
                isActive = location.pathname.startsWith(link.href);
              }

              const IconComponent = LINK_ICONS[link.label];

              if (link.href === '/services') {
  return (
    <div
      key={link.href}
      className="relative flex items-center h-full"
      onMouseEnter={() => {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        setIsDropdownOpen(true);
      }}
      onMouseLeave={() => {
        closeTimerRef.current = setTimeout(() => setIsDropdownOpen(false), 150);
      }}
      onFocus={() => setIsDropdownOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsDropdownOpen(false);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setIsDropdownOpen(false);
        }
      }}
    >
      <Link
        to={link.href}
        className={cn(
          "group relative font-sans text-xs lg:text-sm font-semibold tracking-wider transition-colors py-1 uppercase flex items-center cursor-pointer select-none",
          theme === 'dark' ? "text-white/80 hover:text-white" : "text-primary hover:text-accent",
          isActive && (theme === 'dark' ? "text-white font-bold" : "text-primary font-bold")
        )}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        {isActive && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9962B] mr-2 shrink-0" />
        )}
        <span className="flex items-center gap-2">
          {IconComponent && (
            <IconComponent
              size={15}
              strokeWidth={1.8}
              className={cn(
                "transition-all duration-300 ease-out group-hover:-translate-y-[1px]",
                theme === 'dark' ? "group-hover:text-white" : "group-hover:text-accent",
                isActive
                  ? (theme === 'dark' ? "text-white" : "text-accent")
                  : (theme === 'dark' ? "text-white/80" : "text-primary")
              )}
            />
          )}
          {link.label}
        </span>
        <ChevronDown size={12} className={cn("ml-xxs transition-transform duration-300", theme === 'dark' ? "text-white/80" : "text-primary", isDropdownOpen && "rotate-180", isDropdownOpen && (theme === 'dark' ? "text-white" : "text-accent"))} />
      </Link>

      {/* Desktop Dropdown Panel - 5x5 grid of 25 services, no hover dead-zone */}
      <div
        ref={dropdownRef}
        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 pointer-events-none opacity-0 z-50 select-none"
        style={{ display: 'none' }}
        role="menu"
        aria-label="Services practice dropdown list"
      >
        <div className="bg-bg-canvas border border-border/80 border-t-accent shadow-premium-lg rounded-card-sm w-[1040px] max-w-[95vw] p-md">
          <div className="grid grid-cols-4 gap-xs md:gap-sm max-h-[75vh] overflow-y-auto pr-xs">
            {SERVICES_ITEMS.map((item) => {
              const isSubActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsDropdownOpen(false)}
                  className={cn(
                    "dropdown-item group flex flex-col justify-center min-h-[64px] px-sm py-xs font-sans text-[11px] leading-snug font-semibold text-text-muted hover:text-primary transition-all duration-300 border border-transparent hover:border-accent/15 hover:bg-bg-alt/30 rounded-card-sm",
                    isSubActive && "text-accent bg-bg-alt/20 border-accent/20"
                  )}
                  role="menuitem"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-xs">
                    {item.label}
                  </span>
                  <ArrowRight
                    size={10}
                    className="mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 text-accent translate-x-[-4px] group-hover:translate-x-0"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

              return (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className={cn(
                    "group relative font-sans text-xs lg:text-sm font-semibold tracking-wider transition-colors py-1 uppercase flex items-center whitespace-nowrap",
                    theme === 'dark' ? "text-white/80 hover:text-white" : "text-primary hover:text-accent",
                    isActive && (theme === 'dark' ? "text-white font-bold" : "text-primary font-bold")
                  )}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9962B] mr-2 shrink-0" />
                  )}
                  <span className="flex items-center gap-2">
                    {IconComponent && (
                      <IconComponent 
                        size={15} 
                        strokeWidth={1.8} 
                        className={cn(
                          "transition-all duration-300 ease-out group-hover:-translate-y-[1px]",
                          theme === 'dark' ? "group-hover:text-white" : "group-hover:text-accent",
                          isActive 
                            ? (theme === 'dark' ? "text-white" : "text-accent") 
                            : (theme === 'dark' ? "text-white/80" : "text-primary")
                        )} 
                      />
                    )}
                    {link.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center space-x-3 md:space-x-4 z-10 shrink-0">
            {/* Consultation Button */}
            <div className="hidden md:block">
              <button
                onClick={() => handleNavigation('/contact')}
                className="group/btn inline-flex items-center justify-center border border-primary bg-primary text-white px-lg py-2.5 font-sans text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-primary hover:-translate-y-[1px] hover:shadow-premium-sm transition-all duration-300 ease-out rounded-none"
              >
                {BUTTON_LABELS.consultation}
                <ArrowRight 
                  size={14} 
                  className="ml-2 transition-transform duration-300 ease-out group-hover/btn:translate-x-[4px]" 
                />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-xs focus:outline-none transition-colors",
                theme === 'dark' ? "text-white hover:text-white/80" : "text-primary hover:text-accent"
              )}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-bg-canvas flex flex-col justify-between transition-transform duration-500 ease-in-out lg:hidden transform translate-x-full",
          isMobileMenuOpen && "translate-x-0"
        )}
      >
        <div className="flex-1 flex flex-col justify-center px-lg border-b border-border">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-accent uppercase mb-md">
            Directory Index
          </span>
          <nav className="flex flex-col space-y-md">
            {NAV_LINKS.map((link, index) => (
              <button
                key={link.href}
                onClick={() => handleNavigation(link.href)}
                className={cn(
                  "font-serif text-3xl font-medium text-text-muted hover:text-primary transition-colors flex items-center justify-between border-b border-border/50 pb-xs text-left",
                  location.pathname === link.href && "text-primary font-bold border-accent/40"
                )}
              >
                <span className="flex items-center">
                  <span className="font-sans text-xs text-accent mr-sm">0{index + 1}</span>
                  {link.label}
                </span>
                {location.pathname === link.href && <span className="w-1.5 h-1.5 bg-accent" />}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-lg bg-bg-alt flex flex-col space-y-sm">
          <button
            onClick={() => handleNavigation('/contact')}
            className="w-full text-center border border-primary bg-primary text-bg-canvas py-sm font-sans text-xs font-semibold tracking-widest uppercase hover:bg-transparent hover:text-primary transition-premium rounded-none"
          >
            {BUTTON_LABELS.consultation}
          </button>
        </div>
      </div>
    </>
  );
};