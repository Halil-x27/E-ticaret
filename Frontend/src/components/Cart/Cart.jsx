import { useContext } from "react";
import "./Cart.css"
import CartHesap from "./CartHesap"
import CartKupon from "./CartKupon"
import CartProgress from "./CartProgress"
import CartTable from "./CartTable"
import { KartContext } from "../../Context/KartProvider";

const Cart = () => {
    const { cartItem,} = useContext(KartContext);
   
  return (
    <section className="cart-page">
    <div className="container">
        {cartItem.length > 0 ?
        <div className="cart-page-wrapper">
        <form className="cart-form">
        <CartProgress/> 
            <div className="shop-table-wrapper">
                <CartTable/>
                <CartKupon/>
            </div>
        </form>
        <div className="cart-collaterals">
           <CartHesap/>
        </div>
    </div> : <h2>Sepette Ürün Yoktur!</h2> }
        
    </div>
</section>
  )
}

export default Cart