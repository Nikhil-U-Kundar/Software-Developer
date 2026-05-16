import { GitBranch, Link, Code2, Mail, Briefcase } from 'lucide-react'

const socials = [
    { icon: GitBranch, label: 'GitHub', handle: 'Nikhil-U-Kundar', href: 'https://github.com/Nikhil-U-Kundar?tab=overview&from=2026-05-01&to=2026-05-15' },
    { icon: Link, label: 'LinkedIn', handle: 'Nikhil-U-Kundar', href: 'https://www.linkedin.com/in/nikhil-u-kundar-58ab7a243' },
    { icon: Code2, label: 'Source', handle: 'Nikhil-U-Kundar', href: 'https://nikhilukundar.vercel.app/' },
    { icon: Mail, label: 'Email', handle: 'nikhilkulalk@gmail.com', href: 'mailto:nikhilkulalk@gmail.com' },
]

export default function ContactPage() {
    return (
        <div className="px-4 pt-6 pb-6 fade-in-up">
            <div className="mb-6">
                <span className="section-label">Contact</span>
                <div className="h-px bg-bg-border mt-3" />
            </div>

            <div className="bg-bg-card border border-bg-border rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-glow opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-glow" />
                    </span>
                    <span className="font-sans text-[10px] tracking-[0.2em] text-progress-fill uppercase font-semibold">
                        Live — Open for freelance
                    </span>
                </div>
                <div className="flex items-start gap-3">
                    <Briefcase size={16} className="text-accent-primary mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="font-sans text-sm text-text-primary font-semibold mb-1">
                            I&apos;m freelancing alongside my full-time role
                        </p>
                        <p className="font-sans text-xs text-text-secondary leading-relaxed">
                            Available for part-time contracts, MVPs, and product builds — React,
                            TypeScript, Tailwind CSS, MUI, Go backends, and PostgreSQL. Let&apos;s
                            ship something solid together.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                    {['Web apps', 'UI development', 'API integration', 'Full-stack'].map((tag) => (
                        <span
                            key={tag}
                            className="font-sans text-[10px] border border-accent-primary/40 text-accent-primary px-2 py-1 rounded tracking-wide"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="glow-line mb-6" />

            <div className="mb-3">
                <span className="section-label">Find me online</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, label, handle, href }) => (
                    <a
                        key={label}
                        href={href}
                        className="flex items-center gap-3 bg-bg-card border border-bg-border rounded-lg p-3 hover:border-accent-primary transition-colors group"
                    >
                        <Icon size={14} className="text-text-muted group-hover:text-accent-primary transition-colors" />
                        <div>
                            <p className="font-sans text-[10px] text-text-muted">{label}</p>
                            <p className="font-sans text-xs text-text-primary truncate">{handle}</p>
                        </div>
                    </a>
                ))}
            </div>

            <div className="glow-line my-6" />
            <footer>
                <p className="font-sans text-[9px] text-text-muted tracking-[0.15em] mb-2">
                    © 2024 NIKHIL.DEV // ALL RIGHTS RESERVED
                </p>
                <p className="font-sans text-[9px] text-text-muted">
                    Built with React + Tailwind CSS
                </p>
            </footer>
        </div>
    )
}
