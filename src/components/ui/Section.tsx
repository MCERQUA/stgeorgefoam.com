import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
  className,
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "center" | "left";
  className?: string;
  dark?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow mb-4", dark && "!text-copper-600")}>{eyebrow}</span>
      ) : null}
      <h2
        className={cn(
          "mt-2 text-[clamp(1.9rem,3.4vw,2.9rem)] font-bold leading-[1.08]",
          dark && "text-white"
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-white/80" : "text-slatey")}>
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
