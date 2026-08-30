'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'LeetCode', href: '#coding' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#work' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: 'mailto:anshhuman01@gmail.com', emphasis: true },
];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <div className="corporate-mobile-menu">
      <button
        className="corporate-mobile-menu-button"
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="mobile-navigation-panel"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{open ? 'Close' : 'Menu'}</span>
        <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true">
          <i />
          <i />
        </span>
      </button>

      {open ? (
        <div
          className="corporate-mobile-menu-panel"
          id="mobile-navigation-panel"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <a
              className={link.emphasis ? 'mobile-menu-contact' : undefined}
              href={link.href}
              key={link.label}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
