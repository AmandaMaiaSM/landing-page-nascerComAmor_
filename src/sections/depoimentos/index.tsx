"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

interface Depoimento {
  id: number;
  nome: string;
  tempo: string;
  texto: string;
  estrelas: number;
}

const depoimentos: Depoimento[] = [
  {
    id: 1,
    nome: "Dayse Quinzeiro",
    tempo: "há 3 meses",
    estrelas: 5,
    texto: "A melhor experiência que já pude ter, todos têm muito cuidado com as gestantes, muito carinho e zelo. Na amamentação a Enf Giselia foi meu braço direito, se não fosse ela eu não teria continuado a amamentação. Eu indico a Nascer com Amor de olhos fechados.",
  },
  {
    id: 2,
    nome: "Thaynara Gouveia",
    tempo: "há 2 meses",
    estrelas: 5,
    texto: "Meu eterno agradecimento a Giselia por todo o cuidado, paciência e carinho durante o meu trabalho de parto. Sua presença e apoio fizeram toda a diferença em um dos momentos mais importantes da minha vida. Jamais esquecerei o quanto fui acolhida e amparada. Muito obrigada ❤️❤️",
  },
  {
    id: 3,
    nome: "Paula Pacheco",
    tempo: "há 2 meses",
    estrelas: 5,
    texto: "Tive uma excelente experiência de parto normal e humanizado com a Nascer com Amor. Sinceramente, se não fosse por ela, eu não teria conseguido suportar as dores finais. Nos momentos mais difíceis, ela falava ao meu ouvido palavras de ânimo. E deu tudo certo, graças a Deus e também a essa profissional incrível.",
  },
  {
    id: 4,
    nome: "Lucas Neres",
    tempo: "há 2 meses",
    estrelas: 5,
    texto: "Foi a melhor experiência possível. Aprendi que o enxoval do conhecimento é fundamental pra que todo o processo corra da melhor forma. A Nascer com Amor possui uma maravilhosa equipe de profissionais (eu destaco Giselia e Sâmia), experientes e atenciosos. Muito obrigado! Recomendo fortemente.",
  },
  {
    id: 5,
    nome: "Patricia Cantanhede",
    tempo: "há 3 meses",
    estrelas: 5,
    texto: "Foi uma experiência maravilhosa, a Nascer com Amor proporcionou um atendimento de excelência no momento mais marcante da vida de uma mãe e seu bebê, a amamentação. Sou extremamente grata a Deus e a Giselia e sua equipe. Eu super recomendo!",
  },
  {
    id: 6,
    nome: "Ellen Lima Pinho",
    tempo: "há 3 meses",
    estrelas: 5,
    texto: "Atendimento maravilhoso. Cuidando da mamãe ao bebê 🫶🏼😍. Cuidando de mim na amamentação. No pós parto (cicatrização da cesária), e uma enfermeira super cuidadosa furou a orelhinha da minha princesa. Só gratidão, nesse momento tão frágil ser cuidada assim vale muito!",
  },
  {
    id: 7,
    nome: "Deborah Suellen",
    tempo: "há 2 meses",
    estrelas: 5,
    texto: "A Nascer com Amor é sempre uma experiência maravilhosa! Todas as vezes que precisei, para fisioterapia pélvica, curso de pais, consultoria de amamentação... Foi melhor que a expectativa. A Giselia tem o dom para deixar as coisas mais leves e práticas na vida materna.",
  },
];

const BREAKPOINT_TABLET = "(max-width: 900px)";
const BREAKPOINT_MOBILE = "(max-width: 600px)";

function getIniciais(nome: string): string {
  const partes = nome.trim().split(" ");
  if (partes.length === 1) return partes[0].substring(0, 2).toUpperCase();
  return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
}

export default function Depoimentos() {
  const [pagina, setPagina] = useState(0);
  const [cardsPorPagina, setCardsPorPagina] = useState(3);

  useEffect(() => {
    const mqMobile = window.matchMedia(BREAKPOINT_MOBILE);
    const mqTablet = window.matchMedia(BREAKPOINT_TABLET);

    const aplicarCardsPorPagina = () => {
      setCardsPorPagina(mqMobile.matches ? 1 : mqTablet.matches ? 2 : 3);
      setPagina(0);
    };

    aplicarCardsPorPagina();
    mqMobile.addEventListener("change", aplicarCardsPorPagina);
    mqTablet.addEventListener("change", aplicarCardsPorPagina);
    return () => {
      mqMobile.removeEventListener("change", aplicarCardsPorPagina);
      mqTablet.removeEventListener("change", aplicarCardsPorPagina);
    };
  }, []);

  const totalPaginas = Math.ceil(depoimentos.length / cardsPorPagina);
  const inicio = pagina * cardsPorPagina;
  const visiveis = depoimentos.slice(inicio, inicio + cardsPorPagina);

  const proximo = () =>
    setPagina((prev) => (prev === totalPaginas - 1 ? 0 : prev + 1));

  const anterior = () =>
    setPagina((prev) => (prev === 0 ? totalPaginas - 1 : prev - 1));

  return (
    <section className="depoimentos">

      <span className="depoimentos__label">Depoimentos</span>

      <h2 className="depoimentos__titulo">
        O que dizem as famílias que cuidamos
      </h2>

      <div className="depoimentos__carrossel-wrapper">

        <button
          className="depoimentos__seta"
          onClick={anterior}
          aria-label="Página anterior de depoimentos"
        >
          <ChevronLeft size={36} />
        </button>

        <div className="depoimentos__grid" data-count={visiveis.length}>
          {visiveis.map((dep) => (
            <div key={dep.id} className="depoimentos__card">

              <div className="depoimentos__card-topo">
                <div className="depoimentos__avatar" aria-hidden="true">
                  {getIniciais(dep.nome)}
                </div>
                <div className="depoimentos__autor-info">
                  <span className="depoimentos__nome">{dep.nome}</span>
                  <span className="depoimentos__tempo">{dep.tempo}</span>
                </div>
              </div>

              <div className="depoimentos__estrelas">
                {Array.from({ length: dep.estrelas }).map((_, i) => (
                  <FaStar key={i} aria-hidden="true" />
                ))}
              </div>

              <p className="depoimentos__texto">{dep.texto}</p>

            </div>
          ))}
        </div>

        <button
          className="depoimentos__seta"
          onClick={proximo}
          aria-label="Próxima página de depoimentos"
        >
          <ChevronRight size={36} />
        </button>

      </div>

      <div
        className="depoimentos__indicadores"
        role="tablist"
        aria-label="Páginas de depoimentos"
      >
        {Array.from({ length: totalPaginas }).map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === pagina}
            className={`depoimentos__bolinha${i === pagina ? " ativa" : ""}`}
            onClick={() => setPagina(i)}
            aria-label={`Página ${i + 1} de ${totalPaginas}`}
          />
        ))}
      </div>

    </section>
  );
}
