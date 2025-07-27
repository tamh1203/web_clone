import React, { useState } from 'react';

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';

const ModalLoginMDB = () => {
  const [optSmModal, setOptSmModal] = useState(false);

  const toggleOpen = () => setOptSmModal(!optSmModal);

  return (
    <>
      <MDBBtn onClick={toggleOpen}>Small modal</MDBBtn>
      <MDBModal
        open={optSmModal}
        tabIndex="-1"
        onClose={() => setOptSmModal(false)}
      >
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Small modal</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>...</MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default ModalLoginMDB;
