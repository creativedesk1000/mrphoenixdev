"use client";

import { motion } from "framer-motion";

const skillGroups = [
    {
        title: "Backend",
        skills: ["Laravel", "PHP", "REST APIs", "MySQL", "Apache", "Nginx"],
    },
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind"],
    },
    {
        title: "DevOps & Cloud",
        skills: ["AWS EC2", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Linux"],
    },
    {
        title: "Mobile",
        skills: ["Flutter", "Firebase"],
    },
    {
        title: "Testing & Tools",
        skills: ["Selenium", "Playwright", "JIRA", "Git", "Postman", "Grafana"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-black/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolkit of technologies for building, deploying, and scaling modern software.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 hover:border-blue-500/30 transition-all group"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                                {group.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-white transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
