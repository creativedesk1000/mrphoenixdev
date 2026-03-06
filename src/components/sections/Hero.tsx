"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, MessageSquare } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-blue-400 font-mono text-lg mb-4">Hello, I am</h2>
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                            Ahtesham <span className="gradient-text">Asif</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 font-medium mb-8 max-w-2xl">
                            Software Engineer | Full Stack Developer | Flutter
                        </p>
                        <p className="text-lg text-slate-500 mb-10 max-w-xl leading-relaxed">
                            Building Scalable Web Applications, Cloud Systems & Intelligent Platforms. Based in Pakistan, working globally.
                        </p>

                        <div className="flex flex-wrap gap-6 mb-12">
                            <Link
                                href="https://wa.me/923485329512"
                                className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                            >
                                Hire Me
                            </Link>
                            <div className="flex gap-4">
                                <Link
                                    href="https://github.com/creativedesk1000"
                                    target="_blank"
                                    className="p-4 rounded-xl glass-card text-white hover:text-blue-400 transition-colors"
                                >
                                    <Github size={24} />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/ahtesham-mughal-8bb862269"
                                    target="_blank"
                                    className="p-4 rounded-xl glass-card text-white hover:text-blue-400 transition-colors"
                                >
                                    <Linkedin size={24} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Hero Animation Element */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden lg:block"
            >
                <div className="relative">
                    <div className="w-[500px] h-[500px] border border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] opacity-20 filter blur-sm">
                        &lt;/&gt;
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
