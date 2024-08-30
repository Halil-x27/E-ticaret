import propTypes from "prop-types";
const Slider_Item = ({imageSrc}) => {
  return (
    <div class="slider-item fade">
    <div class="slider-image">
      <img src={imageSrc}class="img-fluid" alt=""/>
    </div>
    <div class="container">
      <p class="slider-title">YAZ 2024</p>
      <h2 class="slider-heading">70%'e kadar tasarruf edin</h2>
      <a href="#" class="btn btn-lg btn-primary">Şimdi Keşfet</a>
    </div>
  </div>
  )
}

export default Slider_Item;

Slider_Item.propTypes = {
  imageSrc: propTypes.string,
};
