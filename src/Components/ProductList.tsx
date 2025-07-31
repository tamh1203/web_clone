import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productAPI } from '../api/productAPI';
import type { Product } from '../api/productAPI';
import './../styles/ProductList.scss';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const limit = 10;
  const navigate = useNavigate();
  const { items } = useSelector((state: RootState) => state.products);

  console.log('items useSelector', items);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const skip = (page - 1) * limit;
        const res = await productAPI.getPaginated(limit, skip);
        setProducts(res.products);
        setTotal(res.total);
      } catch (error) {
        console.error('lỗi api', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);
  // phân trang
  const totalPages = Math.ceil(total / limit);
  const maxPageToShow = 4;
  let startPage = Math.max(1, page - Math.floor(maxPageToShow / 2));
  let endPage = startPage + maxPageToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxPageToShow + 1);
  }

  // useEffect(() => {
  //   productAPI.getAll().then(setProducts).catch(console.error);
  // }, []);
  // console.log(products);
  const productsNew = [...items, ...products];
  console.log('productsNew', productsNew);

  return (
    <>
      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Speakers of many variations</p>
        {loading ? (
          <p>Đang tải sản phẩm</p>
        ) : (
          <div className="product-container ">
            {productsNew &&
              productsNew.map((item) => {
                return (
                  <div
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="product"
                    key={item.id}
                  >
                    <div className="product-card ">
                      <img src={item.thumbnail} alt={item.title} />
                      <p className=" product-name">{item.title}</p>
                      <p className="product-price">{item.price}$</p>
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        <div style={{ marginTop: '20px' }}>
          {/* Nút "Trang trước" */}
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            «
          </button>

          {/* Danh sách nút trang */}
          {Array.from({ length: endPage - startPage + 1 }).map((_, i) => {
            const pageNumber = startPage + i;
            return (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                style={{
                  margin: '0 4px',
                  backgroundColor: page === pageNumber ? '#333' : '#eee',
                  color: page === pageNumber ? '#fff' : '#000',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  border: 'none',
                }}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* Nút "Trang sau" */}
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
