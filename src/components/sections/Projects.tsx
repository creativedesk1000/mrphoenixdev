"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import NextImage from "next/image";
import { useState } from "react";

const projects = [
    {
        title: "Dr. Neuro App & Website",
        description: "Medical appointment system featuring a Flutter mobile app, web platform, and automated WhatsApp notifications via Twilio REST API.",
        tech: ["Flutter", "Laravel", "Twilio", "MySQL", "REST API"],
        images: ["/projects/dr.png", "/projects/dr1.png", "/projects/drnuero.png"],
        link: "#",
        github: "#",
        color: "from-blue-600 to-indigo-500",
    },
    {
        title: "EPO Environmental System",
        description: "Comprehensive platform for carbon credit management and e-commerce, integrated with IoT sections and deployed on AWS Cloud using Docker and EC2.",
        tech: ["Laravel", "Flutter", "IoT", "AWS", "Docker", "MySQL"],
        images: ["/projects/epo (1).png", "/projects/epo (2).png"],
        link: "#",
        github: "#",
        color: "from-emerald-600 to-teal-500",
    },
    {
        title: "Cinderela Charmora",
        description: "Premium e-commerce platform for luxury bracelets and jewelry, built with a modern tech stack for high performance and scalability.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Prisma", "Vercel"],
        images: ["/projects/charmora.png"],
        link: "#",
        github: "#",
        color: "from-pink-600 to-rose-500",
    },
    {
        title: "Vehicle Rental System",
        description: "Robust Laravel-based vehicle booking and management system with a streamlined user interface and automated workflows.",
        tech: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
        images: ["/projects/v1.png", "/projects/v2.png"],
        link: "#",
        github: "#",
        color: "from-orange-600 to-amber-500",
    },
    {
        title: "Rabbit Hub Farm",
        description: "E-commerce and guidance platform for pet rabbit care, providing medical assistance and premium rabbit products.",
        tech: ["React.js", "Next.js", "Node.js", "Tailwind CSS"],
        images: ["/projects/rabbit.png"],
        link: "#",
        github: "#",
        color: "from-cyan-600 to-sky-500",
    },
    {
        title: "Pediatric Diagnosis System",
        description: "AI-based diagnosis system utilizing Explainable AI (XAI) for pediatric healthcare analysis and medical assistance. (FYP Project)",
        tech: ["Python", "AI/ML", "XAI", "FastAPI"],
        images: ["/projects/xai.png"],
        link: "#",
        github: "#",
        color: "from-purple-600 to-violet-500",
    },
    {
        title: "Gamisha E-commerce",
        description: "State-of-the-art frontend for a gaming product e-commerce store, focusing on high-end UI/UX and interactive elements.",
        tech: ["React.js", "Tailwind CSS", "Framer Motion"],
        images: ["/projects/GAMISHA UI.png"],
        link: "#",
        github: "#",
        color: "from-red-600 to-orange-500",
    },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentImage((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative glass-card overflow-hidden hover:scale-[1.02] transition-all duration-500 flex flex-col h-full border border-white/10 hover:border-white/20"
        >
            <div className="relative h-64 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <NextImage
                            src={project.images[currentImage]}
                            alt={project.title}
                            fill={true}
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </motion.div>
                </AnimatePresence>

                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity`} />

                {project.images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={prevImage}
                            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-md"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-md"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}

                {project.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {project.images.map((_: any, i: number) => (
                            <div
                                key={i}
                                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${i === currentImage ? "bg-white w-4" : "bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="p-8 flex flex-col flex-grow bg-slate-900/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                        {project.title}
                    </h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map((t: string) => (
                        <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2.5 py-1 rounded-full">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                    <a
                        href={project.github}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium group/link"
                    >
                        <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                        <span>Source</span>
                    </a>
                    <a
                        href={project.link}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium group/link"
                    >
                        <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                        <span>Preview</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-bold text-white mb-6">
                            Selected <span className="gradient-text">Masterpieces</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            A curated showcase of high-impact solutions ranging from AI-driven diagnostics to complex enterprise ecosystems.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
