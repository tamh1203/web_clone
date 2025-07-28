import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBModalTitle,
  MDBContainer,
} from 'mdb-react-ui-kit';

const Register = () => {
  return (
    <div>
      <form>
        <MDBContainer className="my-5">
          <MDBRow>
            <MDBCol col="10" md="6">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
                className="img-fluid"
                alt="Phone"
              />
            </MDBCol>
            <MDBCol col="4" md="6">
              <MDBModalTitle className="text-primary ">Đăng Ký</MDBModalTitle>
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
              <MDBInput
                className="mb-4"
                type="password"
                id="form3Example4"
                label="Comfirm Password"
              />

              <MDBCheckbox
                wrapperClass="d-flex justify-content-center mb-4"
                id="form3Example5"
                label="Subscribe to our newsletter"
                defaultChecked
              />

              <MDBBtn type="submit" className="mb-4" block>
                Sign Up
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
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </div>
  );
};

export default Register;
