import React, { useCallback, useEffect, useState } from 'react';
import { Slider } from '@mui/material';

import indexStyle from './style';
import CurrencyFormat from 'react-currency-format';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector} from 'react-redux';
import ToolBox from '../../components/ToolBox';

function Tool({ loading, handleChangeSearch, 
    handleChangeInPrice, products }) {
    const data = useSelector((state) => state.products.data);
    const maxPrice = Math.max.apply(Math, data.map(function(product) { 
        return product.price; 
    }))
    const minPrice = Math.min.apply(Math, data.map(function(product) { return product.price; }))
    const [value, setValue] = React.useState([]);
    const [searchName, setSearchName] = useState('');
    const handleRange = (event, value) => {
        setValue(value);
    }
    const handleRangeCommit = (event, value) => {
        handleChangeInPrice(value);
    }
    const onChangeSearchName = (e) => {
        setSearchName(e.target.value);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleChangeSearch(searchName);
        }
    }
    useEffect(() => {
        setValue([minPrice, maxPrice]);
    }, [data]);

    const brand = [];
    const fan = [];
    const memory = [];
    const colors = [];

    if(products) {
        products.map((product) => {
            if(!brand.includes(product.brand)) {
                brand.push(product.brand);
            };
            if(!fan.includes(product.fan)) {
                fan.push(product.fan);
            }
            if(!memory.includes(product.memory)) {
                memory.push(product.memory);
            }
            if(!colors.includes(product.color)) {
                colors.push(product.color);
            };
            return false;
        })
    }
  return (
    <div className='w-full h-full bg-white rounded-sm p-5 lg:block md:hidden hidden'>
        <div className='py-3 relative'>
            <input type='text' 
            className='w-full pr-8 pl-3 py-2 border-2 border-slate-300 rounded-md text-black outline-none search'
             onKeyDown={handleKeyDown}
             value={searchName} placeholder='Nhập từ khóa cần tìm...'
             onChange={onChangeSearchName} 
             />
            <span className='absolute inset-y-6 right-2 pl-2 flex items-end'>
                <button disabled={loading} onClick={() => handleChangeSearch(searchName)}>
                {loading ? 
                <div className='flex items-center'>
                    <CircularProgress size={25}  />
                </div> : 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-slate-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg> }
                </button>
            </span>
        </div>
        <div>
            <span className='text-lg font-bold text-black'>Mức giá</span>
            <Slider
                value={value}
                min={minPrice}
                max={maxPrice}
                onChange={handleRange}
                onChangeCommitted={handleRangeCommit}
                valueLabelDisplay="auto"
            />
            <div className='flex flex-row items-center pb-4'>
                <CurrencyFormat displayType={'text'} thousandSeparator={true} suffix=''
                    renderText={value => 
                    <span className='text-lg font-bold text-red-500'>
                    {value}
                    </span>} value={value[0]} />
                <div className="m-2 border border-red-500 w-3"></div>
                <CurrencyFormat displayType={'text'} thousandSeparator={true} suffix=''
                renderText={value => 
                <span className='text-lg font-bold text-red-500'>
                {value}
                </span>} value={value[1]} />
            </div>
            <div>
                <button className='uppercase w-full reset rounded-md p-2 text-white text-sm font-bold'>reset</button>
            </div>
        </div>
        <ToolBox name='Thương hiệu' data={brand} />
        <ToolBox name='Bộ nhớ' data={memory} />
        <ToolBox name='Fan' data={fan} />
        <ToolBox name='Màu sắc' data={colors} />
    </div>
  )
}

export default Tool