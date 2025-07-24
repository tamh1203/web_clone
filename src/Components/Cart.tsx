import { useCart } from '../context/CartContext';

const Cart = ()=>{
const {cartItems} = useCart();

console.log("cart items", cartItems);

  return(
    <div>
      {/* {cartItems & cartItems.map((item,index)=>{
        return(<div>
            <p>{item.detail}</p>
        </div>)
      })} */}
    </div>
  )
}

export default Cart;