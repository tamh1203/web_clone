import './../styles/Header.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Cart from './Cart';
import ModalRegister from './Modal/ModalRegister';

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { logout, user } = useAuth();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalRegister, setShowModalRegister] = useState<boolean>(false);
  // console.log(cartItems);
  const handleLogOut = () => {
    logout();
    Swal.fire({
      icon: 'success', // 'success' | 'error' | 'warning' | 'info' | 'question'
      title: 'LogOut success!',
      text: 'Đăng Xuất thành công',
    });
  };

  return (
    <div>
      <header>
        <div className="navbar-container">
          <p className="title-header" onClick={() => navigate('/')}>
            SM Headphones
          </p>
          <div className="button-lg">
            {user ? (
              <button
                className="btn btn-secondary"
                onClick={() => handleLogOut()}
              >
                LogOut
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => navigate('/login')}
              >
                LogIn
              </button>
            )}
            <button
              className="btn btn-danger"
              onClick={() => setShowModalRegister(true)}
            >
              Register
            </button>
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
        </div>
        <Cart show={showModal} handleClose={() => setShowModal(false)} />
        <ModalRegister
          show={showModalRegister}
          handleClose={() => setShowModalRegister(false)}
        />
      </header>
    </div>
  );
};

export default Header;
