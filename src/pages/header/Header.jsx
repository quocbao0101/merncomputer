import React, { useState } from 'react';
import './style.css';
import banner from '../../assets/png/topbaner-PC-6-2048x100.png';
import logo from '../../assets/png/logo-ngang.svg';

function Header() {
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
              <img src={banner} alt='' />
          </div>
          <div className='flex flex-row items-center justify-between'> 
              <div className='mt-5 '>
                <img className='h-30 w-40' src={logo} alt='' />
              </div>
              <div className='flex-grow'>
                <input className='bg-gray-200 ml-5 py-3 px-4 h-9 textBox rounded-2xl text-sm' placeholder='Nhập tên sảm phẩm cần tìm' type='text' />
              </div>
              <div className='bg-sky-200  px-10 py-5 rounded-lg lg:block md:block hidden'>
                <a href='/login' className='transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>ĐĂNG NHẬP / ĐĂNG KÝ</a>
              </div>
          </div>
          <div className='flex flex-row mt-4 justify-between bg-sky-200  px-10 py-5 rounded-lg'>
            <div className='flex items-center'>
                <div className='mr-5'>
                  <a href='/' className='capitalize transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>Danh mục sản phẩm</a>
                </div>
                <div className='mr-5'>
                  <a href='/' className='capitalize transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>Xây dựng cấu hình</a>
                </div>
                <div className='mr-5'>
                  <a href='/' className='capitalize transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>Khuyến mãi</a>
                </div>
                <div>
                  <a href='/' className='capitalize transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>Thông tin công nghệ</a>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <a href='/' className='capitalize transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>Hướng dẫn thanh toán</a>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <a href='/' className='capitalize transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>Sản phẩm yêu thích</a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header