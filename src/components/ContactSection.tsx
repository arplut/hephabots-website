import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string;

const ContactSection = () => {
    const [form, setForm] = useState({ name: "", email: "", interest: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name: form.name,
                    email: form.email,
                    subject: `Hephabots Contact: ${form.interest || "General Inquiry"}`,
                    message: `Area of Interest: ${form.interest || "Not specified"}\n\n${form.message}`,
                }),
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Message sent! We'll get back to you soon.");
                setForm({ name: "", email: "", interest: "", message: "" });
            } else {
                toast.error("Submission failed. Please try again later.");
            }
        } catch {
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-14 lg:py-20 bg-surface-alt">
            <div className="container max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-3">Let's Build Together</h2>
                    <p className="text-muted-foreground mb-10">
                        Interested in our R&D, pilot programs, or partnership opportunities? Drop us a line.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label className="font-mono text-xs text-muted-foreground mb-2 block">Name</label>
                                <input
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                                />
                            </div>
                            <div>
                                <label className="font-mono text-xs text-muted-foreground mb-2 block">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="font-mono text-xs text-muted-foreground mb-2 block">Area of Interest</label>
                            <select
                                value={form.interest}
                                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                                className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                            >
                                <option value="">Select...</option>
                                <option>Industrial Automation</option>
                                <option>Environmental / Waste Management</option>
                                <option>Investment / Partnership</option>
                                <option>General Inquiry</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-mono text-xs text-muted-foreground mb-2 block">Message</label>
                            <textarea
                                rows={4}
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-md bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--glow-primary-strong)] hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
