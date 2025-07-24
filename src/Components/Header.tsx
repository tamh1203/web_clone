import './../styles/Header.scss';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <header>
        <div className="navbar-container">
          <p className="title-header">
            <a>JSM Headphones</a>
          </p>
          <button className="cart-icon">
            <FaShoppingCart />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
