import { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { KartContext } from "../../Context/KartProvider";
import { Spin, message } from "antd";
const CartHesap = () => {
    const [fastCargoChecked, setFastCargoChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const { cartItem } = useContext(KartContext);
    const stripePublicKey = import.meta.env.VITE_API_STRIPE_PUBLIC_KEY;
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;

    const cartItemTotals = cartItem.map((item) => {
        const itemTotal = item.price * item.quantity;
    
        return itemTotal;
      });
    
      const subTotals = cartItemTotals.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
      }, 0);
    
      const cargoFee = 15;
    
      const cartTotals = fastCargoChecked
        ? (subTotals + cargoFee).toFixed(2)
        : subTotals.toFixed(2);

        const handlePayment = async () => {
            setLoading(true);
            if (!user) {
              return message.info("Ödeme yapabilmek için giriş yapmalısınız!");
            }
        
            const body = {
              products: cartItem,
              user: user,
              cargoFee: fastCargoChecked ? cargoFee : 0,
            };
        
            try {
              const stripe = await loadStripe(stripePublicKey);
        
              const res = await fetch(`${apiUrl}/api/payment`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              });
        
              if (!res.ok) {
                return message.error("Ödeme işlemi başarısız oldu.");
              }
        
              const session = await res.json();
        
              const result = await stripe.redirectToCheckout({
                sessionId: session.id,
              });
        
              if (result.error) {
                throw new Error(result.error.message);
              }
            } catch (error) {
              console.log(error);
            } finally {
                setLoading(false);
              }
          };
        
    
  return (
    <div className="cart-totals">
    <h2>Sepet Tutarı
    </h2>
    <table>
        <tbody>
            <tr className="cart-subtotal">
                <th>Ara Toplam</th>
                <td>
                <span id="subtotal">${subTotals.toFixed(2)}</span>
                </td>
            </tr>
            <tr>
                <th>Kargo</th>
                <td>
                    <ul>
                        <li>
                            <label>
                                Hızlı Kargo: $15.00
                                <input
                      type="checkbox"
                      id="fast-cargo"
                      checked={fastCargoChecked}
                      onChange={() => setFastCargoChecked(!fastCargoChecked)}
                    />
                            </label>
                        </li>
                        <li>
                            <a href="/address">Adres Oluştur</a>
                        </li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Toplam</th>
                <td>
                <strong id="cart-total">${cartTotals}</strong>
                </td>
            </tr>
        </tbody>
    </table>
    <div className="checkout">
    <Spin spinning={loading}>
          <button className="btn btn-lg" onClick={handlePayment}>
            Ödemeyi Tamamla
          </button>
        </Spin>
    </div>
</div>
  )
}

export default CartHesap