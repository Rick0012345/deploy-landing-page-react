import React, { useState, useEffect, useRef } from "react";
import "../static/css/Carrossel.css";
import img01 from "../static/images/img01.jpg";
import img02 from "../static/images/img02.jpg";
import img03 from "../static/images/img03.jpg";

const Carrossel = () => {
  const [contador, setContador] = useState(0); // Estado para rastrear a imagem atual
  const imagens = [img01, img02, img03];
  const containerRef = useRef(null);

  // Função para atualizar o carrossel
  const updateSlider = (novoContador) => {
    const larguraImagem = containerRef.current?.offsetWidth || 800;
    containerRef.current.style.transform = `translateX(${-novoContador * larguraImagem}px)`;
    containerRef.current.style.transition = "transform 0.5s ease-in-out";
  };

  // Avançar para a próxima imagem
  const showNextImage = () => {
    const novoContador = (contador + 1) % imagens.length;
    setContador(novoContador);
  };

  // Voltar para a imagem anterior
  const showPrevImage = () => {
    const novoContador = (contador - 1 + imagens.length) % imagens.length;
    setContador(novoContador);
  };

  // Atualiza o slider sempre que o contador muda
  useEffect(() => {
    updateSlider(contador);
  }, [contador]);

  // Configura o carrossel automático
  useEffect(() => {
    const intervalo = setInterval(showNextImage, 6000); // Muda de imagem a cada 6 segundos
    return () => clearInterval(intervalo); // Limpa o intervalo quando o componente desmonta
  }, [contador]);

  return (
    <div className="carrosel">
      <button className="prev" onClick={showPrevImage}>
        &lt;
      </button>
      <div className="container" ref={containerRef}>
        {imagens.map((img, index) => (
          <img key={index} src={img} alt={`Imagem ${index + 1}`} />
        ))}
      </div>
      <button className="next" onClick={showNextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Carrossel;
