import React from 'react';
import './style.css';
import { ads, data, keyboard } from './data';
import { bannerData1, bannerData2, fadeImages, saleData } from './slider';
import { products } from './product';
import Slider from '../../components/Slider';
import Products from '../../components/Products';
import Sale from './Sale';
import SlideProduct from '../../components/Swiper';
import Card from '../../components/Card';
import { card } from './card';

function Home() {
  const product = products.sort((a, b) => a.price - b.price);
  const pros = product.slice(0,8);
  return (
    <div className='background pb-10'>
        <div className='container mx-auto lg:p-0 md:p-0 p-4'>
          <div className='container'>
            <div className='grid grid-cols-4 gap-2 py-5'>
              <div className='flex bg-sky-200 cards rounded-md text-xs font-medium'>
                <ul className='w-full'>
                  {data.map((cate, index) => 
                  (<li key={[index]} className='p-3 w-full 
                  hover:bg-gradient-to-r from-red-500 to-orange-400 
                  hover:text-white font-bold text-sm text-black duration-300
                  '> 
                    <a href='/'>{cate.name}</a>
                  </li>))}
                </ul>
              </div>
              <div className='flex col-span-2'>
                <div className='w-full h-full'>
                    <Slider data={fadeImages} />
                </div>
              </div>
              <div className='flex flex-col'>
                {ads.map((adver, index) => (
                    <img className='py-1 h-1/2 w-full 
                    transition ease-in-out delay-150
                    duration-300 image' key={[index]} src={adver.image} alt='12345'>
                    </img>
                ))}
              </div>
            </div>
            <div className='grid grid-cols-4 gap-2'>
                  {keyboard.map((key, index) => (
                    <div key={[index]} >
                        <img className='transition ease-in-out delay-150
                    duration-300 image' src={key.link} alt='12345'></img>
                    </div>
                  ))}
            </div>
            <Sale />
            <Products category='Khuyến mãi hot' data={pros} />
            <Slider data={saleData} />
            <SlideProduct category='Màn hình giá shock' data={products} />
            <div className='grid grid-cols-2 gap-4 h-full'>
                <div className='h-full'> 
                    <Slider data={bannerData1} />
                </div>
                <div className='h-full'>
                    <Slider data={bannerData2} />
                </div>
            </div>
            <Products category='Sản phẩm mới về' data={pros} />
            <div className='mt-10'>
                <img src='https://nguyenvu.store/wp-content/uploads/2022/05/Banner-5000-G-Series-fix.jpg' alt='123456' />
            </div>
            <SlideProduct category='Cấu hình tham khảo' data={products} />
            <div className='reason flex justify-center'>
                <div className=''>
                  <span className='text-3xl font-bold text-black mr-2'>Vì sao chọn Nguyễn Vũ Store ?</span>
                  <span className='text-lg font-bold text-white bg-red-500
                  p-2 rounded-3xl'>Hotline: 1900.000.000</span>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-5'>
              {card.map((dt, index) => (
                <Card key={[index]} name={dt.name} img={dt.img} url={dt.link} />
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home