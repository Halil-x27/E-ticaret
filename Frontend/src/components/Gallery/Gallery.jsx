import { useState } from "react";
import Slider from "react-slick";
import propTypes from "prop-types";
import "./Gallery.css";
import { useEffect } from "react";

function PrevBtn({ onClick }) {
    return (
      <button
        class="glide__arrow glide__arrow--left"
        data-glide-dir="<"
        onClick={onClick}
        style={{
          zIndex: "2"
        }}
      >
        <i class="bi bi-chevron-left"></i>
      </button>
    );
  }
  
  PrevBtn.propTypes = {
    onClick: propTypes.func,
  };
  
function NextBtn({ onClick }) {
  return (
    <button
      class="glide__arrow glide__arrow--right"
      data-glide-dir=">"
      onClick={onClick}
      style={{
        zIndex: "2"
      }}
    >
      <i class="bi bi-chevron-right"></i>
    </button>
  );
}

NextBtn.propTypes = {
  onClick: propTypes.func,
};


const Gallery = ({ singleProduct }) => {
  const [activeImg, setActiveImg] = useState(
    {
      img: "",
      imgIndex: 0
    });

    useEffect(() => {
      setActiveImg({ img: singleProduct.img[0], imgIndex: 0 });
    }, [singleProduct.img]);

  const sliderSettings = {
    dots: false,
    Infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    
  };

  return (
    <div class="product-gallery">
      <div class="single-image-wrapper">
      <img src={`${activeImg.img}`} id="single-image" alt="" />
      </div>
      <div class="product-thumb">
        <div class="glide__track" data-glide-el="track">
          <ol class="gallery-thumbs glide__slides">
            <Slider {...sliderSettings}>
              {singleProduct.img.map((itemImg, index) => (
                <li
                  class="glide__slide glide__slide--active"
                  key={index}
                  onClick={() => setActiveImg({
                    img: itemImg,
                    imgIndex: index
                  })}
                >
                  <img
                   src={`${itemImg}`}
                    alt=""
                    className={`img-fluid ${
                      activeImg.imgIndex === index ? "active" : ""
                    }`}
                  />
                </li>
              ))}
            </Slider>
          </ol>
        </div>
        <div class="glide__arrows" data-glide-el="controls"></div>
      </div>
    </div>
  );
};

export default Gallery;
Gallery.propTypes = {
  singleProduct: propTypes.object,
};
