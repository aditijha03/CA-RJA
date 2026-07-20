import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../components/common/Container';
import { CONTACT_DATA } from '../constants/data';
import { splitReveal, fadeIn } from '../animations/helpers';
import gsap from 'gsap';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const CustomBulletCheck: React.FC = () => (
  <svg 
    className="w-[14px] h-[14px] text-accent shrink-0 mt-[4px]" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
  </svg>
);

export const CTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    // Left title split reveal
    if (titleRef.current) {
      const anim = splitReveal(titleRef.current, 0.1);
      if (anim) cleanups.push(anim.kill);
    }

    // Left content fade-in
    if (leftColRef.current) {
      const elements = leftColRef.current.querySelectorAll('.fade-cta-left');
      const anim = gsap.fromTo(elements,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: leftColRef.current,
            start: 'top 85%',
          }
        }
      );
      cleanups.push(() => {
        if (anim.scrollTrigger) anim.scrollTrigger.kill();
        anim.kill();
      });
    }

    // Form fade-up
    if (formRef.current) {
      const anim = fadeIn(formRef.current, undefined, 0.3);
      if (anim) cleanups.push(anim.kill);
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API request delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 1200);
  };

  return (
    <section 
      ref={containerRef}
      id="contact" 
      className="w-full bg-gradient-to-b from-bg-alt to-bg-canvas pt-section pb-xl md:pb-xxl overflow-hidden"
      aria-label="Book a Financial Consultation"
    >
      <Container>
        
        {/* Floating Executive rounded card block */}
        <div className="bg-bg-canvas border border-border rounded-card-lg p-md md:p-xl lg:p-xxl shadow-premium-lg relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-xxl items-stretch">
            
            {/* Left Column: Heading, Trust points, coordinates (6 cols) */}
            <div 
              ref={leftColRef}
              className="lg:col-span-6 flex flex-col justify-between space-y-lg pr-0 lg:pr-lg"
            >
              <div className="flex flex-col space-y-md">
                <span className="fade-cta-left font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
                  Advisory Onboarding
                </span>
                
                <h2 
                  ref={titleRef}
                  className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary font-medium tracking-tight leading-tight"
                >
                  Let's Build a Stronger <br className="hidden md:inline" />
                  Financial Future Together
                </h2>
                
                <p className="fade-cta-left font-sans text-xs md:text-sm text-text-muted leading-relaxed max-w-[480px]">
                  Partner with senior specialists to optimize your corporate tax exposure, ensure statutory audit compliance, and implement clean accounting frameworks.
                </p>

                {/* Trust Points */}
                <div className="fade-cta-left flex flex-col space-y-xs pt-xs">
                  <div className="flex items-start space-x-sm">
                    <CustomBulletCheck />
                    <div className="flex flex-col">
                      <span className="font-sans text-xs md:text-sm font-semibold text-primary">Confidential Consultation</span>
                      <span className="font-sans text-[11px] text-text-muted">Strict compliance with ICAI data protection standards.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-sm">
                    <CustomBulletCheck />
                    <div className="flex flex-col">
                      <span className="font-sans text-xs md:text-sm font-semibold text-primary">Experienced Specialists</span>
                      <span className="font-sans text-[11px] text-text-muted">Direct oversight by senior partners and regulatory auditors.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-sm">
                    <CustomBulletCheck />
                    <div className="flex flex-col">
                      <span className="font-sans text-xs md:text-sm font-semibold text-primary">Callback Guarantee</span>
                      <span className="font-sans text-[11px] text-text-muted">We review and respond to corporate briefs within 24 business hours.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="fade-cta-left w-full h-[1px] bg-border pt-xs" />

              {/* Contact coordinates Directory */}
              <div className="fade-cta-left grid grid-cols-1 sm:grid-cols-2 gap-sm pt-xs text-left">
                
                <div className="flex items-start space-x-sm">
                  <div className="p-xxs bg-bg-alt text-primary rounded-none mt-xxs">
                    <Phone size={12} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[9px] font-bold text-text-muted tracking-wider uppercase">Direct Line</span>
                    <a href={`tel:${CONTACT_DATA.phone}`} className="font-sans text-xs font-semibold text-primary hover:text-accent transition-colors mt-xxs">
                      {CONTACT_DATA.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-sm">
                  <div className="p-xxs bg-bg-alt text-primary rounded-none mt-xxs">
                    <Mail size={12} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[9px] font-bold text-text-muted tracking-wider uppercase">Secure Email</span>
                    <a href={`mailto:${CONTACT_DATA.email}`} className="font-sans text-xs font-semibold text-primary hover:text-accent transition-colors mt-xxs">
                      {CONTACT_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-sm">
                  <div className="p-xxs bg-bg-alt text-primary rounded-none mt-xxs">
                    <MapPin size={12} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[9px] font-bold text-text-muted tracking-wider uppercase">Our Addresses</span>
                    <span className="font-sans text-xs text-primary leading-relaxed mt-xxs whitespace-pre-line">
                      <strong>Registered Address:</strong>{"\n"}
                      B-401/402, Sangam CHSLtd., Suchidham, Near Dindoshi Bus Depot, Film City Road, Malad East, Mumbai - 400097.{"\n\n"}
                      <strong>Office Address:</strong>{"\n"}
                      Office No.028, Udyog Bhavan CHSLtd., Opposite Zudio, Sonawala Road, Jay Prakash Nagar, Goregaon East, Mumbai - 400063
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-sm">
                  <div className="p-xxs bg-bg-alt text-primary rounded-none mt-xxs">
                    <Clock size={12} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[9px] font-bold text-text-muted tracking-wider uppercase">Business Hours</span>
                    <span className="font-sans text-xs text-primary mt-xxs">
                      Mon - Sat: 09:00 - 18:00
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Premium Form Card (6 cols) */}
            <div className="lg:col-span-6 flex items-center justify-center mt-xl lg:mt-0 relative z-10">
              
              {status === 'success' ? (
                /* Success Confirmation Block */
                <div className="w-full bg-bg-base border border-border p-md md:p-lg flex flex-col items-center justify-center text-center rounded-card-sm shadow-premium-sm min-h-[420px] select-none">
                  <CheckCircle2 size={48} className="text-accent" />
                  <h3 className="font-serif text-xl md:text-2xl text-primary font-medium tracking-tight mt-md">
                    Consultation Scheduled
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed max-w-[320px] mt-sm">
                    Thank you. Your corporate briefing has been securely logged. A senior managing partner will contact you directly within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="font-sans text-[10px] md:text-xs font-bold tracking-widest text-accent hover:text-primary uppercase mt-lg border-b border-accent hover:border-primary transition-colors pb-xxs"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                /* Interactive Request Form */
                <form 
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="w-full bg-bg-base border border-border p-md md:p-lg rounded-card-sm shadow-premium-sm flex flex-col justify-between space-y-md opacity-0"
                >
                  
                  {/* Badge */}
                  <div className="flex items-center justify-between border-b border-border/60 pb-sm select-none">
                    <div className="flex items-center space-x-xxs">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                      </span>
                      <span className="font-sans text-[10px] font-bold text-accent tracking-widest uppercase">
                        Response within 24 Hours
                      </span>
                    </div>
                    <span className="font-sans text-[9px] text-text-muted italic border border-border px-xxs py-[2px]">
                      Initial Audit Consultation
                    </span>
                  </div>

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                    
                    {/* Name */}
                    <div className="flex flex-col space-y-xxs">
                      <label htmlFor="cta-name" className="font-sans text-[10px] font-bold text-primary tracking-wider uppercase">
                        Full Name *
                      </label>
                      <input
                        id="cta-name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="font-sans text-xs bg-bg-canvas border border-border p-xs rounded-none text-primary focus:border-accent focus:ring-0 focus:outline-none transition-colors"
                        placeholder="e.g. Rajesh Mehta"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-xxs">
                      <label htmlFor="cta-email" className="font-sans text-[10px] font-bold text-primary tracking-wider uppercase">
                        Email Address *
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="font-sans text-xs bg-bg-canvas border border-border p-xs rounded-none text-primary focus:border-accent focus:ring-0 focus:outline-none transition-colors"
                        placeholder="e.g. rajesh@mehta.com"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col space-y-xxs">
                      <label htmlFor="cta-phone" className="font-sans text-[10px] font-bold text-primary tracking-wider uppercase">
                        Phone Number *
                      </label>
                      <input
                        id="cta-phone"
                        type="tel"
                        name="phone"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="font-sans text-xs bg-bg-canvas border border-border p-xs rounded-none text-primary focus:border-accent focus:ring-0 focus:outline-none transition-colors"
                        placeholder="e.g. +91 98765 43210"
                      />
                    </div>

                    {/* Company */}
                    <div className="flex flex-col space-y-xxs">
                      <label htmlFor="cta-company" className="font-sans text-[10px] font-bold text-primary tracking-wider uppercase">
                        Company Name
                      </label>
                      <input
                        id="cta-company"
                        type="text"
                        name="company"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                        className="font-sans text-xs bg-bg-canvas border border-border p-xs rounded-none text-primary focus:border-accent focus:ring-0 focus:outline-none transition-colors"
                        placeholder="e.g. Mehta Industries"
                      />
                    </div>

                  </div>

                  {/* Dropdown service choice */}
                  <div className="flex flex-col space-y-xxs">
                    <label htmlFor="cta-service" className="font-sans text-[10px] font-bold text-primary tracking-wider uppercase">
                      Service Requirement *
                    </label>
                    <select
                      id="cta-service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="font-sans text-xs bg-bg-canvas border border-border p-xs rounded-none text-primary focus:border-accent focus:ring-0 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select Core practice area...</option>
                      <option value="audit">Statutory Audit &amp; Assurance</option>
                      <option value="gst">GST Advisory &amp; Filing</option>
                      <option value="tax">Income Tax Litigation &amp; Returns</option>
                      <option value="roc">ROC Secretarial Compliance</option>
                      <option value="incorp">Company Incorporation / Structuring</option>
                      <option value="advisory">Corporate Financial Advisory</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-xxs">
                    <label htmlFor="cta-message" className="font-sans text-[10px] font-bold text-primary tracking-wider uppercase">
                      Brief Briefing Details
                    </label>
                    <textarea
                      id="cta-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="font-sans text-xs bg-bg-canvas border border-border p-xs rounded-none text-primary focus:border-accent focus:ring-0 focus:outline-none transition-colors resize-none"
                      placeholder="Outline any audit schedules, direct tax litigation, or incorporation timelines..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-xs flex flex-col space-y-xs">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-primary text-bg-canvas hover:bg-accent hover:text-bg-canvas text-xs font-semibold tracking-widest uppercase p-sm rounded-none border border-primary transition-all duration-300 flex items-center justify-center space-x-sm cursor-pointer select-none disabled:opacity-50"
                    >
                      <span>{status === 'submitting' ? 'Scheduling...' : 'Schedule Consultation'}</span>
                      <ArrowRight size={12} className="ml-xxs" />
                    </button>
                    
                    {/* Privacy Note */}
                    <div className="flex items-center justify-center space-x-xxs text-[9px] text-text-muted italic select-none">
                      <ShieldCheck size={10} className="text-accent" />
                      <span>Your information remains completely confidential.</span>
                    </div>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};
