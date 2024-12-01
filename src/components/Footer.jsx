import React from "react";
import "../static/css/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div id="footer_content">
        

        <div className="footer-section">
          <ul className="footer-list">
            <li>
              <h3>Sanemar</h3>
            </li>
            <li>
              <a
                href="https://sanemar-sa.com.br/"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site Oficial
              </a>
            </li>
            <li>
              <a
                href="https://sanemar-sa.com.br/adequacao-e-manutencao-de-esgotamento-sanitario/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="https://sanemar-sa.com.br/contato/"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contatos
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <ul className="footer-list">
            <li>
              <h3>Progresso</h3>
            </li>
            <li>
              <a href="#" className="footer-link">
                Mvp
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Site
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Aplicativo
              </a>
            </li>
          </ul>
        </div>

        <div id="footer_subscribe">
          <h3>Contate-nos</h3>
          <p>Digite seu email</p>

          <div id="input_group">
            <input type="email" id="email" />
            <button>
              <i className="fa-regular fa-envelope"></i>
            </button>
          </div>
        </div>
      </div>

      <div id="footer_copyright">
        <p>&#169; 2024 Todos os direitos reservados </p>
        <p className="privacy-policy">
          Este site está comprometido com a proteção de sua privacidade. Leia
          nossas{" "}
          <a href="/politicas-de-privacidade" className="footer-link">
            Políticas de Privacidade
          </a>{" "}
          para saber mais sobre como lidamos com suas informações.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
