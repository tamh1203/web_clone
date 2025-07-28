import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 👈 Cuộn lên đầu trang mỗi lần route thay đổi
  }, [pathname]);

  return null; // Component không render gì cả
};

export default ScrollToTop;
