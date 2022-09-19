import React, { useEffect } from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Slider } from '@mui/material';
import CurrencyFormat from 'react-currency-format';


function PriceDrawer( {handleOpen, open, handleClose} ) {
    const [value, setValue] = React.useState([20, 10000]);
    const [price, setPrice] = React.useState([]);
    useEffect(() => {
        const minPrice = value[0];
        const maxPrice = value[1];
        setPrice([minPrice, maxPrice]);
    }, [value])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <div>
        <SwipeableDrawer
            anchor={'left'}
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            >
                <div className='p-5'>
                    <div className='py-3 relative'>
                        <input type='text' className='w-full pr-8 pl-3 py-2 border-2 border-slate-300 rounded-md text-black outline-none search' placeholder='Nhập từ khóa cần tìm...' />
                        <span className='absolute inset-y-6 right-2 pl-2 flex items-end'>
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-slate-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            </button>
                        </span>
                    </div>
                    <div>
                        <span className='text-lg font-bold text-black'>Mức giá</span>
                        <Slider
                            value={value}
                            min={0}
                            max={10000}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                        />
                        <div className='flex flex-row items-center pb-4'>
                            <CurrencyFormat displayType={'text'} thousandSeparator={true} suffix=''
                                renderText={value => 
                                <span className='text-lg font-bold text-red-500'>
                                {value}
                                </span>} value={price[0]} />
                            <div className="m-2 border border-red-500 w-3"></div>
                            <CurrencyFormat displayType={'text'} thousandSeparator={true} suffix=''
                            renderText={value => 
                            <span className='text-lg font-bold text-red-500'>
                            {value}
                            </span>} value={price[1]} />
                        </div>
                        <div>
                            <button className='uppercase w-full reset rounded-md p-2 text-white font-bold'>reset</button>
                        </div>
                    </div>
                </div>
        </SwipeableDrawer>
  </div>
  )
}

export default PriceDrawer