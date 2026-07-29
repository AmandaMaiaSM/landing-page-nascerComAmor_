"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/data/services";
import "./styles.css";

const BREAKPOINT_QUERY = "(max-width: 1024px)";
const SWIPE_THRESHOLD = 50;

export default function Servicos() {
  const [pagina, setPagina] = useState(0);
  const [cardsPorPagina, setCardsPorPagina] = useState(3);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(BREAKPOINT_QUERY);

    const applyCardsPorPagina = (matches: boolean) => {
      setCardsPorPagina(matches ? 1 : 3);
      setPagina(0);
    };

    applyCardsPorPagina(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => applyCardsPorPagina(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const totalPaginas = Math.ceil(
    services.length / cardsPorPagina
  );

  const inicio = pagina * cardsPorPagina;

  const servicosVisiveis = services.slice(
    inicio,
    inicio + cardsPorPagina
  );

  const proximo = () => {
    setPagina((prev) =>
      prev === totalPaginas - 1 ? 0 : prev + 1
    );
  };

  const anterior = () => {
    setPagina((prev) =>
      prev === 0 ? totalPaginas - 1 : prev - 1
    );
  };

  const isCarrossel = cardsPorPagina === 1;

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isCarrossel) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isCarrossel || touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (delta > SWIPE_THRESHOLD) {
      anterior();
    } else if (delta < -SWIPE_THRESHOLD) {
      proximo();
    }
  };

  return (
    <section className="servicos">

      <span className="subtitulo">
        Nossos Serviços
      </span>

      <h2>
        Cuidado completo para cada etapa da sua jornada
      </h2>

      <p className="descricao">
        Oferecemos uma equipe multidisciplinar para acompanhar você e seu bebê
        desde o planejamento da gravidez até o puerpério.
      </p>

      <div className="carrossel-wrapper">

        <button
          className="seta esquerda"
          onClick={anterior}
          aria-label="Serviço anterior"
        >
          <ChevronLeft size={42} />
        </button>

        <div
          className="servicos-grid"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {servicosVisiveis.map((servico) => (
            <div
              key={servico.name}
              className="card"
            >

              <div className="icone">
                {servico.icon}
              </div>

              <h3>{servico.name}</h3>

              <p>
                Atendimento humanizado e especializado.
              </p>

              <a
                href="https://api.whatsapp.com/message/ZEUOZNUWMSWJM1?autoload=1&app_absent=0&utm_source=ig"
                target="_blank"
                rel="noopener noreferrer"
                className="bt-saiba-mais-servicos"
              >
                Saiba Mais
              </a>

            </div>
          ))}

        </div>

        <button
          className="seta direita"
          onClick={proximo}
          aria-label="Próximo serviço"
        >
          <ChevronRight size={42} />
        </button>

      </div>

      {isCarrossel && (
        <div
          className="servicos-indicadores"
          role="tablist"
          aria-label="Páginas de serviços"
        >
          {Array.from({ length: totalPaginas }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === pagina}
              className={`servicos-bolinha${i === pagina ? " ativa" : ""}`}
              onClick={() => setPagina(i)}
              aria-label={`Serviço ${i + 1} de ${totalPaginas}`}
            />
          ))}
        </div>
      )}

    </section>
  );
}
