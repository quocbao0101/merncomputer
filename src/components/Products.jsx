import React from 'react'
import './products.css'
import CurrencyFormat from 'react-currency-format';

function Products({ data, category }) {
  return (
    <div className='py-5'>
      <div className='flex justify-between'>
        <div />
        <div>
          <span className='text-transparent bg-clip-text 
          bg-gradient-to-r from-red-500 to-orange-400 
          lg:text-3xl md:text-xl text-lg font-bold'>{category}</span>
        </div>
        <div>
          <span className='text-red-500 lg:text-sm md:text-sm text-xs font-bold 
            hover:bg-white px-5 py-2 rounded
            transition ease-in-out delay-350 duration-500'>
              Xem tất cả
          </span>
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-4 md:gap-4 gap-0.5 mt-5'>
        {data.map((product, index) => {
        const salePrice = product.price - (product.price * product.discount / 100);
        return (
          <div key={[index]} className='bg-white p-4 lg:rounded-lg md:rounded-lg rounded-none card
          transition ease-in-out delay-350 duration-500 group'>
            <div className='flex items-center'>
              {product.discount &&
               (<span className='lg:py-3 lg:px-2 md:py-3 md:px-2 px-1 py-2 text-white font-bold bg-red-500 rounded-full mr-2 text-xs'>
                - {product.discount} %
                </span>)
              }
              {product.noti && (
              <span className='lg:block md:block hidden lg:py-3 lg:px-2 md:py-3 md:px-2 px-1 py-2 text-white bg-black round-3xl font-bold rounded-full text-xs'>
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
    </div>
  )
}

export default Products