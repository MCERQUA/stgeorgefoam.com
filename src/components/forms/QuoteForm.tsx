"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Loader2, AlertCircle, ArrowRight, ArrowLeft, Phone } from "lucide-react";
import { SITE, SERVICE_AREAS } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const AREAS = ["Attic / Roof Deck", "Exterior Walls", "Crawl Space", "Garage / Shop", "Commercial / Metal Building", "Spray Foam Removal / Correction", "Not sure — need advice"];
const TIMEFRAMES = ["As soon as possible", "Within a month", "1-3 months", "Just researching"];

type FormData = {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  areaToInsulate: string;
  squareFootage: string;
  service: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  timeframe: string;
  message: string;
};

const initial: FormData = {
  name: "", phone: "", email: "", propertyType: "", areaToInsulate: "",
  squareFootage: "", service: "", streetAddress: "", state: "UT", zip: "", city: "", timeframe: "", message: "",
};

const STEPS = ["Your Home", "Project", "Contact"];

const inputCls =
  "w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-ink placeholder:text-slatey/40 focus:border-copper-700/60 focus:outline-none focus:ring-2 focus:ring-copper-700/15 transition";
const labelCls = "mb-1.5 block text-sm font-medium text-slatey";

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initial);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [traffic, setTraffic] = useState({ traffic_source: "", landing_url: "" });

  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      let src = p.get("utm_source") || p.get("ref") || "";
      if (!src && document.referrer) {
        try { src = new URL(document.referrer).hostname; } catch { src = document.referrer; }
      }
      if (!src) src = "direct";
      setTraffic({ traffic_source: src, landing_url: window.location.href });
    } catch {
      /* noop */
    }
  }, []);

  const set = (k: keyof FormData, v: string) => setData((d) => ({ ...d, [k]: v }));

  const canNext = step === 0 ? data.propertyType && data.city : step === 1 ? data.service : true;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Only the last step may submit. A submit event raised from an earlier step — a
    // reclassified nav button, Enter in a text field — would post a lead with no name,
    // phone or email.
    if (step !== STEPS.length - 1) return;
    setStatus("submitting");
    try {
      const payload: Record<string, string> = { "form-name": "quote", ...data, ...traffic };
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString(),
      });
      if (res.ok) {
        setStatus("success");
        setData(initial);
      } else {
        throw new Error(`Status ${res.status}`);
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card p-10 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-copper/10">
          <CheckCircle2 className="h-9 w-9 text-copper-700" />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-ink">Quote request received</h3>
        <p className="mx-auto mt-3 max-w-md text-slatey">
          Thanks! We&apos;ll reach out shortly to schedule your free home assessment and put
          together a clear quote. Need us sooner? Give us a call.
        </p>
        <a href={SITE.phoneHref} className="btn-primary mt-7">
          <Phone className="h-4 w-4" /> {SITE.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      name="quote"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="card p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value="quote" />
      <input type="hidden" name="traffic_source" value={traffic.traffic_source} readOnly />
      <input type="hidden" name="landing_url" value={traffic.landing_url} readOnly />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="mb-8 flex items-center gap-2">
        {STEPS.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <div
              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold transition ${
                i <= step ? "bg-copper-700 text-white" : "bg-stone-100 text-slatey/50"
              }`}
            >
              {i + 1}
            </div>
            <span className={`hidden text-sm sm:block ${i <= step ? "text-ink" : "text-slatey/50"}`}>{s}</span>
            {i < STEPS.length - 1 && (
              <div className={`h-px flex-1 ${i < step ? "bg-copper-700" : "bg-stone-200"}`} />
            )}
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="grid gap-5 animate-fade-up">
          <div>
            <label className={labelCls}>Property type *</label>
            <select className={inputCls} name="propertyType" value={data.propertyType} onChange={(e) => set("propertyType", e.target.value)}>
              <option value="">Select…</option>
              <option value="Single-family home">Single-family home</option>
              <option value="Cabin / second home">Cabin / second home</option>
              <option value="New construction">New construction</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls}>City / town *</label>
              <select className={inputCls} name="city" value={data.city} onChange={(e) => set("city", e.target.value)}>
                <option value="">Select…</option>
                {SERVICE_AREAS.map((c) => <option key={c.slug} value={c.name}>{c.name}</option>)}
                <option value="Other Washington County area">Other Washington County area</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Approx. square footage</label>
              <input className={inputCls} name="squareFootage" value={data.squareFootage} onChange={(e) => set("squareFootage", e.target.value)} placeholder="e.g. 1,800 sq ft or your best estimate" />
            </div>
          </div>
          <div>
            <label className={labelCls}>Street address</label>
            <input className={inputCls} name="streetAddress" value={data.streetAddress} onChange={(e) => set("streetAddress", e.target.value)} placeholder="Where the work would happen" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls}>State</label>
              <input className={inputCls} name="state" value={data.state} onChange={(e) => set("state", e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>ZIP code</label>
              <input className={inputCls} name="zip" value={data.zip} onChange={(e) => set("zip", e.target.value)} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Area to insulate</label>
            <select className={inputCls} name="areaToInsulate" value={data.areaToInsulate} onChange={(e) => set("areaToInsulate", e.target.value)}>
              <option value="">Select…</option>
              {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-5 animate-fade-up">
          <div>
            <label className={labelCls}>Service needed *</label>
            <select className={inputCls} name="service" value={data.service} onChange={(e) => set("service", e.target.value)}>
              <option value="">Select…</option>
              {SERVICES.map((s) => <option key={s.slug} value={s.navTitle}>{s.navTitle}</option>)}
              <option value="Not sure — need advice">Not sure — need advice</option>
            </select>
          </div>
          <div>
            <label className={labelCls}>Timeframe</label>
            <select className={inputCls} name="timeframe" value={data.timeframe} onChange={(e) => set("timeframe", e.target.value)}>
              <option value="">Select…</option>
              {TIMEFRAMES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Project details</label>
            <textarea className={inputCls} name="message" rows={3} value={data.message} onChange={(e) => set("message", e.target.value)} placeholder="Hot attic, high cooling bills, a new build — tell us what's going on." />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="grid gap-5 animate-fade-up">
          <div>
            <label className={labelCls}>Your name *</label>
            <input className={inputCls} name="name" value={data.name} onChange={(e) => set("name", e.target.value)} placeholder="Full name" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls}>Phone *</label>
              <input className={inputCls} type="tel" name="phone" value={data.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(435) 555-0142" />
            </div>
            <div>
              <label className={labelCls}>Email *</label>
              <input className={inputCls} type="email" name="email" value={data.email} onChange={(e) => set("email", e.target.value)} placeholder="you@email.com" />
            </div>
          </div>
          <p className="text-xs text-slatey/60">
            We&apos;ll use your details only to prepare your free quote. No spam, no obligation.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="mt-5 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span>Something went wrong submitting your request. Please call us at {SITE.phone} and we&apos;ll help right away.</span>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="btn-outline">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        ) : (
          <span className="text-xs text-slatey/50">Step {step + 1} of {STEPS.length}</span>
        )}

        {step < STEPS.length - 1 ? (
          <button
            key="wizard-next"
            type="button"
            onClick={() => canNext && setStep((s) => s + 1)}
            disabled={!canNext}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button key="wizard-submit" type="submit" disabled={status === "submitting"} className="btn-primary disabled:opacity-60">
            {status === "submitting" ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
            ) : (
              <>Get My Free Quote <ArrowRight className="h-4 w-4" /></>
            )}
          </button>
        )}
      </div>
    </form>
  );
}
