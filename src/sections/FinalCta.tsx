import { ArrowRight } from "lucide-react";
import { Leaf } from "@/components/ui";

/** Last nudge before the footer — one action, repeated. */
export function FinalCta() {
  return (
    <section aria-labelledby="final-title" className="container-page pb-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-forest px-8 py-16 text-center text-paper sm:px-16 sm:py-20">
        <Leaf className="pointer-events-none absolute -left-16 -top-10 h-64 w-64 text-sage/25" />
        <Leaf className="pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 rotate-180 text-sage/25" />
        <p className="relative font-display text-lg italic text-gold">
          People · Animals · A Kinder Tomorrow
        </p>
        <h2
          id="final-title"
          className="display relative mx-auto mt-4 max-w-2xl text-[2.2rem] leading-[1.1] text-paper sm:text-[3rem]"
        >
          Let's make every animal known and cared for.
        </h2>
        <a href="/#pilot" className="btn relative mt-9 bg-gold text-forest-deep hover:bg-gold-soft">
          Become a founding partner <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
