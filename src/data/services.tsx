import {
  FaBaby,
  FaBrain,
  FaChild,
  FaEarListen,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaHandsHolding,
  FaHeartPulse,
  FaSpa,
  FaStethoscope,
  FaScaleBalanced,
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
}

export const services: Service[] = [
  { name: "Acupuntura", icon: <GiLotus /> },
  { name: "Acompanhamento de peso do bebê", icon: <FaScaleBalanced /> },
  { name: "Assistência ao parto humanizado", icon: <MdPregnantWoman /> },
  { name: "Consultoria de amamentação", icon: <FaBaby /> },
  { name: "Curso de pais", icon: <FaGraduationCap /> },
  { name: "Curso de preparação para o parto", icon: <FaGraduationCap /> },
  { name: "Cuidadora de crianças, recém-nascidos e idosos", icon: <FaHandsHolding /> },
  { name: "Doula", icon: <FaHandHoldingHeart /> },
  { name: "Drenagem", icon: <FaSpa /> },
  { name: "E-lib", icon: <FaHeartPulse /> },
  { name: "Fisioterapia pélvica", icon: <MdOutlineMedicalServices /> },
  { name: "Fonoaudiologia", icon: <FaEarListen /> },
  { name: "Fototerapia", icon: <FaHeartPulse /> },
  { name: "Furo na orelhinha humanizado", icon: <FaEarListen /> },
  { name: "Laserterapia", icon: <FaHeartPulse /> },
  { name: "Massoterapia", icon: <FaSpa /> },
  { name: "Nutricionista materno-infantil", icon: <LuApple /> },
  { name: "Obstetrícia", icon: <MdPregnantWoman /> },
  { name: "Pediatria", icon: <FaChild /> },
  { name: "Psicologia clínica", icon: <FaBrain /> },
  { name: "Psicologia perinatal", icon: <FaBrain /> },
  { name: "Tapping", icon: <FaHandHoldingHeart /> },
  { name: "Teste da linguinha e teste da orelhinha", icon: <FaStethoscope /> },
  { name: "Tratamento de assaduras em bebês", icon: <FaBaby /> },
  { name: "Tratamento de diástase", icon: <MdOutlineMedicalServices /> },
  { name: "Tratamento para síndrome mão-pé-boca", icon: <FaStethoscope /> },
];
