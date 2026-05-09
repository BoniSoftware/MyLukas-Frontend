import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/indexcarrusel.css";

import img1 from "../assets/Entradas.jpg";
import img2 from "../assets/Salidas.jpg";
import img3 from "../assets/Pagos.jpg";
import img4 from "../assets/Calendario.jpg";
import img5 from "../assets/Login2.jpg";
import img6 from "../assets/Login2.jpg";

function Indexcarrusel() {
  const navigate = useNavigate();
  const slides = [
    { img: img1, titulo: "Entradas:", texto: "Registro de ingresos", ruta: "/entradas"},
    { img: img2, titulo: "Salidas:", texto: "Registro de salidas y Control de gastos", ruta: "/salidas"},
    { img: img3, titulo: "Pagos Electronicos:", texto: "Gestión de pagos en línea", ruta: "/pagos"},
    { img: img4, titulo: "Calendario:", texto: "Organiza tus fechas de pagos", ruta: "/calendario"},
    { img: img5, titulo: "Registro de Usuarios:", texto: "Registro de usuarios autorizados para uso de la palicacion", ruta: "/registro" },
    { img: img6, titulo: "Bases de datos:", texto: "Consulta de datos ingresados en bases de datos (Entradas, Salidas, Usuarios)", ruta: "/basedatos" }
  ];
  const [index, setIndex] = useState(0);
  const prevSlide = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };
  const nextSlide = () => {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };
  const prevIndex = index === 0 ? slides.length - 1 : index - 1;
  const nextIndex = index === slides.length - 1 ? 0 : index + 1;

  return (
    <div className="indexcarrusel">
      {/* TEXTO */}
      <div className="texto-linea">
        <h2>{slides[index].titulo}</h2>
        <p>{slides[index].texto}</p>
      </div>
      {/* CARRUSEL */}
      <div className="layout">
        {/* IZQUIERDA */}
        <img
          src={slides[prevIndex].img}  alt="prev" className="side"
        />
        {/* CENTRO */}
        <div className="image-container">
          <img
            src={slides[index].img}
            alt="actual"
            className="indexcarrusel-image"
            onClick={() => navigate(slides[index].ruta)}
          />
          <button className="btn prev" onClick={prevSlide}> ❮ </button>
          <button className="btn next" onClick={nextSlide}> ❯ </button>
        </div>
        {/* DERECHA */}
        <img
          src={slides[nextIndex].img}  alt="next" className="side"
        />
      </div>
      {/* DOTS */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Indexcarrusel;