import { motion } from "framer-motion";
import { Sprout, Recycle, Factory, Rocket } from "lucide-react";

const apps = [
    {
        icon: Sprout,
        title: "Agriculture",
        desc: "Precision robot arms designed for targeted spot weeding and localized fertilizer application, reducing waste and increasing yield.",
    },
    {
        icon: Recycle,
        title: "Waste Management",
        desc: "Automated waste sorting systems built for the rigorous environments of recycling facilities to improve segregation efficiency.",
    },
    {
        icon: Factory,
        title: "Factory Automation",
        desc: "Intelligent inspection robots designed for high-value, stringent facilities, including semiconductor cleanrooms.",
    },
    {
        icon: Rocket,
        title: "Space Exploration",
        desc: "Robust, easily repairable actuation mechanisms suitable for deployment in extreme conditions, such as space rovers.",
    },
];

const ApplicationsSection = () => (
    <section id="applications" className="py-14 lg:py-20 bg-surface-alt">
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="font-mono text-sm font-semibold text-primary mb-3 tracking-widest uppercase">
                    Target Applications
                </h2>
                <div className="h-px w-16 bg-primary/50" />
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
                {apps.map((app, i) => (
                    <motion.div
                        key={app.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group relative rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/40 hover:border-glow"
                    >
                        <app.icon className="mb-5 h-8 w-8 text-primary opacity-70 transition-opacity group-hover:opacity-100" />
                        <h3 className="text-xl font-semibold mb-3">{app.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{app.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default ApplicationsSection;
