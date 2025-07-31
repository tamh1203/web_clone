import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; // import slice vừa tạo

export const store = configureStore({
  reducer: {
    products: productReducer, // đặt tên "products" cho slice
  },
});

// 2 kiểu type để dùng toàn app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
