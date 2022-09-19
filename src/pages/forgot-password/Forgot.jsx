import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import searchUser from '../../modules/users/action';
import CircularProgress from '@mui/material/CircularProgress';

function Forgot() {
  const [text, setText] = React.useState('');
  const users = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const [user, setUser] = React.useState('')
  const dispatch = useDispatch();


  const onChangeSearch = (e) => {
    setText(e.target.value)
  };
  const data = {
    username: text,
    email: text,
  };
  const handleOnClick = () => {
    dispatch(searchUser(data));
    setText('');
  };
  useEffect(() => {
    if(users){
        setUser(users)
    }
  }, [users]);

  console.log(user);
  return (
    <div className=''>
        <div className='flex justify-center'>
            <span className='uppercase text-4xl text-gray-500 
            font-semibold'>Tài khoản cá nhân</span>
        </div>
        <div className='px-40'>
            <div className='mt-10'>
                <span className='text-lg text-gray-400'>Quên mật khẩu? Vui lòng nhập tên đăng nhập hoặc địa chỉ email. 
                    Bạn sẽ nhận được một liên kết tạo mật khẩu mới qua email.
                </span>
            </div>
            <div className='mt-2'>
                <span className='font-bold'>
                    Tên đăng nhập hoặc email
                </span>
            </div>
            <div className='mt-2 w-full'>
                <input
                    value={text} 
                    onChange={(e) => onChangeSearch(e)}
                    className='w-full
                    py-1.5 rounded px-4
                    outline-none border-2 border-slate-300
                    text-lg font-semibold
                    search' type='text' 
                />
            </div>
            <div className='mt-4'>
                <button disabled={loading} className='uppercase text-lg text-white
                    bg-gradient-to-r from-red-500 to-orange-400
                    rounded font-semibold
                    w-48 h-11'
                    onClick={handleOnClick}>
                    {loading ? 
                        <div className='flex items-center justify-center'>
                            <CircularProgress size={25}  />
                        </div> 
                        : 'Đặt lại mật khẩu'
                    }
                </button>
            </div>
        </div>
    </div>
  )
}

export default Forgot