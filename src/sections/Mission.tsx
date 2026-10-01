import { Leaf, Reveal } from "@/components/ui";

const MESSAGES = [
  { title: "Animals matter.", body: "Every animal deserves safety, care and a loving home." },
  {
    title: "People can make a difference.",
    body: "We give individuals, communities and professionals the tools to create positive change.",
  },
  {
    title: "Trusted information saves lives.",
    body: "Verified records and transparency lead to better decisions and better outcomes.",
  },
  {
    title: "Stronger together.",
    body: "We connect owners, adopters, rescues, professionals and service providers.",
  },
];

/** Brand purpose, vision and key messages, taken from the brand guidelines. */
export function Mission() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-title"
      className="relative overflow-hidden bg-mint/60 py-24 sm:py-32"
    >
      <Leaf className="pointer-events-none absolute -right-20 -top-16 h-[360px] w-[360px] text-sage/20" />
      <div className="container-page relative grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">Why Nurtail exists</p>
          <h2
            id="mission-title"
            className="display mt-3 text-[2.2rem] leading-[1.1] sm:text-[3rem]"
          >
            A world where every animal is known, protected and given the chance of a{" "}
            <span className="italic text-forest">safe, healthy and loving life.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-muted">
            We're building a safer, healthier and kinder world for animals — by connecting the
            people, communities, professionals and organisations around them through trusted
            information, verified care and technology that stays out of the way.
          </p>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2">
          {MESSAGES.map((m, i) => (
            <li key={m.title}>
              <Reveal
                delay={i * 70}
                className="h-full rounded-3xl bg-white/80 p-6 ring-1 ring-line"
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-sm font-bold text-paper"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold text-forest-deep">{m.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{m.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
