"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "./styles.css";

interface PerguntaFrequente {
  id: number;
  pergunta: string;
  resposta: string;
}

// Para adicionar perguntas, basta inserir novos objetos neste array.
const faqs: PerguntaFrequente[] = [
  {
    id: 1,
    pergunta: "A assistência de vocês inclui parto cesáreo ou somente parto normal?",
    resposta: "Nossa assistência pode ser realizada tanto em partos normais quanto em cesáreas, oferecendo suporte especializado à gestante e sua família durante todo o processo de nascimento."
  },
  {
    id: 2,
    pergunta: "Como funciona a assistência ao parto?",
    resposta: "Nossa equipe acompanha a gestante durante o trabalho de parto, parto e pós-parto imediato, oferecendo suporte físico, emocional e orientações para tornar esse momento mais tranquilo e seguro. O atendimento é adaptado às necessidades de cada família e ao tipo de parto."
  },
  {
    id: 3,
    pergunta: "Como funciona a aplicação do furinho de orelha?",
    resposta: "A aplicação é realizada por profissional capacitado, geralmente enfermeira, utilizando técnica humanizada e um dispositivo estéril, garantindo conforto e segurança para o bebê, além de evitar possíveis infecções "
  },
  {
    id: 4,
    pergunta: "O serviço de furinho já inclui o brinquinho?",
    resposta: "Sim, o serviço do furinho já está incluso o brinco. Mas existem alguns brincos que podem ser comprados separadamente também."
  },
  {
    id: 5,
    pergunta: "Como funciona a consultoria de amamentação?",
    resposta: "A consultoria auxilia mães que desejam iniciar ou melhorar a amamentação. Durante o atendimento, avaliamos a pega, posicionamento do bebê, produção de leite, possíveis dificuldades e oferecemos orientações personalizadas."
  },
  {
    id: 6,
    pergunta: "Vocês pensam no bebê em casa para acompanhar o ganho de peso?",
    resposta: "Sim. Realizamos acompanhamento domiciliar do recém-nascido, incluindo pesagem e avaliação do desenvolvimento. E também protocolo de ganho de peso, quando necessário."
  },
  {
    id: 7,
    pergunta: "Vocês realizam atendimento domiciliar?",
    resposta: "Sim. Oferecemos diversos serviços no conforto da sua casa, proporcionando mais comodidade e tranquilidade para a família."
  },
  {
    id: 8,
    pergunta: "Com quantos dias de vida o bebê pode realizar o teste do pezinho?",
    resposta: "O ideal é que o teste do pezinho seja realizado entre o 3º e o 5º dia de vida do bebê, conforme recomendação dos órgãos de saúde."
  },
  {
    id: 9,
    pergunta: "Como agendar um atendimento?",
    resposta: "Você pode entrar em contato conosco através do WhatsApp, telefone ou formulário disponível no site. Nossa equipe terá prazer em ajudar."
  },
  {
    id: 10,
    pergunta: "Vocês oferecem acompanhamento pós-parto?",
    resposta: "Sim. Oferecemos acompanhamento para a mãe e o bebê após o nascimento, com orientações sobre amamentação, cuidados com o recém-nascido e recuperação materna."
  },

];

const ITENS_VISIVEIS_INICIAL = 5;

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null);
  const [expandido, setExpandido] = useState(false);

  const visiveis = expandido ? faqs : faqs.slice(0, ITENS_VISIVEIS_INICIAL);
  const temMais = faqs.length > ITENS_VISIVEIS_INICIAL;

  const toggle = (id: number) =>
    setAberto((prev) => (prev === id ? null : id));

  return (
    <section className="faq">

      <div className="faq__cabecalho">
        <span className="faq__label">FAQ</span>
        <h2 className="faq__titulo">Perguntas Frequentes</h2>
        <p className="faq__subtitulo">Tire suas dúvidas sobre nosso atendimento</p>
      </div>

      <div className="faq__lista">

        {visiveis.length === 0 ? (
          <div className="faq__vazio">
            <span className="faq__vazio-icone" aria-hidden="true">💬</span>
            <p className="faq__vazio-mensagem">
              Em breve adicionaremos nossas principais dúvidas e respostas.
            </p>
          </div>
        ) : (
          visiveis.map((item) => {
            const estaAberto = aberto === item.id;
            return (
              <div
                key={item.id}
                className={`faq__item${estaAberto ? " aberto" : ""}`}
              >
                <button
                  className="faq__pergunta"
                  onClick={() => toggle(item.id)}
                  aria-expanded={estaAberto}
                  aria-controls={`resposta-${item.id}`}
                  id={`pergunta-${item.id}`}
                >
                  <span className="faq__pergunta-texto">{item.pergunta}</span>
                  <span className="faq__icone" aria-hidden="true">
                    {estaAberto ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <div
                  id={`resposta-${item.id}`}
                  role="region"
                  aria-labelledby={`pergunta-${item.id}`}
                  className="faq__resposta-wrapper"
                >
                  <p className="faq__resposta">{item.resposta}</p>
                </div>
              </div>
            );
          })
        )}

      </div>

      {temMais && (
        <div className="faq__ver-mais">
          <button
            className="faq__bt-ver-mais"
            onClick={() => setExpandido((prev) => !prev)}
            aria-expanded={expandido}
          >
            {expandido ? "Ver menos perguntas" : "Ver mais perguntas"}
            <span
              className={`faq__bt-seta${expandido ? " invertida" : ""}`}
              aria-hidden="true"
            >
              ↓
            </span>
          </button>
        </div>
      )}

    </section>
  );
}
