import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

type User = {
  username: string;
  accessToken: string;
};
type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // ✅ Tải lại user từ localStorage khi reload trang
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const username = localStorage.getItem('username');
    if (accessToken && username) {
      setUser({ username, accessToken });
    }
  }, []);

  const login = async (username: string, password: string) => {
    const res = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password,
    });
    console.log(res.data.accessToken);
    const { accessToken, username: resUsername } = res.data;
    setUser({ username: resUsername, accessToken });
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('username', resUsername);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
};

export { AuthProvider, useAuth };
