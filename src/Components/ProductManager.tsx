import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { addProductAsync } from '../redux/productSlice';
import {
  MDBInput,
  MDBModalTitle,
  MDBBtn,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

const ProductManager = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const [image, setImage] = useState<File>();

  const handleAdd = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newProduct = {
      id: Math.floor(Math.random() * 10),
      title: 'Sản phẩm Redux',
      price: 990000,
      brand: 'ReduxBrand',
      thumbnail: ``,
    };
    dispatch(addProductAsync(newProduct));
  };
  const handleUploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files && event.target.files[0])
      setImage(event.target.files[0]);
  };
  return (
    <div>
      <form onClick={handleAdd}>
        <MDBModalTitle className="text-primary mb-4 text-center">
          Thêm Sản Phẩm
        </MDBModalTitle>
        <MDBInput
          className="mb-4"
          type="text"
          label="Title Product"
          value={title}
          onChange={(event) => setTitle(event?.target.value)}
        />
        <MDBInput
          className="mb-4"
          type="text"
          label="Brand Product"
          value={brand}
          onChange={(event) => setBrand(event?.target.value)}
        />
        <MDBInput
          className="mb-4"
          type="text"
          label="Price Product"
          value={price}
          onChange={(event) => setPrice(Number(event?.target.value))}
        />
        <MDBInput
          className="mb-4"
          type="file"
          accept="image/*"
          onChange={(event) => handleUploadImage(event)}
        />

        <MDBBtn type="submit" className="mb-4">
          Create a Product
        </MDBBtn>
      </form>
    </div>
  );
};

export default ProductManager;
