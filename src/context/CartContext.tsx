import { createContext, useContext, useState, } from 'react'
import type {ReactNode, } from "react"
import type { Product } from '../api/productAPI'

type CartItem = Product & {quantity :number};

type CartConTextType = {
  cartItems :CartItem[];
  addToCart : (product : Product) => void
};

const CartContext = createContext<CartConTextType | undefined >(undefined);

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}

export const CartProvider = ({ children }: { children: ReactNode })=>{
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product)=>{
      setCartItems((prev)=>{
        const found = prev.find((item)=> item.id === product.id)
        if(found){
          return prev.map((item)=>item.id === product.id ? {...item,quantity:item.quantity + 1} : item)
        }else{
          return [...prev,{...product, quantity:1}]
        }
      })
  }
  // console.log("cart items", cartItems );
  
  return(
    <CartContext.Provider value={{cartItems, addToCart}}>
        {children}
    </CartContext.Provider>
  )
}