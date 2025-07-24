import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Product } from '../api/productAPI';
import { productAPI } from '../api/productAPI';
import Header from '../Components/Header';
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
      <Header />
      <div>
        <h2>Product Detail</h2>
        <img />
        <p></p>
        <p>Price:</p>
        <p>Brand:</p>
        <p>Category:</p>
        <p>Rating:</p>
      </div>
    </>
  );
};

export default DetailProduct;
