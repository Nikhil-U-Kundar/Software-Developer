import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
    { label: 'Home', hash: '#home' },
    { label: 'Work', hash: '#work' },
    { label: 'Projects', hash: '#projects' },
    { label: 'Skills', hash: '#skills' },
    { label: 'Contact', hash: '#contact' },
];

function scrollToSection(hash) {
    const el = document.querySelector(hash);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function NavLinks({ onNavigate, className = '' }) {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {navItems.map((item) => (
                <a
                    key={item.hash}
                    href={item.hash}
                    onClick={(e) => onNavigate(e, item.hash)}
                    className="font-sans text-sm text-text-secondary hover:text-accent-primary hover:bg-bg-primary transition-colors tracking-wide uppercase px-3 py-2.5 rounded"
                >
                    {item.label}
                </a>
            ))}
        </div>
    );
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (!menuOpen) return;

        const handleEscape = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.body.style.overflow = prevOverflow;
            document.removeEventListener('keydown', handleEscape);
        };
    }, [menuOpen]);

    const handleNavClick = (e, hash) => {
        e.preventDefault();
        setMenuOpen(false);
        scrollToSection(hash);
    };

    return (
        <>
            {/* Mobile header + drawer — laptop uses scroll only, no sidebar */}
            <header className="lg:hidden sticky top-0 z-50 bg-bg-primary border-b border-bg-border">
                <div className="flex items-center h-14 px-4 gap-3">
                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        className="text-text-secondary hover:text-text-primary transition-colors p-2 -ml-2 flex-shrink-0"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                    <h1 className="text-lg font-bold text-text-primary truncate">Nikhil U Kundar</h1>
                </div>
            </header>

            {menuOpen && (
                <>
                    <button
                        type="button"
                        className="lg:hidden fixed inset-0 top-14 z-40 bg-black/25"
                        aria-label="Close menu"
                        onClick={() => setMenuOpen(false)}
                    />
                    <nav
                        className="lg:hidden fixed left-0 top-14 bottom-0 z-50 w-1/2 max-w-[240px] bg-bg-secondary border-r border-bg-border shadow-xl flex flex-col p-5 animate-slide-in-left"
                        aria-label="Mobile navigation"
                    >
                        <p className="font-sans text-[10px] text-text-muted tracking-[0.2em] uppercase mb-4">
                            Navigate
                        </p>
                        <NavLinks onNavigate={handleNavClick} />
                    </nav>
                </>
            )}
        </>
    );
}
