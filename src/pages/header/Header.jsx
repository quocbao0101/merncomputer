import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/png/logo-ngang.svg';
import { USER_LOCAL_STORE } from '../../constants';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import authService from '../../services/auth';
import { useNavigate } from "react-router-dom";


function Header() {
  const user = JSON.parse(localStorage.getItem(USER_LOCAL_STORE));
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    authService.logout();
    navigate('/dang-nhap');
  }

  return (
    <div>
      {/* Mobile */}
      <div>
        <div className='grid grid-cols-4 gap-3 justify-between p-3 container mx-auto lg:hidden md:hidden'>
          <div className='container flex flex-row justify-between items-center'>
            <div className='flex items-center'>
              <button className='rounded-full'>
                <svg className='h-7 w-7' fill='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className='vl'>
            </div>
            <div className='flex items-center'>
              <button className='rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex justify-center col-span-2 items-center'>
            <img className='w-44 h-9' src={logo} alt='' />
          </div>
          <div className='container flex flex-row justify-between items-center'>
            <div>
              <button className='rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>
            <div className='vl'>
            </div>
            <div>
              <button className='rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>  
        {/* Medium  */}
        <div className='p-3 container mx-auto lg:hidden md:block hidden'>
          <div className='grid grid-cols-4'>
            <div className='container flex flex-row justify-between items-center'>
              <div className='flex items-center'>
                <button className='rounded-full'>
                  <svg className='h-7 w-7' fill='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
              <div className='vl'>
              </div>
              <div className='flex items-center'>
                <button className='rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className='flex justify-center col-span-2 items-center'>
              <img className='w-44 h-9' src={logo} alt='' />
            </div>
            <div className='container flex flex-row justify-between items-center'>
              <div>
                <button className='rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>
              <div className='vl'>
              </div>
              <div>
                <button className='rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>  
        {/* Medium  */}
        <div className='flex flex-row p-3 lg:hidden md:block bg-gradient-to-r from-red-500 to-orange-400'>
          <div className='relative w-full'>
            <input className='focus:outline-none searchBox pr-10 px-4 py-2 text-sm font-semibold  placeholder-white text-white w-full bg-transparent rounded-full' placeholder='Nhập tên sản phẩm cần tìm...' type='text' />
            <span className='absolute inset-y-2 right-2 pl-2 flex items-end'>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
      {/* Computer */}
      <div className='container mx-auto lg:block md:hidden hidden'>
          <div className='mb-2 hidden md:block lg:block'>
              <img src='https://nguyenvu.store/wp-content/uploads/2022/08/topbaner-9-9-1536x75.png' alt='' />
          </div>
          <div className='flex flex-row items-center justify-between'> 
              <div className='mt-5 '>
                <Link to='/'>
                  <img className='h-30 w-40' src={logo} alt='' />
                </Link>
              </div>
              <div className='flex-grow'>
                <input className='bg-gray-200 ml-5 py-5 px-4 h-9 border-2 border-slate-300
                outline-none search
                textBox rounded-3xl text-sm' placeholder='Nhập tên sảm phẩm cần tìm' type='text' />
              </div>
              <div className='px-10 py-5 rounded-lg lg:block md:block hidden'>
                {user ?
                  <div>
                      <span
                        onClick={handleClick}
                        className='capitalize cursor-pointer
                        transition ease-in-out delay-100
                       hover:text-red-600 font-bold'
                      >
                        {user.name}
                      </span>
                      <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={logOut}>Đăng xuất</MenuItem>
                      </Menu>
                    </div>
                  :
                  <Link to='/dang-nhap' className='transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>ĐĂNG NHẬP / ĐĂNG KÝ</Link>
                }
              </div>
          </div>
          <div className='flex flex-row mt-4 justify-between px-10 py-5 rounded-lg'>
            <div className='flex items-center'>
                <div className='mr-5 flex items-center'>
                  <Link to='/' className='mr-1 uppercase transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>Danh mục sản phẩm</Link>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                <div className='mr-5 flex flex-row items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                  <Link to='/' className='uppercase transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>Xây dựng cấu hình</Link>
                </div>
                <div className='mr-5 flex flex-row items-center'>
                  <svg className="mr-1 h-7 w-7 text-black" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                    <path stroke="none" d="M0 0h24v24H0z"/>  
                    <line x1="9" y1="15" x2="15" y2="9" />  
                    <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />  
                    <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />  
                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                  </svg>
                  <Link to='/' className='uppercase transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>Khuyến mãi</Link>
                </div>
                <div className='flex flex-row items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                  <Link to='/' className='uppercase transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>Thông tin công nghệ</Link>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <Link to='/' className='uppercase transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>Hướng dẫn thanh toán</Link>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <Link to='/' className='uppercase transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>Sản phẩm yêu thích</Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header