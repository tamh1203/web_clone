import './../styles/Header.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
      <header>
        <div className="navbar-container">
          <p className="title-header" onClick={()=>navigate('/')}>
            SM Headphones
          </p>
          <button onClick={()=>navigate('product/cart')} className="cart-icon">
            <FaShoppingCart />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
