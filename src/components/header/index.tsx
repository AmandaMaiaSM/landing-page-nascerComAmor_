"use client";

import { useState, useCallback } from "react";
import { LogoBranding } from "./LogoBranding";
import { NavMenu } from "./NavMenu";
import { SocialLinks } from "./SocialLinks";
import { MobileMenuButton } from "./MobileMenuButton";
import { NAVIGATION_LINKS, SOCIAL_LINKS } from "./constants";
import "./styles.css";

/**
 * Componente Header da Landing Page Nascer com Amor
 *
 * Responsabilidades:
 * - Renderizar logo/branding
 * - Exibir menu de navegação (desktop e mobile)
 * - Mostrar links de redes sociais
 * - Gerenciar estado do menu mobile
 * - Garantir acessibilidade (WCAG 2.1 AA)
 *
 * Responsividade:
 * - Desktop: Menu horizontal com redes sociais
 * - Tablet: Menu horizontal com ícones menores
 * - Mobile: Menu hambúrguer com drawer
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleNavLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header
      className="header-nascer-com-amor"
      role="banner"
      aria-label="Cabeçalho principal do site Nascer com Amor"
    >
      <div className="header-nascer-com-amor__container">
        {/* Logo/Branding */}
        <LogoBranding className="header-nascer-com-amor__logo" />

        {/* Menu Desktop */}
        <NavMenu
          links={NAVIGATION_LINKS}
          onLinkClick={handleNavLinkClick}
          aria-label="Menu de navegação principal"
        />

        {/* Redes Sociais */}
        <SocialLinks
          links={SOCIAL_LINKS}
          className="header-nascer-com-amor__social"
        />

        {/* Botão Mobile Menu */}
        <MobileMenuButton
          isOpen={isMobileMenuOpen}
          onClick={handleMobileMenuToggle}
          ariaLabel={
            isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
          }
        />
      </div>

      {/* Menu Mobile (drawer) */}
      {isMobileMenuOpen && (
        <div
          className="header-nascer-com-amor__mobile-menu"
          id="mobile-menu"
          role="navigation"
          aria-label="Menu de navegação móvel"
        >
          <NavMenu
            links={NAVIGATION_LINKS}
            onLinkClick={handleNavLinkClick}
          />
          <SocialLinks
            links={SOCIAL_LINKS}
            className="header-nascer-com-amor__mobile-social"
          />
        </div>
      )}
    </header>
  );
}
