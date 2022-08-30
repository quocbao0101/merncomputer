import React from 'react';
import './style.css';


function Footer() {
    const buttonStyle = {
        background: 'none',
        color: 'black',
      };
  return (
    <div className='footer text-white'>
        <div className='container mx-auto pt-10 pb-32'>
            <div className='grid grid-cols-4 gap-10'>
                <div className='flex flex-col justify-center items-center'>
                    <img className='h-24 w-24' src='https://nguyenvu.store/media/LOGO-NVU.svg' alt='12345' />
                    <span className='uppercase font-bold text-xl'>Nguyễn Vũ Store</span>
                    <span className='font-semibold text-md'>"Gaming Gear"</span>
                    {/* <div className='flex flex-row mt-1'>
                        <button  style={{ ...buttonStyle }} className='facebook'>
                            <svg className='h-8 w-8 hover:fill-sky-700' fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50">
                                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 26.580078 10 C 23.92822 10 21.917076 10.867217 20.677734 12.400391 C 19.438393 13.933564 19 15.981046 19 18.226562 L 19 20 L 17 20 A 1.0001 1.0001 0 0 0 16 21 L 16 26 A 1.0001 1.0001 0 0 0 17 27 L 19 27 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 27 L 31 27 A 1.0001 1.0001 0 0 0 31.980469 26.195312 L 32.980469 21.195312 A 1.0001 1.0001 0 0 0 32 20 L 27 20 L 27 17.806641 C 27 17.321617 27.03137 17.325614 27.171875 17.234375 C 27.312385 17.143136 27.820197 17 28.710938 17 L 32 17 A 1.0001 1.0001 0 0 0 33 16 L 33 12 A 1.0001 1.0001 0 0 0 32.335938 11.058594 C 32.335938 11.058594 29.456337 10 26.580078 10 z M 26.580078 12 C 28.472499 12 30.227501 12.510447 31 12.751953 L 31 15 L 28.710938 15 C 27.663677 15 26.813974 15.08458 26.083984 15.558594 C 25.353995 16.032605 25 16.940664 25 17.806641 L 25 21 A 1.0001 1.0001 0 0 0 26 22 L 30.779297 22 L 30.179688 25 L 26 25 A 1.0001 1.0001 0 0 0 25 26 L 25 38 L 21 38 L 21 26 A 1.0001 1.0001 0 0 0 20 25 L 18 25 L 18 22 L 20 22 A 1.0001 1.0001 0 0 0 21 21 L 21 18.226562 C 21 16.24708 21.405014 14.681779 22.232422 13.658203 C 23.05983 12.634627 24.336936 12 26.580078 12 z"/>
                            </svg>
                        </button>
                    </div> */}
                </div>
                <div className=''>
                    <span className='font-bold text-xl uppercase'>Về chúng tôi</span>
                    <hr className='solid border border-red-500 w-1/6'></hr>
                    <div className='mt-10 text-sm font-semibold'>
                        <span>Giờ làm việc: </span>
                        <span className='text-yellow-400'> 08:00 - 21:00</span>
                    </div>
                    <div className='mt-1 text-sm font-semibold'>
                        <span>Hotline: </span>
                        <span className='text-yellow-400'>1900.000.000 - 0234.5678.912</span>
                    </div>
                    <div className='mt-1 text-sm font-semibold'>
                        <span>Email: </span>
                        <span className='text-yellow-400'>binspike@gmail.com</span>
                    </div>
                </div>
                <div className=''>
                    <span className='font-bold text-xl uppercase'>Thanh toán</span>
                    <hr className='solid border border-red-500 w-1/6'></hr>
                </div>
                <div className=''>
                    <span className='font-bold text-xl uppercase'>Thông tin</span>
                    <hr className='solid border border-red-500 w-1/6'></hr>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer