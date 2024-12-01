// import React from "react";
import '../static/css/Navbar.css';

function Navbar() {
  const handleMenuClick = () => {
    // Lógica para exibir/esconder o menu em telas menores
    const nav = document.querySelector(".navbar ul");
    nav.classList.toggle("show");
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>Projeto Sanba</h1>
        </div>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">SOBRE NÓS</a>
          </li>
  
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTATOS
            </a>
          </li>
        </ul>
        <div className="menu-icon" onClick={handleMenuClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
