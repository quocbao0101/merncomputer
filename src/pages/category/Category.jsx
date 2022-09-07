import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { products } from '../home/product';
import { Link } from 'react-router-dom';
import './style.css';
import Tool from './Tool';
import PriceDrawer from './PriceDrawer';

function Category() {
  const [open, setOpen] = React.useState(false);
  const data = products.slice(0,12);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div className='background'>
      <div className='container mx-auto py-10'>
        <div className='flex lg:justify-between md:justify-center justify-center'>
          <div className='flex flex-row items-center'>
            <span className='uppercase text-xl font-semibold'>trang chủ</span>
            <div className='vl-product m-3'>
            </div>
            <span className='font-bold text-xl text-black'>PC GAMING</span>
          </div>
          <div className='lg:block md:hidden hidden'>
            <span className='text-lg font-medium'>Hiển thị 1-12 của 25 kết quả</span>
            <select className='sort outline-none ml-5 py-3 px-2 rounded border-2 text-base text-black'>
              <option>Thứ tự theo mức độ phổ biến</option>
              <option>Thứ tự theo điểm đánh giá</option>
              <option>Mới nhất</option>
              <option>Thứ tự theo giá: thấp đến cao</option>
              <option>Thứ tự theo giá: cao xuống thấp</option>
            </select>
          </div>
        </div>
        <div className='justify-center lg:hidden md:hidden flex mt-2'>
            <button className='uppercase bg-transparent font-semibold text-red-500
            py-1 px-6 text-sm rounded border border-red-500' onClick={() => setOpen(!open)}>Bộ lọc</button>
        </div>
        <PriceDrawer open={open} handleOpen={handleOpen} handleClose={handleClose} />
        <div className='grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 gap-4 mt-7'>
          <div className='col-span-3'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-4 md:gap-4 gap-0.5'>
            {data.map((product, index) => {
              const salePrice = product.price - (product.price * product.discount / 100);
              return (
                <div key={[index]} className='bg-white lg:rounded-lg md:rounded-lg rounded-none card
                transition ease-in-out delay-350 duration-500 group'>
                  <div className='flex items-center relative text-center'>
                    <img className='w-full h-full' src={product.image} alt='12345' />
                    <div className='bg-red-500 rounded-full py-2 px-0.5  discount'>
                      {product.discount &&
                      (<span className='text-white font-bold lg:text-xs md:text-xs text-xs'>
                        - {product.discount} %
                        </span>)
                      }
                    </div>
                    {product.noti && (
                    <span className='notification lg:block md:block hidden lg:py-3 lg:px-2 md:py-3 md:px-2 px-1 py-2 text-white bg-black round-3xl font-bold rounded-full text-xs'>
                      {product.noti}
                    </span>)}
                    {/* <div className='flex items-end justify-end'>
                      <button className='invisible hover:visible group-hover:visible
                        transition linear delay-350 duration-1000 group
                        group-hover:translate-x-24'>
                        <LinkiFillHeart className='text-3xl fill-red-700 hover:fill-red-500' />
                      </button>
                    </div> */}
                  </div>
                  <div className='flex p-4 justify-center flex-col items-center text-center'>
                      <span className='category lg:text-sm md:text-sm text-xs uppercase'>{product.category.name}</span>
                      <span className='product-name font-semibold text-black lg:text-xl md:text-xl text-lg lineWrap'>{product.name}</span>
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
                          font-bold lg:text-lg md:text-lg text-sm' >
                            {value}
                          </span>} value={salePrice} />
                      </div>
                      <button className='uppercase font-bold text-white p-2
                      bg-gradient-to-r from-red-500 to-orange-400 w-full mt-2
                      rounded-md lg:text-sm md:text-sm text-xs'>Thêm vào giỏ hàng</button>
                  </div>
                </div>
            )})}
            </div>
            <div className="flex items-center space-x-1 justify-center mt-5">
                <Link to="#" className="px-4 py-2 font-bold text-gray-500 rounded-full bg-transparent hover:bg-blue-400 hover:text-white">
                    Previous
                </Link>
                <Link to="#" className="px-4 py-2 text-gray-700 font-semibold rounded-full bg-transparent hover:bg-blue-400 hover:text-white">
                    1
                </Link>
                <Link to="#" className="px-4 py-2 text-gray-700 font-semibold rounded-full bg-transparent hover:bg-blue-400 hover:text-white">
                    2
                </Link>
                <Link to="#" className="px-4 py-2 text-gray-700 font-semibold rounded-full bg-transparent hover:bg-blue-400 hover:text-white">
                    3
                </Link>
                <Link to="#" className="px-4 py-2 font-bold text-gray-500 rounded-full bg-transparent hover:bg-blue-400 hover:text-white">
                    Next
                </Link>
            </div>
          </div>
          <Tool />
        </div>
      </div>
    </div>
  )
}

export default Category