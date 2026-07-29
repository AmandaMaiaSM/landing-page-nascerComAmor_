import type { SocialLink } from "./constants";

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export function SocialLinks({ links, className = "" }: SocialLinksProps) {
  return (
    <div className={`social-links ${className}`} role="group" aria-label="Redes sociais">
      <ul className="social-links__list">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <li key={link.label} className="social-links__item">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-links__link"
                aria-label={link.ariaLabel}
                title={link.label}
              >
                <Icon
                  size={16}
                  aria-hidden="true"
                  className="social-links__icon"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
