import React, { useState } from 'react';
import './style.css';
import banner from '../../assets/png/topbaner-PC-6-2048x100.png';
import logo from '../../assets/png/logo-ngang.svg';

function Header() {
  return (
      <div className='container mx-auto lg:p-0 md:p-0 p-5'>
          <div className='mb-2 hidden md:block lg:block'>
              <img src={banner} alt='' />
          </div>
          <div className='flex flex-row items-center justify-between'> 
              <div className='mt-5'>
                <img className='h-30 w-40' src={logo} alt='' />
              </div>
              <div className='flex-grow'>
                <input className='bg-gray-200 ml-5 py-3 px-4 h-9 textBox rounded-2xl text-sm' placeholder='Nhập tên sảm phẩm cần tìm' type='text' />
              </div>
              <div className=''>
                <a href='/login' className='transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>ĐĂNG NHẬP / ĐĂNG KÝ</a>
              </div>
          </div>
          <div className='flex flex-row p-10 justify-between'>
            <div className='flex'>
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
            <div className='flex flex-row justify-between'>
                <a href='/' className='capitalize transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>Hướng dẫn thanh toán</a>
            </div>
            <div className='flex flex-row justify-between'>
                <a href='/' className='capitalize transition ease-in-out delay-100 text-sm hover:text-red-600 font-bold'>Sản phẩm yêu thích</a>
            </div>
          </div>
      </div>
  )
}

export default Header