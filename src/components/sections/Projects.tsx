"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "EPO Web App",
        description: "Environmental system with carbon credit management, REST APIs, IoT integration, and AWS deployment.",
        tech: ["Laravel", "MySQL", "IoT", "AWS"],
        link: "#",
        github: "#",
        color: "from-blue-600 to-cyan-500",
    },
    {
        title: "Pediatric Detection System",
        description: "AI-powered healthcare system using CNN, YOLOv8, MediaPipe, voice chatbot, and dashboards.",
        tech: ["Python", "YOLOv8", "CNN", "Next.js"],
        link: "#",
        github: "#",
        color: "from-purple-600 to-pink-500",
    },
    {
        title: "Medical Appointment System",
        description: "Secure role-based system with automated messaging and appointment tracking.",
        tech: ["Laravel", "PHP", "Bootstrap"],
        link: "#",
        github: "#",
        color: "from-emerald-600 to-teal-500",
    },
    {
        title: "Rental Booking System",
        description: "Laravel-based booking platform with full admin dashboard and payment integration.",
        tech: ["Laravel", "Blade", "MySQL"],
        link: "#",
        github: "#",
        color: "from-orange-600 to-red-500",
    },
    {
        title: "DevOps CI/CD Pipeline",
        description: "Dockerized web app deployed on AWS with fully automated GitHub Actions pipeline.",
        tech: ["Docker", "AWS", "GitHub Actions", "Nginx"],
        link: "#",
        github: "#",
        color: "from-indigo-600 to-blue-500",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A selection of my recent work spanning web applications, AI integration, and cloud infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative glass-card overflow-hidden hover:scale-[1.02] transition-all duration-500"
                        >
                            <div className={`h-48 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-60 transition-opacity flex items-center justify-center text-4xl`}>
                                &lt;/&gt;
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4">
                                    <a href={project.github} className="text-slate-300 hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.link} className="text-slate-300 hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
