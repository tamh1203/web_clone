import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Product } from '../api/productAPI';
import { productAPI } from '../api/productAPI';
import { Outlet } from 'react-router-dom';
import './../styles/DetailProduct.scss';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import Swal from 'sweetalert2';
import Cart from '../Components/Cart';
import ProductSlider from '../Components/ProductSlider';
import Footer from '../Components/Footer';

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (id) {
      productAPI.getById(Number(id)).then((res) => setProduct(res));
    }
  }, [id]);

  useEffect(() => {
    productAPI.getAll().then(setProducts).catch(console.error);
  }, []);

  console.log(products);
  const handleAddToCart = () => {
    if (!user) {
      Swal.fire({
        icon: 'question', // 'success' | 'error' | 'warning' | 'info' | 'question'
        title: 'Please login to add products!',
        text: 'Bạn có muốn tạo tài khoản ?',
      });
      return;
    }
    if (product) {
      addToCart(product);
      Swal.fire({
        icon: 'success', // 'success' | 'error' | 'warning' | 'info' | 'question'
        title: 'Add to Products!',
        text: 'Đã thêm sản phẩn vào giỏ hàng!',
      });
    }
  };
  const handleBuyNow = () => {
    if (!user) {
      Swal.fire({
        icon: 'warning', // 'success' | 'error' | 'warning' | 'info' | 'question'
        title: 'Please login to buy products!',
        text: 'Bạn có muốn đăng nhập ?',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Có',
        cancelButtonColor: '#3085d6',
        cancelButtonText: 'Không',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
        if (result.isDismissed) {
          navigate('/');
        }
      });
      return;
    }
    if (product) {
      addToCart(product);
      setShowModal(true);
    }
  };
  // console.log('product', product);
  return (
    <>
      <Outlet />
      <Cart show={showModal} handleClose={() => setShowModal(false)} />
      <div className="detail-product">
        <img src={product?.thumbnail} alt={product?.title} />
        <div className="description">
          <h2>{product?.title}</h2>
          <p className="title-info">
            Rating:
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </span>
          </p>
          <p className="title-info">
            Price: <span>{product?.price}$</span>
          </p>
          <p className="title-info">
            Brand: <span>{product?.brand}</span>
          </p>
          <p className="title-info">
            Category: <span>{product?.category}</span>
          </p>
          <p className="quantity-desc title-info">Quatily: 1</p>
          <div className="button-add-buy">
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart()}
            >
              Add to Cart
            </button>
            <button className=" btn btn-danger" onClick={() => handleBuyNow()}>
              Buy now
            </button>
          </div>
        </div>
      </div>
      <ProductSlider products={products} />
      <Footer />
    </>
  );
};

export default DetailProduct;
