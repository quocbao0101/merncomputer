import React from 'react'
import Slider from '../../components/Slider'
import { saleSlider } from './slider'
import { Link } from 'react-router-dom';

function Sale() {
  return (
    <div>
        <div className='flex justify-center py-10'>
            <div className='flex items-center flex-col'>
                <span className='font-black lg:text-4xl md:text-2xl text-lg 
                lg:uppercase md:normal-case normal-case mb-3'>Sản phẩm giá tốt - chốt liền tay</span>
                <div className='flex lg:flex-row md:flex-row flex-col items-center'>
                    <span className='lg:text-xl md:text-sm text-xs font-semibold text-gray-500'>Đừng vội mua nếu chưa xem giá tại</span>
                    <Link to href='/'>
                        <span className='lg:ml-1 md:ml-1 
                        lg:p-2 md:p-2 p-1
                        lg:text-xl md:text-sm text-xs
                        bg-gradient-to-r from-red-500 to-orange-400 font-semibold text-white rounded-lg'>
                            Nguyễn Vũ Store
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        <div className='grid lg:grid-cols-3 gap-2 md:grid-cols-3 grid-cols-1'>
            <div>
                <img src='https://nguyenvu.store/wp-content/uploads/2022/07/Mi-TV-4K-A2-58.jpg' alt='12345' />
            </div>
            <div>
                <Slider data={saleSlider} />
            </div>
            <div>
                <img src='https://nguyenvu.store/wp-content/uploads/2022/08/acer-day.webp' alt='12345' />
            </div>
        </div>
    </div>
  )
}

export default Sale