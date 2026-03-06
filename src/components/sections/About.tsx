"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="relative group max-w-md mx-auto lg:mx-0">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative glass-card p-2 rounded-2xl overflow-hidden">
                                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 shadow-2xl">
                                    <NextImage
                                        src="/profile.png"
                                        alt="Ahtesham"
                                        fill={true}
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Driven by <span className="gradient-text">Innovation</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            I am a Software Engineer and Full Stack Developer, a BS Computer Science graduate from COMSATS University Islamabad. My journey is defined by a passion for building robust and scalable systems that drive business value.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                                <p className="text-slate-300">Expertise in Laravel, DevOps, and Cloud Deployment.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                                <p className="text-slate-300">REST API development and scalable system architecture.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                                <p className="text-slate-300">Strong foundation in AWS, Docker, and CI/CD pipelines.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                                <p className="text-slate-300">Deep understanding of the full development lifecycle.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
