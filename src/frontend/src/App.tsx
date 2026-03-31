import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import {
  ArrowRight,
  Award,
  BarChart2,
  Building2,
  Car,
  ChevronRight,
  Clock,
  Dumbbell,
  Flag,
  Home,
  IndianRupee,
  Leaf,
  Loader2,
  Menu,
  Percent,
  ShieldCheck,
  Target,
  Trees,
  TrendingUp,
  Users,
  Waves,
  Wine,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useActor } from "./hooks/useActor";

const LOGO_URL =
  "/assets/uploads/image-019d25c8-845c-7150-b772-78c0bdea31fd-1.png";

// ─── Nav ────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Overview", href: "#overview" },
    { label: "Investment", href: "#investment" },
    { label: "Financials", href: "#financials" },
    { label: "Amenities", href: "#amenities" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-xl flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3"
          data-ocid="nav.link"
        >
          <img
            src={LOGO_URL}
            alt="The Horizon Infra"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-ocid="nav.link"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <a href="#contact">
            <Button
              data-ocid="nav.primary_button"
              className="bg-brand text-brand-foreground hover:bg-brand-dark text-sm tracking-wide uppercase"
            >
              Request Brochure
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              data-ocid="nav.link"
              className="block py-3 text-sm font-medium text-foreground border-b border-border last:border-0 tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <Button
            className="mt-4 w-full bg-brand text-brand-foreground"
            data-ocid="nav.primary_button"
            onClick={() => {
              setOpen(false);
              window.location.hash = "#contact";
            }}
          >
            Request Brochure
          </Button>
        </div>
      )}
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-aerial.dim_1600x900.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <p className="text-brand-light text-xs md:text-sm tracking-[0.25em] uppercase font-medium mb-6 animate-fade-up">
          Premium Investment Opportunity
        </p>
        <h1
          className="font-serif text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          Where Luxury Meets
          <br />
          <span className="italic">High-Return Investment</span>
        </h1>
        <p
          className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          8 premium independent floors. Central park concept. Private parking.
          <br className="hidden md:block" />
          2–3 year project completion. ROI up to 180%+.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <a href="#contact">
            <Button
              data-ocid="hero.primary_button"
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 text-sm tracking-wide uppercase font-semibold px-8 h-12"
            >
              Schedule a Visit
            </Button>
          </a>
          <a href="#investment">
            <Button
              data-ocid="hero.secondary_button"
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white/10 text-sm tracking-wide uppercase font-semibold px-8 h-12"
            >
              Invest Now <ArrowRight className="ml-2" size={16} />
            </Button>
          </a>
        </div>
      </div>

      {/* Stat cards — overlapping bottom */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-16 md:mt-20 pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Projected ROI", value: "110–180%+", icon: TrendingUp },
            {
              label: "Projected Profit",
              value: "₹12–15.5 Cr",
              icon: IndianRupee,
            },
            { label: "Project Timeline", value: "2–3 Years", icon: Clock },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl p-6 shadow-card-lg flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                <s.icon size={22} className="text-brand" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                  {s.label}
                </p>
                <p className="font-serif text-xl font-bold text-foreground mt-0.5">
                  {s.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Project Overview ────────────────────────────────────────────────────────
function Overview() {
  return (
    <section id="overview" className="section-pad bg-white">
      <div className="container-xl">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.2em] text-brand uppercase font-semibold mb-4">
            The Project
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Horizon Enclave
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            Horizon Enclave is a meticulously designed boutique gated community
            that redefines the standard of luxury residential living. Nestled in
            a prime location, it offers an unmatched combination of exclusivity,
            craftsmanship, and curated lifestyle amenities.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
            Conceived for discerning families and astute investors alike, each
            home is thoughtfully designed with premium finishes, generous space,
            and a deep respect for privacy — all within a vibrant, landscaped
            community setting.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "8 Exclusive Floors",
              "Central Park",
              "Private Parking",
              "Gated Security",
              "Boutique Community",
            ].map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground bg-secondary"
              >
                <ChevronRight size={14} className="text-brand" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Investment Opportunity ──────────────────────────────────────────────────
function InvestmentOpportunity() {
  const cards = [
    {
      icon: TrendingUp,
      title: "Low-Density Luxury Demand",
      desc: "Rising aspirations and a shortage of truly premium independent residences are driving unprecedented demand. Buyers are actively seeking the privacy and prestige of independent living.",
    },
    {
      icon: Target,
      title: "The Market Gap",
      desc: "The ₹2.8–3 Cr segment sits at a sweet spot — ultra-premium yet attainable, capturing buyers who want genuine luxury without the scale of a full villa project. Horizon Enclave fills this gap with precision.",
    },
    {
      icon: Zap,
      title: "Fast-Selling Boutique Segment",
      desc: "Limited inventory boutique developments consistently outperform the broader market in both pricing and absorption speed, with units typically sold within 60–90 days of launch.",
    },
  ];

  return (
    <section
      id="investment"
      className="section-pad"
      style={{ background: "#F6F6F6" }}
    >
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] text-brand uppercase font-semibold mb-4">
            Market Insight
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            The Investment Opportunity
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              data-ocid={`investment.card.${i + 1}`}
              className="bg-white rounded-2xl p-8 shadow-card border border-border hover:shadow-card-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
                <c.icon size={22} className="text-brand" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {c.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Financial Highlights ────────────────────────────────────────────────────
function FinancialHighlights() {
  const stats = [
    { icon: IndianRupee, label: "Total Investment", value: "₹8.5 – ₹10.5 Cr" },
    { icon: BarChart2, label: "Projected Revenue", value: "₹22.4 – ₹24 Cr" },
    { icon: TrendingUp, label: "Projected Profit", value: "₹12 – ₹15.5 Cr" },
    { icon: Percent, label: "ROI", value: "110% – 180%+" },
    { icon: Clock, label: "Project Timeline", value: "2–3 Years" },
  ];

  return (
    <section
      id="financials"
      className="section-pad"
      style={{ background: "#111111" }}
    >
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] text-brand-light uppercase font-semibold mb-4">
            Numbers That Matter
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Financial Highlights
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-ocid={`financials.card.${i + 1}`}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center mx-auto mb-4">
                <s.icon size={22} className="text-brand-light" />
              </div>
              <p className="text-white/50 text-xs tracking-widest uppercase mb-2">
                {s.label}
              </p>
              <p className="font-serif text-xl md:text-2xl font-bold text-white">
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Project Layout ──────────────────────────────────────────────────────────
function ProjectLayout() {
  const features = [
    {
      icon: Building2,
      title: "8 Premium Independent Floors",
      desc: "Each floor is a self-contained premium residence with distinct identity, generous space, and meticulous finishing.",
    },
    {
      icon: Trees,
      title: "Central Park Concept",
      desc: "A lush, landscaped central green at the heart of the community — perfect for morning walks, family gatherings, and quiet contemplation.",
    },
    {
      icon: Car,
      title: "Wide Internal Roads",
      desc: "Thoughtfully designed wide internal roads ensure smooth vehicular movement, easy emergency access, and a spacious community feel.",
    },
    {
      icon: Car,
      title: "Private Parking",
      desc: "Dedicated private parking for every residence ensures convenience, security, and peace of mind for all homeowners.",
    },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] text-brand uppercase font-semibold mb-4">
            Design & Planning
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Project Layout
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-ocid={`layout.card.${i + 1}`}
              className="flex gap-5 p-7 rounded-2xl border border-border hover:shadow-card transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                <f.icon size={22} className="text-brand" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Amenities ───────────────────────────────────────────────────────────────
function Amenities() {
  const amenities = [
    {
      img: "/assets/generated/amenity-clubhouse.dim_600x400.jpg",
      icon: Home,
      title: "Clubhouse",
      desc: "An opulent social hub for residents to gather, celebrate, and connect.",
    },
    {
      img: "/assets/generated/amenity-pool.dim_600x400.jpg",
      icon: Waves,
      title: "Swimming Pool",
      desc: "A resort-style pool designed for relaxation and leisure in absolute luxury.",
    },
    {
      img: "/assets/generated/amenity-golf.dim_600x400.jpg",
      icon: Flag,
      title: "Mini Golf",
      desc: "A beautifully crafted mini golf course for recreation and family fun.",
    },
    {
      img: "/assets/generated/amenity-gym.dim_600x400.jpg",
      icon: Dumbbell,
      title: "Gymnasium",
      desc: "State-of-the-art fitness equipment in a premium, well-lit environment.",
    },
    {
      img: "/assets/generated/amenity-bar.dim_600x400.jpg",
      icon: Wine,
      title: "Bar & Social Area",
      desc: "An exclusive social lounge for unwinding with residents and guests.",
    },
    {
      img: "/assets/generated/amenity-park.dim_600x400.jpg",
      icon: Leaf,
      title: "Landscaped Park",
      desc: "A serene green space that brings nature to the heart of the community.",
    },
  ];

  return (
    <section
      id="amenities"
      className="section-pad"
      style={{ background: "#F6F6F6" }}
    >
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] text-brand uppercase font-semibold mb-4">
            Amenities
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            World-Class Amenities
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Every detail at Horizon Enclave is crafted to deliver an
            unparalleled lifestyle — where luxury is not an addition, but the
            foundation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((a, i) => (
            <div
              key={a.title}
              data-ocid={`amenities.item.${i + 1}`}
              className="bg-white rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-card-lg transition-shadow group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <a.icon size={18} className="text-brand" />
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {a.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Revenue Model ───────────────────────────────────────────────────────────
function RevenueModel() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] text-brand uppercase font-semibold mb-4">
            Returns
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Revenue Model
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Unit Sales */}
          <div className="rounded-2xl border-2 border-brand/20 p-8 bg-brand/5">
            <div className="w-12 h-12 rounded-xl bg-brand/15 flex items-center justify-center mb-5">
              <IndianRupee size={22} className="text-brand" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
              Unit Sales
            </h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Each of the 8 premium floors is priced in the ultra-luxury ₹2.8–3
              Cr segment, ensuring strong capital appreciation and exceptional
              returns for investors.
            </p>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-4xl font-bold text-foreground">
                ₹2.8 – 3 Cr
              </span>
              <span className="text-muted-foreground text-sm">per unit</span>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Total projected revenue from 8 units
              </p>
              <p className="font-serif text-xl font-bold text-foreground mt-1">
                ₹22.4 – ₹24 Cr
              </p>
            </div>
          </div>

          {/* Recurring Income */}
          <div className="rounded-2xl border-2 border-border p-8">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
              <TrendingUp size={22} className="text-foreground" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
              Recurring Income
            </h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Beyond unit sales, Horizon Enclave offers a steady recurring
              revenue stream through maintenance fees and membership structures.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Maintenance Fee
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Per unit per month
                  </p>
                </div>
                <span className="font-serif text-xl font-bold text-foreground">
                  ₹15,000
                  <span className="text-muted-foreground text-sm font-normal">
                    /mo
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Additional Member
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Per additional member
                  </p>
                </div>
                <span className="font-serif text-xl font-bold text-foreground">
                  ₹5,000
                  <span className="text-muted-foreground text-sm font-normal">
                    /mo
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Why Invest ──────────────────────────────────────────────────────────────
function WhyInvest() {
  const reasons = [
    {
      icon: Award,
      title: "High-Margin Boutique",
      desc: "Small-scale, premium developments consistently deliver higher margins than large residential projects due to exclusivity and scarcity premium.",
    },
    {
      icon: ShieldCheck,
      title: "Limited Competition",
      desc: "The boutique independent floor segment remains underserved, with very few developers operating at this intersection of quality and price point.",
    },
    {
      icon: Users,
      title: "Strong Demand",
      desc: "Post-pandemic preferences for larger, private homes have created a sustained surge in demand for premium independent living options.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Value Growth",
      desc: "Premium boutique developments in prime locations appreciate significantly over a 2–3 year completion cycle, offering investors strong long-term capital gains.",
    },
  ];

  return (
    <section className="section-pad" style={{ background: "#F6F6F6" }}>
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] text-brand uppercase font-semibold mb-4">
            The Case
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Why Choose Horizon Enclave
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              data-ocid={`why.card.${i + 1}`}
              className="bg-white rounded-2xl p-8 shadow-card border border-border hover:shadow-card-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
                <r.icon size={22} className="text-brand" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {r.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Developer ─────────────────────────────────────────────────────────
function AboutDeveloper() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-brand uppercase font-semibold mb-4">
              The Developer
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-1">
              The Horizon Infra
            </h2>
            <p className="text-muted-foreground text-sm tracking-wider uppercase mb-6">
              Est. 2020
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              The Horizon Infra is a premium real estate developer with an
              unwavering commitment to boutique developments that stand apart.
              Every project is approached as a work of design — where
              architecture, landscape, and community are considered as a unified
              whole.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Our philosophy is simple: build less, build better. We believe
              that true luxury lies not in scale, but in the precision of every
              detail — from material selection to spatial planning to the
              quality of every interaction with our homeowners.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "Projects Delivered", value: "12+" },
                { label: "Happy Families", value: "200+" },
                { label: "Years of Excellence", value: "5+" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-3xl font-bold text-foreground">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual accent */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card-lg aspect-[4/3] bg-foreground flex items-center justify-center">
              <div className="text-center px-8">
                <div className="flex items-center justify-center mb-6">
                  <img
                    src={LOGO_URL}
                    alt="The Horizon Infra"
                    className="h-20 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <p className="font-serif text-2xl font-bold text-white mb-1">
                  The Horizon Infra
                </p>
                <p className="text-white/50 text-sm tracking-widest uppercase">
                  Est. 2020
                </p>
                <div className="mt-8 flex items-center justify-center gap-8">
                  {["Trust", "Quality", "Design"].map((v) => (
                    <div key={v} className="text-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-light mx-auto mb-2" />
                      <p className="text-white/70 text-xs tracking-wider uppercase">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-brand/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-brand/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact / CTA ───────────────────────────────────────────────────────────
function ContactSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const mutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Not connected");
      await actor.submitForm(
        name,
        phone,
        email,
        message,
        interest || "General Inquiry",
      );
    },
    onSuccess: () => {
      toast.success(
        "Your inquiry has been submitted! Our team will reach out shortly.",
      );
      setName("");
      setPhone("");
      setEmail("");
      setInterest("");
      setMessage("");
    },
    onError: () => {
      toast.error(
        "Something went wrong. Please try again or call us directly.",
      );
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      toast.error("Please fill in your name, phone, and email.");
      return;
    }
    mutation.mutate();
  };

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: "#111111" }}
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left CTA */}
          <div>
            <p className="text-xs tracking-[0.2em] text-brand-light uppercase font-semibold mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Invest in
              <span className="italic text-brand-light"> Horizon Enclave?</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              Schedule a site visit or request our exclusive investment deck.
              Our team will personally guide you through every aspect of the
              opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                data-ocid="contact.primary_button"
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 text-sm tracking-wide uppercase font-semibold px-8 h-12"
                onClick={() =>
                  document
                    .querySelector<HTMLFormElement>("#contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book a Site Visit
              </Button>
              <Button
                data-ocid="contact.secondary_button"
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-transparent hover:bg-white/10 text-sm tracking-wide uppercase font-semibold px-8 h-12"
              >
                Download Investment Deck
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              {[
                { label: "RERA Registered", icon: ShieldCheck },
                { label: "ISO Certified", icon: Award },
                { label: "12+ Projects", icon: Building2 },
                { label: "200+ Families", icon: Users },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-3">
                  <t.icon size={16} className="text-brand-light shrink-0" />
                  <span className="text-white/60 text-sm">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              Connect With Us
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Fill in your details and we'll get back to you within 24 hours.
            </p>

            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-4"
              data-ocid="contact.modal"
            >
              <div>
                <Label
                  htmlFor="name"
                  className="text-xs font-medium tracking-wide uppercase text-muted-foreground"
                >
                  Full Name *
                </Label>
                <Input
                  id="name"
                  data-ocid="contact.input"
                  placeholder="Rajesh Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="text-xs font-medium tracking-wide uppercase text-muted-foreground"
                >
                  Phone *
                </Label>
                <Input
                  id="phone"
                  data-ocid="contact.input"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1.5"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="text-xs font-medium tracking-wide uppercase text-muted-foreground"
                >
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  data-ocid="contact.input"
                  placeholder="rajesh@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="interest"
                  className="text-xs font-medium tracking-wide uppercase text-muted-foreground"
                >
                  I'm Interested In
                </Label>
                <Select value={interest} onValueChange={setInterest}>
                  <SelectTrigger
                    id="interest"
                    data-ocid="contact.select"
                    className="mt-1.5"
                  >
                    <SelectValue placeholder="Select interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Site Visit">Site Visit</SelectItem>
                    <SelectItem value="Investment Partnership">
                      Investment Partnership
                    </SelectItem>
                    <SelectItem value="General Inquiry">
                      General Inquiry
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label
                  htmlFor="message"
                  className="text-xs font-medium tracking-wide uppercase text-muted-foreground"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  data-ocid="contact.textarea"
                  placeholder="Tell us more about your requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1.5 resize-none"
                  rows={3}
                />
              </div>
              <Button
                type="submit"
                data-ocid="contact.submit_button"
                disabled={mutation.isPending}
                className="w-full bg-brand text-brand-foreground hover:bg-brand-dark h-11 text-sm tracking-wide uppercase font-semibold"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />{" "}
                    Submitting...
                  </>
                ) : (
                  "Send Inquiry"
                )}
              </Button>
              {mutation.isSuccess && (
                <p
                  className="text-center text-sm text-green-600 font-medium"
                  data-ocid="contact.success_state"
                >
                  ✓ Inquiry submitted successfully!
                </p>
              )}
              {mutation.isError && (
                <p
                  className="text-center text-sm text-destructive font-medium"
                  data-ocid="contact.error_state"
                >
                  Failed to submit. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer style={{ background: "#0F0F10" }} className="pt-16 pb-8">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={LOGO_URL}
                alt="The Horizon Infra"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <div>
                <p className="font-serif text-white font-semibold">
                  HORIZON ENCLAVE
                </p>
                <p className="text-white/40 text-xs tracking-wide">
                  By The Horizon Infra · Est. 2020
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              A boutique luxury residential development redefining the standard
              of premium independent living.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-4">
              Explore
            </p>
            <div className="space-y-2">
              {[
                "Overview",
                "Investment",
                "Financials",
                "Amenities",
                "Contact",
              ].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  data-ocid="footer.link"
                  className="block text-white/60 text-sm hover:text-white transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase mb-4">
              Contact
            </p>
            <div className="space-y-2">
              <p className="text-white/60 text-sm">info@horizoninfra.in</p>
              <p className="text-white/60 text-sm">+91 98765 43210</p>
              <p className="text-white/60 text-sm">Hyderabad, Telangana</p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} The Horizon Infra. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Nav />
      <main>
        <Hero />
        <Overview />
        <InvestmentOpportunity />
        <FinancialHighlights />
        <ProjectLayout />
        <Amenities />
        <RevenueModel />
        <WhyInvest />
        <AboutDeveloper />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
