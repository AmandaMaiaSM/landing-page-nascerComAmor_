import {
  FaBaby,
  FaBrain,
  FaChild,
  FaEarListen,
  FaGift,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaHandsHolding,
  FaHeartPulse,
  FaSpa,
  FaStethoscope,
  FaScaleBalanced,
  FaSyringe,
} from "react-icons/fa6";
import {
  MdPregnantWoman,
  MdOutlineMedicalServices,
} from "react-icons/md";

import { GiLotus } from "react-icons/gi";
import { LuApple } from "react-icons/lu";
import type { ReactNode } from "react";

export interface Service {
  name: string;
  icon: ReactNode;
  /** Texto exibido no card do serviço na seção Serviços. Preencher por serviço. */
  description: string;
}

export const services: Service[] = [
  { name: "Acupuntura", 
    icon: <GiLotus />, 
    description: "Tratamento que utiliza técnicas reconhecidas para aliviar dores, reduzir o estresse, controlar ansiedade, auxiliar durante a gestação, no puerpério e promover o equilíbrio físico e emocional."
   },
  { name: "Acompanhamento de peso do bebê", 
    icon: <FaScaleBalanced />, 
    description: "Realizamos o acompanhamento do crescimento e ganho de peso do bebê, avaliando sua evolução, alimentação e desenvolvimento. O serviço é ideal para recém-nascidos, bebês prematuros e crianças que necessitam de monitoramento mais próximo, oferecendo orientação personalizada aos pais."
  },
  { name: "Aplicação de Injetáveis",
    icon: <FaSyringe />,
    description: "A Nascer com Amor oferece o serviço de aplicação de medicamentos injetáveis com segurança, técnica e acolhimento, realizado por profissionais habilitados."
  },
  { name: "Assistência ao parto humanizado",
    icon: <MdPregnantWoman />,
    description: "Oferecemos assistência especializada durante o trabalho de parto, parto e pós-parto imediato, respeitando a fisiologia do nascimento e o protagonismo da mulher. Nosso atendimento proporciona suporte físico, emocional e técnico para que a família viva esse momento com segurança, acolhimento e respeito."
  },
  { name: "Assistência Pós-parto e Cuidados com o Recém-Nascido",
    icon: <FaBaby />,
    description: "Realizamos visitas domiciliares ou atendimento na clínica para orientar os primeiros cuidados com o bebê, higiene, sono, banho, coto umbilical, amamentação e adaptação da família nesse novo momento."
  },
  { name: "Chá de Bênçãos",
    icon: <FaGift />,
    description: `O Chá de Bênçãos é uma celebração afetiva e acolhedora que substitui ou complementa o tradicional chá de bebê. O encontro reúne familiares e pessoas especiais para oferecer palavras de carinho, bênçãos, incentivo e apoio emocional à gestante e ao bebê que está chegando.
Na Nascer com Amor, organizamos esse momento de forma personalizada, criando uma experiência leve, emocionante e significativa. A programação pode incluir dinâmicas, momentos de espiritualidade (de acordo com a crença da família), meditação, música, massagens, pintura gestacional, homenagens e outras atividades que fortaleçam o vínculo entre a mãe, o bebê e sua rede de apoio.`
  },

  { name: "Consultoria de amamentação", icon: <FaBaby />,
    description: "Auxiliamos gestantes e puérperas em todas as fases da amamentação. Avaliamos a pega, posição do bebê, produção de leite, dificuldades para amamentar, ingurgitamento, fissuras mamilares e realizamos um plano individualizado para cada mãe, está incluso o laser."
  },
  { name: "Curso de pais", icon: <FaGraduationCap />, 
    description: "Um curso completo para preparar gestantes, pais e acompanhantes para a chegada do bebê. São abordados temas como parto, amamentação, primeiros cuidados com o recém-nascido, banho, troca de fraldas, desengasgo e adaptação da família." 
  },
  { name: "Curso de preparação para o parto", 
    icon: <FaGraduationCap />, 
    description: `O Curso de Preparação para o Parto foi desenvolvido para oferecer informação, segurança e confiança à gestante e ao acompanhante, preparando a família para viver o nascimento de forma consciente e tranquila.
    Durante o curso, abordamos temas essenciais como os sinais do trabalho de parto, fases do parto, métodos não farmacológicos para alívio da dor, plano de parto, papel do acompanhante, parto normal e cesárea, cuidados com o recém-nascido, amamentação, primeiros socorros e adaptação da família no pós-parto.
    As aulas são conduzidas por profissionais especializados, utilizando uma linguagem acessível e baseada em evidências científicas, proporcionando uma experiência prática e acolhedora para que os futuros pais se sintam preparados para a chegada do bebê.`
  },
  { name: "Cuidadora de Crianças e Idosos", 
    icon: <FaHandsHolding />, 
    description: "Disponibilizamos profissionais capacitados para oferecer cuidados humanizados, garantindo conforto, segurança e bem-estar de crianças e idosos no ambiente domiciliar ou hospitalar."
  },
  { name: "Doula", 
    icon: <FaHandHoldingHeart />, 
    description: "A doula oferece suporte emocional, físico e informativo durante a gestação, trabalho de parto, parto e pós-parto, proporcionando acolhimento e contribuindo para uma experiência mais tranquila e positiva."
  },
  { name: "Drenagem", icon: <FaSpa />, description: "" },
  { name: "E-lib", icon: <FaHeartPulse />, description: "" },

  { name: "Fisioterapia pélvica", 
    icon: <MdOutlineMedicalServices />, 
    description: "Especialidade voltada para prevenção e tratamento das disfunções do assoalho pélvico, como incontinência urinária, dor pélvica, preparo para o parto e recuperação pós-parto, promovendo mais qualidade de vida para a mulher." 

  },
  { name: "Fonoaudiologia", 
    icon: <FaEarListen />, 
    description: "Atendimento especializado para avaliação e tratamento das funções de fala, linguagem, audição, sucção, mastigação e deglutição em bebês, crianças e adultos." 
  },
  { name: "Fototerapia Domiciliar", 
    icon: <FaHeartPulse />, 
    description: "Disponibilizamos equipamento portátil para tratamento domiciliar da icterícia neonatal, permitindo que o bebê receba fototerapia com conforto e segurança, sempre sob acompanhamento profissional, evitando internações desnecessárias quando indicado pelo pediatra." 
  },
  { name: "Furo na orelhinha humanizado", 
    icon: <FaEarListen />, 
    description: "Realizamos o primeiro furo de orelha do bebê utilizando técnica humanizada, equipamentos apropriados e materiais estéreis, proporcionando um procedimento seguro, delicado e com mínimo desconforto." 

  },
  { name: "Laserterapia", 
    icon: <FaHeartPulse />, 
    description: "Tratamento que utiliza laser de baixa potência para acelerar a cicatrização, aliviar dores, reduzir inflamações e auxiliar no tratamento de fissuras mamilares, lesões, feridas e outras condições clínicas." 
  },
  { name: "Massoterapia", 
    icon: <FaSpa />, 
    description: "Sessões terapêuticas voltadas para relaxamento muscular, redução de dores, melhora da circulação e diminuição do estresse, proporcionando bem-estar físico e emocional." 
  },
  { name: "Nutrição materno-infantil", 
    icon: <LuApple />, 
    description: "Atendimento nutricional personalizado para gestantes, puérperas, lactantes, bebês e crianças, promovendo alimentação saudável em todas as fases do desenvolvimento." 
  },
  { name: "Enfermeira Obstetra", 
    icon: <MdPregnantWoman />, 
    description: "Acompanhamento especializado da gestação, assistência ao parto humanizado, consultas de pré-natal e cuidados no pós-parto, sempre com foco na saúde da mãe e do bebê." 
  },
  { name: "Pediatria", 
    icon: <FaChild />, 
    description: "Consultas pediátricas para acompanhamento do crescimento e desenvolvimento infantil, prevenção de doenças, vacinação, orientações aos pais e tratamento de diversas condições da infância." 
  },
  { name: "Psicologia clínica", icon: <FaBrain />, description: "" },

  { name: "Psicologia perinatal", 
    icon: <FaBrain />, 
    description: "Atendimento psicológico voltado para mulheres, casais e famílias durante a gestação, parto, puerpério, tentativas de engravidar, luto gestacional e adaptação à maternidade e paternidade." 

  },
  { name: "Tapping Terapêutico", 
    icon: <FaHandHoldingHeart />, 
    description: "Aplicação de bandagens elásticas que auxiliam na redução de dores, inchaços, melhora da circulação, sustentação muscular e recuperação funcional durante a gestação, pós-parto e outras condições clínicas." 
  },
  { name: "Teste da Linguinha", 
    icon: <FaStethoscope />, 
    description: "Avaliação realizada para identificar alterações no frênulo lingual que possam interferir na amamentação, fala e desenvolvimento oral do bebê, possibilitando tratamento precoce quando necessário." 
  },
  { name: "Teste da Orelhinha", 
    icon: <FaStethoscope />, 
    description: "Exame simples, rápido e indolor que avalia a audição do recém-nascido, permitindo identificar precocemente possíveis alterações auditivas." 
  },
  {name: "Teste do Olhinho", 
    icon: <FaStethoscope />, 
    description: "O Teste do Olhinho, também conhecido como Teste do Reflexo Vermelho, é um exame simples, rápido e indolor, realizado nos primeiros dias de vida do bebê. Seu objetivo é identificar precocemente alterações oculares que podem comprometer a visão, permitindo diagnóstico e tratamento em tempo oportuno."
  },
  { name: "Tratamento de assaduras em bebês", icon: <FaBaby />, description: "" },
  { name: "Tratamento de diástase", icon: <MdOutlineMedicalServices />, description: "" },
  { name: "Tratamento para síndrome mão-pé-boca", icon: <FaStethoscope />, description: "" },
];
