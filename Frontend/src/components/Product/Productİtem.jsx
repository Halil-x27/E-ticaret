import PropTypes from "prop-types";
import { useContext } from "react";
import { KartContext } from "../../Context/KartProvider";
import { Link } from "react-router-dom";

const Productİtem = ({ productItem }) => {
  const { cartItem, addToCart } = useContext(KartContext);
  const filteredCart = cartItem.find(
    (cartItem) => cartItem._id === productItem._id
  );

  const originalPrice = productItem.price.current;
  const discountPercentage = productItem.price.discount;

  // İndirimli fiyatı hesaplama
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;

  return (
    <div class="product-item glide__slide glide__slide--active">
      <div class="product-image">
        <a href="#">
        <img src={productItem.img[0]} alt="" className="img1" />
        <img src={productItem.img[1]} alt="" className="img2" />
        </a>
      </div>
      <div class="product-info">
        <a href="$" class="product-title">
        {productItem.name}
        </a>
        <ul class="product-star">
          <li>
            <i class="bi bi-star-fill"></i>
          </li>
          <li>
            <i class="bi bi-star-fill"></i>
          </li>
          <li>
            <i class="bi bi-star-fill"></i>
          </li>
          <li>
            <i class="bi bi-star-fill"></i>
          </li>
          <li>
            <i class="bi bi-star-half"></i>
          </li>
        </ul>
        <div class="product-prices">
        <strong className="new-price">${discountedPrice.toFixed(2)}</strong>
        <span className="old-price">${originalPrice.toFixed(2)}</span>
        </div>
        <span className="product-discount">-{productItem.price.discount}%</span>
        <div class="product-links">
          <button className="add-to-cart"   onClick={() =>
              addToCart({
                ...productItem,
                price: discountedPrice,
              })
            } disabled={filteredCart}>
            <i class="bi bi-basket-fill"></i>
          </button>
          <button>
            <i class="bi bi-heart-fill"></i>
          </button>
          <Link to={`product/${productItem._id}`} className="product-link">
            <i class="bi bi-eye-fill"></i>
          </Link>
          <a href="#">
            <i class="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Productİtem;
Productİtem.propTypes = {
  productItem: PropTypes.object,
  setCartItem: PropTypes.func,
};
