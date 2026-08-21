"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Loader2, AlertCircle, Send } from "lucide-react";
import { SITE } from "@/lib/site";

type FormData = { name: string; email: string; phone: string; service: string; message: string };
const initial: FormData = { name: "", email: "", phone: "", service: "", message: "" };

const inputCls =
  "w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-ink placeholder:text-slatey/40 focus:border-copper-700/60 focus:outline-none focus:ring-2 focus:ring-copper-700/15 transition";
const labelCls = "mb-1.5 block text-sm font-medium text-slatey";

export function ContactForm() {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const payload: Record<string, string> = { "form-name": "contact", ...data, ...traffic };
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
        <h3 className="mt-6 text-2xl font-bold text-ink">Message received</h3>
        <p className="mx-auto mt-3 max-w-md text-slatey">
          Thanks for reaching out — we&apos;ll get back to you shortly. For anything urgent, call
          us directly at {SITE.phone}.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="card p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="traffic_source" value={traffic.traffic_source} readOnly />
      <input type="hidden" name="landing_url" value={traffic.landing_url} readOnly />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5">
        <div>
          <label className={labelCls}>Your name *</label>
          <input className={inputCls} name="name" value={data.name} onChange={(e) => set("name", e.target.value)} placeholder="Full name" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelCls}>Email *</label>
            <input className={inputCls} type="email" name="email" value={data.email} onChange={(e) => set("email", e.target.value)} placeholder="you@email.com" />
          </div>
          <div>
            <label className={labelCls}>Phone</label>
            <input className={inputCls} type="tel" name="phone" value={data.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(435) 555-0142" />
          </div>
        </div>
        <div>
          <label className={labelCls}>What can we help with?</label>
          <input className={inputCls} name="service" value={data.service} onChange={(e) => set("service", e.target.value)} placeholder="e.g. Attic spray foam, new construction, general question" />
        </div>
        <div>
          <label className={labelCls}>Message *</label>
          <textarea className={inputCls} name="message" rows={4} value={data.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell us about your project or question." />
        </div>
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span>Something went wrong sending your message. Please call us at {SITE.phone}.</span>
        </div>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary mt-7 w-full sm:w-auto disabled:opacity-60">
        {status === "submitting" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
        ) : (
          <>Send Message <Send className="h-4 w-4" /></>
        )}
      </button>
    </form>
  );
}
