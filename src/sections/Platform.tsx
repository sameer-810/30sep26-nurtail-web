import {
  AlertTriangle,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  KanbanSquare,
  MapPinned,
  MinusCircle,
  ScrollText,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/cn";

function Tile({
  className,
  icon: Icon,
  title,
  body,
  children,
}: {
  className?: string;
  icon: typeof ShieldCheck;
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal className={cn("card flex flex-col overflow-hidden p-7", className)}>
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint text-forest">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-forest-deep">{title}</h3>
      <p className="mt-2 text-[15.5px] leading-relaxed text-ink-muted">{body}</p>
      {children && <div className="mt-6 flex-1">{children}</div>}
    </Reveal>
  );
}

/** Asymmetric bento: one idea per tile, each backed by a sliver of the real product. */
export function Platform() {
  return (
    <section id="platform" aria-labelledby="platform-title" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="platform-title"
          eyebrow="The platform"
          title="From the day they arrive to the day they go home — and after."
          intro="Everything a rescue does, in one calm workspace. Everything an owner needs, in their pocket."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-6">
          <Tile
            className="lg:col-span-4"
            icon={KanbanSquare}
            title="A case pipeline you can see at a glance"
            body="Intake, triage, evidence, care, ready, match, handover and follow-up — with days-in-stage on every animal, so no one waits unnoticed."
          >
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-8" aria-hidden>
              {[
                "Intake",
                "Triage",
                "Evidence",
                "Care",
                "Ready",
                "Match",
                "Handover",
                "Follow-up",
              ].map((s, i) => (
                <div
                  key={s}
                  className={cn(
                    "rounded-xl px-2 py-3 text-center",
                    i < 2
                      ? "bg-coral-soft"
                      : i < 3
                        ? "bg-gold-soft"
                        : i < 4
                          ? "bg-[#EEF3EC]"
                          : i < 5
                            ? "bg-mint"
                            : "bg-sky-soft",
                  )}
                >
                  <p className="text-[10px] font-bold text-forest-deep">{s}</p>
                  <p className="font-display text-xl font-semibold text-forest-deep">
                    {[5, 2, 0, 4, 6, 1, 0, 1][i]}
                  </p>
                </div>
              ))}
            </div>
          </Tile>
          <Tile
            className="lg:col-span-2"
            icon={ClipboardList}
            title="Intake in minutes"
            body="A five-step intake that scans the microchip first, saves as you go, and opens the case with the right first tasks."
          >
            <ul className="space-y-2 text-sm" aria-hidden>
              {["Microchip checked", "Source & finder recorded", "Vet check booked"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-ink">
                  <CheckCircle2 className="h-4 w-4 text-forest" /> {t}
                </li>
              ))}
            </ul>
          </Tile>
          <Tile
            className="lg:col-span-2"
            icon={ShieldCheck}
            title="The Safety Passport"
            body="Owners switch it on, choose what a finder sees, and share a QR tag. Contact is relayed — never revealed. Lost mode alerts local rescues."
          />
          <Tile
            className="lg:col-span-2"
            icon={Stethoscope}
            title="Records vets can rely on"
            body="Structured health timelines, shared with a vet only when the owner says so, for as long as they say. Entries are voided, never deleted."
          />
          <Tile
            className="lg:col-span-2"
            icon={MapPinned}
            title="Reports that reach the right rescue"
            body="Lost, found, injured or a welfare worry — routed to the verified rescue covering that postcode, with the exact location kept private."
          />
          <Tile
            className="lg:col-span-3"
            icon={BadgeCheck}
            title="Matching that explains itself"
            body="Each application shows which of the animal's needs the home meets, partly meets or doesn't — with key concerns flagged. A person always decides."
          >
            <ul className="space-y-2 rounded-2xl border border-line p-4 text-sm" aria-hidden>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-forest" />{" "}
                <b className="font-semibold">Garden</b>{" "}
                <span className="text-ink-muted">— secure, as the rescue asks</span>
              </li>
              <li className="flex items-center gap-2">
                <MinusCircle className="h-4 w-4 text-gold-ink" />{" "}
                <b className="font-semibold">Time alone</b>{" "}
                <span className="text-ink-muted">— a little over; discuss a walker</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-coral-ink" />{" "}
                <b className="font-semibold">Cats</b>{" "}
                <span className="text-ink-muted">— key concern: must be the only pet</span>
              </li>
            </ul>
          </Tile>
          <Tile
            className="lg:col-span-3"
            icon={ScrollText}
            title="An audit trail you can prove"
            body="Every material change and approval becomes an immutable, content-hashed event. Check integrity in one click; export for trustees in another."
          >
            <div
              className="rounded-2xl bg-forest-deep p-4 font-mono text-[11px] leading-relaxed text-paper/80"
              aria-hidden
            >
              <p>
                <span className="text-gold">14:02</span> Emma moved Luna → Ready
              </p>
              <p>
                <span className="text-gold">14:05</span> Readiness checklist 6/6
              </p>
              <p className="mt-2 text-sage">✓ All events verified · nothing altered</p>
            </div>
          </Tile>
        </div>
      </div>
    </section>
  );
}
