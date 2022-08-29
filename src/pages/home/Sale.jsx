import React from 'react'
import Slider from '../../components/Slider'
import { saleSlider } from './slider'

function Sale() {
  return (
    <div>
        <div className='flex justify-center py-10'>
            <div className='flex items-center flex-col'>
                <span className='font-black text-4xl uppercase mb-3'>Sản phẩm giá tốt - Chốt liền tay</span>
                <div>
                    <span>Đừng vội mua nếu chưa xem giá tại</span>
                    <a href='/'>
                        <span className='ml-1 bg-gradient-to-r from-red-500 to-orange-400 p-2 text-white rounded-lg'>
                            Nguyễn Vũ Store
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-2'>
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