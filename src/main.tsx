import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import ProductList from './Components/ProductList.tsx';
import DetailProduct from './Pages/DetailProduct.tsx';
import Header from './Components/Header.tsx';
import Cart from './Components/Cart.tsx';
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ProductList />} />
        </Route>
        <Route path="product/:id" element={<DetailProduct />}>
          <Route index element={<Header />} />
        </Route>
        <Route path='product/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
     </CartProvider>
  </StrictMode>
 
);
