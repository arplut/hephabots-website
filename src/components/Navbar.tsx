import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = [
        { label: "Vision", href: "#vision" },
        { label: "Applications", href: "#applications" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-white">
            <div className="container flex h-16 items-center justify-between">
                <a href="#" className="flex items-center gap-1">
                    {/* Logo: place a 256×256px SVG or PNG with transparency at /public/logo.svg */}
                    <img
                        src="/logo.svg"
                        alt="Hephabots logo"
                        className="h-12 w-12 object-contain"
                    />
                    <span className="font-mono text-xl font-bold tracking-tight text-primary text-glow">
                        HEPHABOTS
                    </span>
                </a>
                <div className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                            {l.label}
                        </a>
                    ))}
                </div>
                <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="container py-4 flex flex-col gap-4">
                            {links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="font-mono text-sm text-muted-foreground hover:text-primary"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
