import { Briefcase, MapPin, Calendar } from 'lucide-react'

const experiences = [
    {
        company: 'Inunity Pvt Ltd',
        role: 'Software Engineer',
        duration: 'May 2025 – Present',
        location: 'Mangalore, Karnataka, India',
        type: 'Full-time',
        description:
            'Building and maintaining full-stack web applications — React and TypeScript on the frontend with MUI and Tailwind CSS, Go services on the backend, and PostgreSQL for data persistence.',
        tech: ['React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'MUI', 'Go', 'PostgreSQL'],
        achievements: [
            'Develop responsive UIs with React, MUI, and Tailwind CSS aligned with product requirements',
            'Build and integrate REST APIs in Go with PostgreSQL for reliable data workflows',
            'Ship type-safe features across the stack using TypeScript on the frontend and structured Go services',
        ],
    },
]

export default function WorkPage() {
    return (
        <div className="px-4 pt-6 pb-6 fade-in-up">
            {/* Header */}
            <div className="mb-6">
                <span className="section-label">Selected Works</span>
                <div className="h-px bg-bg-border mt-3" />
            </div>

            <div className="space-y-6">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="project-card relative overflow-hidden">
                        {/* Corner accent */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-primary via-progress-fill to-transparent opacity-80" />

                        <div className="pl-3">
                            {/* Role & Company */}
                            <div className="flex items-start justify-between mb-1">
                                <div>
                                    <h3 className="font-sans text-sm font-semibold text-text-primary">{exp.role}</h3>
                                    <p className="font-sans text-xs text-accent-primary">{exp.company}</p>
                                </div>
                                <span className="text-[9px] font-sans border border-bg-border text-text-muted px-2 py-0.5 rounded tracking-wider">
                                    {exp.type}
                                </span>
                            </div>

                            {/* Meta info */}
                            <div className="flex flex-wrap gap-3 mt-2 mb-3">
                                <span className="flex items-center gap-1 font-sans text-[10px] text-text-muted">
                                    <Calendar size={9} />
                                    {exp.duration}
                                </span>
                                <span className="flex items-center gap-1 font-sans text-[10px] text-text-muted">
                                    <MapPin size={9} />
                                    {exp.location}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="font-sans text-xs text-text-secondary mb-3 leading-relaxed">
                                {exp.description}
                            </p>

                            {/* Achievements */}
                            <div className="mb-3 space-y-1.5">
                                <span className="font-sans text-[10px] text-text-muted tracking-wider">IMPACT</span>
                                {exp.achievements.map((ach, i) => (
                                    <div key={i} className="flex gap-2">
                                        <span className="text-accent-primary text-xs mt-0.5 flex-shrink-0">›</span>
                                        <p className="font-sans text-xs text-text-secondary leading-relaxed">{ach}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-1.5">
                                {exp.tech.map((t) => (
                                    <span key={t} className="tech-pill">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="glow-line my-8" />

            {/* Education */}
            <div className="mb-4">
                <span className="section-label">Education</span>
            </div>
            <div className="project-card relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-primary via-progress-fill to-transparent opacity-80" />
                <div className="pl-3">
                    <h3 className="font-sans text-sm font-semibold text-text-primary">
                        B.Tech in Computer Science
                    </h3>
                    <p className="font-sans text-xs text-accent-primary mb-1">Srinivas University,Mukka,Mangalore</p>
                    <span className="flex items-center gap-1 font-sans text-[10px] text-text-muted">
                        <Calendar size={9} />
                        2021 – 2025
                    </span>
                    <p className="font-sans text-xs text-text-secondary mt-2">
                    Graduated with a CGPA of 9+.
                    </p>
                </div>
            </div>
        </div>
    )
}
