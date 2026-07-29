import Link from "next/link";
import Image from "next/image";
import imagemLogo from "@/assets/logo-nascer-com-amor.png";

interface LogoBrandingProps {
  altText?: string;
  className?: string;
}

export function LogoBranding({
  altText = "Logo Nascer com Amor",
  className = "",
}: LogoBrandingProps) {
  return (
    <Link
      href="/"
      className={`logo-branding ${className}`}
      aria-label="Voltar para a página inicial"
    >
      <Image
        className="logo-branding__image"
        src={imagemLogo}
        alt={altText}
        priority
      />
    </Link>
  );
}
