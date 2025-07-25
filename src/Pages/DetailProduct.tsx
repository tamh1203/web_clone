import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Product } from '../api/productAPI';
import { productAPI } from '../api/productAPI';
import { Outlet } from 'react-router-dom';
import './../styles/DetailProduct.scss';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import Cart from '../Components/Cart';
import ProductSlider from '../Components/ProductSlider';



const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product|null>([null]);
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [products,setProducts] = useState<Product[]>([]);
  useEffect(() => {
    if (id) {
      productAPI.getById(Number(id)).then((res) => setProduct(res));
    }
  }, [id]);

useEffect(()=>{
  productAPI.getAll().then(setProducts).catch(console.error)
},[])

console.log( products);
  const handleAddCart = () => {
    if (product) {
      addToCart(product);
      toast.success('Add cart success!', {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
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
            <button className="add-cart" onClick={() => handleAddCart()}>
              Add to Cart
            </button>
            <button onClick={() =>{
                          addToCart(product);
                          setShowModal(true);
                     }}>Buy now</button>
          </div>
        </div>
      </div>
      <ProductSlider products={products}/>
    </>
  );
};

export default DetailProduct;
