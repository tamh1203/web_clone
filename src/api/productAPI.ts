import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductListResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

const productAPI = {
  getAll: async (): Promise<Product[]> => {
    const res = await axios.get<ProductListResponse>(`${BASE_URL}/products`);
    return res.data.products;
  },

  getById: async (id: number): Promise<Product> => {
    const res = await axios.get<Product>(`${BASE_URL}/products/${id}`);
    return res.data;
  },
  getPaginated: async (limit = 10, skip = 0): Promise<ProductListResponse> => {
    const res = await axios.get<ProductListResponse>(
      `${BASE_URL}/products?limit=${limit}&skip=${skip}`
    );
    return res.data;
  },
};

export { productAPI };
