import { useState, useEffect } from "react";
import "./Login.css";
import Vector from "./Vector";
import VectorBot from "./VectorBot";
import { LoginForm } from "./LoginForm";
import { LoginFormSuccess } from "./LoginFormSuccess";

export function Login() {
  const [isLogged, setIsLogged] = useState(
    window.localStorage.getItem("isLogged")
  );

  function onSuccess() {
    setIsLogged("true");
  }

  return (
    <main className="Login">
      <section>
        <div className="VectorRigth">
          <Vector />
        </div>
        <div className="VectorBot">
          <VectorBot />
        </div>
        <div>
          <h1 className="Tittle">Stax Food Admin Login</h1>
        </div>
      </section>
      <section className="LoginFormContainer">
        <div className="ContainerLogin">
          {isLogged === "true" ? (
            <LoginFormSuccess />
          ) : (
            <LoginForm onSuccess={onSuccess} />
          )}{" "}
        </div>
      </section>
    </main>
  );
}
