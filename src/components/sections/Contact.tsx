"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Let&apos;s Build <span className="gradient-text">Together</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-md">
                            Whether you have a project in mind or just want to say hello, my inbox is always open.
                        </p>

                        <div className="space-y-6">
                            <a
                                href="mailto:ehtishamasif0@gmail.com"
                                className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group"
                            >
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/50">
                                    <Mail size={20} />
                                </div>
                                <span>ehtishamasif0@gmail.com</span>
                            </a>
                            <a
                                href="https://wa.me/923485329512"
                                className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group"
                            >
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/50">
                                    <MessageSquare size={20} />
                                </div>
                                <span>+92 348 5329512</span>
                            </a>
                            <div className="flex gap-4 pt-4">
                                <a href="https://github.com/creativedesk1000" target="_blank" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:text-white transition-all">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/ahtesham-mughal-8bb862269" target="_blank" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:text-white transition-all">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 glass-card p-8 md:p-10"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors h-32 resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group"
                            >
                                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
