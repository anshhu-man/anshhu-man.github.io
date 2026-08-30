'use client';

import { useEffect, useRef, useState } from 'react';

const links = [
  { label: 'LeetCode', href: '#coding' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#work' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: 'mailto:anshhuman01@gmail.com', emphasis: true },
];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    const closeOutside = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('pointerdown', closeOutside);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('pointerdown', closeOutside);
    };
  }, [open]);

  return (
    <div className="corporate-mobile-menu" ref={menuRef}>
      <button
        className="corporate-mobile-menu-button"
        type="button"
        aria-expanded={open}
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
