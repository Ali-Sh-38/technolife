import React, { useState ,useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useShow from "../custom hook/useShow";
import Sidebar from "./sidebar";
import { useCart } from "./cartContext";
import SearchBoxMoble from "./searchBoxMobile";

const Nav = ()=>{

    const {getTotalCount} = useCart()
    
    const [showSearchBox , toggleSearchBox , setSearchBox] = useShow()
    const [showSidebar, toggleSidebar, setSidebar] = useShow();
    
    const [searchText , setSearchText] = useState("")
    let handelChange = (e)=>{
        setSearchText(e.target.value)
    }

    const searchRef = useRef(null); // برای شناسایی محدوده‌ی سرچ باکس
    const searchRef2 = useRef(null); // برای شناسایی محدوده‌ی سرچ باکس

    useEffect(() => {
    let clickOutside = (e) => {
      // اگر کلیک بیرون از بخش سرچ بود
      if (searchRef.current && !searchRef.current.contains(e.target)){
        setSearchBox(false);
      }
    }
     document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, [setSearchBox]);
  
    useEffect(() => {
    let clickOutside = (e) => {
      // اگر کلیک بیرون از بخش سرچ بود
      if (searchRef2.current && !searchRef2.current.contains(e.target)){
        setSidebar(false);
      }
    }
     document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, [setSidebar]);

//   dark mod
const [mod, setMod] = useState(()=>{
    return JSON.parse(localStorage.getItem("darkmod")) || false;  //از لوکال مقدار اولیه میگیریم
});

const dayNight = () => setMod(prev => !prev);

useEffect(() => {
    localStorage.setItem("darkmod", JSON.stringify(mod));
    
  if (mod) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
}, [mod]);
  

// nav moblie
const [showMenu , setShowMenu] =useState(false)
const [showSearchBoxMoble , setShowSearchBoxMoble] =useState(false)

    return(
    <React.Fragment >
        {/* nav desctop */}
        <header className="md:block hidden">
            {/* first nav*/}
            <div className="fixed w-full top-0 bg-white dark:bg-gray-900 z-110 shadow-xl shadow-blue-200 dark:shadow-blue-950">
            <nav className="m-5 flex justify-between items-stretch lg:gap-50 gap-20">
                <section className="flex gap-5 grow">
                    {/* logo */}
                    {mod ? 
                    <Link to="/technolife"><img className="min-w-25" src="/images/logo.svg" alt="technoLife" /></Link>
                    :
                    <Link to="/technolife"><img className="min-w-25" src="/images/white_logo.svg" alt="technoLife" /></Link>
                    }
                    {/* search box */}
                    <div ref={searchRef} className="relative w-full flex gap-5 items-center px-5 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-400 duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-6" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input onFocus={toggleSearchBox} onChange={handelChange} type="search" className="w-full placeholder:text-[14px] placeholder:text-gray-400 outline-none" placeholder="محصول , برند یا دسته مورد نظرتان را جستجو کنید"/>
                        <div className={`absolute top-12 right-0 lg:w-1/2 md:w-full bg-white dark:bg-gray-900 rounded-md p-5 z-110 duration-300 ${showSearchBox ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-10"}`}>
                            <p className="text-[14px] text-gray-400 border-b border-blue-950 dark:border-gray-300 pb-2">جستجو برای .. {searchText}</p>
                            <div className="text-[14px] mt-5">
                                <p>
                                    جستجو های محبوب
                                </p>
                                <div className="flex flex-wrap gap-2 p-2 text-gray-500 dark:text-gray-300">
                                <Link to="/list" className="text-[12px] px-2 border border-gray-300 dark:border-gray-700 rounded-full">ساعت هوشمند</Link>
                                <Link to="/list" className="text-[12px] px-2 border border-gray-300 dark:border-gray-700 rounded-full">گوشی</Link>
                                <Link to="/list" className="text-[12px] px-2 border border-gray-300 dark:border-gray-700 rounded-full">کابل شارژ</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* login && cart && daynight*/}
                <section className="flex gap-5 items-stretch">
                    {/* login */}
                    <Link to="/login" className="px-4 py-2 text-[16px] flex items-center gap-5 border-2 border-blue-950 dark:border-gray-200 hover:bg-blue-950 dark:hover:bg-gray-200 text-blue-950 hover:text-white dark:text-gray-200 dark:hover:text-gray-900 rounded-md duration-300 z-10">
                    <span>ورود</span> <span>|</span> <span>ثبت نام</span>
                    </Link>
                    {/* cart */}
                    <Link to="/cart" className="relative px-2 py-2 border-2 border-blue-950 dark:border-gray-200 hover:bg-blue-950 dark:hover:bg-gray-200 text-blue-950 hover:text-white dark:text-gray-200 dark:hover:text-gray-900 rounded-md duration-300 z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        {getTotalCount() > 0 &&
                        <span className="absolute -bottom-1 -right-1 bg-red-700 text-white text-[10px] rounded-full px-2">
                            {(getTotalCount()).toLocaleString("fa-IR")}
                        </span>
                        }
                    </Link>
                    {/* dark mod */}
                    <button onClick={dayNight} className="cursor-pointer">
                        {mod ? 
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-8 bg-blue-950 text-white border-2 border-blue-950 p-1 rounded-full shadow-[0_0_15px_0_var(--tw-shadow-color)] shadow-blue-950" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        )
                         :
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-8 bg-gray-200 text-gray-900 border-2 border-gray-200 p-1 rounded-full shadow-[0_0_15px_0_var(--tw-shadow-color)] shadow-gray-300" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        )}
                    </button>
                </section>
            </nav>
            </div>
            {/* second nav */}
            <nav className="mt-25 border-b border-gray-300 dark:border-gray-700 relative pb-2 z-100 flex justify-between items-center duration-300">
                {/* منو اصلی */}
                    <Sidebar open={showSidebar} setOpen={toggleSidebar}/>
                    <button onClick={toggleSidebar} className={`mx-5 flex items-center gap-2 p-2 text-[16px] text-blue-950 dark:text-gray-200 cursor-pointer w-max z-500 rounded-md relative after:absolute after:right-1/2 after:translate-x-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-950 dark:after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full ${showSidebar ? "after:w-full text-white dark:text-gray-300"  : ""}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-6" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <span>
                            دسته بندی محصولات
                        </span>
                    </button>
                    
            </nav>
        
        {/* filter black */}
        <div className={`fixed inset-0 z-109 bg-black/50 duration-300 
        ${showSearchBox ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setSearchBox(false)}></div>
        <div className={`fixed inset-0 z-10 bg-black/50 duration-300 
        ${showSidebar ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setSidebar(false)}></div>
        </header>




        {/* nav mobile */}
        <header className="md:hidden block fixed top-0 right-0 z-110 w-full bg-white dark:bg-gray-900 shadow-xl shadow-blue-200 dark:shadow-blue-950 py-4 px-2">
            <nav className="relative flex justify-between ">
                {/* logo */}
                <section className="absolute right-1/2 translate-x-1/2 w-25">
                    {mod ? 
                    <Link to="/technolife"><img src="/images/logo.svg" alt="technoLife" /></Link>
                    :
                    <Link to="/technolife"><img src="/images/white_logo.svg" alt="technoLife" /></Link>
                    }
                </section>
                {/* menu */}
                <button onClick={()=>setShowMenu((prev)=>!prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-10 text-blue-950 dark:text-gray-200" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                {/* cart && search */}
                <section className="flex items-center gap-2">
                    {/* cart */}
                    <Link to="/cart" className="relative p-2 border-2 border-blue-950 dark:border-gray-200 text-blue-950 dark:text-gray-200 rounded-full duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <span className="absolute -bottom-1 -right-1 bg-red-700 text-white text-[10px] rounded-full px-2">
                            {(getTotalCount()).toLocaleString("fa-IR")}
                        </span>
                    </Link>
                    {/* search */}
                    <button onClick={()=>setShowSearchBoxMoble((prev)=>!prev)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-10 p-2 border-2 border-blue-950 dark:border-gray-200 text-blue-950 dark:text-gray-200 rounded-full duration-300" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </section>
            </nav>
        </header>
        {/* menu */}
        <Sidebar open={showMenu} setOpen={setShowMenu}  dayNight={dayNight} mod={mod}/>
        <div onClick={()=>setSidebar(false)} className={`fixed inset-0 z-210 bg-black/30 duration-300 ${showMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}></div>

        {/* search box */}
        <SearchBoxMoble open={showSearchBoxMoble} setOpen={setShowSearchBoxMoble}/>

    </React.Fragment>
    )
}

export default Nav