import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Product } from '../api/productAPI';
import { productAPI } from '../api/productAPI';
import { Outlet } from 'react-router-dom';
import './../styles/DetailProduct.scss';
import { FaStar, FaRegStar } from 'react-icons/fa';

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      productAPI.getById(Number(id)).then((res) => setProduct(res));
    }
  }, [id]);

  return (
    <>
      <Outlet />
      <div className="detail-product">
        <img src={product?.thumbnail} alt={product?.title} />
        <div className="description">
          <h2>{product?.title}</h2>
          <p>
            Rating:
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </span>
          </p>
          <p>
            Price: <span>{product?.price}$</span>
          </p>
          <p>
            Brand: <span>{product?.brand}</span>
          </p>
          <p>
            Category: <span>{product?.category}</span>
          </p>
          <div className="button-add-buy">
            <button className='add-cart'>Add to Cart</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
