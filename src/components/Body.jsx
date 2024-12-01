import React from "react";
import "../static/css/Style.css"; // Certifique-se de ajustar o caminho conforme necessário.

const Body = () => {
  return (
    <>
      <main>
        <div className="carrosel">
          <button className="prev">&lt;</button>
          <div className="container">
            <img src="../static/image/img01.jpg" alt="Imagem 1" />
            <img src="../static/image/img02.jpg" alt="Imagem 2" />
            <img src="../static/image/img03.jpg" alt="Imagem 3" />
          </div>
          <button className="next">&gt;</button>
        </div>

        <h1>PROJETO SANBA</h1>
        <h2>SERVIÇOS PRÁTICOS DE SANEAMENTO</h2>

        <div className="sessões">
          <section className="primeira">
            <img src="/static/image/vista-da-rua.png" alt="Missão Visão Valores" />
            <h6>MISSÃO VISÃO VALORES</h6>
            <p>
              No Planejamento Estratégico definimos nossos valores, que representam nosso compromisso
              com as pessoas, a sociedade, parceiros e acionistas. Conheça alguns pontos.
            </p>
          </section>

          <section className="segunda">
            <img src="/static/image/alinhamento-do-grafico.png" alt="Quem Somos" />
            <h6>QUEM SOMOS</h6>
            <p>
              Alunos do curso de Engenharia de Software, atualmente no 2º período elaborando um
              sistema o qual irá beneficiar a população maricaense no geral com boa qualidade.
            </p>
          </section>

          <section className="terceira">
            <img src="/static/image/seta-de-alvo.png" alt="Objetivos" />
            <h6>OBJETIVOS</h6>
            <p>
              Desenvolvemos sistemas de comunicação eficientes que permitem aos clientes acessarem
              informações e acessarem serviços de maneira intuitiva e eficiente.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Body;
