import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../api/productAPI';

type CartItem = Product & { quantity: number };

type CartConTextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  decreaseQuantity: (productId: number) => void;
  getTotalPrice: () => number;
};

const CartContext = createContext<CartConTextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // thêm sản phẩm
  const addToCart = (product: Product) => {
    // prev là giá trị hiện tại của mảng
    setCartItems((prev) => {
      // Kiểm tra xem sản phẩm này đã có trong giỏ hàng chưa (dựa vào id).
      const found = prev.find((item) => item.id === product.id);
      // nếu có (found)
      if (found) {
        // copy lại mảng, quantity + 1
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        //nếu chưa thì thêm sản phần
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };
  //giảm số lượng sản phẩm
  const decreaseQuantity = (productId: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // 👉 xoá nếu quantity = 0
    });
  };
  // tính tổng tiền sản phẩm
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  // console.log('cart items', cartItems);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, decreaseQuantity, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
