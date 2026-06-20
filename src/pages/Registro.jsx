import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Admin from "../assets/Admin.jpg";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/registro.css";

function Registro() {

  const navigate = useNavigate();

  // ESTADOS
  const [usuarios, setUsuarios] = useState([]);

  const [form, setForm] = useState({
    name: "",
    second_name: "",
    id: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [editando, setEditando] = useState(false);
  const [usuarioId, setUsuarioId] = useState(null);

  // OBTENER USUARIOS
  const obtenerUsuarios = async () => {
    try {const res = await fetch("http://localhost:8000/api/users");
      const data = await res.json();
      setUsuarios(data);
    } catch (error) {console.error(error);}
  };

  // CARGAR USUARIOS
  useEffect(() => {obtenerUsuarios();}, []);

  // ACTUALIZAR INPUTS
  const handleChange = (e) => {setForm({...form, [e.target.name]: e.target.value});
  };

  // ENVIAR FORMULARIO
  const handleSubmit = async (e) => {e.preventDefault();

    // VALIDAR CONTRASEÑAS
    if (form.password !== form.confirmPassword) {alert("Las contraseñas no coinciden");
      return;
    }

    // VALIDAR TERMINOS
    if (!aceptaTerminos) {alert("Debes aceptar los términos");
      return;
    }

    try {
      let res;

      // ACTUALIZAR
      if (editando) {res = await fetch(`http://localhost:8000/api/users/${usuarioId}`,
          {method: "PUT", headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)}
        );
      } else {

        // REGISTRAR
        res = await fetch("http://localhost:8000/api/users/register",
          {method: "POST", headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)}
        );
      }

      const data = await res.json();
      if (res.ok) {alert(data.message ||
          (editando
            ? "Usuario actualizado correctamente"
            : "Usuario registrado correctamente")
        );

        // LIMPIAR FORMULARIO
        setForm({
          name: "",
          second_name: "",
          id: "",
          email: "",
          password: "",
          confirmPassword: ""
        });

        setAceptaTerminos(false);
        setEditando(false);
        setUsuarioId(null);

        // RECARGAR USUARIOS
        obtenerUsuarios();

        // REDIRECCION
        setTimeout(() => {
          navigate("/Registro");
        }, 1500);

      } else {alert(data.error || "Error en el proceso");}

    } catch (error) {
      console.error(error); alert("Error de conexión con el servidor");
    }
  };

  // ELIMINAR USUARIO
  const eliminarUsuario = async (id) => {
    const confirmar = window.confirm(
      "¿Eliminar usuario?"
    );
    if (!confirmar) return;
    try {await fetch(`http://localhost:8000/api/users/${id}`,
        {method: "DELETE"}
      );
      obtenerUsuarios();
    } catch (error) {console.error(error);}
  };

  // EDITAR USUARIO
  const editarUsuario = (usuario) => {
    setForm({
      name: usuario.name,
      second_name: usuario.second_name,
      id: usuario.id,
      email: usuario.email,
      password: "",
      confirmPassword: ""
    });

    setUsuarioId(usuario._id);
    setEditando(true);
    setAceptaTerminos(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="containerRegistro">

      {/* IMAGEN */}
      <div className="col">
        <img src={Admin} alt="Logo" className="Admin"/>
      </div>

      {/* FORMULARIO */}
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

          {/* CHECKBOX */}
          <p><label htmlFor="terminos"> Acepta términos y condiciones </label>
            <input
              id="terminos"
              type="checkbox"
              checked={aceptaTerminos}
              onChange={(e) =>
                setAceptaTerminos(e.target.checked)
              }/></p>

          {/* BOTON */}
          <Button
            type="submit"
            text={
              editando
                ? "Actualizar Usuario"
                : "Registrar Usuario"
            }disabled={!aceptaTerminos}/>
        </form>
      </div>

      {/* LISTADO DE USUARIOS */}
      <div className="usuarios-container">
        <h3>Usuarios Registrados</h3>
        {usuarios.map((usuario) => (
          <div
              key={usuario._id}
              className="card-user"
            ><div>{usuario.name} {usuario.second_name} - ID: {usuario.id}</div>
            <button className="btn-editar"
                onClick={() => editarUsuario(usuario)}
                >Editar</button>
            <button className="btn-eliminar"
                onClick={() => eliminarUsuario(usuario._id)}
                >Eliminar</button>
          </div>
        ))}
      </div>  
    </div>
  );
}

export default Registro;


