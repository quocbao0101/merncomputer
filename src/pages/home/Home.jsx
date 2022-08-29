import React from 'react';
import './style.css';
import { ads, data, keyboard } from './data';
import { fadeImages, saleData } from './slider';
import { products } from './product';
import Slider from '../../components/Slider';
import Products from '../../components/Products';
import Sale from './Sale';
import SlideProduct from '../../components/Swiper';

function Home() {
  const product = products.sort((a, b) => a.price - b.price);
  const pros = product.slice(0,8);
  return (
    <div className='background pb-10'>
        <div className='container mx-auto lg:p-0 md:p-0 p-4'>
          <div className='container'>
            <div className='grid grid-cols-4 gap-2 py-5'>
              <div className='flex bg-white cards rounded-md text-xs font-medium'>
                <ul className='w-full'>
                  {data.map((cate, index) => 
                  (<li key={[index]} className='p-3 w-full 
                  hover:bg-gradient-to-r from-red-500 to-orange-400 
                  hover:text-white font-semibold text-black duration-300'> 
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
            {/* <Products data={} /> */}
          </div>
        </div>
    </div>
  )
}

export default Home