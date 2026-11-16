import type { LucideIcon } from "lucide-react";
import { Camera, Cable, Package, Recycle, Scale, Wrench } from "lucide-react";
import { DesignVideo } from "./DesignVideo";

const IconBadge = ({ icon: I }: { icon: LucideIcon }) => (
  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-md bg-accent text-accent-foreground">
    <I className="h-5 w-5" aria-hidden />
  </span>
);

/* 1. Hero */
export const Hero = () => (
  <section id="top" className="pb-12 pt-8 sm:pt-12 lg:pb-16 lg:pt-16">
    <div className="container grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
      <div>
        <h1 className="text-[2.3rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]">Robot arms without the expensive parts</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Simple, affordable arms, built in India, for repetitive work robots were never priced for.
        </p>
        <a href="#contact" className="btn-primary mt-7 w-full sm:w-auto">
          Talk to us
        </a>
      </div>
      {/* 10-second silent loop. Cropped slightly at the bottom to hide the render's caption bar. */}
      <DesignVideo
        src="/videos/arm-motion.mp4"
        loop
        className="aspect-[3/2]"
        label="Design model"
        title="Design model of the Hephabots arm picking items from beside a conveyor belt"
      />
    </div>
  </section>
);

/* 2. Why */
export const Why = () => (
  <section id="why" className="section border-t border-border bg-surface-alt">
    <div className="container max-w-3xl">
      <h2 className="h2">Most repetitive work is still done by hand</h2>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        Most robot arms are made for large factories with large budgets. An imported arm costs ₹10 to 15 lakh or more,
        mostly for precision the job doesn’t need. So sorting, packing and loading stay manual.
      </p>
    </div>
  </section>
);

/* 3. What we do differently */
const points: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Cable,
    title: "No precision gearboxes",
    text: "Capstan drives and cable pulleys replace costly imported gearboxes.",
  },
  {
    icon: Scale,
    title: "Balanced, so small motors are enough",
    text: "The motor rides on the arm as its own counterweight.",
  },
  {
    icon: Wrench,
    title: "Standard parts",
    text: "Extrusion, laser-cut plate and off-the-shelf motors, built by local workshops.",
  },
];

export const Different = () => (
  <section id="different" className="section">
    <div className="container">
      <h2 className="h2 mb-8">Balance instead of brute force</h2>
      <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
        <figure>
          <DesignVideo
            src="/videos/arm-overview.mp4"
            controls
            className="aspect-[4/3]"
            label="Design model"
            title="Walk-around of the Hephabots arm design beside a conveyor"
          />
          <figcaption className="mt-2 text-sm text-muted-foreground">
            Our pilot unit: a light arm that stands beside a conveyor and reaches across to pick.
          </figcaption>
        </figure>
        <div>
          <ul className="space-y-6">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <IconBadge icon={p.icon} />
                <div>
                  <h3 className="text-lg">{p.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-border pt-6 font-medium">
            Built for light, repetitive moves, not micron precision. Priced to match.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* 4. Where it works */
const jobs: { icon: LucideIcon; title: string; text: string; note?: string }[] = [
  {
    icon: Recycle,
    title: "Sorting recyclables",
    text: "Picking light items off moving belts at recovery facilities.",
    note: "Where we’re starting",
  },
  { icon: Package, title: "Pick and place", text: "Packing, loading and kitting in small factories." },
  {
    icon: Camera,
    title: "Facility documentation",
    text: "An AMR with a versatile camera arm for autonomous documentation and data capture.",
  },
];

export const WhereItWorks = () => (
  <section id="where" className="section border-t border-border bg-surface-alt">
    <div className="container">
      <h2 className="h2 mb-8">One arm, several jobs</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {jobs.map((j) => (
          <div
            key={j.title}
            className={`rounded-lg border bg-card p-5 ${j.note ? "border-primary" : "border-border"}`}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <IconBadge icon={j.icon} />
              {j.note && (
                <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                  {j.note}
                </span>
              )}
            </div>
            <h3 className="text-lg">{j.title}</h3>
            <p className="mt-1 leading-relaxed text-muted-foreground">{j.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-6">
        Different job in mind?{" "}
        <a href="#contact" className="font-semibold text-primary underline underline-offset-4 hover:no-underline">
          Tell us about it.
        </a>
      </p>
    </div>
  </section>
);

/* 5. Team */
export const Team = () => (
  <section id="team" className="section">
    <div className="container max-w-3xl">
      <h2 className="h2 mb-4">Team</h2>
      {/* Add one photo here: the founder with the prototype. Add collaborators and advisers when they agree to be named. */}
      <p className="text-lg leading-relaxed text-muted-foreground">
        Founded in Bengaluru by{" "}
        <a
          href="https://www.linkedin.com/in/pratulvenkatesh/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-foreground underline underline-offset-4 hover:text-primary"
        >
          Pratul Venkatesh
        </a>
        , who builds
        hardware, firmware and software, with a background in waste management, semiconductor fabrication and
        electronics manufacturing. We work with waste operators and city bodies through{" "}
        <a
          href="https://www.geodha.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary underline underline-offset-4 hover:no-underline"
        >
          GEODHA
        </a>
        , the founder’s non-profit civic tech initiative.
      </p>
    </div>
  </section>
);
