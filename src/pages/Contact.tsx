import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../components/common/Container';
import { CONTACT_DATA } from '../constants/data';
import { splitReveal, fadeIn } from '../animations/helpers';
import gsap from 'gsap';
import {
  Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight,
  CheckCircle2, ChevronDown, AlertCircle,
} from 'lucide-react';

const CustomBulletCheck: React.FC = () => (
  <svg className="w-[14px] h-[14px] text-accent shrink-0 mt-[4px]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const FAQ_ITEMS = [
  { q: 'Is the initial consultation free?', a: 'Yes. Our first session is a complimentary scoping call to understand your compliance and advisory needs before any engagement begins.' },
  { q: 'How quickly will a partner respond?', a: 'All corporate briefs submitted through this form are reviewed and responded to within 24 business hours by a senior managing partner.' },
  { q: 'Do you work with businesses outside Mumbai?', a: 'Yes. We advise clients across India remotely, with in-person meetings available at our Goregaon East office by appointment.' },
  { q: 'What information should I include in my message?', a: 'A short outline of your entity type, current compliance status, and any deadlines (audit, GST, ROC filings) helps us prepare before the call.' },
];

type FormErrors = Partial<Record<'name' | 'email' | 'phone' | 'service', string>>;

const Contact: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    if (heroRef.current) {
      const anim = fadeIn(heroRef.current, undefined, 0);
      if (anim) cleanups.push(anim.kill);
    }
    if (titleRef.current) {
      const anim = splitReveal(titleRef.current, 0.1);
      if (anim) cleanups.push(anim.kill);
    }
    if (leftColRef.current) {
      const elements = leftColRef.current.querySelectorAll('.fade-cta-left');
      const anim = gsap.fromTo(elements,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: leftColRef.current, start: 'top 85%' } }
      );
      cleanups.push(() => { if (anim.scrollTrigger) anim.scrollTrigger.kill(); anim.kill(); });
    }
    if (formRef.current) {
      const anim = fadeIn(formRef.current, undefined, 0.3);
      if (anim) cleanups.push(anim.kill);
    }

    return () => cleanups.forEach((c) => c());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!formData.name.trim()) next.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'Enter a valid email address.';
    if (!/^[\d+\s()-]{7,}$/.test(formData.phone)) next.phone = 'Enter a valid phone number.';
    if (!formData.service) next.service = 'Select a practice area.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('submitting');
    
    // Map service values to readable labels
    const serviceLabels: Record<string, string> = {
      'audit': 'Statutory Audit & Assurance',
      'gst': 'GST Advisory & Filing',
      'tax': 'Income Tax Litigation & Returns',
      'roc': 'ROC Secretarial Compliance',
      'incorp': 'Company Incorporation / Structuring',
      'advisory': 'Corporate Financial Advisory'
    };
    const readableService = serviceLabels[formData.service] || formData.service;
    
    // Construct WhatsApp message
    const message = `Hello!\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Company:* ${formData.company || 'N/A'}\n*Service Required:* ${readableService}\n\n*Message:*\n${formData.message || 'None'}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = CONTACT_DATA.phone.replace(/[^\d]/g, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open immediately to bypass popup blockers
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 500);
  };

  const inputClass = (field: keyof FormErrors) => `font-sans text-xs bg-bg-canvas border p-xs rounded-none text-primary focus:ring-0 focus:outline-none transition-colors ${
    errors[field] ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-accent'
  }`;

  return (
    <main className="w-full bg-bg-canvas">

      {/* Page Hero */}
      <section data-theme="dark" ref={heroRef} className="w-full bg-primary text-bg-canvas pt-24 pb-xl md:pb-xxl border-hairline-b opacity-0">
        <Container>
          <div className="flex flex-col items-start max-w-2xl">
            <div className="flex items-center gap-sm">
              <div className="w-[12px] h-[1px] bg-accent" />
              <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
                Get in Touch
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-bg-canvas font-medium tracking-tight leading-tight mt-sm">
              Speak With a Managing Partner
            </h1>
            <p className="font-sans text-sm md:text-base text-border/75 leading-relaxed max-w-[520px] mt-sm">
              Whether you need a statutory audit, GST advisory, or a full compliance overhaul — our senior team responds to every enquiry within 24 business hours.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Contact Block */}
      <section className="w-full pt-xl md:pt-xxl pb-section" aria-label="Book a Financial Consultation">
        <Container>
          <div className="bg-bg-canvas border border-border rounded-card-lg p-md md:p-xl lg:p-xxl shadow-premium-lg relative overflow-hidden -mt-16 md:-mt-24 z-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-xxl items-stretch">

              {/* Left Column */}
              <div ref={leftColRef} className="lg:col-span-6 flex flex-col justify-between space-y-lg pr-0 lg:pr-lg">
                <div className="flex flex-col space-y-md">
                  <span className="fade-cta-left font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
                    Advisory Onboarding
                  </span>

                  <h2 ref={titleRef} className="font-serif text-2xl md:text-3xl text-primary font-medium tracking-tight leading-tight">
                    Let's Build a Stronger <br className="hidden md:inline" />
                    Financial Future Together
                  </h2>

                  <p className="fade-cta-left font-sans text-xs md:text-sm text-text-muted leading-relaxed max-w-[480px]">
                    Partner with senior specialists to optimize your corporate tax exposure, ensure statutory audit compliance, and implement clean accounting frameworks.
                  </p>

                  <div className="fade-cta-left flex flex-col space-y-xs pt-xs">
                    <div className="flex items-start space-x-sm">
                      <CustomBulletCheck />
                      <div className="flex flex-col">
                        <span className="font-sans text-xs md:text-sm font-semibold text-primary">Confidential consultation</span>
                        <span className="font-sans text-[11px] text-text-muted">Strict compliance with ICAI data protection standards.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-sm">
                      <CustomBulletCheck />
                      <div className="flex flex-col">
                        <span className="font-sans text-xs md:text-sm font-semibold text-primary">Experienced specialists</span>
                        <span className="font-sans text-[11px] text-text-muted">Direct oversight by senior partners and regulatory auditors.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-sm">
                      <CustomBulletCheck />
                      <div className="flex flex-col">
                        <span className="font-sans text-xs md:text-sm font-semibold text-primary">Callback guarantee</span>
                        <span className="font-sans text-[11px] text-text-muted">We review and respond to corporate briefs within 24 business hours.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fade-cta-left w-full h-[1px] bg-border pt-xs" />

                <div className="fade-cta-left grid grid-cols-1 sm:grid-cols-2 gap-sm pt-xs text-left">
                  <div className="flex items-start space-x-sm">
                    <div className="p-xxs bg-bg-alt text-primary mt-xxs"><Phone size={12} /></div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[9px] font-bold text-text-muted tracking-wider uppercase">Direct line</span>
                      <a href={`tel:${CONTACT_DATA.phone}`} className="font-sans text-xs font-semibold text-primary hover:text-accent transition-colors mt-xxs">
                        {CONTACT_DATA.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-sm">
                    <div className="p-xxs bg-bg-alt text-primary mt-xxs"><Mail size={12} /></div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[9px] font-bold text-text-muted tracking-wider uppercase">Secure email</span>
                      <a href={`mailto:${CONTACT_DATA.email}`} className="font-sans text-xs font-semibold text-primary hover:text-accent transition-colors mt-xxs">
                        {CONTACT_DATA.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-sm">
                    <div className="p-xxs bg-bg-alt text-primary mt-xxs"><MapPin size={12} /></div>
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
                    <div className="p-xxs bg-bg-alt text-primary mt-xxs"><Clock size={12} /></div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[9px] font-bold text-text-muted tracking-wider uppercase">Business hours</span>
                      <span className="font-sans text-xs text-primary mt-xxs">Mon – Sat: 09:00 – 18:00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-6 flex items-center justify-center mt-xl lg:mt-0 relative z-10">

                {status === 'success' ? (
                  <div role="status" aria-live="polite" className="w-full bg-bg-base border border-border p-md md:p-lg flex flex-col items-center justify-center text-center rounded-card-sm shadow-premium-sm min-h-[420px] select-none">
                    <CheckCircle2 size={48} className="text-accent" />
                    <h3 className="font-serif text-xl md:text-2xl text-primary font-medium tracking-tight mt-md">
                      Redirecting to WhatsApp
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed max-w-[320px] mt-sm">
                      Your inquiry has been formatted. Please hit 'Send' in WhatsApp to complete your request to our team.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="font-sans text-[10px] md:text-xs font-bold tracking-widest text-accent hover:text-primary uppercase mt-lg border-b border-accent hover:border-primary transition-colors pb-xxs"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    noValidate
                    className="w-full bg-bg-base border border-border p-md md:p-lg rounded-card-sm shadow-premium-sm flex flex-col justify-between space-y-md opacity-0"
                  >
                    <div className="flex items-center justify-between border-b border-border/60 pb-sm select-none">
                      <div className="flex items-center space-x-xxs">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                        </span>
                        <span className="font-sans text-[10px] font-bold text-accent tracking-widest uppercase">
                          Response within 24 hours
                        </span>
                      </div>
                      <span className="font-sans text-[9px] text-text-muted italic border border-border px-xxs py-[2px]">
                        Initial audit consultation
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                      <div className="flex flex-col space-y-xxs">
                        <label htmlFor="cta-name" className="font-sans text-[10px] font-bold text-primary tracking-wider uppercase">
                          Full name *
                        </label>
                        <input
                          id="cta-name" type="text" name="name" autoComplete="name"
                          value={formData.name} onChange={handleChange}
                          aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined}
                          className={inputClass('name')} placeholder="e.g. Rajesh Mehta"
                        />
                        {errors.name && <span id="err-name" className="flex items-center gap-xxs text-[10px] text-red-500"><AlertCircle size={11} />{errors.name}</span>}
                      </div>

                      <div className="flex flex-col space-y-xxs">
                        <label htmlFor="cta-email" className="font-sans text-[10px] font-bold text-primary tracking-wider uppercase">
                          Email address *
                        </label>
                        <input
                          id="cta-email" type="email" name="email" autoComplete="email"
                          value={formData.email} onChange={handleChange}
                          aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined}
                          className={inputClass('email')} placeholder="e.g. rajesh@mehta.com"
                        />
                        {errors.email && <span id="err-email" className="flex items-center gap-xxs text-[10px] text-red-500"><AlertCircle size={11} />{errors.email}</span>}
                      </div>

                      <div className="flex flex-col space-y-xxs">
                        <label htmlFor="cta-phone" className="font-sans text-[10px] font-bold text-primary tracking-wider uppercase">
                          Phone number *
                        </label>
                        <input
                          id="cta-phone" type="tel" name="phone" autoComplete="tel"
                          value={formData.phone} onChange={handleChange}
                          aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'err-phone' : undefined}
                          className={inputClass('phone')} placeholder="e.g. +91 98765 43210"
                        />
                        {errors.phone && <span id="err-phone" className="flex items-center gap-xxs text-[10px] text-red-500"><AlertCircle size={11} />{errors.phone}</span>}
                      </div>

                      <div className="flex flex-col space-y-xxs">
                        <label htmlFor="cta-company" className="font-sans text-[10px] font-bold text-primary tracking-wider uppercase">
                          Company name
                        </label>
                        <input
                          id="cta-company" type="text" name="company" autoComplete="organization"
                          value={formData.company} onChange={handleChange}
                          className={inputClass('name' as keyof FormErrors)} placeholder="e.g. Mehta Industries"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-xxs">
                      <label htmlFor="cta-service" className="font-sans text-[10px] font-bold text-primary tracking-wider uppercase">
                        Service requirement *
                      </label>
                      <select
                        id="cta-service" name="service"
                        value={formData.service} onChange={handleChange}
                        aria-invalid={!!errors.service} aria-describedby={errors.service ? 'err-service' : undefined}
                        className={`${inputClass('service')} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>Select core practice area...</option>
                        <option value="audit">Statutory Audit &amp; Assurance</option>
                        <option value="gst">GST Advisory &amp; Filing</option>
                        <option value="tax">Income Tax Litigation &amp; Returns</option>
                        <option value="roc">ROC Secretarial Compliance</option>
                        <option value="incorp">Company Incorporation / Structuring</option>
                        <option value="advisory">Corporate Financial Advisory</option>
                      </select>
                      {errors.service && <span id="err-service" className="flex items-center gap-xxs text-[10px] text-red-500"><AlertCircle size={11} />{errors.service}</span>}
                    </div>

                    <div className="flex flex-col space-y-xxs">
                      <label htmlFor="cta-message" className="font-sans text-[10px] font-bold text-primary tracking-wider uppercase">
                        Brief briefing details
                      </label>
                      <textarea
                        id="cta-message" name="message" rows={3}
                        value={formData.message} onChange={handleChange}
                        className="font-sans text-xs bg-bg-canvas border border-border p-xs rounded-none text-primary focus:border-accent focus:ring-0 focus:outline-none transition-colors resize-none"
                        placeholder="Outline any audit schedules, direct tax litigation, or incorporation timelines..."
                      />
                    </div>

                    <div className="pt-xs flex flex-col space-y-xs">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-primary text-bg-canvas hover:bg-accent text-xs font-semibold tracking-widest uppercase p-sm rounded-none border border-primary transition-all duration-300 flex items-center justify-center space-x-sm cursor-pointer select-none disabled:opacity-50"
                      >
                        <span>{status === 'submitting' ? 'Connecting...' : 'Connect on WhatsApp'}</span>
                        <ArrowRight size={12} className="ml-xxs" />
                      </button>

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

      {/* Map + Office Card */}
      <section className="w-full pb-section" aria-label="Office Location">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="md:col-span-2 w-full aspect-[16/8] border border-border rounded-card-sm overflow-hidden shadow-premium-sm">
              <iframe
                title="Office location map"
                src="https://www.google.com/maps?q=Office+No.028,+Udyog+Bhavan+Sonawala+Road+Goregaon+East+Mumbai&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="bg-bg-alt border border-border rounded-card-sm p-md flex flex-col justify-center space-y-sm">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-accent uppercase">
                Our Locations
              </span>
              <h3 className="font-serif text-lg text-primary font-medium">R. Jhunjhunwala &amp; Associates</h3>
              <div className="space-y-xs">
                <div className="font-sans text-xs leading-relaxed text-text-muted">
                  <strong className="text-primary text-[10px] uppercase tracking-wider block mb-1">Registered Address:</strong>
                  B-401/402, Sangam CHSLtd.,<br />
                  Suchidham, Near Dindoshi Bus Depot,<br />
                  Film City Road, Malad East,<br />
                  Mumbai - 400097.
                </div>
                <div className="font-sans text-xs leading-relaxed text-text-muted pt-xs border-t border-[#E7E7E7]/50">
                  <strong className="text-primary text-[10px] uppercase tracking-wider block mb-1">Office Address:</strong>
                  Office No.028, Udyog Bhavan CHSLtd.,<br />
                  Opposite Zudio, Sonawala Road,<br />
                  Jay Prakash Nagar, Goregaon East,<br />
                  Mumbai - 400063
                </div>
              </div>
              <a
                href="https://www.google.com/maps?q=Office+No.028,+Udyog+Bhavan+Sonawala+Road+Goregaon+East+Mumbai"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-xs font-sans text-[10px] font-semibold tracking-widest text-primary uppercase border-b border-transparent hover:border-primary hover:text-accent transition-all self-start pt-xs"
              >
                Get directions
                <ArrowRight size={10} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="w-full pb-section border-hairline-t" aria-label="Frequently Asked Questions">
        <Container>
          <div className="max-w-[720px] mx-auto">
            <div className="flex flex-col items-center text-center mb-xl">
              <div className="flex items-center gap-sm">
                <div className="w-[12px] h-[1px] bg-accent" />
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-accent uppercase">
                  Common Questions
                </span>
                <div className="w-[12px] h-[1px] bg-accent" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-primary font-medium tracking-tight mt-sm">
                Before you reach out
              </h2>
            </div>

            <div className="flex flex-col divide-y divide-border border-t border-b border-border">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                      className="w-full flex items-center justify-between gap-md py-md text-left"
                    >
                      <span className="font-sans text-sm md:text-base font-semibold text-primary">{item.q}</span>
                      <ChevronDown size={16} className={`text-accent shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div
                      id={`faq-panel-${idx}`}
                      className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-md' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed max-w-[600px]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
};

export default Contact;