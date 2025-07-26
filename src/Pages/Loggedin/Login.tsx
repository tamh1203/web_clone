import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';
import Swal from 'sweetalert2';
import '../../styles/Login.scss';
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(username, password);
      Swal.fire({
        icon: 'success', // 'success' | 'error' | 'warning' | 'info' | 'question'
        title: 'Login success!',
        text: 'Đăng nhập thành công',
      });
      navigate('/');
    } catch (error) {
      Swal.fire({
        icon: 'error', // 'success' | 'error' | 'warning' | 'info' | 'question'
        title: 'Sai tài khoản hoặc mật khẩu',
        text: 'Đăng nhập không thành công',
      });
    }
  };
  return (
    <div>
      <form className="form-submit" onSubmit={handleLogin}>
        <h2>Đăng nhập</h2>
        <div>
          <label>User Name:</label>
          <div>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(event) => setUsername(event?.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label>Password :</label>
          <div>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event?.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
        <button className="btn btn-danger">Register</button>
      </form>
    </div>
  );
};

export default Login;
