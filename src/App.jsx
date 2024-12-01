import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Carrossel from "./components/Carrossel";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Após o login, alteramos o estado para true
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Navbar />
          <main>
            <Carrossel />
            <Body />
            <Footer />
          </main>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
