import React from "react"
import { Link } from "react-router-dom"
import { useEffect } from "react";

const Sidebar = ({ open, setOpen , dayNight , mod })=>{

useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}, [open]);
    
    return(
        <React.Fragment>
            {/* sidebar desktop */}
            <div className={`md:block hidden absolute w-50 bg-white dark:bg-gray-900 top-full right-0 duration-300 ${open ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-10"}`}>
                <ul className="flex flex-col text-gray-500 dark:text-gray-200 h-100 overflow-y-scroll">
                    <li onClick={setOpen} className="group hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Link to="/technolife/list" className="flex items-center gap-5 py-3 px-2 w-full border-b border-gray-300 dark:border-gray-700">
                            <img className="w-8 bg-gray-200 dark:bg-gray-700 p-1 rounded-full shadow" src="images/laptop logo.svg" alt="laptop" />
                            <h3 className="text-[15px]">لپتاپ</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4 hidden group-hover:block mr-auto" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </Link>
                        {/* زیر منو */}
                        <div className="absolute hidden group-hover:block w-50 top-0 right-full h-100 bg-white dark:bg-gray-900">
                            <div className="mx-auto w-5/6">
                                <h3 className="p-1 my-4 bg-gray-100 dark:bg-gray-800 rounded-md text-center text-[15px]">لپتاپ</h3>
                                <ul className="flex flex-col gap-3 text-[14px]">
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            ایسوس
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            مک بوک
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            اچ پی
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            لنوو
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            سرفیس
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li onClick={setOpen} className="group hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Link to="/technolife/list" className="flex items-center gap-5 py-3 px-2 w-full border-b border-gray-300 dark:border-gray-700">
                            <img className="w-8 bg-gray-200 dark:bg-gray-700 p-1 rounded-full shadow" src="images/phone logo.svg" alt="laptop" />
                            <h3 className="text-[15px]">موبایل</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4 hidden group-hover:block mr-auto" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </Link>
                        {/* زیر منو */}
                        <div className="absolute hidden group-hover:block w-50 top-0 right-full h-100 bg-white dark:bg-gray-900">
                            <div className="mx-auto w-5/6">
                                <h3 className="p-1 my-4 bg-gray-100 dark:bg-gray-800 rounded-md text-center text-[15px]">موبایل</h3>
                                <ul className="flex flex-col gap-3 text-[14px]">
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            سامسونگ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            آیفون
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                           شیایومی
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                           سونی
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                           هواوی
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li onClick={setOpen} className="group hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Link to="/technolife/list" className="flex items-center gap-5 py-3 px-2 w-full border-b border-gray-300 dark:border-gray-700">
                            <img className="w-8 bg-gray-200 dark:bg-gray-700 p-1 rounded-full shadow" src="images/handsFree logo.svg" alt="laptop" />
                            <h3 className="text-[15px]">هدفون و هندزفری</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4 hidden group-hover:block mr-auto" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </Link>
                        {/* زیر منو */}
                        <div className="absolute hidden group-hover:block w-50 top-0 right-full h-100 bg-white dark:bg-gray-900">
                            <div className="mx-auto w-5/6">
                                <h3 className="p-1 my-4 bg-gray-100 dark:bg-gray-800 rounded-md text-center text-[15px]">هدفون و هندزفری</h3>
                                <ul className="flex flex-col gap-3 text-[14px]">
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            هدفون
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            ایرپاد
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                           هدست
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li onClick={setOpen} className="group hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Link to="/technolife/list" className="flex items-center gap-5 py-3 px-2 w-full border-b border-gray-300 dark:border-gray-700">
                            <img className="w-8 bg-gray-200 dark:bg-gray-700 p-1 rounded-full shadow" src="images/handWatch logo.svg" alt="laptop" />
                            <h3 className="text-[15px]">ساعت هوشمند</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4 hidden group-hover:block mr-auto" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </Link>
                        {/* زیر منو */}
                        <div className="absolute hidden group-hover:block w-50 top-0 right-full h-100 bg-white dark:bg-gray-900">
                            <div className="mx-auto w-5/6">
                                <h3 className="p-1 my-4 bg-gray-100 dark:bg-gray-800 rounded-md text-center text-[15px]">ساعت هوشمند</h3>
                                <ul className="flex flex-col gap-3 text-[14px]">
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            اپل واچ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            ساعت هوشمند سامسونگ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            ساعت هوشمند شیایومی
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                             ساعت هوشمند تسکو
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                             ساعت هوشمند ریلمی
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    {[...Array(5)].map(()=>(
                    <li onClick={setOpen} className="group hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Link to="/technolife/list" className="flex items-center gap-5 py-3 px-2 w-full border-b border-gray-300 dark:border-gray-700">
                            <img className="w-8 bg-gray-200 dark:bg-gray-700 p-1 rounded-full shadow" src="images/laptop logo.svg" alt="laptop" />
                            <h3 className="text-[15px]">لپتاپ</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4 hidden group-hover:block mr-auto" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </Link>
                        {/* زیر منو */}
                        <div className="absolute hidden group-hover:block w-50 top-0 right-full h-100 bg-white dark:bg-gray-900">
                            <div className="mx-auto w-5/6">
                                <h3 className="p-1 my-4 bg-gray-100 dark:bg-gray-800 rounded-md text-center text-[15px]">لپتاپ</h3>
                                <ul className="flex flex-col gap-3 text-[14px]">
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            ایسوس
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            مک بوک
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            اچ پی
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            لنوو
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/technolife/product" className="hover:font-bold">
                                            سرفیس
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>


            {/* sidebar mobile */}
            <div className={`block md:hidden bg-white dark:bg-gray-800 fixed top-0 right-0 w-2/3 h-screen z-220 duration-300 ${open ? "translate-x-0" : "translate-x-full"} p-5 overflow-y-scroll`}>
                <div>
                    {/* close and dayNight */}
                    <section className="flex justify-between items-center">
                        {/* close btn */}
                        <button onClick={()=>setOpen((prev)=>!prev)} className="dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                        {/* dark mod */}
                        <button onClick={dayNight}>
                        {mod ? 
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-10 bg-blue-950 text-white border-2 border-blue-950 p-1 rounded-full shadow-[0_0_15px_0_var(--tw-shadow-color)] shadow-blue-950" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        )
                         :
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-10 bg-gray-200 text-gray-900 border-2 border-gray-200 p-1 rounded-full shadow-[0_0_15px_0_var(--tw-shadow-color)] shadow-gray-300" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        )}
                        </button>
                    </section>
                    {/* login */}
                    <section className="my-5 pb-5 border-b-2 border-blue-950 dark:border-gray-200">
                        <Link to="/technolife/login" className="px-4 py-2 text-[18px] flex justify-center items-center gap-5 bg-blue-950 dark:bg-gray-200 text-white dark:text-gray-900 rounded-md duration-300">
                            <span>ورود</span> <span>|</span> <span>ثبت نام</span>
                        </Link>
                    </section>
                    <section className="my-5 pb-5 border-b-2 border-blue-950 dark:border-gray-200">
                        <div className="flex flex-col gap-5 text-center text-blue-950 dark:text-gray-300 text-[20px]">
                            <Link className="bg-gray-200 dark:bg-gray-700 p-1 rounded-md">صفحه ۱</Link>
                            <Link className="bg-gray-200 dark:bg-gray-700 p-1 rounded-md">صفحه ۲</Link>
                            <Link className="bg-gray-200 dark:bg-gray-700 p-1 rounded-md">صفحه ۳</Link>
                        </div>
                    </section>

                    {/* list */}
                    <section>
                        <ul>
                            <li>
                                <Link to="/list" onClick={()=>setOpen((prev)=>!prev)} className="flex items-center gap-5 py-3 px-2 w-full border-b border-gray-300 dark:border-gray-700">
                                    <img className="w-10 bg-gray-300 dark:bg-gray-700 p-1 rounded-full shadow" src="images/laptop logo.svg" alt="laptop" />
                                    <h3 className="text-[18px] dark:text-gray-300">لپتاپ</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4 hidden group-hover:block mr-auto" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link to="/list" onClick={()=>setOpen((prev)=>!prev)} className="flex items-center gap-5 py-3 px-2 w-full border-b border-gray-300 dark:border-gray-700">
                                    <img className="w-10 bg-gray-300 dark:bg-gray-700 p-1 rounded-full shadow" src="images/phone logo.svg" alt="laptop" />
                                    <h3 className="text-[18px] dark:text-gray-300">موبایل</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4 hidden group-hover:block mr-auto" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link to="/list" onClick={()=>setOpen((prev)=>!prev)} className="flex items-center gap-5 py-3 px-2 w-full border-b border-gray-300 dark:border-gray-700">
                                    <img className="w-10 bg-gray-300 dark:bg-gray-700 p-1 rounded-full shadow" src="images/handsFree logo.svg" alt="laptop" />
                                    <h3 className="text-[18px] dark:text-gray-300">هندزفری و هدفون</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4 hidden group-hover:block mr-auto" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link to="/list" onClick={()=>setOpen((prev)=>!prev)} className="flex items-center gap-5 py-3 px-2 w-full border-b border-gray-300 dark:border-gray-700">
                                    <img className="w-10 bg-gray-300 dark:bg-gray-700 p-1 rounded-full shadow" src="images/handWatch logo.svg" alt="laptop" />
                                    <h3 className="text-[18px] dark:text-gray-300">ساعت هوشمند</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4 hidden group-hover:block mr-auto" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </Link>
                            </li>
                            {[...Array(10)].map((x,i)=>(
                            <li key={i}>
                                <Link to="/list" onClick={()=>setOpen((prev)=>!prev)} className="flex items-center gap-5 py-3 px-2 w-full border-b border-gray-300 dark:border-gray-700">
                                    <img className="w-10 bg-gray-300 dark:bg-gray-700 p-1 rounded-full shadow" src="images/laptop logo.svg" alt="laptop" />
                                    <h3 className="text-[18px] dark:text-gray-300">لپتاپ</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4 hidden group-hover:block mr-auto" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar