import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import './style.css';
import Pagination from '@mui/material/Pagination';
import { useQuery } from 'react-query';
import Tool from './Tool';
import PriceDrawer from './PriceDrawer';
import axios from 'axios';
import useInput from '../../hooks/input.hooks';
import Backdrop from '@mui/material/Backdrop';



function Category() {
  const [page, setPage] = useState(0);
  const { value: pageSize, onChange: onChangePageSize } = useInput(1);

  const [totalData, setTotalData] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);


  const pagination = {
    page: page === 0 ? page : page - 1,
    pageSize,
  }
  const fetchProduct = async (pagination) => {
    return await axios.post('http://localhost:5000/api/products/pagination', pagination)
  }
  const { data, isLoading, isFetching, isError ,error } = useQuery(['products', page],() => fetchProduct(pagination))
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const handleChangePage = (e, value) => {
    setPage(value);
  };
  const handleCloseDrop = () => {
    setOpen(false);
  };
  const [product, setProduct] = useState([]);
  useEffect(() => {
    if(data) {
      setProduct(data.data.data);
      setTotalPages(data.data.totalPages);
      setTotalElements(data.data.totalElements);
      setTotalData(data.data.totalData);
    }
  }, [data])
  console.log(isFetching);
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
            <span className='text-lg font-medium'>Hiển thị {totalElements} của {totalData} kết quả</span>
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
            {product.map((product, index) => {
              const salePrice = product.price - (product.price * product.discount / 100);
              return (
                <div key={[index]} className='bg-white lg:rounded-lg md:rounded-lg rounded-none card
                transition ease-in-out delay-350 duration-500 group'>
                  <div className='flex items-center relative text-center'>
                    <img className='w-full h-full' src={product.image} alt='12345' />
                    {product.discount > 0 &&
                    (<div className='bg-red-500 rounded-full py-2 px-0.5  discount'>
                      <span className='text-white font-bold lg:text-xs md:text-xs text-xs'>
                        - {product.discount} %
                        </span>
                    </div>)}
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
                      <div className='w-full h-28'>
                        <span className='category lg:text-sm md:text-sm text-xs uppercase'>{product.category && product.category.name}</span>
                        <span className='product-name font-semibold text-black lg:text-xl md:text-xl text-lg lineWrap'>{product.name}</span>
                          {!product.contact && (
                            <>
                              {product.discount > 0 && (
                                <CurrencyFormat displayType={'text'} thousandSeparator={true} suffix=' đ'
                                renderText={value => 
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 
                                mr-2 text-xs text-line' >
                                  {value}
                                </span>} value={product.price} />
                              )}
                              <CurrencyFormat displayType={'text'} thousandSeparator={true} suffix=' đ'
                                renderText={value => 
                                <span className='text-transparent bg-clip-text 
                                bg-gradient-to-r from-red-500 to-orange-400
                                font-bold lg:text-lg md:text-lg text-sm'>
                                  {value}
                                </span>} value={salePrice} />
                            </>
                          )}
                        </div>
                        <div className='w-full'>
                          {product.contact ? (
                              <button className='uppercase font-bold text-white p-2
                              bg-gradient-to-r from-red-500 to-orange-400 w-full mt-2
                              rounded-md lg:text-sm md:text-sm text-xs'>Liên hệ giá tốt</button>
                          ) : (
                              <button className='uppercase font-bold text-white p-2
                              bg-gradient-to-r from-red-500 to-orange-400 w-full mt-2
                              rounded-md lg:text-sm md:text-sm text-xs'>Thêm vào giỏ hàng</button>
                          )}
                        </div>
                  </div>
                </div>
            )})}
            </div>
            <div className='flex justify-center mt-5'>
              <Pagination 
                defaultPage={1}
                count={totalPages}
                page={page}
                onChange={handleChangePage}
                color="secondary"
              />
            </div>
          </div>
          <Tool loading={isFetching} />
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isFetching}
            onClick={handleCloseDrop}
          >
          </Backdrop>
        </div>
      </div>
    </div>
  )
}

export default Category