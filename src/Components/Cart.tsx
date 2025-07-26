import { useCart } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import './../styles/Cart.scss';
import { FaStar, FaRegStar, FaMinus, FaPlus } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

type MyModalProps = {
  show: boolean;
  handleClose: () => void;
};

const Cart = ({ show, handleClose }: MyModalProps) => {
  const { cartItems, addToCart, decreaseQuantity, getTotalPrice } = useCart();

  const navigate = useNavigate();
  // console.log('cart items', cartItems);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Your Cart
          <span className="header-item"> ({cartItems.length} Item)</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <span style={{ fontSize: '130px' }}>
              <IoMdCart />
            </span>
            <h3>Your shopping bag is empty</h3>
            <button
              onClick={() => {
                navigate('/');
                handleClose();
              }}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <div>
            {cartItems?.map((item) => {
              return (
                <>
                  <div className="cart-container">
                    <div className="detail" key={item.id}>
                      <img src={item.thumbnail} alt="" />
                      <div className="description">
                        <p className="title-info">
                          Brand: <span>{item.brand}</span>
                        </p>
                        <p className="title-info">
                          Price: <span>{item.price}</span>
                        </p>
                        <p className="title-info">
                          Rating:
                          <span>
                            {item.rating}
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                          </span>
                        </p>
                        <p className="quantity">
                          <span
                            className="minus"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            <FaMinus />
                          </span>
                          <span className="number">{item.quantity}</span>
                          <span
                            className="plus"
                            onClick={() => addToCart(item)}
                          >
                            <FaPlus />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <div>
          Total Payment:{' '}
          <span className="total-payment">${getTotalPrice().toFixed(2)}</span>
        </div>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
