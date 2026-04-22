import { useState } from "react";
import "../carousel.css";

import img1 from "../assets/Mix.jpg";
import img2 from "../assets/Mix.jpg";
import img3 from "../assets/Mix.jpg";

function Carousel() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="carousel">
      
      <button className="btn prev" onClick={prevSlide}>❮</button>

      <img src={images[index]} alt="carousel" className="image" />

      <button className="btn next" onClick={nextSlide}>❯</button>

      <div className="dots">
        {images.map((_, i) => (
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