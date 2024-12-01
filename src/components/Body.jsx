import React from "react";
import "../static/css/Style.css";

import vistaDaRua from "../static/images/vista-da-rua.png";
import alinhamentoGrafico from "../static/images/alinhamento-do-grafico.png";
import setaDeAlvo from "../static/images/seta-de-alvo.png";

const Body = () => {
  return (
    <main>
      <h1>PROJETO SANBA</h1>
      <h2>SERVIÇOS PRÁTICOS DE SANEAMENTO</h2>
      <div className="sessões">
        <section className="primeira">
          <img src={vistaDaRua} alt="Missão Visão Valores" />
          <h6>MISSÃO VISÃO VALORES</h6>
          <p>
            No Planejamento Estratégico definimos nossos valores, que representam nosso compromisso
            com as pessoas, a sociedade, parceiros e acionistas. Conheça alguns pontos.
          </p>
        </section>
        <section className="segunda">
          <img src={alinhamentoGrafico} alt="Quem Somos" />
          <h6>QUEM SOMOS</h6>
          <p>
            Alunos do curso de Engenharia de Software, atualmente no 2º período elaborando um
            sistema o qual irá beneficiar a população maricaense no geral com boa qualidade.
          </p>
        </section>
        <section className="terceira">
          <img src={setaDeAlvo} alt="Objetivos" />
          <h6>OBJETIVOS</h6>
          <p>
            Desenvolvemos sistemas de comunicação eficientes que permitem aos clientes acessarem
            informações e acessarem serviços de maneira intuitiva e eficiente.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Body;
