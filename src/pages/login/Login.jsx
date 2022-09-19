import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import useInput, { useCheckbox } from '../../hooks/input.hooks';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useSelector, useDispatch } from 'react-redux';
import FormControlLabel from '@mui/material/FormControlLabel';
import ColorCheckbox from '../../components/ColorCheckbox';
import login from '../../modules/auth/action';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { USER_REMEMBER_LOCAL_STORE } from '../../constants';
import { useNavigate } from "react-router-dom";
import clsx from 'clsx';
import CircularProgress from '@mui/material/CircularProgress';
import './style.css';


function Login() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem(USER_REMEMBER_LOCAL_STORE));
  const { value: email, onChange: onChangeEmail } = useInput(user ? user.email : '');
  const { value: password, onChange: onChangePassword } = useInput(user ? user.password : '');
  const [showPassword, setShowPassword] = useState(false);
  const { value: checked, onChange: onChangeChecked } = useCheckbox(!!user);
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);

  const data = {
    email,
    password,
  }
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnClick = () => {
    dispatch(login(data, checked, navigate));
  }

  return (
    <div>
            <div className='grid grid-cols-3 lg:py-0 md:py-10 py-10'>
                <div />
                <div className='flex justify-center items-center 
                lg:col-span-1 md:col-span-3 col-span-3 
                lg:px-0 md:px-10 px-10'>
                    <div className='w-full'>
                        <span className='font-bold uppercase text-xl'>Đăng nhập</span>
                        <div className='mt-4 w-full'>
                            <TextField 
                            value={email}
                            onChange={onChangeEmail}
                            variant="outlined" className='w-full' size="small" placeholder='Email' />
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
                            <FormControlLabel
                                // className={classes.formCheckbox}
                                control={(
                                <ColorCheckbox
                                    checked={checked}
                                    onChange={onChangeChecked}
                                    value="remember"
                                    color="primary"
                                />
                                )}
                                label="Nhớ tài khoản"
                            />
                            {/* <TextField 
                            value={password}
                            onChange={onChangePassword}
                            variant="outlined" className='w-full' size="small" placeholder='Mật khẩu' /> */}
                        </div>
                        <div className='mt-4'>
                            <button
                            className={clsx('button', {
                                'disabled': loading,
                                })}
                            onClick={handleOnClick}
                            disabled={loading}
                            >
                                {loading ? <CircularProgress size={25} /> : 'Đăng nhập'}
                            </button>
                            <div className='mt-4'>
                                <Link to='/forgot-password'
                                className='text-red-400
                                hover:text-red-600 
                                duration-300 font-semibold'>
                                    Quên mật khẩu
                                </Link>
                                <span className='px-1'>hoặc</span>
                                <Link to='/dang-ky'
                                className='text-red-400 
                                hover:text-red-600 
                                duration-300 font-semibold'>
                                    đăng ký !
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

export default Login