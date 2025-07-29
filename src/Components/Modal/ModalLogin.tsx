import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import type { FormEvent } from 'react';
import Swal from 'sweetalert2';
import '../../styles/Login.scss';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBSpinner,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';

type ShowModal = {
  show: boolean;
  handleClose: () => void;
};

const ModalLogin: React.FC<ShowModal> = ({ show, handleClose }) => {
  const { login } = useAuth();
  // const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(username, password);
      setLoading(true);
      setTimeout(() => {
        Swal.fire({
          icon: 'success', // 'success' | 'error' | 'warning' | 'info' | 'question'
          title: 'Đăng nhập thành công!',
          text: `Chào bạn`,
        });
        handleClose();
      }, 2000);
    } catch (err) {
      console.error(err);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Swal.fire({
          icon: 'error', // 'success' | 'error' | 'warning' | 'info' | 'question'
          title: 'Sai tài khoản hoặc mật khẩu',
          text: 'Đăng nhập không thành công',
        });
      }, 2000);
    } finally {
      console.log('API call attempt finished.');
      // Perform any necessary cleanup, like closing a connection or resetting UI elements
    }
  };
  return (
    <>
      <MDBModal open={show} tabIndex="-1" onClose={() => handleClose()}>
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className="text-primary ">Đăng Nhập</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={handleClose}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div>
                {loading === true ? (
                  <div className="text-center">
                    <MDBBtn disabled>
                      <MDBSpinner
                        size="sm"
                        role="status"
                        tag="span"
                        className="me-2"
                      />
                      Loading...
                    </MDBBtn>
                  </div>
                ) : (
                  ''
                )}
                <form className="form-submit" onSubmit={handleLogin}>
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
                        <MDBInput
                          wrapperClass="mb-4"
                          label="User Name"
                          placeholder="emilys"
                          id="formControlLgEmail"
                          type="text"
                          size="lg"
                          value={username}
                          onChange={(event) => setUsername(event.target.value)}
                          required
                        />
                        <MDBInput
                          wrapperClass="mb-4"
                          id="formControlLgPassword"
                          label="Password"
                          type="password"
                          size="lg"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          required
                        />

                        <div className="d-flex justify-content-between mx-4 mb-4">
                          <MDBCheckbox
                            name="rememberMe"
                            id="rememberMe"
                            label="Remember me"
                          />
                          <a href="#!">Forgot password?</a>
                        </div>
                        <MDBBtn
                          className="mb-4 w-100"
                          size="lg"
                          type="submit"
                          color="info"
                        >
                          Sign in
                        </MDBBtn>
                        <div className="text-center">
                          <p>
                            Not a member? <a href="#!">Register</a>
                          </p>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </form>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default ModalLogin;
