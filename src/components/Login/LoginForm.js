import { useState } from "react";
import "./LoginForm.css";

export function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleClick() {
    if (email === "test@test.com") {
      if (password === "test") {
        setError("");

        window.localStorage.setItem("isLogged", true);

        onSuccess();

        return;
      }
    }

    window.localStorage.setItem("isLogged", false);
    setError("Datos Incorrectos");
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div>
      <h2 className="Aclaration">
        Please fill in your unique admin login details below
      </h2>

      <form action="">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          id="email"
          class="inputs"
          value={email}
          onChange={onEmailChange}
          required
          placeholder="usser@dominio.com"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          class="inputs"
          required
          value={password}
          onChange={onPasswordChange}
        />
        <label htmlFor="Type">Type</label>
        <select name="select" className="SelectLogin" id="Type">
          <option value="valueProfesor">Profesor</option>
          <option value="valueAlumno">Alumno</option>
        </select>
      </form>
      <button className="ForgotPassword">forgot password?</button>
      <button className="SignIn" onClick={handleClick}>Sign In</button>
      {error.length > 0 ? (
          <div className="LoginFormError">
            {error}
          </div>
        ) : null}
    </div>
  );
}
