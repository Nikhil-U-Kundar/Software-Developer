import { useState } from 'react'
import { ExternalLink, GitBranch } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: 'EduERP // Institutional Management Platform',
        subtitle: 'Full Lifecycle: Admission → Result',
        tag: 'IN PROD',
        problem:
            'Engineering colleges and institutions relied on fragmented, manual processes for admissions, fee management, attendance, internal marks, and result generation — causing data inconsistencies, administrative overhead, and delayed student outcomes.',
        solution:
            'Built a comprehensive ERP system covering the entire student lifecycle: online admissions with document workflows, fee collection & receipts, attendance tracking, internal marks entry, subject-wise grade computation, and automated result generation with hall-ticket and marksheet exports.',
        impact:
            'Deployed across multiple engineering and degree colleges. Reduced result processing time by 70%. Eliminated manual mark entry errors. Covers 5000+ students across institutions.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Express'],
        role: 'FULL-STACK',
        github: '#',
        live: '#',
    },
    {
        id: 2,
        title: 'EduERP // Design & Examination Module',
        subtitle: 'Marks · Grades · Hall Tickets',
        tag: 'STAGE: V2 →',
        problem:
            'Examination departments lacked a unified tool to manage subject allocations, internal/external mark schemes, design-marks tracking for departmental projects, and automated result computation adhering to university regulations.',
        solution:
            'Designed a modular examination engine with configurable mark schemes (CIA, semester exams, design marks), grace-mark rules, arrear tracking, and one-click PDF generation for hall tickets, mark statements, and consolidated result sheets.',
        impact:
            'Exam result turnaround reduced from weeks to hours. Design-mark workflows now digital. Hall ticket generation automated for 3000+ students per cycle.',
        tech: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
        role: 'FULL-STACK',
        github: '#',
        live: '#',
    },
    {
        id: 3,
        title: 'Project LLM // Intelligent Domain Assistant',
        subtitle: 'Context-Aware Reasoning Engine',
        tag: 'IN DEV',
        problem:
            'Institutions and teams lacked an intelligent assistant capable of accurate domain-specific reasoning — existing LLM integrations produced generic, hallucinated outputs with no grounding in institutional context or structured data.',
        solution:
            'Building a fine-tuned LLM pipeline with RAG (Retrieval-Augmented Generation) over institutional knowledge bases. Implemented a streaming SSE interface, function-calling for structured data queries, and a React dashboard for real-time interaction and model configuration.',
        impact:
            'Query accuracy over domain data improved significantly vs. off-the-shelf GPT. Response latency under 2s for 95% of queries. Modular design supports plug-in of new knowledge bases.',
        tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'LangChain'],
        role: 'FULL-STACK',
        github: '#',
        live: null,
    },
]

export default function ProjectsPage() {
    const [expanded, setExpanded] = useState(null)

    return (
        <div className="px-4 pt-6 pb-6 fade-in-up">
            {/* Header */}
            <div className="mb-6">
                <span className="section-label">Selected Works</span>
                <div className="h-px bg-bg-border mt-3" />
            </div>

            <div className="space-y-4">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        {/* Project header */}
                        <div className="flex items-start justify-between mb-1">
                            <div>
                                <h3 className="font-sans text-xs font-semibold text-text-primary leading-snug">
                                    {project.title}
                                </h3>
                                <p className="font-sans text-[10px] text-text-muted mt-0.5">{project.subtitle}</p>
                            </div>
                            <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                                <span className="font-sans text-[9px] border border-accent-primary text-accent-primary px-1.5 py-0.5 rounded tracking-wider">
                                    {project.tag}
                                </span>
                            </div>
                        </div>

                        {/* Role badge */}
                        <div className="mb-3">
                            <span className="font-sans text-[9px] text-text-muted tracking-widest border border-bg-border px-2 py-0.5 rounded">
                                ROLE: {project.role}
                            </span>
                        </div>

                        {/* Problem Statement */}
                        <div className="mb-3">
                            <span className="font-sans text-[9px] tracking-widest text-text-muted block mb-1">
                                PROBLEM STATEMENT
                            </span>
                            <p className="font-sans text-xs text-text-secondary leading-relaxed">
                                {project.problem}
                            </p>
                        </div>

                        {/* Solution */}
                        <div className="mb-3">
                            <span className="font-sans text-[9px] tracking-widest text-text-muted block mb-1">
                                MY SOLUTION
                            </span>
                            <p className="font-sans text-xs text-text-secondary leading-relaxed">
                                {project.solution}
                            </p>
                        </div>

                        {/* Impact section */}
                        {expanded === project.id && (
                            <div className="mb-3">
                                <span className="font-sans text-[9px] tracking-widest text-text-muted block mb-1">
                                    ROLE & IMPACT
                                </span>
                                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                                    {project.impact}
                                </p>
                            </div>
                        )}

                        {/* Tech tags row */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.tech.map((t) => (
                                <span key={t} className="tech-pill">{t}</span>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                                className="font-sans text-[10px] text-accent-primary hover:text-text-primary transition-colors flex items-center gap-1 tracking-wider"
                            >
                                {expanded === project.id ? '← COLLAPSE' : 'VIEW MORE →'}
                            </button>
                            <div className="flex gap-3">
                                <a href={project.github} className="text-text-muted hover:text-text-primary transition-colors">
                                    <GitBranch size={13} />
                                </a>
                                {project.live && (
                                    <a href={project.live} className="text-text-muted hover:text-text-primary transition-colors">
                                        <ExternalLink size={13} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
