import { motion } from "framer-motion";

const HeroSection = () => (
    <section id="vision" className="relative flex items-center pt-24 pb-12 lg:pt-28 lg:pb-16">
        <div className="container relative z-10">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

                {/* ── Text column ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 text-center lg:text-left"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
                        <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
                        <span className="font-mono text-xs text-primary">Deep-Tech Robotics</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                        Forging the next generation of{" "}
                        <span className="text-primary">physical intelligence.</span>
                    </h1>

                    <p className="text-lg text-muted-foreground leading-relaxed mx-auto lg:mx-0 max-w-xl">
                        Hephabots is a deep-tech startup founded with a vision to support R&D and manufacturing for a new generation of robots. We are exploring alternative actuation mechanisms that can lower cost, increase payload capacity, and be easily repaired.
                    </p>

                    <div className="mt-10 flex gap-4 justify-center lg:justify-start">
                        <a
                            href="#applications"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                        >
                            Explore Applications
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                        >
                            Get in Touch
                        </a>
                    </div>
                </motion.div>

                {/* ── Logo column ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
                    className="hidden sm:flex flex-shrink-0 justify-center lg:justify-end"
                >
                    {/* Drop your logo at /public/logo.svg — recommended: 512×512 SVG or PNG */}
                    <img
                        src="/logo.svg"
                        alt="Hephabots"
                        className="w-40 h-40 sm:w-52 sm:h-52 lg:w-72 lg:h-72 object-contain"
                    />
                </motion.div>

            </div>
        </div>
    </section>
);

export default HeroSection;
