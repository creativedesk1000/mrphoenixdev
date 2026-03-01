"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Full Stack Web Development Intern",
        company: "2025",
        description: "Strengthening core development skills and contributing to live web projects.",
    },
    {
        role: "Full Stack Developer",
        company: "Project Based",
        description: "Developing custom solutions for clients using Laravel and modern frontend frameworks.",
    },
    {
        role: "Web Application Developer",
        company: "Medical System",
        description: "Built a secure medical booking system with automated notifications.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-black/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Professional <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A timeline of my professional growth and key roles in the software engineering industry.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-purple-600 to-transparent opacity-30" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-[-4px] md:left-1/2 md:translate-x-[-2px] top-6 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)] z-10" />

                                <div className="flex-1 md:w-1/2 p-6 glass-card hover:bg-white/5 transition-colors">
                                    <span className="text-blue-400 font-mono text-xs mb-2 block">{exp.company}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                                </div>
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
