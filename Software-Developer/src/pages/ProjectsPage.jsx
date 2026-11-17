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
        title: 'Niki Bot // AI Assistant with Approval-Gated Tools',
        subtitle: 'Tool-Using Agent · Terminal & Browser UI',
        tag: 'V1',
        problem:
            'Routine developer work — reading repositories, checking git and pull-request status, drafting files — meant switching between terminal, GitHub and editor, with no assistant that could act on local code without risking unreviewed changes.',
        solution:
            'Built a Node.js and TypeScript assistant on the Anthropic Messages API with a manual tool-use loop and streamed replies. A policy layer limits the tools: read access to approved folders, write access only inside its own workspace after an explicit approval, and read-only git and GitHub CLI commands. Available as a terminal chat and a local browser UI with Approve and Deny cards for every write.',
        impact:
            'Blocks credential files, git internals, out-of-scope paths, and any git or GitHub command that writes, pushes or merges. Works with Anthropic directly or through OpenRouter, chosen from the API key format.',
        tech: ['Node.js', 'TypeScript', 'Anthropic SDK', 'Zod', 'HTML / CSS / JS'],
        role: 'FULL-STACK',
        github: '#',
        live: null,
    },
    {
        id: 3,
        title: 'InPulse Backend // ERP API Platform',
        subtitle: 'Go · DDD · Hexagonal Architecture',
        tag: 'IN DEV',
        problem:
            'An ERP covering admissions, finance, timetable and recruitment needed one consistent API layer, tenant data isolation, and documented endpoints as the number of modules grew.',
        solution:
            'Developed the backend in Go on the Chi router with GORM and PostgreSQL. Feature modules live under modules/ and internal/, following hexagonal (ports and adapters) and domain-driven layering. Database access goes through a helper that applies PostgreSQL Row Level Security, and API endpoints are documented with Swagger annotations.',
        impact:
            'Organised into 20+ feature modules. Tenant data isolation is applied at the database layer through Row Level Security, used across 90+ source files.',
        tech: ['Go', 'Chi', 'GORM', 'PostgreSQL', 'Swagger'],
        role: 'BACKEND',
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
