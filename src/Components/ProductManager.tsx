import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { addProductAsync, deleteProduct } from '../redux/productSlice';

const ProductManager = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleAdd = () => {
    const newProduct = {
      title: 'Sản phẩm Redux',
      price: 990000,
      brand: 'ReduxBrand',
      thumbnail: 'https://via.placeholder.com/150',
    };
    dispatch(addProductAsync(newProduct));
  };
  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };
  return (
    <div>
      <button onClick={handleAdd}>➕ Thêm sản phẩm</button>
      <button onClick={() => handleDelete(195)}>🗑️ Xoá sản phẩm ID 1</button>
    </div>
  );
};

export default ProductManager;
