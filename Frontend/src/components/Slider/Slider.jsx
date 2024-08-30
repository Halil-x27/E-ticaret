import { useState } from "react"
import "./Slider.css"
import Slider_Item from "./Slider_Item"
const Slider = () =>{
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  return (
    <section class="slider">
    <div class="slider-elements">
    {currentSlide === 0 && <Slider_Item imageSrc="img/slider/slider1.jpeg" />}
    {currentSlide === 1 && <Slider_Item imageSrc="img/slider/slider2.jpeg" />}
    {currentSlide === 2 && <Slider_Item imageSrc="img/slider/slider3.jpeg" />}
      <div class="slider-buttons">
        <button onClick ={prevSlide}>
          <i class="bi bi-chevron-left"></i>
        </button>
        <button onClick={nextSlide}>
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
      <div class="slider-dots">
        <button
        className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}
        onClick={() => setCurrentSlide(0)}
        >
          <span></span>
        </button>
        <button
        className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}
        onClick={() => setCurrentSlide(1)}
        >
          <span></span>
        </button>
        <button
        className={`slider-dot ${currentSlide === 2 ? "active" : ""}`}
        onClick={() => setCurrentSlide(2)}>
          <span></span>
        </button>
      </div>
    </div>
  </section>
  )
}

export default Slider