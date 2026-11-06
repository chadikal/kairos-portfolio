'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
export type NavigationItem = { label: string; href: string };
type NavigationProps = {
  brand: ReactNode;
  items: readonly NavigationItem[];
  action: NavigationItem;
};
export function ResponsiveNavigation({
  brand,
  items,
  action,
}: NavigationProps) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 48rem)');
    const onDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener('keydown', onEscape);
    desktop.addEventListener('change', onDesktop);
    return () => {
      document.removeEventListener('keydown', onEscape);
      desktop.removeEventListener('change', onDesktop);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        {brand}
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
          <span
            className={`menu-icon ${open ? 'is-open' : ''}`}
            aria-hidden="true"
          >
            <span />
            <span />
          </span>
        </button>
        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={`primary-navigation ${open ? 'is-open' : ''}`}
        >
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-cta"
            href={action.href}
            onClick={() => setOpen(false)}
          >
            {action.label}
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
