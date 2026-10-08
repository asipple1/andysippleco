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
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      display: 'flex', flexWrap: 'wrap', alignItems: 'center',
      justifyContent: 'space-between', gap: '16px 24px',
      padding: '18px clamp(20px,5vw,64px)',
      borderBottom: '1px solid rgba(241,227,203,.18)',
      background: 'rgba(11,10,30,.72)',
      backdropFilter: 'blur(10px)',
    }}>
      {/* Logo */}
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: '#F1E3CB' }}>
        <svg data-logo-mark="" aria-hidden="true" viewBox="0 0 56 56"
          style={{ width: 40, height: 40, overflow: 'visible' }}
          fill="none" strokeWidth={5} strokeLinecap="butt">
          <path d="M52 6 L18 6 Q4 6 4 20 L4 56" stroke="#EB3323"/>
          <path d="M52 16 L24 16 Q14 16 14 26 L14 56" stroke="#F3C623"/>
          <path d="M52 26 L30 26 Q24 26 24 32 L24 56" stroke="#19A6A3"/>
          <path d="M52 36 L36 36 Q34 36 34 38 L34 56" stroke="#541B36"/>
        </svg>
        <span style={{
          fontFamily: "'Big Shoulders Display', sans-serif",
          fontWeight: 800, fontSize: 26, letterSpacing: '.04em', textTransform: 'uppercase',
        }}>Andy Sipple</span>
      </a>

      {/* Desktop nav */}
      <nav data-desktop-nav="" aria-label="Primary"
        style={{ display: 'flex', gap: 28, alignItems: 'center', fontSize: 15, fontWeight: 500 }}>
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} style={{
            textDecoration: 'none', color: '#F1E3CB',
            borderBottom: `2px solid ${isActive(href) ? '#F3C623' : 'transparent'}`,
            paddingBottom: 2,
          }}
            onMouseOver={e => (e.currentTarget.style.color = '#F3C623')}
            onMouseOut={e => (e.currentTarget.style.color = '#F1E3CB')}
          >{label}</a>
        ))}
      </nav>

      {/* Right: coords + CTA + hamburger */}
      <div data-header-right="" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px 20px', paddingLeft: 54 }}>
        <div data-coords="" style={{
          display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 12,
          letterSpacing: '.14em', textTransform: 'uppercase', color: '#5FD3CF',
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: '#19A6A3', boxShadow: '0 0 10px #19A6A3',
            display: 'inline-block', animation: 'blink 2.4s steps(1) infinite',
          }}/>
          <span>Oʻahu · 21.4° N · 157.9° W</span>
        </div>

        <a href="/contact" data-header-cta="" style={{
          textDecoration: 'none', background: '#EB3323', color: '#F1E3CB',
          padding: '10px 18px',
          fontFamily: "'Big Shoulders Display', sans-serif",
          fontWeight: 800, fontSize: 18, letterSpacing: '.08em', textTransform: 'uppercase',
          boxShadow: '0 0 0 1px #EB3323, 0 0 22px rgba(235,51,35,.55)',
          transition: 'transform .15s, box-shadow .15s',
        }}
          onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 0 1px #EB3323, 0 0 34px rgba(235,51,35,.8)'; }}
          onMouseOut={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 0 1px #EB3323, 0 0 22px rgba(235,51,35,.55)'; }}
        >Start a Project</a>

        {/* Hamburger */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(v => !v)}
          style={{
            display: 'none', alignItems: 'center', justifyContent: 'center',
            width: 44, height: 44,
            background: 'transparent',
            border: '1px solid rgba(241,227,203,.5)',
            color: '#F1E3CB', cursor: 'pointer',
          }}
          className="mobile-menu-btn"
        >
          {menuOpen
            ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></svg>
            : <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="16" x2="19" y2="16"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Primary"
          style={{
            flexBasis: '100%', display: 'grid', gap: 4,
            padding: '8px 0 4px',
            borderTop: '1px solid rgba(241,227,203,.18)',
          }}>
          {NAV_LINKS.map(({ href, label }, i) => (
            <a key={href} href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none', color: '#F1E3CB',
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 800, fontSize: 32, letterSpacing: '.04em', textTransform: 'uppercase',
                padding: '10px 0',
                borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(241,227,203,.12)' : 'none',
              }}
              onMouseOver={e => (e.currentTarget.style.color = '#F3C623')}
              onMouseOut={e => (e.currentTarget.style.color = '#F1E3CB')}
            >{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
