import { useState } from "react";
import "../styles/indexcarrusel.css";

import img1 from "../assets/Entradas.jpg";
import img2 from "../assets/Salidas.jpg";
import img3 from "../assets/Pagos.jpg";
import img4 from "../assets/Calendario.jpg";

function Indexcarrusel() {
  const slides = [
    { img: img1, titulo: "Entradas:", texto: "Registro de ingresos" },
    { img: img2, titulo: "Salidas:", texto: "Registro de salidas y Control de gastos" },
    { img: img3, titulo: "Pagos Electronicos:", texto: "Gestión de pagos en línea" },
    { img: img4, titulo: "Calendario:", texto: "Organiza tus fechas de pagos" }
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
    <div className="texto-linea">
      <h2>{slides[index].titulo}</h2>
      <p>{slides[index].texto}</p>
    </div>

    <div className="layout">
      {/* IZQUIERDA */}
      <img  src={slides[prevIndex].img}  alt="prev" className="side" onClick={prevSlide}/>
      {/* CENTRO */}
      <div className="image-container">
        <img src={slides[index].img} alt="actual" className="indexcarrusel-image"/>
        <button className="btn prev" onClick={prevSlide}>❮</button>
        <button className="btn next" onClick={nextSlide}>❯</button>
      </div>
      {/* DERECHA */}
      <img  src={slides[nextIndex].img}  alt="next" className="side" onClick={nextSlide}/>
    </div>

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