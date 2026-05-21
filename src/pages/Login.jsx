import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoMix1 from "../assets/Mix.jpg";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  // Estado del formulario
  const [form, setForm] = useState({
    id: "",
    password: ""
  });

  // Actualizar inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Enviar login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:8000/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );
      const data = await res.json();
      if (res.ok) {

        // Guardar token
        localStorage.setItem("token", data.token);
        alert(data.message || "Login exitoso");

        // Redirigir
        setTimeout(() => {
          navigate("/Index");
        }, 1500);
      } else {
        alert(data.error || "Error de login");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión");
    }
  };

  return (
    <div className="containerLogin">

      {/* Imagen */}
      <div className="col">
        <img
          src={LogoMix1}
          alt="Logo"
          className="LogoMix1"
        /></div>

      {/* Formulario */}
      <div className="card">
        <form onSubmit={handleSubmit}>
          <InputField
            label="Documento de Identidad :"
            type="number"
            name="id"
            value={form.id}
            onChange={handleChange}
            placeholder=" Ingrese su documento"
          />
          <InputField
            label="Contraseña :"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder=" Ingrese su contraseña"
          /><p>
            <Button
              type="submit"
              text="Iniciar Sesión"
              disabled={!form.id || !form.password}
            /></p>
          <p className="forgot">
            ¿Olvidaste tu contraseña? :
            <button
              type="button"
              className="link-button"
            >Restablecer contraseña
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;