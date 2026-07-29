"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./styles.css";

import img1 from "@/assets/carrossel/carrossel-01.png";
import img2 from "@/assets/carrossel/carrossel-02.png";
import img3 from "@/assets/carrossel/carrossel-03.png";
import img4 from "@/assets/carrossel/carrossel-04.png";

const imagens = [img1, img2, img3, img4];

const HeroCarrossel = () => {
  const [indexAtual, setIndexAtual] = useState(0);

  // Troca automática a cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexAtual((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="carrossel-container">
      <Image
        src={imagens[indexAtual]}
        alt=""
        fill
        priority
        sizes="100vw"
        className="carrossel-imagem"
      />

      <div className="carrossel-slide">
        <div className="carrossel-overlay">
          <h1>Cuidado especializado em todas as fases da maternidade.</h1>
          <p>
            Da gestação ao pós-parto, oferecemos acolhimento, saúde e bem-estar
            para mamães e bebês.
          </p>
          <a
            href="https://wa.me/5598999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="carrossel-button"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroCarrossel;
