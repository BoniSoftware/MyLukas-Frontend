import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoEntradas from "../assets/Entradas.jpg";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/entradas.css";

function Entradas() {

  const navigate = useNavigate();

  // ESTADOS
  const [entradas, setEntradas] = useState([]);
  const [form, setForm] = useState({
    entrada: "",
    descripcion: "",
    valor: "",
  });

  const [editando, setEditando] = useState(false);
   const [entradaId, setEntradaId] = useState(null);

  // OBTENER ENTRADAS
  const obtenerEntradas = async () => {
    try {const res = await fetch("http://localhost:8000/api/entradas");
      const data = await res.json();
      setEntradas(data);
    } catch (error) {console.error(error);}
  };

  // CARGAR ENTRADAS
  useEffect(() => {obtenerEntradas();}, []);

  // ACTUALIZAR INPUTS
  const handleChange = (e) => {setForm({...form, [e.target.name]: e.target.value});
  };

  // ENVIAR FORMULARIO
  const handleSubmit = async (e) => {e.preventDefault();
    try {
      let res;
      const datosEnviar = {...form, valor: Number(form.valor)};

      // ACTUALIZAR
      if (editando) {res = await fetch(`http://localhost:8000/api/entradas/${entradaId}`,
          {method: "PUT", headers: {"Content-Type": "application/json"},
            body: JSON.stringify(datosEnviar)}
        );
      } else {

        // REGISTRAR
        res = await fetch("http://localhost:8000/api/entradas",
          {method: "POST", headers: {"Content-Type": "application/json"},
            body: JSON.stringify(datosEnviar)}
        );
      }

      const data = await res.json();
      if (res.ok) {alert(data.message ||
          (editando
            ? "Entrada actualizada correctamente"
            : "Entrada registrada correctamente")
        );

        // LIMPIAR FORMULARIO
        setForm({
          entrada: "",
          descripcion: "",
          valor: "",
        });

        setEditando(false);
        setEntradaId(null);

        // RECARGAR USUARIOS
        obtenerEntradas();

        // REDIRECCION
        setTimeout(() => {
          navigate("/Entradas");
        }, 1500);

      } else {alert(data.error || "Error en el proceso");}

    } catch (error) {
      console.error(error); alert("Error de conexión con el servidor");
    }
  };

  // ELIMINAR ENTRADA
  const eliminarEntradas = async (id) => {
    const confirmar = window.confirm(
      "¿Eliminar entrada?"
    );
    if (!confirmar) return;
    try {await fetch(`http://localhost:8000/api/entradas/${id}`,
        {method: "DELETE"}
      );
      obtenerEntradas();
    } catch (error) {console.error(error);}
  };

  // EDITAR ENTRADA
  const editarEntradas = (entrada) => {
    setForm({
      entrada: entrada.entrada,
      descripcion: entrada.descripcion,
      valor: entrada.valor,
    });

    setEntradaId(entrada._id);
    setEditando(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="containerEntradas">

      {/* IMAGEN */}
      <div className="col">
        <img src={logoEntradas} alt="Logo" className="logoEntradas"/>
      </div>

      {/* FORMULARIO */}
      <div className="card">
        <form onSubmit={handleSubmit}>
          <InputField
            label="Entrada :"
            type="text"
            name="entrada"
            value={form.entrada}
            onChange={handleChange}
            placeholder="Ingrese nombre entrada"
          />
          <InputField
            label="Descripcion :"
            type="text"
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            placeholder="Descripcion corta"
          />
          <InputField
            label="Valor :"
            type="text"
            name="valor"
            value={form.valor}
            onChange={handleChange}
            placeholder="Ingrese solo números"
          />

          {/* BOTON */}
          <Button
            type="submit"
            text={
              editando
                ? "Actualizar Entrada"
                : "Registrar Entrada"
            }/>
        </form>
      </div>

      {/* LISTADO DE ENTRADAS */}
      <div className="entradas-container">
        <h3>Entradas Registradas</h3>
        {entradas.map((entrada) => (
          <div
              key={entrada._id}
              className="card-entradas"
            ><div>{entrada.entrada} : {entrada.descripcion} : {entrada.valor}</div>
            <button className="btn-editar"
                onClick={() => editarEntradas(entrada)}
                >Editar</button>
            <button className="btn-eliminar"
                onClick={() => eliminarEntradas(entrada._id)}
                >Eliminar</button>
          </div>
        ))}
      </div>  
    </div>
  );
}

export default Entradas;