import { ArrowRight, BadgeCheck, Lock, ScrollText } from "lucide-react";
import { ProductMockup } from "@/components/ProductMockup";
import { Leaf } from "@/components/ui";

/**
 * One claim, one primary action. Rescues are the founding audience, so the
 * hero speaks to them; everyone else gets one quiet, labelled way through.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <Leaf className="pointer-events-none absolute -right-40 -top-24 hidden h-[560px] w-[560px] text-sage/10 lg:block" />
      <div className="container-page grid items-center gap-16 pb-24 pt-10 sm:pt-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:gap-12 lg:pb-32 lg:pt-20">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold-soft/60 px-3.5 py-1.5 text-[13px] font-semibold text-gold-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-ink" aria-hidden /> Now inviting
            founding rescue partners
          </p>
          <h1
            id="hero-title"
            className="display mt-6 text-[2.6rem] leading-[1.05] sm:text-[3.5rem] lg:text-[4.1rem]"
          >
            Every animal, <span className="italic text-forest">known</span> and{" "}
            <span className="italic text-forest">cared for</span>.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-muted sm:text-lg">
            Nurtail gives UK rescues one trusted record for every animal — intake to adoption and
            beyond — shared safely with the fosters, adopters, vets and verified carers around it.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="/#pilot" className="btn-primary h-14 px-7 text-base">
              Become a founding partner <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/#roles" className="btn-ghost h-14 text-base">
              I'm an owner, foster, carer or vet
            </a>
          </div>
          <ul
            className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"
            aria-label="Commitments"
          >
            <li className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-forest" /> Free for registered charities
            </li>
            <li className="inline-flex items-center gap-1.5">
              <ScrollText className="h-4 w-4 text-forest" /> Tamper-evident audit trail
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-forest" /> Designed for UK GDPR
            </li>
          </ul>
        </div>
        <div className="animate-rise pl-4 sm:pl-8 [animation-delay:120ms]">
          <ProductMockup />
        </div>
      </div>
    </section>
  );
}
