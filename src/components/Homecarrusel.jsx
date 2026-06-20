import { useState } from "react";
import "../styles/homecarrusel.css";

import img0 from "../assets/Mix.jpg";
import img1 from "../assets/Entradas.jpg";
import img2 from "../assets/Salidas.jpg";
import img3 from "../assets/Pagos.jpg";
import img4 from "../assets/Calendario.jpg";
import img5 from "../assets/Admin.jpg";
import img6 from "../assets/Admin.jpg";

function Homecarrusel() {
  const slides = [
    { img: img0, titulo: "Bienvenido a tu Asistente Financiero Personal", texto: "Tu herramienta para gestionar tus finanzas de manera fácil y eficiente. Con nuestro asistente financiero, podrás llevar un control detallado de tus ingresos, gastos y pagos en linea, todo en un solo lugar." },
    { img: img1, titulo: "Entradas", texto: "El usuario asigna valores a las distintas variables creadas, se realiza operaciones como sumatorias, promedios e historial de ingresos totales o discriminados por cada usuario configurado. \nAdicionalmente el usuario podrá almacenar comprobantes de ingresos." },
    { img: img2, titulo: "Salidas", texto: "El usuario asigna valores a las distintas variables creadas, se realiza operaciones como sumatorias, promedios e historial de pagos totales o discriminados por cada usuario configurado. \nAdicionalmente el usuario podrá almacenar comprobantes de pagos." },
    { img: img3, titulo: "Pagos", texto: "Modulo ideado para que el usuario tenga una herramienta donde pueda encontrar links y accesos directos de las páginas web y banca virtual, donde puedan realizar el pago de las distintas obligaciones." },
    { img: img4, titulo: "Calendario", texto: "Modulo asignado para la configuración de alertas para próximos pagos de servicios mensuales o eventuales." },
    { img: img5, titulo: "Registro de Usuarios", texto: "Modulo de control para usuarios ADMINISTRADORES. \nEn esta modulo se registran los usuarios que tendran acceso a la aplicacion, se registra sus datos basicos y perfil de acceso." },
    { img: img6, titulo: "Bases de Datos", texto: "Modulo de control para usuarios ADMINISTRADORES. \nRealiza consultas y descargas de bases de datos individuales y generales."}
  ];
  const [index, setIndex] = useState(0);
  const prevSlide = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };
  const nextSlide = () => {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };
  return (
    <><p /><div className="homecarrusel">  

        {/* CONTENIDO EN COLUMNAS */}
        <div className="slide-content">

          {/* TEXTO */}
          <div className="col text-col">
            <h2>{slides[index].titulo}</h2>
            <p>{slides[index].texto}</p>
          </div>

          {/* IMAGEN */}
          <div className="col image-col">
            <img src={slides[index].img} alt="carrusel" className="homecarrusel-image" />
          </div>
        </div>
          <button className="btn prev" onClick={prevSlide}>❮</button>
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
    </div></>
  );
}

export default Homecarrusel;