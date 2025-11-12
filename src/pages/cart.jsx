import React, { useEffect } from "react";
import { useCart } from "../component/cartContext";

const Cart = ()=>{

    const { carts, addToCart, removeFromCart , deleteFromCart , getTotalCount , getTotalOriginalPrice , getTotalDiscount , getTotalPrice} = useCart();
    
    return(
    <React.Fragment>
        <div className="h-full">
        <div className="relative md:mx-10 mx-5 md:my-5 my-25 flex md:flex-row flex-col gap-10">
            {/* product */}
            <div className="flex-3">
                <h1 className="text-[18px] dark:text-gray-200 p-1">
                    سبد خرید
                </h1>
                <div className="flex flex-col gap-5">
                    {carts.map((item) =>(
                    <div key={item.id} className="border border-gray-300 dark:border-gray-700 rounded-xl">
                        {/* delete icon */}
                        <button onClick={()=>deleteFromCart(item.id)} className="mr-auto block p-1 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                        {/* product */}
                        <div className="flex md:flex-row flex-col justify-between m-5">
                            <section>
                                <h3 className="text-[18px] dark:text-gray-200">
                                    {item.title}
                                </h3>
                                {/* zemanat */}
                                <div className="md:flex hidden flex-col gap-2 mt-5 text-[14px] text-gray-500">
                                    <section className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4 " viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                        </svg>
                                        <span>
                                            ۱۸ ماه گارانتی شرکتی
                                        </span>
                                    </section>
                                    <section className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4 " viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                        </svg>
                                        <span>
                                           تکنولایف
                                        </span>
                                    </section>
                                    <section className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4 " viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                        </svg>
                                        <span>
                                            موجود در انبار تکنولایف
                                        </span>
                                    </section>
                                </div>
                            </section>
                            <section>
                                <img className="w-30 mb-10 mr-auto" src={item.image} alt="" />
                                {/* vlaue */}
                                <div className="border border-gray-300 dark:border-gray-700 rounded-md px-2 md:w-80 w-full bg-gray-100 dark:bg-gray-800">
                                    {item.hasDiscount ?
                                    <section className="flex items-center justify-center gap-1 p-2">
                                        <span className="text-[16px] dark:text-gray-200">
                                            {(item.price).toLocaleString("fa-IR")} تومان
                                        </span>
                                    </section>
                                    :
                                    <section className="flex items-center justify-center gap-1 p-2">
                                        <span className="text-[12px] text-gray-500 line-through">
                                            {(item.originalPrice).toLocaleString("fa-IR")} تومان
                                        </span>
                                        <span className="text-[16px] dark:text-gray-200">
                                            {(item.price).toLocaleString("fa-IR")} تومان
                                        </span>
                                    </section>
                                    }
                                    <section className="flex items-center justify-around p-2">
                                        <button onClick={()=>addToCart(item)} className="dark:text-white px-2 shadow-[0_0_10px_0_var(--tw-shadow-color)] shadow-gray-300 dark:shadow-gray-700 hover:bg-black/10 rounded-md cursor-pointer">+</button>
                                        <span className="dark:text-white border-b dark:border-white">
                                            {(item.count).toLocaleString("fa-IR")}
                                        </span>
                                        <button onClick={()=>removeFromCart(item.id)} className="dark:text-white px-2 shadow-[0_0_10px_0_var(--tw-shadow-color)] shadow-gray-300 dark:shadow-gray-700 hover:bg-black/10 rounded-md cursor-pointer">-</button>
                                    </section>
                                </div>
                            </section>
                        </div>
                        
                    </div>
                    ))}
           
                </div>
            </div>
            {/* total */}
            <div className="flex-1 sticky top-10 h-max">
                <h2 className="text-[18px] dark:text-gray-200 p-1">
                صورت حساب
                </h2>
                <div className="shadow-[0_0_10px_0_var(--tw-shadow-color)] shadow-gray-300 dark:shadow-gray-700 p-5 rounded-xl flex flex-col gap-5 dark:text-gray-200 text-[16px]">
                    <section className="flex justify-between items-center">
                        <span>تعداد : </span>
                        <span>{(getTotalCount()).toLocaleString("fa-IR")}</span>
                    </section>
                    <section className="flex justify-between items-center">
                        <span>قیمت محصولات : </span>
                        <span>{(getTotalOriginalPrice()).toLocaleString("fa-IR")}</span>
                    </section>
                    <section className="flex justify-between items-center text-red-500">
                        <span>تخفیف محصولات : </span>
                        <span>{(getTotalDiscount()).toLocaleString("fa-IR")}</span>
                    </section>
                    <section className="flex justify-between items-center font-bold">
                        <span>جمع کل : </span>
                        <span>{(getTotalPrice()).toLocaleString("fa-IR")}</span>
                    </section>

                    <button type="button" className="relative w-full flex justify-end items-center bg-blue-950 dark:bg-gray-300 text-[16px] text-white dark:text-gray-900 p-2 rounded-md cursor-pointer">
                    <span className="absolute right-1/2 translate-x-1/2">
                        ادامه خرید
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    </button>
                </div>
            </div>
        </div>
        </div>
    </React.Fragment>
    )
}

export default Cart