import { Link } from "react-router-dom";
import React, { useState } from "react"


const SearchBoxMoble =({open , setOpen})=>{

    const [searchTextMobile , setSearchTextMobile] = useState("")
        let handelChangeMobile = (e)=>{
            setSearchTextMobile(e.target.value)
        }
    
    return(
    <React.Fragment>
        <div className={`fixed top-0 right-0 w-full h-screen bg-gray-100 dark:bg-gray-800 z-220 p-5 ${open ? "block" : "hidden"}`}>
            {/* close btn */}
            <button onClick={()=>setOpen(false)} className="dark:text-gray-300 mb-15 mr-auto block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-black dark:text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
            {/* search box */}
            <div className="relative w-full flex gap-5 items-center px-5 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-400 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-6" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input onChange={handelChangeMobile} type="search" className="w-full placeholder:text-[14px] placeholder:text-gray-400 outline-none" placeholder="محصول , برند یا دسته مورد نظرتان را جستجو کنید"/>
                <div className={`absolute top-12 right-0 lg:w-1/2 md:w-2/3 w-full bg-white dark:bg-gray-900 rounded-md p-5 z-110 duration-300 `}>
                    <p className="text-[14px] text-gray-400 border-b border-gray-500 pb-2">جستجو برای .. {searchTextMobile}</p>
                    <div className="text-[14px] mt-5">
                        <p>
                            جستجو های محبوب
                        </p>
                        <div className="flex flex-wrap gap-2 p-2 text-gray-500 dark:text-gray-300">
                        <Link to="/technolife/list" className="text-[12px] px-2 border border-gray-400 dark:border-gray-600 rounded-full">ساعت هوشمند</Link>
                        <Link to="/technolife/list" className="text-[12px] px-2 border border-gray-400 dark:border-gray-600 rounded-full">گوشی</Link>
                        <Link to="/technolife/list" className="text-[12px] px-2 border border-gray-400 dark:border-gray-600 rounded-full">کابل شارژ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}

export default SearchBoxMoble