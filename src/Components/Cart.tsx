import { useCart } from '../hooks/useCart';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import './../styles/Cart.scss';
import { FaStar, FaRegStar, FaMinus, FaPlus } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
type MyModalProps = {
  show: boolean;
  handleClose: () => void;
};

const Cart = ({ show, handleClose }: MyModalProps) => {
  const { cartItems, addToCart, decreaseQuantity, getTotalPrice } = useCart();

  const navigate = useNavigate();
  // console.log('cart items', cartItems);
  const hanldePayment = () => {
    Swal.fire({
      icon: 'success', // 'success' | 'error' | 'warning' | 'info' | 'question'
      title: 'Payment success!',
      text: 'Đã thanh toán thành công !',
    });
    navigate('/');
  };

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
            {cartItems?.map((item, index) => {
              return (
                <>
                  <div className="cart-container" key={index}>
                    <div className="detail">
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
        <div className="fw-bold">
          Total Payment:
          <span className="total-payment"> ${getTotalPrice().toFixed(2)}</span>
        </div>
        <div>
          <Button variant="primary" onClick={hanldePayment}>
            Thanh toán
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
