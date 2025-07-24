import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Product } from '../api/productAPI';
import { productAPI } from '../api/productAPI';
import { Outlet } from 'react-router-dom';
import './../styles/DetailProduct.scss';
import { FaStar, FaRegStar, FaMinus, FaPlus  } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [count, setCount ] = useState<number>(1)
  const {addToCart} = useCart();
  useEffect(() => {
    if (id) {
      productAPI.getById(Number(id)).then((res) => setProduct(res));
    }
  }, [id]);
  const handleMunis = ()=>{
    if(count < 1) return
    setCount (count-1);
  }
  
  const handleAddCart = ()=>{
    addToCart(product);
    setCount(count+1)
  }
  return (
    <>
      <Outlet />
      <div className="detail-product">
        <img src={product?.thumbnail} alt={product?.title} />
        <div className="description">
          <h2>{product?.title}</h2>
          <p className='title-info'>
            Rating:
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </span>
          </p>
          <p className='title-info'>
            Price: <span>{product?.price}$</span>
          </p>
          <p className='title-info'>
            Brand: <span>{product?.brand}</span>
          </p>
          <p className='title-info'>
            Category: <span>{product?.category}</span>
          </p>
          <p className='quantity-desc title-info'>
             Quatily: 
            <span  onClick={()=>handleMunis()}><FaMinus/></span>
            <span>{count}</span>
            <span onClick={()=>handleAddCart()}><FaPlus /></span>
          </p>
          <div className="button-add-buy">
            <button className='add-cart' >Add to Cart</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
