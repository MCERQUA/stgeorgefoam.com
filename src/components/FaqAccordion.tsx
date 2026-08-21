"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type QA = { q: string; a: string };

export function FaqAccordion({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-stone-100/50"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold text-ink sm:text-lg">
                {item.q}
              </span>
              <Plus
                className={cn(
                  "h-5 w-5 flex-shrink-0 text-copper-700 transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-relaxed text-slatey">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
