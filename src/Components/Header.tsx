import './../styles/Header.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Cart from './Cart';
import ModalLogin from './Modal/ModalLogin';
import UserProfile from './UserProfile';
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
                onClick={() => setShowModalRegister(true)}
              >
                LogIn
              </button>
            )}
            <button
              className="btn btn-danger"
              onClick={() => navigate('/register')}
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
        <ModalLogin
          show={showModalRegister}
          handleClose={() => setShowModalRegister(false)}
        />
        <UserProfile />
      </header>
    </div>
  );
};

export default Header;
