import './../styles/Header.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Cart from './Cart';
import ModalLogin from './Modal/ModalLogin';
import axios from 'axios';

type UserProfile = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};
const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { logout, user } = useAuth();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalLogin, setShowModalLogin] = useState<boolean>(false);
  const [profile, setProfile] = useState<UserProfile>();

  // console.log(cartItems);
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;
    axios
      .get('https://dummyjson.com/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.error('Lỗi lấy thông tin user:', err);
      });
  }, []);
  console.log('profile', profile);

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
                onClick={() => setShowModalLogin(true)}
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
          show={showModalLogin}
          handleClose={() => setShowModalLogin(false)}
        />
      </header>
    </div>
  );
};

export default Header;
