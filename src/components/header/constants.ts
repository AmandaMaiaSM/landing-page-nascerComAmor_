import type { IconType } from "react-icons/lib";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export interface NavigationLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: IconType;
  ariaLabel: string;
}

export const NAVIGATION_LINKS: NavigationLink[] = [
  { label: "Início",         href: "#inicio" },
  { label: "Quem Somos",    href: "#quem-somos" },
  { label: "Serviços",      href: "#servicos" },
  { label: "Profissionais", href: "#profissionais" },
  { label: "Depoimentos",   href: "#depoimentos" },
  { label: "FAQ",           href: "#faq" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/nascercomamor_slz/?hl=pt-br",
    icon: FaInstagram,
    ariaLabel: "Visite nosso Instagram (abre em nova aba)",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/nascercomamor",
    icon: FaFacebookF,
    ariaLabel: "Visite nossa página no Facebook (abre em nova aba)",
  },
  {
    label: "WhatsApp",
    url: "https://api.whatsapp.com/message/ZEUOZNUWMSWJM1?autoload=1&app_absent=0&utm_source=ig",
    icon: FaWhatsapp,
    ariaLabel: "Abrir conversa no WhatsApp (abre em nova aba)",
  },
];
