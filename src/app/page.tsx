import HeroCarrossel from "@/components/hero-carrossel";
import QuemSomos from "@/sections/quem-somos";
import Servicos from "@/sections/servicos";
import Profissionais from "@/sections/profissionais";
import Depoimentos from "@/sections/depoimentos";
import Faq from "@/sections/faq";

export default function Home() {
  return (
    <>
      <div id="inicio"><HeroCarrossel /></div>
      <div id="quem-somos"><QuemSomos /></div>
      <div id="servicos"><Servicos /></div>
      <div id="profissionais"><Profissionais /></div>
      <div id="depoimentos"><Depoimentos /></div>
      <div id="faq"><Faq /></div>
    </>
  );
}
