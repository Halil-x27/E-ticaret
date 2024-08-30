import { useContext } from "react";
import CartItem from "./CartItem"
import { KartContext } from "../../Context/KartProvider";




const CartTable = () => {
  const { cartItem } = useContext(KartContext);
  return (
    <table class="shop-table">
    <thead>
        <tr>
        <th class="product-thumbnail">&nbsp;</th>
        <th class="product-thumbnail">&nbsp;</th>
        <th class="product-name">Ürün</th>
        <th class="product-price">Fiyat</th>
        <th class="product-quantity">Adet</th>
        <th class="product-subtotal">Ara Toplam</th>

        </tr>
       
    </thead>
    <tbody class="cart-wrapper">
    {cartItem.map((item) => (
      <CartItem cartItem={item} key={item._id} />
        ))}
    
    </tbody>
</table>
  )
}

export default CartTable