import { useState } from "react";
import "../styles/carousel.css";

import img1 from "../assets/Entradas.jpg";
import img2 from "../assets/Salidas.jpg";
import img3 from "../assets/Pagos.jpg";
import img4 from "../assets/Calendario.jpg";

function Carousel() {
  const slides = [
    { img: img1, titulo: "Modulo Entradas", texto: "Registro de ingresos" },
    { img: img2, titulo: "Modulo Salidas", texto: "Registro de salidas y Control de gastos" },
    { img: img3, titulo: "Modulo Pagos", texto: "Gestión de pagos en línea" },
    { img: img4, titulo: "Modulo Calendario", texto: "Organiza tus fechas de pagos" }
  ];
  const [index, setIndex] = useState(0);
  const prevSlide = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };
  const nextSlide = () => {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };
  return (
    <div className="carousel">
      <button className="btn prev" onClick={prevSlide}>❮</button>
        <div className="image-container">
            <h2>{slides[index].titulo}</h2>
            <img src={slides[index].img} alt="carousel" className="image" />
            <p>{slides[index].texto}</p>
        </div>
        <button className="btn next" onClick={nextSlide}>❯</button>
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

export default Carousel;