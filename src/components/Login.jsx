import React, { useState } from "react";
import "../static/css/Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      if (isRegistering) {
        // Lógica de cadastro (você pode integrar com um backend aqui)
        console.log("Cadastro realizado:", email, password);
      } else {
        onLogin(); // Chama a função onLogin para permitir o login
      }
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? "Cadastro" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isRegistering ? "Cadastrar" : "Entrar"}</button>
      </form>
      <p>
        {isRegistering ? (
          <span>
            Já tem uma conta?{" "}
            <button onClick={() => setIsRegistering(false)}>Faça login</button>
          </span>
        ) : (
          <span>
            Não tem uma conta?{" "}
            <button onClick={() => setIsRegistering(true)}>Cadastre-se</button>
          </span>
        )}
      </p>
    </div>
  );
};

export default Login;
