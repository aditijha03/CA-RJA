import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ChevronDown, Quote, Sparkles } from "lucide-react";

import { Container } from "../components/common/Container";
import {
  INDUSTRIES,
  INDUSTRY_LIST,
  ENGAGEMENT_PROCESS,
  DEFAULT_INDUSTRY_SLUG,
} from "../constants/industriesData";

/* ============================================================
   SUB-COMPONENT: Industry Tabs
   Lets visitors jump between industries without leaving the page.
============================================================ */
function IndustryTabs({ activeSlug }) {
  return (
    <div className="border-b border-neutral-200 bg-white/80 backdrop-blur sticky top-0 z-30">
      <Container>
        <nav className="flex gap-2 overflow-x-auto no-scrollbar py-4">
          {INDUSTRY_LIST.map(({ slug, title, icon: Icon }) => {
            const isActive = slug === activeSlug;
            return (
              <Link
                key={slug}
                to={`/industries/${slug}`}
                className={`flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-accent/10 hover:text-accent"
                }`}
              >
                <Icon size={16} />
                {title}
              </Link>
            );
          })}
        </nav>
      </Container>
    </div>
  );
}

/* ============================================================
   SUB-COMPONENT: Hero
============================================================ */
function IndustryHero({ industry }) {
  return (
    <section data-theme="dark" className="relative h-[88vh] min-h-[700px] flex items-center">
      <img
        src={industry.heroImage}
        alt={industry.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

      <Container className="relative z-20 mt-28 md:mt-0">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <Sparkles size={16} className="text-accent" />
            <span className="uppercase tracking-[0.22em] text-xs text-white font-semibold">
              Industry Expertise
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl leading-tight text-white">
            {industry.title}
          </h1>

          <h2 className="mt-5 text-accent text-2xl md:text-3xl font-light italic">
            {industry.tagline}
          </h2>

          <p className="mt-8 max-w-2xl text-lg text-neutral-200 leading-8">
            {industry.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="group px-8 py-4 rounded-full bg-accent text-primary font-semibold flex items-center gap-3 hover:opacity-90 transition">
              Schedule Consultation
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
            <button className="px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-primary transition">
              Explore Services
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {industry.stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-4xl font-bold text-white">
                  {stat.value}
                </h3>
                <p className="text-neutral-300 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[2px] h-12 bg-white/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-5 bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SUB-COMPONENT: Overview
============================================================ */
function IndustryOverview({ industry }) {
  const [highlightOne, highlightTwo] = industry.highlights;

  return (
    <section className="relative py-24 lg:py-32 bg-[#faf9f6] overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d6d3d1_1px,transparent_1px)] [background-size:28px_28px]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-accent">
              Overview
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-primary">
              Driving Financial Clarity Across
              <span className="block italic text-accent">
                {industry.title}
              </span>
            </h2>
            <p className="mt-8 text-neutral-600 leading-8">
              {industry.description}
            </p>
            <p className="mt-6 text-neutral-600 leading-8">
              Our team combines sector-specific accounting expertise with
              hands-on regulatory experience to help {industry.title.toLowerCase()}{" "}
              businesses stay compliant, audit-ready, and financially sound —
              at every stage of growth.
            </p>

            <div className="mt-10 space-y-5">
              {industry.overviewPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <Icon size={22} className="text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-primary">{point.title}</h4>
                      <p className="text-neutral-600 mt-1">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src={industry.heroImage}
                alt={industry.title}
                className="w-full h-[620px] object-cover"
              />
            </div>

            {highlightOne && (
              <div className="absolute -left-8 top-12 bg-white rounded-2xl p-5 shadow-xl max-w-[220px]">
                <highlightOne.icon size={32} className="text-accent" />
                <h4 className="mt-4 font-semibold text-primary">{highlightOne.title}</h4>
                <p className="text-sm text-neutral-600 mt-2 leading-6">
                  {highlightOne.description}
                </p>
              </div>
            )}

            {highlightTwo && (
              <div className="absolute -right-8 bottom-16 bg-primary text-white rounded-2xl p-5 shadow-xl max-w-[230px]">
                <highlightTwo.icon size={30} className="text-accent" />
                <h4 className="mt-4 font-semibold">{highlightTwo.title}</h4>
                <p className="text-sm text-neutral-300 mt-2 leading-6">
                  {highlightTwo.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   SUB-COMPONENT: Challenges
============================================================ */
function IndustryChallenges({ industry }) {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ece8df_1px,transparent_1px)] [background-size:30px_30px] opacity-50" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="uppercase tracking-[0.25em] text-xs font-semibold text-accent">
            Industry Challenges
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary">
            Solving {industry.title}'s
            <span className="italic text-accent"> Financial Challenges</span>
          </h2>
          <p className="mt-6 text-neutral-600 leading-8">
            Every industry brings its own compliance blind spots and reporting
            demands. Here's what we routinely solve for {industry.title.toLowerCase()}{" "}
            businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {industry.challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#faf9f6] rounded-3xl p-8 border border-neutral-200 hover:border-accent transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                <span className="absolute top-6 right-6 text-5xl font-bold text-neutral-100 group-hover:text-accent/10 transition">
                  0{index + 1}
                </span>

                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent transition">
                  <Icon
                    size={28}
                    className="text-accent group-hover:text-white transition"
                  />
                </div>

                <h3 className="font-serif text-2xl text-primary mb-4">
                  {challenge.title}
                </h3>
                <p className="text-neutral-600 leading-7">
                  {challenge.description}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm uppercase tracking-widest text-neutral-400">
                    Challenge
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-neutral-400 group-hover:text-accent group-hover:translate-x-2 transition"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   SUB-COMPONENT: Services Offered
============================================================ */
function IndustryServices({ industry }) {
  return (
    <section className="relative py-24 lg:py-32 bg-[#faf9f6] overflow-hidden">
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="uppercase tracking-[0.25em] text-xs font-semibold text-accent">
            What We Offer
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary">
            Services Built for
            <span className="italic text-accent"> {industry.title}</span>
          </h2>
          <p className="mt-6 text-neutral-600 leading-8">
            Targeted engagements designed around how {industry.title.toLowerCase()}{" "}
            businesses actually operate — not generic accounting packages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industry.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-5 bg-white rounded-3xl p-8 border border-neutral-200 hover:border-accent hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary flex items-center justify-center">
                  <Icon size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary">
                    {service.title}
                  </h4>
                  <p className="text-neutral-600 mt-2 leading-7">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   SUB-COMPONENT: Engagement Process
============================================================ */
function IndustryProcess({ industry }) {
  return (
    <section data-theme="dark" className="relative py-24 lg:py-32 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

      <Container className="relative z-10">
        <div className="max-w-3xl mb-20">
          <span className="uppercase tracking-[0.25em] text-xs font-semibold text-accent">
            How We Work
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white leading-tight">
            Our Engagement Process for
            <span className="block italic text-accent">
              {industry.title}
            </span>
          </h2>
          <p className="mt-6 text-neutral-400 leading-8">
            A structured, four-stage engagement — not a one-off filing
            relationship — designed around how {industry.title.toLowerCase()}{" "}
            businesses actually run.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {ENGAGEMENT_PROCESS.map((stage) => (
            <div
              key={stage.step}
              className="relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.06] hover:border-accent/40 transition-all duration-500"
            >
              <span className="font-serif text-5xl text-accent/80">
                {stage.step}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {stage.title}
              </h3>
              <p className="mt-3 text-neutral-400 leading-7 text-[15px]">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   SUB-COMPONENT: Testimonial or Client Logos
============================================================ */
function IndustryTestimonial({ industry }) {
  const { testimonial, clients } = industry;
  if (!testimonial && !clients) return null;

  if (clients) {
    return (
      <section className="relative py-24 lg:py-28 bg-[#faf9f6] overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Trusted by Industry Leaders</h2>
            <div className="w-16 h-[2px] bg-accent mx-auto mt-6" />
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-between p-6 md:p-8 bg-white border border-neutral-200 rounded-xl shadow-premium-sm hover:border-accent/30 hover:shadow-premium-md transition-all duration-300 w-[280px] md:w-[320px] h-[220px] md:h-[260px] group cursor-default"
              >
                <div className="flex-1 flex items-center justify-center w-full relative">
                  <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <img src={client.logo} alt={client.name} className="max-w-[160px] max-h-[100px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10 drop-shadow-sm" />
                </div>
                <span className="font-sans text-sm md:text-base font-bold text-text-main group-hover:text-primary transition-colors duration-300 text-center mt-6 w-full px-2">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative py-24 lg:py-28 bg-[#faf9f6] overflow-hidden">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Quote size={40} className="text-accent mx-auto" />
          <p className="mt-8 font-serif text-2xl md:text-3xl leading-tight text-primary">
            "{testimonial.quote}"
          </p>
          <div className="mt-8">
            <p className="font-semibold text-primary">
              {testimonial.author}
            </p>
            <p className="text-neutral-500 text-sm mt-1">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   SUB-COMPONENT: FAQ
============================================================ */
function IndustryFAQ({ industry }) {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = industry.faqs || [];
  if (faqs.length === 0) return null;

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-accent">
              Common Questions
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-primary">
              {industry.title} FAQs
            </h2>
            <p className="mt-6 text-neutral-600 leading-8">
              Answers to what {industry.title.toLowerCase()} clients ask us
              most before starting an engagement.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              return (
                <div
                  key={index}
                  className="border border-neutral-200 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 bg-[#faf9f6] hover:bg-accent/5 transition"
                  >
                    <span className="font-semibold text-primary">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-accent transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 py-5 text-neutral-600 leading-7 border-t border-neutral-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   SUB-COMPONENT: Closing CTA
============================================================ */
function IndustryCTA({ industry }) {
  return (
    <section data-theme="dark" className="relative py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
      <Container className="relative z-10 text-center">
        <span className="uppercase tracking-[0.25em] text-xs font-semibold text-accent">
          Let's Talk
        </span>
        <h2 className="mt-4 font-serif text-3xl md:text-5xl text-white max-w-3xl mx-auto leading-tight">
          Ready to bring financial clarity to your{" "}
          <span className="italic text-accent">
            {industry.title.toLowerCase()}
          </span>{" "}
          business?
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="group px-8 py-4 rounded-full bg-accent text-primary font-semibold flex items-center gap-3 hover:opacity-90 transition">
            Schedule Consultation
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </button>
          <button className="px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-primary transition">
            Talk to Our Team
          </button>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   PAGE: Industries
============================================================ */
export default function Industries() {
  const { slug } = useParams();
  const industry = INDUSTRIES[slug] || INDUSTRIES[DEFAULT_INDUSTRY_SLUG];

  return (
    <main className="bg-[#faf9f6] text-primary overflow-hidden">
      <IndustryTabs activeSlug={industry.slug} />
      <IndustryHero industry={industry} />
      <IndustryOverview industry={industry} />
      <IndustryChallenges industry={industry} />
      <IndustryServices industry={industry} />
      <IndustryProcess industry={industry} />
      <IndustryTestimonial industry={industry} />
      <IndustryFAQ industry={industry} />
      <IndustryCTA industry={industry} />
    </main>
  );
}