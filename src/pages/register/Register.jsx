import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/input.hooks';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useSelector, useDispatch } from 'react-redux';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import clsx from 'clsx';
import CircularProgress from '@mui/material/CircularProgress';
import { register } from '../../modules/auth/action';


function Register() {

  const { value: email, onChange: onChangeEmail } = useInput('');
  const { value: username, onChange: onChangeUsername } = useInput('');
  const { value: password, onChange: onChangePassword } = useInput('');
  const { value: repassword, onChange: onChangeRePassword } = useInput('');
  const { value: name, onChange: onChangeName } = useInput('');
  const { value: gender , onChange: onChangeGender } = useInput('none');
  const { value: phone, onChange: onChangePhone } = useInput('');
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector((state) => state.auth.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = {
    email,
    username,
    password,
    name,
    gender,
    phone,
    role: 'Member',
  };


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleOnClick = () => {
    dispatch(register(data, navigate));
  }

  return (
    <div>
            <div className='grid grid-cols-3 lg:py-0 md:py-10 py-10'>
                <div />
                <div className='flex justify-center items-center 
                lg:col-span-1 md:col-span-3 col-span-3 
                lg:px-0 md:px-10 px-10'>
                    <div className='w-full'>
                        <span className='font-bold uppercase text-xl'>Đăng ký</span>
                        <div className='mt-4 w-full'>
                            <TextField 
                            value={email}
                            onChange={onChangeEmail}
                            variant="outlined" className='w-full' size="small" placeholder='Email' />
                        </div>
                        <div className='mt-4 w-full'>
                            <TextField 
                            value={username}
                            onChange={onChangeUsername}
                            variant="outlined" className='w-full' size="small" placeholder='Tài khoản' />
                        </div>
                        <div className='mt-4 w-full'>
                            <FormControl
                            className='w-full' size="small">
                                <OutlinedInput
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={onChangePassword}
                                    placeholder='Mật khẩu'
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div className='mt-4 w-full'>
                            <FormControl
                            className='w-full' size="small">
                                <OutlinedInput
                                    type={showPassword ? 'text' : 'password'}
                                    value={repassword}
                                    onChange={onChangeRePassword}
                                    placeholder='Nhập lại mật khẩu'
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div className='mt-4 w-full'>
                            <TextField 
                            value={name}
                            onChange={onChangeName}
                            variant="outlined" className='w-full' size="small" placeholder='Họ và tên' />
                        </div>
                        <div className='mt-4 w-full'>
                            <FormControl className='w-full'>
                                <Select size='small' value={gender} onChange={onChangeGender}> 
                                    <MenuItem value='none'>Giới tính</MenuItem>       
                                    <MenuItem value='nam'>Nam</MenuItem>
                                    <MenuItem value='nu'>Nữ</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='mt-4 w-full'>
                            <TextField 
                            value={phone}
                            onChange={onChangePhone}
                            variant="outlined" className='w-full' size="small" placeholder='Số điện thoại' />
                        </div>
                        <div className='mt-4'>
                            <button
                                className={clsx('button', {'disabled': loading,})}
                                disabled={loading}
                                onClick={handleOnClick}
                            >
                                {loading ? <CircularProgress size={25} /> : 'Đăng ký'}
                            </button>
                            <div className='mt-4'>
                                <Link 
                                    to='/dang-nhap'
                                    className='text-red-400
                                    hover:text-red-600 
                                    duration-300 font-semibold'
                                >
                                    Đăng nhập
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div />
            </div>
    </div>
  )
}

export default Register