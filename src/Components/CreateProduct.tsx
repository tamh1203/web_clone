import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { addProductAsync } from '../redux/productSlice';
import {
  MDBInput,
  MDBFile,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

const CreateProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string | undefined>(undefined);

  const onChangImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const base64 = await fileToBase64(file);
    setImage(base64); // ✅ đúng kiểu string
  };
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newProduct = {
      id: Math.floor(Math.random() * 100),
      title: title,
      price: price,
      thumbnail: image,
    };
    dispatch(addProductAsync(newProduct));
    setBasicModal(false);
  };
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <div>
      <MDBBtn onClick={toggleOpen} className="mt-4 ms-5 btn btn-danger">
        Create Product New
      </MDBBtn>
      <form action="submit" onSubmit={handleAdd}>
        <MDBModal
          open={basicModal}
          onClose={() => setBasicModal(false)}
          tabIndex="-1"
        >
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Modal title</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleOpen}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <MDBModalTitle className="mb-2"> Create Product </MDBModalTitle>
                <MDBInput
                  className="mb-2"
                  label="Title Product"
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event?.target.value)}
                />
                <label>Price Product</label>
                <MDBInput
                  className="mb-2"
                  type="text"
                  value={price}
                  onChange={(event) => setPrice(Number(event?.target.value))}
                />
                <MDBFile
                  className="mb-4"
                  label="Default file input example"
                  id="customFile"
                  onChange={(event) => onChangImage(event)}
                />
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn type="submit"> Create Product</MDBBtn>
                <MDBBtn color="secondary" onClick={toggleOpen}>
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </form>
    </div>
  );
};

export default CreateProduct;
