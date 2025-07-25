import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';
import "../styles/ProductSlider.scss"; 

type Product = {
  id: string;
  brand: string;
  price: number;
  thumbnail: string;
};

type Props = {
  products: Product[];
};

const ProductSlider: React.FC<Props> = ({ products }) => {
  return (
    <>
      <div className='header-slider'>
        <h1>You may also like</h1>
      </div>
    <Swiper
      modules={[Navigation, Pagination,Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      spaceBetween={10}
      slidesPerView={6}
      loop={true}
      // navigation
      // pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
      }}
    >      
       {products.map(product => (
        <SwiperSlide key={product.id}>
          <div className="product-card">
            <img src={product.thumbnail} alt={product.brand} />
            <h4>{product.brand}</h4>
            <p>{product.price}$</p>
          </div>
        </SwiperSlide>
      ))}     
    </Swiper>
        </>
  );
};

export default ProductSlider;
