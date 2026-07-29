interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  ariaLabel?: string;
}

export function MobileMenuButton({
  isOpen,
  onClick,
  ariaLabel = "Abrir menu de navegação",
}: MobileMenuButtonProps) {
  return (
    <button
      className={`mobile-menu-button ${isOpen ? "mobile-menu-button--open" : ""}`}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      type="button"
    >
      <span className="mobile-menu-button__line mobile-menu-button__line--top" />
      <span className="mobile-menu-button__line mobile-menu-button__line--middle" />
      <span className="mobile-menu-button__line mobile-menu-button__line--bottom" />
    </button>
  );
}
