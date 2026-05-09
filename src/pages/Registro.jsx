import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoMix2 from "../assets/Mix.jpg";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/registro.css";

function Registro() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    second_name: "",
    id: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  // Actualizar inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar contraseñas
    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Validar términos
    if (!aceptaTerminos) {
      alert("Debes aceptar los términos");
      return;
    }

    try {
      const res = await fetch(
        "http://localhost:8000/api/users/register",
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
        alert(data.message || "Registro exitoso");

        // Limpiar formulario
        setForm({
          name: "",
          second_name: "",
          id: "",
          email: "",
          password: "",
          confirmPassword: ""
        });

        setAceptaTerminos(false);

        // Redirección
        setTimeout(() => {
          navigate("/Registro");
        }, 1500);
      } else {
        alert(data.error || "Error en el registro");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <div className="containerRegistro">

      {/* Imagen */}
      <div className="col">
        <img
          src={LogoMix2}
          alt="Logo"
          className="LogoMix2"
        />
      </div>

      {/* Formulario */}
      <div className="card">
        <form onSubmit={handleSubmit}>
          <InputField
            label="Nombres :"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ingrese nombre completo"
          />
          <InputField
            label="Apellidos :"
            type="text"
            name="second_name"
            value={form.second_name}
            onChange={handleChange}
            placeholder="Ingrese sus apellidos"
          />
          <InputField
            label="Documento Identidad :"
            type="text"
            name="id"
            value={form.id}
            onChange={handleChange}
            placeholder="Ingrese solo números"
          />
          <InputField
            label="Correo Electrónico :"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Ingrese su email"
          />
          <InputField
            label="Contraseña :"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Ingrese su contraseña"
          />
          <InputField
            label="Confirmar Contraseña :"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirme contraseña"
          />

          {/* Checkbox */}
          <p>
            <label htmlFor="terminos">
              Acepta términos y condiciones
            </label>
            <input
              id="terminos"
              type="checkbox"
              checked={aceptaTerminos}
              onChange={(e) =>
                setAceptaTerminos(e.target.checked)
              }
            />
          </p>

          {/* Botón */}
          <Button
            type="submit"
            text="Registrar Usuario"
            disabled={!aceptaTerminos}
          />
        </form>
      </div>
    </div>
  );
}

export default Registro;
