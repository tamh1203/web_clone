import React from 'react';

import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';

type ShowModal = {
  show: boolean;
  handleClose: () => void;
};
const ModalRegister: React.FC<ShowModal> = ({ show, handleClose }) => {
  return (
    <>
      <MDBModal open={show} tabIndex="-1" onClose={() => handleClose()}>
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className="text-primary ">Register</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={handleClose}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput id="form3Example1" label="First name" />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput id="form3Example2" label="Last name" />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  className="mb-4"
                  type="email"
                  id="form3Example3"
                  label="Email address"
                />
                <MDBInput
                  className="mb-4"
                  type="password"
                  id="form3Example4"
                  label="Password"
                />

                <MDBCheckbox
                  wrapperClass="d-flex justify-content-center mb-4"
                  id="form3Example5"
                  label="Subscribe to our newsletter"
                  defaultChecked
                />

                <MDBBtn type="submit" className="mb-4" block>
                  Sign in
                </MDBBtn>

                <div className="text-center">
                  <p>
                    Not a member? <a href="#!">Register</a>
                  </p>
                  <p>or sign up with:</p>

                  <MDBBtn floating color="secondary" className="mx-1">
                    <MDBIcon fab icon="facebook-f" />
                  </MDBBtn>

                  <MDBBtn floating color="secondary" className="mx-1">
                    <MDBIcon fab icon="google" />
                  </MDBBtn>

                  <MDBBtn floating color="secondary" className="mx-1">
                    <MDBIcon fab icon="twitter" />
                  </MDBBtn>
                  <MDBBtn floating color="secondary" className="mx-1">
                    <MDBIcon fab icon="github" />
                  </MDBBtn>
                </div>
              </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default ModalRegister;
