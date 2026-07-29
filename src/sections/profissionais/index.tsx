"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, ChevronDown, Check } from "lucide-react";
import "./styles.css";

import adrianaImg from "@/assets/profissionais/adriana-amancio-lopes.jpeg";
import cynthiaImg from "@/assets/profissionais/cynthia-carvalho.jpeg";
import yasmineImg from "@/assets/profissionais/yasmine-alencar.jpeg";
import elisaImg from "@/assets/profissionais/elisa-fontinele.jpeg";
import gabriellyImg from "@/assets/profissionais/gabrielly-barros.jpeg";
import henriqueImg from "@/assets/profissionais/henrique-augusto-mendes.jpeg";
import ilanaImg from "@/assets/profissionais/ilana-castro.jpeg";
import lainaImg from "@/assets/profissionais/laina-camila-sanches.jpeg";
import samiaImg from "@/assets/profissionais/samia-carine-varao.jpeg";

interface Profissional {
  id: number;
  nome: string;
  cargo: string;
  registro: string;
  especialidades: string[];
  descricao: string;
  foto?: StaticImageData;
}

// Para adicionar novos profissionais, basta inserir um novo objeto neste array.
const profissionais: Profissional[] = [
  {

    id: 1,
    nome: "Adriana Amancio Lopes",
    cargo: "Fisioterapeuta Pélvica e Massoterapeuta",
    registro: "COREN",
    especialidades: [
      "Fisioterapia Pélvica",
      "Saúde da Mulher",
      "Gestação",
      "Puerpério",
    ],
    descricao: `Atua no tratamento de disfunções urinárias (incontinência urinária, esvaziamento incompleto, urgência urinária e outras), disfunções evacuatórias (anismo, constipação, incontinência fecal ou gasosa) e disfunções sexuais (vaginismo, dores e ardência no canal vaginal). Realiza preparo gestacional, incluindo cuidados da pelve e técnicas como hidrotubação. Oferece acompanhamento durante a gestação com fortalecimento do assoalho pélvico, preparo corporal, aulas de parto para mãe e acompanhante, promovendo mais conforto e segurança tanto para parto vaginal quanto cesáreo. No puerpério, realiza tratamento para recuperação pós-cesárea e pós-parto vaginal, auxiliando na cicatrização, prevenção de aderências, correção postural, fortalecimento do assoalho pélvico e tratamento de diástase. Também oferece aplicação de taping gestacional e no puerpério.`,
    foto: adrianaImg,
  },
  {

    id: 2,
    nome: "Cynthia Carvalho",
    cargo: "Fisioterapeuta",
    registro: "---",
    especialidades: [
      "Fisioterapeuta Pélvica",
      "Acompanhamento Gestacional",
      "Pós-parto",
      "Diástase",
      "Dor na Relação",
      "Escapes Urinários",
      "Constipação",
    ],
    descricao:
      "Atua como fisioterapeuta pélvica, oferecendo acompanhamento gestacional, atendimento no pós-parto imediato, tratamento de diástase abdominal, dor durante a relação sexual, escapes urinários e constipação.",
    foto: cynthiaImg,
  },
  {
    id: 3,
    nome: "Dra. Yasmine Alencar",
    cargo: "Médica",
    registro: "---",
    especialidades: ["Consulta pediátrica pré-natal"],
    descricao:
      "Graduada em Medicina pela Universidade Federal do Maranhão (UFMA). Pós-graduada em Pediatria pela IPEMED – Afya e certificada em Suporte Avançado de Vida em Pediatria pela American Heart Association (AHA), por meio do CUREM. Realiza consultas pediátricas pré-natais, oferecendo orientação e acompanhamento para gestantes sobre os cuidados com o recém-nascido e a saúde infantil.",
    foto: yasmineImg,
  },
  {
    id: 4,
    nome: "Elisa Fontinele de Carvalho",
    cargo: "Enfermeira, Obstetra, Neonatologista e Doula",
    registro: "COREN: 796979-EO",
    especialidades: [
      "Obstetrícia",
      "Neonatologia",
      "Gestação",
      "Parto Humanizado",
      "Amamentação",
      "Pós-parto",
    ],
    descricao:
      "Enfermeira, pós-graduada em Obstetrícia e Neonatologia, além de atuar como doula. Oferece cuidado humanizado e baseado em evidências durante a gestação, parto, amamentação e pós-parto. Seu objetivo é acolher, orientar e cuidar da mãe e do bebê, promovendo uma experiência segura, respeitosa e repleta de apoio em cada etapa dessa jornada.",
    foto: elisaImg,
  },
  {
   id: 5,
    nome: "Gabrielly Barros",
    cargo: "Nutricionista Materno-Infantil",
    registro: "CRN 16255",
    especialidades: [
      "Nutrição Materno-Infantil",
      "Nutrição Obstétrica",
      "Nutrição Pediátrica",
      "Terapia Alimentar para Seletividade Alimentar",
    ],
    descricao:
      "Nutricionista formada pela Universidade Federal do Maranhão (UFMA), especialista em Nutrição Materno-Infantil com foco em Obstetrícia e Pediatria, além de possuir especialização em Terapia Alimentar para o tratamento da seletividade alimentar. Acredita que a alimentação vai muito além da ingestão de nutrientes e calorias, sendo uma ferramenta essencial para promover saúde desde a vida intrauterina, passando pela infância e acompanhando todas as fases da vida adulta.",
    foto: gabriellyImg,
  },
  {
    id: 6,
    nome: "Henrique Augusto Mendes",
    cargo: "Acupunturista e Terapeuta Integrativo",
    registro: "---",
    especialidades: [
      "Acupuntura",
      "Auriculoterapia",
      "Laserpuntura",
      "Eletropuntura",
      "Terapia Neural",
      "Hipnoterapia",
    ],
    descricao:
      "Atua com terapias integrativas voltadas para a promoção da saúde e bem-estar, oferecendo serviços de acupuntura, auriculoterapia, laserpuntura, eletropuntura, terapia neural e hipnoterapia para tratamento de dores e fobias. Também realiza atendimento focado no combate à dor e no auxílio à indução do parto, proporcionando um cuidado humanizado e individualizado.",
    foto: henriqueImg,
  },
  {
    id: 7,
    nome: "Ilana Castro",
    cargo: "Enfermeira",
    registro: "COREN 280509",
    especialidades: [
      "Medicina Chinesa",
      "Acupuntura",
      "Infertilidade",
      "Saúde Reprodutiva",
      "Gestação",
      "Pós-parto",
    ],
    descricao:
      "Enfermeira especialista em Medicina Chinesa, com ênfase em infertilidade e saúde reprodutiva, atuando desde o desejo de engravidar até a gestação e o pós-parto. Por meio da acupuntura, auxilia mulheres que desejam engravidar, gestantes e puérperas a promover o equilíbrio do organismo, regular o ciclo menstrual, aliviar dores e ansiedade e preparar o corpo para que o trabalho de parto ocorra de forma mais fluida e, sempre que possível, em menor tempo.",

    foto: ilanaImg,
  },
  {
    id: 8,
    nome: "Laina Camila das Chagas Sanches",
    cargo: "Enfermeira e Doula",
    registro: "COREN 960006-ENF",
    especialidades: ["Obstetrícia", "Neonatologia", "Parto Humanizado"],
    descricao:
      "Enfermeira, doula e pós-graduanda em Obstetrícia e Neonatologia. É apaixonada pela assistência materno-infantil baseada em evidências e acredita que a forma de nascer pode transformar o mundo. Atua com furo humanizado, consultoria em amamentação e assistência ao parto humanizado, oferecendo acolhimento e cuidado individualizado à mãe, ao bebê e à família.",
    foto: lainaImg,
  },
  {
    id: 9,
    nome: "Sâmia Carine dos Santos Varão",
    cargo: "Enfermeira e Doula",
    registro: "COREN 750506",
    especialidades: [
      "Obstetrícia",
      "Neonatologia",
      "Educação Perinatal",
      "Consultoria em Amamentação",
      "Laserterapia",
      "Taping Gestacional",
      "Pós-parto",
    ],
    descricao:
      "---",
    foto: samiaImg,
  }

];

const BREAKPOINT_TABLET = "(max-width: 960px)";
const BREAKPOINT_MOBILE = "(max-width: 640px)";
const ESPECIALIDADES_VISIVEIS = 3;
const LIMITE_DESCRICAO = 220;

function getIniciais(nome: string): string {
  const partes = nome.trim().split(" ");
  if (partes.length === 1) return partes[0].substring(0, 2).toUpperCase();
  return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
}

function CardProfissional({ prof }: { prof: Profissional }) {
  const [espAberto, setEspAberto] = useState(false);
  const [descAberta, setDescAberta] = useState(false);

  const temMaisEsp = prof.especialidades.length > ESPECIALIDADES_VISIVEIS;
  const especialidadesVisiveis = espAberto
    ? prof.especialidades
    : prof.especialidades.slice(0, ESPECIALIDADES_VISIVEIS);

  const descricaoLonga = prof.descricao.length > LIMITE_DESCRICAO;

  return (
    <article className="profissionais__card">

      <div className="profissionais__foto-wrapper">
        {prof.foto ? (
          <Image
            src={prof.foto}
            alt={`Foto de ${prof.nome}`}
            fill
            sizes="(max-width: 640px) 380px, 320px"
            className="profissionais__foto"
          />
        ) : (
          <div className="profissionais__avatar" aria-hidden="true">
            {getIniciais(prof.nome)}
          </div>
        )}
      </div>

      <div className="profissionais__info">
        <h3 className="profissionais__nome">{prof.nome}</h3>

        <span className="profissionais__cargo">{prof.cargo}</span>

        <span className="profissionais__registro">{prof.registro}</span>

        <ul className="profissionais__especialidades">
          {especialidadesVisiveis.map((esp) => (
            <li key={esp} className="profissionais__especialidade-item">
              <Check size={15} className="profissionais__especialidade-check" aria-hidden="true" />
              <span>{esp}</span>
            </li>
          ))}
        </ul>

        {temMaisEsp && (
          <button
            type="button"
            className={`profissionais__ver-mais${espAberto ? " aberto" : ""}`}
            onClick={() => setEspAberto((v) => !v)}
            aria-expanded={espAberto}
          >
            {espAberto ? "Ver menos" : "Ver mais"}
            <ChevronDown size={16} className="profissionais__ver-mais-icone" aria-hidden="true" />
          </button>
        )}

        <p className={`profissionais__descricao${descAberta ? " aberta" : ""}`}>
          {prof.descricao}
        </p>

        {descricaoLonga && (
          <button
            type="button"
            className={`profissionais__ver-mais${descAberta ? " aberto" : ""}`}
            onClick={() => setDescAberta((v) => !v)}
            aria-expanded={descAberta}
          >
            {descAberta ? "Ver menos" : "Ver mais"}
            <ChevronDown size={16} className="profissionais__ver-mais-icone" aria-hidden="true" />
          </button>
        )}
      </div>

    </article>
  );
}

export default function Profissionais() {
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

  const totalPaginas = Math.ceil(profissionais.length / cardsPorPagina);
  const inicio = pagina * cardsPorPagina;
  const visiveis = profissionais.slice(inicio, inicio + cardsPorPagina);

  const proximo = () =>
    setPagina((p) => (p === totalPaginas - 1 ? 0 : p + 1));

  const anterior = () =>
    setPagina((p) => (p === 0 ? totalPaginas - 1 : p - 1));

  return (
    <section className="profissionais">

      <span className="profissionais__label">Nossa Equipe</span>

      <h2 className="profissionais__titulo">Profissionais</h2>

      <p className="profissionais__subtitulo">
        Conheça os especialistas que cuidam de você e do seu bebê com amor e dedicação.
      </p>

      <div className="profissionais__carrossel-wrapper">

        <button
          className="profissionais__seta"
          onClick={anterior}
          aria-label="Profissionais anteriores"
        >
          <ChevronLeft size={36} />
        </button>

        <div className="profissionais__grid" data-count={visiveis.length}>
          {visiveis.map((prof) => (
            <CardProfissional key={prof.id} prof={prof} />
          ))}
        </div>

        <button
          className="profissionais__seta"
          onClick={proximo}
          aria-label="Próximos profissionais"
        >
          <ChevronRight size={36} />
        </button>

      </div>

      <div
        className="profissionais__indicadores"
        role="tablist"
        aria-label="Páginas de profissionais"
      >
        {Array.from({ length: totalPaginas }).map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === pagina}
            className={`profissionais__bolinha${i === pagina ? " ativa" : ""}`}
            onClick={() => setPagina(i)}
            aria-label={`Página ${i + 1} de ${totalPaginas}`}
          />
        ))}
      </div>

    </section>
  );
}
