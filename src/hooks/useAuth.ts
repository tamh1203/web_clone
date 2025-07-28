import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // sửa lại path nếu cần
// import type { AuthContextType } from '../context/AuthContext'; // nếu bạn có type riêng

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
};
