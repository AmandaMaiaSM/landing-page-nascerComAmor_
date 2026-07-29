import Image from "next/image";
import quemSomosImg from "@/assets/quem-somos-01.png";
import "./styles.css";

export default function QuemSomos() {
  return (
    <section className="quem-somos">
      <div className="quem-somos-content">

        <article className="quem-somos-texto">
          <h1>Quem Somos</h1>

          <h2>
            Somos uma clínica especializada no cuidado integral da maternidade,
            atuando em todas as fases que envolvem a saúde da mulher e do bebê.
          </h2>

          <p>
            Nosso compromisso é oferecer um atendimento humanizado, seguro e
            baseado em evidências científicas, garantindo excelência em cada
            serviço prestado. Contamos com uma equipe multiprofissional
            qualificada, preparada para atender desde o planejamento
            gestacional até o pós-parto e o desenvolvimento infantil.
          </p>

          <p>
            Nosso objetivo é proporcionar um acompanhamento completo,
            promovendo saúde, bem-estar e qualidade de vida para toda a
            família.
          </p>

          <a
            href="https://www.instagram.com/nascercomamor_slz/?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
            className="quem-somos-button"
          >
            Saiba mais sobre nós
          </a>
        </article>

        <figure className="quem-somos-imagem">
          <Image
            src={quemSomosImg}
            alt="Equipe da Clínica Nascer com Amor"
          />
        </figure>

      </div>
    </section>
  );
}
