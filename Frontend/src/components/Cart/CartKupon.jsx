import { message } from "antd";
import { useContext, useState } from "react";
import { KartContext } from "../../Context/KartProvider";

const CartKupon = () => {
  const [couponCode, setCouponCode] = useState("");
  const { cartItem, setCartItem } = useContext(KartContext);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const applyCoupon = async () => {
    if (couponCode.trim().length === 0) {
      return message.warning("Boş değer girilimez.");
    }
    try {
      const res = await fetch(`${apiUrl}/api/kupons/code/${couponCode}`);

      if (!res.ok) {
        return message.warning("Girdiğiniz kupon kodu yanlış!");
      }

      const data = await res.json();
      const discountPercent = data.discountPercent;

      const updatedCartItems = cartItem.map((item) => {
        const updatePrice = item.price * (1 - discountPercent / 100);
        return { ...item, price: updatePrice };
      });

      setCartItem(updatedCartItems);

      message.success(`${couponCode} kupon kodu başarıyla uygulandı.`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="actions-wrapper">
      <div className="coupon">
        <input
          type="text"
          className="input-text"
          placeholder="Coupon code"
          onChange={(e) => setCouponCode(e.target.value)}
          value={couponCode}
        />
        <button className="btn" type="button" onClick={applyCoupon}>
          Kuponu Onayla
        </button>
      </div>
      <div className="update-cart">
        <button className="btn">Sepeti Güncelle</button>
      </div>
    </div>
  );
};

export default CartKupon;
