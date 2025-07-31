import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import ProductList from './Components/ProductList.tsx';
import DetailProduct from './Pages/DetailProduct.tsx';
import Header from './Components/Header.tsx';
import Cart from './Components/Cart.tsx';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext.tsx';
import { ToastContainer } from 'react-toastify';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Register from './Pages/Loggedin/Register.tsx';
import ScrollToTop from './Components/ScrollToTop.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AuthProvider>
      <CartProvider>
        <ToastContainer position="top-right" autoClose={2000} />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<ProductList />} />
            </Route>
            <Route path="product/:id" element={<DetailProduct />}>
              <Route index element={<Header />} />
            </Route>
            <Route
              path="/cart"
              element={<Cart show={true} handleClose={() => {}} />}
            />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </Provider>
);
