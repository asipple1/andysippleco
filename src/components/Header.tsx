import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/notes', label: 'Field Notes' },
  { href: '/about', label: 'About' },
  { href: '/life', label: 'Life' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  const isActive = (href: string) => path === href || path.startsWith(href + '/');

  return (
    <header className="header-bar">
      {/* Logo */}
      <a href="/" className="flex items-center gap-3.5 no-underline text-cream">
        <svg data-logo-mark="" aria-hidden="true" viewBox="0 0 56 56"
          className="overflow-visible"
          style={{ width: 40, height: 40 }}
          fill="none" strokeWidth={5} strokeLinecap="butt">
          <path d="M52 6 L18 6 Q4 6 4 20 L4 56" stroke="#EB3323"/>
          <path d="M52 16 L24 16 Q14 16 14 26 L14 56" stroke="#F3C623"/>
          <path d="M52 26 L30 26 Q24 26 24 32 L24 56" stroke="#19A6A3"/>
          <path d="M52 36 L36 36 Q34 36 34 38 L34 56" stroke="#541B36"/>
        </svg>
        <span className="font-heading font-extrabold text-[26px] tracking-[.04em] uppercase">
          Andy Sipple
        </span>
      </a>

      {/* Desktop nav */}
      <nav data-desktop-nav="" aria-label="Primary"
        className="flex gap-7 items-center text-[15px] font-medium">
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href}
            className={`no-underline text-cream hover:text-yellow pb-0.5 border-b-2 ${isActive(href) ? 'border-yellow' : 'border-transparent'}`}
          >{label}</a>
        ))}
      </nav>

      {/* Right: coords + CTA + hamburger */}
      <div data-header-right="" className="flex flex-wrap items-center gap-x-5 gap-y-3 pl-13.5">
        <div data-coords="" className="flex items-center gap-2 font-mono text-[12px] tracking-[.14em] uppercase text-teal-text">
          <span className="blink-dot" />
          <span>Oʻahu · 21.4° N · 157.9° W</span>
        </div>

        <a href="/contact" data-header-cta="" className="btn btn-red btn-sm">
          Start a Project
        </a>

        {/* Hamburger */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(v => !v)}
          className="mobile-menu-btn hamburger-btn hidden"
        >
          {menuOpen
            ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></svg>
            : <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="16" x2="19" y2="16"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Primary" className="mobile-nav">
          {NAV_LINKS.map(({ href, label }, i) => (
            <a key={href} href={href}
              onClick={() => setMenuOpen(false)}
              className={`mobile-nav-link${i < NAV_LINKS.length - 1 ? ' mobile-nav-link--bordered' : ''}`}
            >{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
