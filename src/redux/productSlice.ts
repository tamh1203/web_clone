import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// 1. Kiểu dữ liệu sản phẩm
export type Product = {
  id: number;
  title: string;
  price: number;
  brand?: string;
  thumbnail?: string;
};
// 2. Kiểu state
type ProductState = {
  items: Product[];
  loading: boolean;
  error: string | null;
};
// giá trị ban đầu
const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};
// ✅ 1. Hàm async thêm sản phẩm

export const addProductAsync = createAsyncThunk(
  'product/addProductAsync',
  async (productData: Product) => {
    const res = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      body: JSON.stringify(productData),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    return data as Product;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addProductAsync.rejected, (state, action) => {
        state.error = action.error.message || 'Error adding product';
        state.loading = false;
      });
  },
});

export const { deleteProduct } = productSlice.actions;
export default productSlice.reducer;
