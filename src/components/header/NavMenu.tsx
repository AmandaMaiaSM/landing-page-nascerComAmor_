"use client";

import { useEffect, useState } from "react";
import type { NavigationLink } from "./constants";

const SECTION_IDS = [
  "inicio",
  "quem-somos",
  "servicos",
  "profissionais",
  "depoimentos",
  "faq",
  "contato",
];

interface NavMenuProps {
  links: NavigationLink[];
  onLinkClick?: () => void;
  ariaLabel?: string;
}

export function NavMenu({
  links,
  onLinkClick,
  ariaLabel = "Menu de navegação principal",
}: NavMenuProps) {
  const [activeHref, setActiveHref] = useState("#inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref("#" + entry.target.id);
          }
        });
      },
      // Dispara quando o topo da seção cruza os primeiros 30% da viewport
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();

    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    setActiveHref(href);
    onLinkClick?.();
  };

  return (
    <nav className="nav-nascer-com-amor" aria-label={ariaLabel}>
      <ul className="nav-nascer-com-amor__list">
        {links.map((link) => {
          const isActive = activeHref === link.href;
          return (
            <li key={link.href} className="nav-nascer-com-amor__item">
              <a
                href={link.href}
                className={`nav-nascer-com-amor__link${
                  isActive ? " nav-nascer-com-amor__link--active" : ""
                }`}
                aria-current={isActive ? "true" : undefined}
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
