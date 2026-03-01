"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-12 border-t border-white/10 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-slate-500 text-sm">
                        Copyright © 2026 Ahtesham Asif. All rights reserved.
                    </div>
                    <div className="flex gap-8 text-slate-500 text-sm">
                        <a href="https://github.com/creativedesk1000" className="hover:text-white transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/ahtesham-mughal-8bb862269" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://wa.me/923485329512" className="hover:text-white transition-colors">WhatsApp</a>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all text-slate-400"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
