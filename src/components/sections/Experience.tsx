"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        role: "Full Stack Developer Intern",
        company: "National Incubation Centre (NIC)",
        organization: "National Productivity Organization",
        location: "Islamabad, Pakistan",
        period: "June 2025 - July 2025",
        description: "Worked on high-impact environmental productivity systems, focusing on full-stack development and system optimization within the incubation ecosystem.",
        tech: ["Laravel", "React", "MySQL", "System Design"],
        color: "from-emerald-500 to-teal-500",
    },
    {
        role: "Full Stack Developer",
        company: "INFO Tech Solution",
        organization: "Project Based",
        location: "Remote / Hybrid",
        period: "Dec 2024 - Present",
        description: "Leading the development of scalable web solutions and enterprise-grade applications. Specializing in robust backend architectures and dynamic frontend experiences.",
        tech: ["Next.js", "Laravel", "PostgreSQL", "Tailwind CSS"],
        color: "from-blue-500 to-indigo-500",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 relative overflow-hidden bg-slate-950">
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-bold text-white mb-6">
                            Professional <span className="gradient-text">Journey</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            A showcase of my industry experience, internships, and project-based roles as a software engineer.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <div className="relative glass-card p-8 md:p-10 border border-white/5 hover:border-white/10 transition-all">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.color} bg-opacity-10 text-white shadow-lg`}>
                                                    <Briefcase size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                                                    {exp.organization && (
                                                        <p className="text-slate-500 text-sm">{exp.organization}</p>
                                                    )}
                                                </div>
                                            </div>

                                            <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-3xl">
                                                {exp.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.tech.map((t) => (
                                                    <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="md:text-right flex flex-col gap-2 shrink-0">
                                            <div className="flex items-center md:justify-end gap-2 text-slate-300 font-medium">
                                                <Calendar size={18} className="text-blue-400" />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center md:justify-end gap-2 text-slate-500 text-sm">
                                                <MapPin size={16} />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
