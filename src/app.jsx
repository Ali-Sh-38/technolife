import React from "react";
// page
import Home from './pages/home'
import List from './pages/list'
import Product from './pages/product'
import Cart from './pages/cart'
import Login from './pages/login'
import Error from './pages/error'
// component
import Nav from './component/nav'
import Footer from "./component/footer";
// hook
import { Routes, Route , useLocation} from 'react-router-dom'
import { useState , useEffect } from "react";
import CartProvider from "./component/cartContext";



const App = ()=>{

    
    let location = useLocation()
    return(
    <React.Fragment>
        <CartProvider>
        {location.pathname !== "/login" && <Nav />}
        <Routes>
            <Route path='technolife/' element={<Home/>}/>
            <Route path='/list/:category' element={<List/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
        {location.pathname !== "/login" && <Footer/>}
        </CartProvider>
    </React.Fragment>
    )
}

export default App

// نکته
// برای اینکه وقتی وارد صفحه جدیدی شویم و صفحه دوباره رندر شود باید از یوزلوکیشن استفاده کنیم 
// که شرط استفاده از ان این است که داخل تگ روتر باشد 
//  برای همین لینک ها را به کامپوننت اپ انتقال داده و اپ را داخل روتر میگذاریم