import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationSection = () => (
    <section className="py-14 lg:py-20">
        <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-6">
                        Building in <span className="text-primary text-glow">Bangalore</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        Based out of Bangalore in India, Hephabots is building in a high talent density zone in the world's fastest-growing major economy. This provides access to a massive, growing market and significant scope for automation, especially for tedious and hazardous jobs.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative flex items-center gap-6 rounded-lg border border-border bg-card p-8">
                        <MapPin className="h-10 w-10 text-primary flex-shrink-0" />
                        <div>
                            <span className="font-mono text-3xl font-bold text-primary text-glow">INDIA</span>
                            <p className="text-sm text-muted-foreground mt-1">HQ Location</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default LocationSection;
