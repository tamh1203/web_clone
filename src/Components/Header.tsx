import './../styles/Header.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import Cart from './Cart';
const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [showModal, setShowModal] = useState<boolean>(false);
  // console.log(cartItems);
  return (
    <div>
      <header>
        <div className="navbar-container">
          <p className="title-header" onClick={() => navigate('/')}>
            SM Headphones
          </p>
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="cart-icon"
          >
            <FaShoppingCart />
            <span className="cart-length">{cartItems.length}</span>
          </button>
        </div>
        <Cart show={showModal} handleClose={() => setShowModal(false)} />
      </header>
    </div>
  );
};

export default Header;
