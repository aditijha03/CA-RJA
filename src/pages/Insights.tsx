// pages/Insights.tsx
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  X,
  Newspaper,
  CalendarDays,
  ArrowUpRight,
  Building2,
  Sparkles,
  Loader2,
  AlertTriangle,
  FileSearch,
  Scale,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface RawArticle {
  title: string;
  link: string;
  date: string;
  source: string;
}

type Category =
  | "GST"
  | "Income Tax"
  | "MCA"
  | "RBI"
  | "CBDT"
  | "Budget"
  | "Finance";

type CategoryFilterValue = "All" | Category;

interface Article extends RawArticle {
  id: string;
  category: Category;
}

const CATEGORIES: CategoryFilterValue[] = [
  "All",
  "GST",
  "Income Tax",
  "MCA",
  "RBI",
  "CBDT",
  "Budget",
  "Finance",
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                             */
/* ------------------------------------------------------------------ */

const CATEGORY_RULES: { pattern: RegExp; category: Category }[] = [
  { pattern: /\bgst\b|goods and services tax/i, category: "GST" },
  { pattern: /\bcbdt\b|central board of direct taxes/i, category: "CBDT" },
  { pattern: /income tax|\bitr\b|\btds\b|capital gains/i, category: "Income Tax" },
  { pattern: /\brbi\b|reserve bank of india/i, category: "RBI" },
  { pattern: /\bmca\b|ministry of corporate affairs|companies act|\brocs?\b/i, category: "MCA" },
  { pattern: /\bbudget\b|union budget|finance bill/i, category: "Budget" },
];

function deriveCategory(title: string): Category {
  for (const rule of CATEGORY_RULES) {
    if (rule.pattern.test(title)) return rule.category;
  }
  return "Finance";
}

function normalizeArticles(raw: RawArticle[]): Article[] {
  return raw
    .filter((item) => item && item.title && item.link)
    .map((item, index) => ({
      ...item,
      id: `${item.link}-${index}`,
      category: deriveCategory(item.title),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function formatDate(dateString: string): string {
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return dateString;
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Insights() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilterValue>("All");

  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  document.title = "Insights | R. Jhunjhunwala & Associates";

  /* SEO meta description */
  useEffect(() => {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Latest GST, Income Tax, RBI, MCA and regulatory insights from trusted sources."
    );
  }, []);

  /* Fetch data */
  useEffect(() => {
    let cancelled = false;

    const fetchInsights = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/insights");
        if (!response.ok) {
          throw new Error("Failed to load insights. Please try again shortly.");
        }
        const data: RawArticle[] = await response.json();
        if (!cancelled) {
          setArticles(normalizeArticles(data));
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Something went wrong while loading insights."
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchInsights();
    return () => {
      cancelled = true;
    };
  }, []);

  /* Hero entrance animation */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
      tl.fromTo(badgeRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0 })
        .fromTo(headingRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0 }, "-=0.5")
        .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.5")
        .fromTo(metaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0 }, "-=0.4")
        .fromTo(searchRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0 }, "-=0.4");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  /* Category pill stagger */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const pills = pillsRef.current?.querySelectorAll("[data-pill]");
      if (!pills || pills.length === 0) return;
      gsap.fromTo(
        pills,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.06, delay: 0.2 }
      );
    }, pillsRef);
    return () => ctx.revert();
  }, [loading]);

  /* Derived data */
  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    articles.forEach((a) => {
      c[a.category] = (c[a.category] ?? 0) + 1;
    });
    return c;
  }, [articles]);

  const featured = articles[0] ?? null;
  const rest = useMemo(() => articles.slice(1), [articles]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rest.filter((a) => {
      const matchesCategory = category === "All" || a.category === category;
      const matchesQuery =
        q.length === 0 ||
        a.title.toLowerCase().includes(q) ||
        a.source.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [rest, query, category]);

  const showFeatured = !query && category === "All" && featured;

  /* Featured card reveal */
  useLayoutEffect(() => {
    if (!showFeatured) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        featuredRef.current,
        { opacity: 0, y: 32, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" }
      );
    }, featuredRef);
    return () => ctx.revert();
  }, [showFeatured, featured?.id]);

  /* Grid stagger on scroll */
  useLayoutEffect(() => {
    if (loading || filtered.length === 0) return;
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll("[data-card]");
      if (!cards || cards.length === 0) return;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
          },
        }
      );
    }, gridRef);
    return () => {
      ctx.revert();
    };
  }, [loading, filtered.length, query, category]);

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* ---------------------------------------------------------- */}
      {/* HERO                                                        */}
      {/* ---------------------------------------------------------- */}
      <section data-theme="dark" ref={heroRef} className="relative overflow-hidden bg-[#0F3D68] py-20 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#D9A441]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span
            ref={badgeRef}
            className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/40 bg-white/5 px-4 py-1.5 text-sm font-medium tracking-wide text-[#D9A441]"
          >
            <Newspaper className="h-4 w-4" aria-hidden="true" />
            Knowledge Centre
          </span>

          <h1
            ref={headingRef}
            className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl"
          >
            Tax, GST &amp; Regulatory Insights
          </h1>

          <p
            ref={descRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
          >
            Stay informed with the latest GST, Income Tax, MCA, RBI, CBDT, Budget
            and regulatory updates curated from trusted sources.
          </p>

          <div
            ref={metaRef}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-100"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9A441] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D9A441]" />
            </span>
            Updated Automatically
          </div>

          <div ref={searchRef} className="mx-auto mt-10 max-w-2xl">
            <div className="group relative">
              <Search
                className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#0F3D68]"
                aria-hidden="true"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search GST, Income Tax, RBI, MCA..."
                aria-label="Search insights"
                className="w-full rounded-2xl border border-transparent bg-white py-4 pl-14 pr-12 text-sm text-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.12)] outline-none transition-all placeholder:text-slate-400 focus:border-[#D9A441]/50 focus:shadow-[0_8px_30px_rgba(217,164,65,0.25)] sm:text-base"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* -------------------------------------------------------- */}
        {/* CATEGORY FILTERS                                          */}
        {/* -------------------------------------------------------- */}
        <div
          ref={pillsRef}
          className="mb-12 flex flex-wrap items-center justify-center gap-3"
          role="tablist"
          aria-label="Filter insights by category"
        >
          {CATEGORIES.map((c) => {
            const isActive = category === c;
            const count = c === "All" ? articles.length : counts[c] ?? 0;
            return (
              <button
                key={c}
                data-pill
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setCategory(c)}
                className={[
                  "inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "border-[#0F3D68] bg-[#0F3D68] text-white shadow-md"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#D9A441]/60 hover:text-[#0F3D68] hover:shadow-sm",
                ].join(" ")}
              >
                {c}
                {count > 0 && (
                  <span
                    className={[
                      "rounded-full px-1.5 py-0.5 text-xs font-semibold",
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500",
                    ].join(" ")}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* -------------------------------------------------------- */}
        {/* LOADING STATE                                             */}
        {/* -------------------------------------------------------- */}
        {loading && (
          <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
            <Loader2 className="h-8 w-8 animate-spin text-[#0F3D68]" aria-hidden="true" />
            <p className="text-sm font-medium text-slate-500">Loading the latest insights…</p>
          </div>
        )}

        {/* -------------------------------------------------------- */}
        {/* ERROR STATE                                               */}
        {/* -------------------------------------------------------- */}
        {!loading && error && (
          <div className="mx-auto flex max-w-xl flex-col items-center gap-3 rounded-2xl border border-red-100 bg-red-50 px-8 py-14 text-center">
            <AlertTriangle className="h-8 w-8 text-red-500" aria-hidden="true" />
            <p className="text-base font-semibold text-red-700">Unable to load insights</p>
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* -------------------------------------------------------- */}
        {/* CONTENT                                                   */}
        {/* -------------------------------------------------------- */}
        {!loading && !error && (
          <>
            {/* Featured article — shown only on the unfiltered, unsearched view */}
            {showFeatured && featured && (
              <div
                ref={featuredRef}
                className="group relative mb-14 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_10px_40px_rgba(15,61,104,0.08)]"
              >
                <div className="grid gap-0 lg:grid-cols-[1.1fr,1fr]">
                  <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D9A441]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#B4842C]">
                        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                        Featured
                      </span>
                      <span className="rounded-full bg-[#0F3D68]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0F3D68]">
                        {featured.category}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                      {featured.title}
                    </h2>

                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 className="h-4 w-4 text-slate-400" aria-hidden="true" />
                        {featured.source}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4 text-slate-400" aria-hidden="true" />
                        {formatDate(featured.date)}
                      </span>
                    </div>

                    <a
                      href={featured.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#0F3D68] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0c3155] hover:shadow-lg"
                    >
                      Read Article
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>

                  <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#0F3D68] to-[#144a7c] lg:block">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 2px 2px, #D9A441 1.5px, transparent 0)",
                        backgroundSize: "24px 24px",
                      }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10rem] font-bold leading-none text-white/5">
                        {featured.category.slice(0, 3).toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section label */}
            <div className="mb-8 flex items-center gap-3">
              <Scale className="h-5 w-5 text-[#D9A441]" aria-hidden="true" />
              <h3 className="text-xl font-bold text-slate-900">Latest Insights</h3>
            </div>

            {/* No results */}
            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-100 bg-white px-8 py-20 text-center shadow-sm">
                <FileSearch className="h-8 w-8 text-slate-300" aria-hidden="true" />
                <p className="text-base font-semibold text-slate-700">No matching insights</p>
                <p className="max-w-sm text-sm text-slate-500">
                  Try a different keyword or choose another category to see more updates.
                </p>
              </div>
            )}

            {/* Grid */}
            {filtered.length > 0 && (
              <div
                ref={gridRef}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((article) => (
                  <a
                    key={article.id}
                    data-card
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D9A441]/40 hover:shadow-[0_16px_40px_rgba(15,61,104,0.12)]"
                  >
                    <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[#0F3D68]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0F3D68]">
                      {article.category}
                    </span>

                    <h4 className="mb-4 line-clamp-3 text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-[#0F3D68]">
                      {article.title}
                    </h4>

                    <div className="mt-auto space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                        {article.source}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                          {formatDate(article.date)}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F3D68] transition-transform duration-300 group-hover:translate-x-0.5">
                          Read Article
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* ---------------------------------------------------------- */}
      {/* CTA SECTION                                                 */}
      {/* ---------------------------------------------------------- */}
      <section data-theme="dark" className="relative overflow-hidden bg-[#0F3D68] py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#D9A441]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            Need Professional Tax Guidance?
          </h3>
          <p className="max-w-xl text-base leading-relaxed text-slate-200">
            Our Chartered Accountants help businesses and individuals stay compliant
            with evolving tax and regulatory requirements.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact?intent=consultation"
              className="rounded-full bg-[#D9A441] px-7 py-3.5 text-sm font-semibold text-[#0F3D68] shadow-lg transition-all duration-300 hover:bg-[#c9963b] hover:shadow-xl"
            >
              Book Consultation
            </a>
            <a
              href="/contact"
              className="rounded-full border border-white/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}