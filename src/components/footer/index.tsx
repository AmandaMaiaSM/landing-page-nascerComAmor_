"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaGooglePlusG,
  FaPinterestP,
  FaRss,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import logoImg from "@/assets/logo-nascer-com-amor.png";
import "./styles.css";

const REDES_SOCIAIS = [
  { icon: FaFacebookF,   label: "Facebook",  url: "https://www.facebook.com/nascercomamor" },
  { icon: FaTwitter,     label: "Twitter",   url: "#" },
  { icon: FaLinkedinIn,  label: "LinkedIn",  url: "#" },
  { icon: FaYoutube,     label: "YouTube",   url: "#" },
  { icon: FaInstagram,   label: "Instagram", url: "https://www.instagram.com/nascercomamor_slz/?hl=pt-br" },
  { icon: FaGooglePlusG, label: "Google+",   url: "#" },
  { icon: FaPinterestP,  label: "Pinterest", url: "#" },
  { icon: FaRss,         label: "RSS",       url: "#" },
];

const NAV_LINKS = [
  { label: "Início",        href: "#inicio" },
  { label: "Quem Somos",    href: "#quem-somos" },
  { label: "Serviços",      href: "#servicos" },
  { label: "Profissionais", href: "#profissionais" },
  { label: "Depoimentos",   href: "#depoimentos" },
  { label: "FAQ",           href: "#faq" },
];

function scrollTo(href: string) {
  document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer id="contato" className="footer">

      {/* Topo: 2 colunas */}
      <div className="footer__topo">

        {/* Coluna 1 - Logo + nome + slogan */}
        <div className="footer__marca">
          <Image src={logoImg} alt="Logo Nascer com Amor" className="footer__logo" />
        </div>

        {/* Coluna 2 - Contato + redes sociais */}
        <div className="footer__contato">

          {/* Endereço */}
          <div className="footer__item">
            <FaMapMarkerAlt className="footer__icone" aria-hidden="true" />
            <span>Centro Empresarial no Shopping da Ilha - sala 801 (8º andar)</span>
          </div>

          {/* Telefone e horários lado a lado */}
          <div className="footer__linha">
            <div className="footer__item">
              <FaPhone className="footer__icone" aria-hidden="true" />
              <a href="tel:+5598998000512" className="footer__tel-link">
                (98) 99800-0512
              </a>
            </div>

            <div className="footer__item footer__item--topo">
              <FaClock className="footer__icone footer__icone--topo" aria-hidden="true" />
              <div className="footer__horarios">
                <span>Segunda a sexta: 7h00 às 20h00</span>
                <span>Sábado: 8h00 às 18h00</span>
                <span>Domingo: 8h00 às 12h00</span>
              </div>
            </div>
          </div>

          {/* Redes sociais - abaixo do telefone/horário */}
          <div className="footer__social">
            <span className="footer__social-label">Social Media</span>
            <ul className="footer__social-lista" role="list" aria-label="Redes sociais">
              {REDES_SOCIAIS.map(({ icon: Icon, label, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label={`Visite nosso ${label} (abre em nova aba)`}
                    title={label}
                  >
                    <Icon size={15} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Barra inferior: nav links + copyright */}
      <div className="footer__barra">
        <nav aria-label="Navegação do rodapé">
          <ul className="footer__nav-lista" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="footer__nav-link"
                  onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                >
                  {label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer__copyright">
          Copyright &copy; 2026 &bull; Nascer com Amor.
        </p>
      </div>

    </footer>
  );
}
