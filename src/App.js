import Home from "./pages/home/Home";
import Header from "./pages/header/Header";
import './App.css';
import ScrollToTop from "react-scroll-to-top";
import Footer from "./pages/header/Footer";
import { Routes, Route } from 'react-router-dom';
import Category from "./pages/category/Category";
import MuiSpeedDial from "./components/MuiSpeedDial";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Forgot from "./pages/forgot-password/Forgot";



function App() {
  return (
  <>
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/danh-muc/linh-kien" element={<Category />}></Route>
        <Route path="/dang-nhap" element={<Login />}></Route>
        <Route path="/dang-ky" element={<Register />}></Route>
        <Route path="/forgot-password" element={<Forgot />}></Route>
      </Routes>
      <Footer />
      <ScrollToTop 
        top={1000}
        className="scroll"
        component={<div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-5 h-5" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
          </svg>
        </div>}
        smooth />
    </div>
    <MuiSpeedDial />
  </>
  );
}

export default App;
