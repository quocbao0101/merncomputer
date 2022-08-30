import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './swiper.css'

// import required modules
import { Pagination, Navigation } from "swiper";
import CurrencyFormat from "react-currency-format";

export default function SlideProduct( {data, category}) {
  return (
    <div className='py-5'>
      <div className='flex justify-between'>
        <div />
        <div>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 text-3xl font-bold'>{category}</span>
        </div>
        <div>
          <span className='text-red-500 text-sm font-bold 
            hover:bg-white px-5 py-2 rounded
            transition ease-in-out delay-350 duration-500'>
              Xem tất cả
          </span>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((product, index) => {
          const salePrice = product.price - (product.price * product.discount / 100);
              return (
                <SwiperSlide key={[index]} className='rounded-lg'>
                  <div className='bg-white round-lg p-4 rounded-lg card
                      transition ease-in-out delay-350 duration-500 group'>
                        <div className='flex items-center'>
                          {product.discount &&
                          (<span className='py-3 px-2 text-white font-bold bg-red-600 rounded-full mr-2 text-xs'>
                            - {product.discount} %
                            </span>)
                          }
                          {product.noti && (
                          <span className='py-3 px-2 text-white bg-black round-3xl font-bold rounded-full text-xs'>
                            {product.noti}
                          </span>)}
                          {/* <div className='flex items-end justify-end'>
                            <button className='invisible hover:visible group-hover:visible
                              transition linear delay-350 duration-1000 group
                              group-hover:translate-x-24'>
                              <AiFillHeart className='text-3xl fill-red-700 hover:fill-red-500' />
                            </button>
                          </div> */}
                        </div>
                        <div className='flex justify-center flex-col items-center text-center'>
                            <img className='w-full h-full' src={product.image} alt='12345' />
                            <span className='category text-sm'>{product.category.name}</span>
                            <span className='product-name font-semibold text-black text-xl'>{product.name}</span>
                            <div>
                              <CurrencyFormat displayType={'text'} thousandSeparator={true} suffix=' đ'
                              renderText={value => 
                              <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 
                              mr-2 text-xs text-line' >
                                {value}
                              </span>} value={product.price} />
                              <CurrencyFormat displayType={'text'} thousandSeparator={true} suffix=' đ'
                                renderText={value => 
                                <span className='text-transparent bg-clip-text 
                                bg-gradient-to-r from-red-500 to-orange-400
                                font-bold text-lg' >
                                  {value}
                                </span>} value={salePrice} />
                            </div>
                            <button className='uppercase font-bold text-white p-2
                            bg-gradient-to-r from-red-500 to-orange-400 w-full mt-2
                            text-sm rounded-md'>Thêm vào giỏ hàng</button>
                        </div>
                      </div>
            </SwiperSlide>)})}
      </Swiper>
    </div>
)}