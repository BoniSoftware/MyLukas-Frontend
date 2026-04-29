import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import LogoMix2 from "../assets/Mix.jpg";
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
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (form.password !== form.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      if (!aceptaTerminos) {
        alert("Debes aceptar los términos");
        return;
      }
      try {
        const res = await fetch("http://localhost:8000/api/users/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });
        const data = await res.json();
        if (res.ok) {
          alert(data.message || "Registro exitoso");
          navigate("/Index"); // ✅ redirección correcta
        } else {
          alert(data.error || "Error en el registro");
        }
      } catch (error) {
        console.error(error);
        alert("Error de conexión");
      }
    };

  return (
    <div className="containerRegistro">
      <div className="col">
        <img src={LogoMix2} alt="Logo" className="LogoMix2" />
      </div>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <InputField label="Nombres :" type="text" name="name" placeholder=" Ingrese nombre completo" onChange={handleChange} />
          <InputField label="Apellidos :" type="text" name="second_name" placeholder=" Ingrese sus apellidos" onChange={handleChange} />
          <InputField label="Documento Identidad :" type="number" name="id" placeholder=" Ingrese solo numeros" onChange={handleChange} />
          <InputField label="Correo Electronico :" type="email" name="email" placeholder=" Ingrese su email" onChange={handleChange} />
          <InputField label="Contraseña :" type="password" name="password" placeholder=" Ingrese su contraseña" onChange={handleChange} />
          <InputField label="Confirmar Contraseña :" type="password" name="confirmPassword" placeholder=" Confirme  contraseña" onChange={handleChange} />
          <p>
            <label htmlFor="terminos">Acepta términos y condiciones</label>
            <input
              id="terminos" type="checkbox" checked={aceptaTerminos} onChange={(e) => setAceptaTerminos(e.target.checked)}
            />
          </p>
          <Button
            type="submit" text="Registrar Usuario" disabled={!aceptaTerminos}
          />
        </form>
      </div>
    </div>
  );
}

export default Registro;
