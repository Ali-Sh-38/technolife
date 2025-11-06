import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';
import React, { useContext, useEffect, useState } from "react";
import CartOpinion from "../component/cartOpinion";
import RatingBars from "../component/ratingBox";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../component/cartContext";
import { Toaster, toast } from "react-hot-toast";
import useShow from "../custom hook/useShow";


const Product = ()=>{
    const { addToCart } = useCart()
    
    
    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(()=> {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(response => {
            console.log(response.data);
            
        setProduct({
            id: response.data.id,
            title: response.data.title,
            image: response.data.image,
            hasDiscount: Math.random() > 0.5,
            discountNumber: discount,
            originalPrice: (response.data.price * 100000),
            currentPrice: (response.data.price * 100000 * (1 - discount/100) ),
            originalPriceFA: (response.data.price * 100000).toLocaleString("fa-IR"),
            currentPriceFA: (response.data.price * 100000 * (1 - discount/100) ).toLocaleString("fa-IR"),
            category : response.data.category,
            description : response.data.description,
            rating : response.data.rating.rate,
        });
        });
    }, [id]);

    const discount = Math.floor(Math.random() * 20) + 10;

    
    const [fullImage, setFullImage] = useState(null);

    const [showText3,setShowText3]=useShow()


    if (!product) return <div>در حال بارگذاری...</div>;

    const successSend = () => toast.success('محصول به سبد اضافه شد')
    
    
    return(
    <React.Fragment>
        
        <Toaster position="top-left" reverseOrder={false} />
        
        <div className="m-5 md:mt-5 mt-25 flex md:flex-row flex-col items-start gap-10">
            {/* info */}
            <div className="w-full md:w-3/4 flex md:flex-row flex-col-reverse gap-5 p-5 shadow-[0_0_10px_0_var(--tw-shadow-color)] shadow-gray-300 dark:shadow-gray-700 rounded-xl">
                <section className="md:w-6/10 w-full flex flex-col gap-5">
                    {/* name */}
                    <h1 className="text-blue-950 dark:text-gray-300 text-[22px]">
                      {product.title}
                    </h1>
                    {/* opinion */}
                    <section className="text-gray-700 dark:text-gray-300 text-[16px] border-b border-gray-300 dark:border-gray-700 p-1 w-max">
                        <a href="#a3">
                            نطرات کاربران   {}
                        </a>
                    </section>
                    {/* color */}
                    <section className="text-gray-700 dark:text-gray-300 text-[16px] border-b border-gray-300 dark:border-gray-700 p-1 w-max">
                        <h2>
                            رنگ :   {}
                        </h2>
                    </section>
                    {/* option */}
                    <section>
                        <h2 className="text-gray-700 dark:text-gray-300 text-[16px] mb-1">
                            ویژگی‌های اصلی
                        </h2>
                        <div className="flex flex-col gap-5 border border-gray-300 dark:border-gray-700 rounded-md p-5">
                            <section className="text-[16px] border-b border-dashed border-gray-300 dark:border-gray-700 pb-1">
                                <span className="text-blue-500 pl-3">عنوان :</span>
                                <span className="text-gray-500">{product.category}</span>
                            </section>
                            <section className="text-[16px] border-b border-dashed border-gray-300 dark:border-gray-700 pb-1">
                                <span className="text-blue-500 pl-3">امتیاز :</span>
                                <span className="text-gray-500">{product.rating}</span>
                            </section>
                            <section className="text-[16px] border-b border-dashed border-gray-300 dark:border-gray-700 pb-1">
                                <span className="text-blue-500 pl-3"> نعداد : </span>
                                <span className="text-gray-500"> {} </span>
                            </section>
                            <section className="text-[16px] border-b border-dashed border-gray-300 dark:border-gray-700 pb-1">
                                <span className="text-blue-500 pl-3">متن :</span>
                                <span className={`text-gray-500 ${showText3 ? "" : "line-clamp-2"}`}>{product.description}</span>
                                <button onClick={setShowText3} className="bg-gray-200 dark:bg-gray-800 text-[16px] text-gray-500 px-1 m-1 rounded-sm">
                                    {showText3 ? "بستن" : " ادامه"}
                                </button>
                            </section>
                        </div>
                    </section>
                </section>
                {/* image && icons */}
                <section className="md:w-4/10 w-full">
                    {/* icons */}
                    <div className="flex justify-evenly mb-5">
                        <div className="group relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-7 text-gray-700 dark:text-gray-300 p-1 bg-black/10 dark:bg-graytext-gray-200/10 rounded-full cursor-pointer" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>
                            <span className="absolute bottom-10 right-1/2 translate-x-1/2 hidden group-hover:block px-2 bg-white dark:bg-gray-800 text-[14px] text-gray-700 dark:text-gray-300 rounded-full shadow-[0_0_5px_0_var(--tw-shadow-color)] shadow-gray-500 whitespace-nowrap">
                                اشتراک گذاری
                            </span>
                        </div>
                        
                        <div className="group relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-7 text-gray-700 dark:text-gray-300 p-1 bg-black/10 dark:bg-white/10 rounded-full cursor-pointer" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <span className="absolute bottom-10 right-1/2 translate-x-1/2 hidden group-hover:block px-2 bg-white dark:bg-gray-800 text-[14px] text-gray-700 dark:text-gray-300 rounded-full shadow-[0_0_5px_0_var(--tw-shadow-color)] shadow-gray-500 whitespace-nowrap">
                                نظرات کاربران
                            </span>
                        </div>

                        <div className="group relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-7 text-gray-700 dark:text-gray-300 p-1 bg-black/10 dark:bg-white/10 rounded-full cursor-pointer" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                            </svg>
                            <span className="absolute bottom-10 right-1/2 translate-x-1/2 hidden group-hover:block px-2 bg-white dark:bg-gray-800 text-[14px] text-gray-700 dark:text-gray-300 rounded-full shadow-[0_0_5px_0_var(--tw-shadow-color)] shadow-gray-500 whitespace-nowrap">
                                اطلاع رسانی
                            </span>
                        </div>

                        <div className="group relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-7 text-red-500 p-1 bg-black/10 dark:bg-white/10 rounded-full cursor-pointer" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            <span className="absolute bottom-10 right-1/2 translate-x-1/2 hidden group-hover:block px-2 bg-white dark:bg-gray-800 text-[14px] text-gray-700 dark:text-gray-300 rounded-full shadow-[0_0_5px_0_var(--tw-shadow-color)] shadow-gray-500 whitespace-nowrap">
                                مورد علاقه
                            </span>
                        </div>
                    </div>
                    {/* images */}
                    <div>
                        <InnerImageZoom
                            className="overflow-hidden rounded-md"
                            src={product.image} 
                            zoomSrc={product.image}
                            zoomType="hover"
                        />
                        <div className="flex justify-center gap-2 h-20">
                            {/* other images */}
                            {[...Array(4)].map((i)=>(
                                <div key={i} onClick={() => setFullImage(product.image)}
                                className="w-20 aspect-square cursor-pointer rounded-md overflow-hidden border-2 border-blue-400 hover:border-blue-700 p-1">
                                <img src={product.image} className="w-full h-full object-cover" />
                                </div>
                            ))}
                            {/* full screen */}
                            {fullImage && (
                                <div className="fixed inset-0 bg-black/60 z-400 flex items-center justify-center p-4"
                                onClick={() => setFullImage(null)}>
                                <img src={fullImage} alt="تمام صفحه" className="max-w-full max-h-full object-contain"/>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
            
            {/* cart section */}                                           {/*var(--tw-shadow-color)یعنی رنگ رو از تیلوید بگیر*/}
            <div className="w-full md:w-1/4 rounded-xl p-5 shadow-[0_0_10px_0_var(--tw-shadow-color)] shadow-gray-300 dark:shadow-gray-700">
                {/* گارانتی */}
                <div className="flex flex-col gap-2 text-[14px] text-green-500">
                    <section className="flex gap-2 items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <p>
                            ضمانت کالا
                        </p>
                    </section>
                    <section className="flex gap-2 items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <p>
                            ارزیابی عملکرد: عالی
                        </p>
                    </section>
                    <section className="flex gap-2 items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <p>
                            گارانتی اصالت و سلامت فیزیکی کالا
                        </p>
                    </section>
                </div>
                {/* قیمت */}
                <div className="mt-5">
                    {/* if discount */}
                    {product.hasDiscount ? 
                    <div className="font-bold flex items-center gap-1 p-1 w-max mr-auto my-2">
                            <span className="text-[16px] text-gray-500 line-through">
                                {product.originalPriceFA}<small> تومان</small>
                            </span>
                            <span className="text-[20px] dark:text-gray-200">
                                {product.currentPriceFA}<small> تومان</small>
                            </span>
                    </div>
                    :
                    <div className="font-bold flex items-center gap-1 p-1 w-max mr-auto my-2">
                            <span className="text-[20px] dark:text-gray-200">
                                {product.originalPriceFA}<small> تومان</small>
                            </span>
                    </div>
                    }
                    {/* if discount */}
                    {product.hasDiscount &&
                    <div className="flex justify-between my-2">
                        <p className="w-max text-[16px] bg-red-800 text-white px-3 py-1 rounded-full">
                            {(discount).toLocaleString("fa-IR")}%
                        </p>
                        <p className="w-max text-[16px] bg-red-800 text-white px-3 py-1 rounded-full">
                            {((product?.originalPrice) - (product?.currentPrice)).toLocaleString("fa-IR")} <small> تومان تخفیف</small>
                        </p>
                    </div>
                    }
                </div>
                {/* ++++++++++++++++++++++++++++++++++++++++ */}
                {/* add to cart */}
                <button onClick={() => {
                    addToCart({
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.currentPrice || product.originalPrice,
                    originalPrice: product.originalPrice,
                    hasDiscount: product.hasDiscount,
                    discountNumber: product.discountNumber,
                    });

                    successSend();
                }}
                type="button" className="relative w-full flex justify-end items-center bg-blue-950 dark:bg-gray-300 text-[16px] text-white dark:text-gray-900 p-2 mt-5 rounded-md cursor-pointer">
                    <span className="absolute right-1/2 translate-x-1/2">
                        افزودن به سبد خرید
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>
            </div>
        </div>

        {/* sell section */}
        <div className="flex flex-col gap-10 my-20 md:mx-10 mx-5">
            {/* all sellers */}
            <div>
                <p className="text-[20px] text-blue-950 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700 w-full p-1 mb-3">
                    کل فروشندگان
                </p>
                {/* list of sellers */}
                <div className="flex flex-col gap-3">
                    {[...Array(3)].map((x,i)=>(
                        <div key={i} className="flex justify-between items-center bg-gray-200 dark:bg-gray-800 rounded-md w-full md:py-2 md:px-5 py-1 px-2 text-[10px]">
                        {/* 1 */}
                        <section className="dark:text-gray-200">
                            <p className="text-[16px] mb-1">
                                استورشاپ
                            </p>
                            <p className="hidden md:block text-[12px] text-blue-500">
                                ارزیابی عملکرد : عالی
                            </p>
                        </section>
                        {/* 2 */}
                        <section className=" dark:text-gray-200">
                            <p className="md:text-[14px] text-[10px] mb-1">
                                ارسال فوری
                            </p>
                            <p className="md:text-[12px] text-[10px] text-blue-500">
                                موجود در انبار
                            </p>
                        </section>
                        {/* 3 */}
                        <section className="hidden md:flex items-center gap-2 md:text-[14px] dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            <span>
                                گارانتی اصالت و سلامت فیزیکی کالا
                            </span>
                        </section>
                        {/* 4 */}
                        <section className="flex items-center gap-2">
                            <div className="font-bold flex md:flex-row flex-col-reverse items-center gap-1 p-1 w-max mr-auto whitespace-nowrap">
                                    <span className="md:text-[14px] text-[10px] text-gray-500 line-through">
                                        ۳,۰۰۰,۰۰۰
                                    </span>
                                    <span className="md:text-[18px] text-[12px] dark:text-gray-200">
                                        ۲,۲۶۰,۰۰۰<small> تومان</small>
                                    </span>
                            </div>
                            <button type="button" className="w-full justify-end items-center bg-blue-950 dark:bg-gray-300 md:text-[16px] text-[14px] text-white dark:text-gray-900 md:px-5 px-2 py-1 rounded-md cursor-pointer">
                                افزودن
                            </button>
                        </section>
                    </div>
                    ))}
                </div>
            </div>
            {/* aghsat sellers */}
            <div>
                <p className="text-[20px] text-blue-950 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700 w-full p-1 mb-3">
                     فروشندگان اقساطی
                </p>
                {/* list of sellers */}
                <div className="flex flex-col gap-3">
                    {[...Array(3)].map((x,i)=>(
                        <div key={i} className="flex justify-between items-center bg-gray-200 dark:bg-gray-800 rounded-md w-full md:py-2 md:px-5 py-1 px-2 text-[10px]">
                        {/* 1 */}
                        <section className="dark:text-gray-200">
                            <p className="text-[16px] mb-1">
                                استورشاپ
                            </p>
                            <p className="hidden md:block text-[12px] text-blue-500">
                                ارزیابی عملکرد : عالی
                            </p>
                        </section>
                        {/* 2 */}
                        <section className=" dark:text-gray-200">
                            <p className="md:text-[14px] text-[10px] mb-1">
                                ارسال فوری
                            </p>
                            <p className="md:text-[12px] text-[10px] text-blue-500">
                                موجود در انبار
                            </p>
                        </section>
                        {/* 3 */}
                        <section className="hidden md:flex items-center gap-2 md:text-[14px] dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            <span>
                                گارانتی اصالت و سلامت فیزیکی کالا
                            </span>
                        </section>
                        {/* 4 */}
                        <section className="flex items-center gap-2">
                            <div className="font-bold flex md:flex-row flex-col-reverse items-center gap-1 p-1 w-max mr-auto whitespace-nowrap">
                                    <span className="md:text-[14px] text-[10px] text-gray-500 line-through">
                                        ۳,۰۰۰,۰۰۰
                                    </span>
                                    <span className="md:text-[18px] text-[12px] dark:text-gray-200">
                                        ۲,۲۶۰,۰۰۰<small> تومان</small>
                                    </span>
                            </div>
                            <button type="button" className="w-full justify-end items-center bg-blue-950 dark:bg-gray-300 md:text-[16px] text-[14px] text-white dark:text-gray-900 md:px-5 px-2 py-1 rounded-md cursor-pointer">
                                افزودن
                            </button>
                        </section>
                    </div>
                    ))}
                </div>
            </div>
            {/* icons zemanat */}
            <div className="flex justify-center items-center gap-10 mt-10">
                {[...Array(4)].map((x,i2)=>(
                <section key={i2} className="flex flex-col items-center">
                    <img className="md:w-15 w-10" src="images/zemanat.svg" alt="" />
                    <p className="text-gray-500 md:text-[14px] text-[10px] text-center">۷ روز ضمانت برگشت کالا</p>
                </section>
                ))}
            </div>
        </div>

        {/* more info */}
        <div className="md:mx-10">
            {/* header */}
            <div className="bg-gray-200 dark:bg-gray-800 flex justify-start gap-5 text-[14px] text-blue-500 border-b border-blue-500 px-5 py-3">
                <a href="#a1">
                    مشخصات فنی
                </a>
                <a href="#a2">
                    نقد و بررسی
                </a>
                <a href="#a3">
                    نظرات کاربران
                </a>
            </div>
            {/* body */}
            <div className="p-5 flex flex-col gap-10">
                {/* مشخصات فنی */}
                <section id="a1">
                    <h3 className="font-semibold text-[20px] dark:text-gray-300 mb-2">
                        مشخصات فنی
                    </h3>
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
                        {[...Array(6)].map((x,i3)=>(
                            <div key={i3} className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md">
                                <h4 className="text-[14px] dark:text-gray-300">
                                    وزن :
                                </h4>
                                <small className="text-[12px] text-gray-500">
                                    ۲.۶ کیلوگرم
                                </small>
                            </div>
                        ))}
                    </div>
                </section>
                {/* نقد و بررسی */}
                <section id="a2">
                    <h3 className="font-semibold text-[20px] dark:text-gray-300 mb-2">
                        نقد و بررسی
                    </h3>
                    <div className="p-2 border-x-5 border-gray-200 dark:border-gray-800 ">
                        <p className="text-[16px] text-gray-700 dark:text-gray-400 py-1">
                        پلی استیشن 5 اسلیم دیجیتال اروپا
                        </p>
                        <p className="text-[14px] text-gray-500">
                        پلی استیشن 5 اسلیم دیجیتال اروپا نسخه‌ای جمع‌وجورتر از کنسول نسل نهمی سونی است. این مدل با هدف ارائۀ همان تجربۀ گیمینگ پیشرفتۀ پلی استیشن 5 در قالبی کوچک‌تر و سبک‌تر طراحی شده است. پی اس فایو اسلیم دیجیتال اروپا نسبت به نسخۀ استاندارد، ۳۰ درصد کوچک‌تر و ۲۴ درصد سبک‌تر بوده و وزن آن به ۲.۶ کیلوگرم کاهش یافته است. 
                        این کنسول فاقد درایو نوری است و تنها از بازی‌های دیجیتال پشتیبانی می‌کند، اما کاربران می‌توانند با پرداخت هزینۀ اضافی، درایو بلوری خارجی نصب کنند. برای اطلاع از  قیمت پی اس 5 می‌توانید از صفحۀ گیمینگ در فروشگاه تکنولایف دیدن کنید.
                        </p>
                    </div>
                    <div className="p-2 border-x-5 border-gray-200 dark:border-gray-800 ">
                        <p className="text-[16px] text-gray-700 dark:text-gray-400 py-1">
                        مشخصات ظاهری
                        </p>
                        <p className="text-[14px] text-gray-500">
                        پی اس فایو اسلیم دیجیتال ریجن اروپا با طراحی مدرن و مینیمالیستی خود توانسته است زیبایی و سادگی را در کنار هم به نمایش بگذارد. صفحات کناری دو تکه‌ای آن که با خطوط مورب طراحی شده‌اند، نه تنها ظاهری شیک و متفاوت به کنسول بخشیده‌اند، بلکه احساس نوآوری و پویایی را به کاربر القا می‌کنند. یکی از ویژگی‌های برجسته در این مدل، قابلیت اضافه یا حذف درایو بلوری است که انعطاف بیشتری به کاربران می‌دهد تا بین نسخۀ دیجیتال یا فیزیکی انتخاب کنند.
                        در بخش پشتی دستگاه، تغییر درگاه USB Type-A به USB Type-C یک گام دیگر در راستای هماهنگی با تکنولوژی‌های مدرن برداشته شده است و این تغییر، انتقال داده‌ها و اتصال لوازم جانبی را آسان‌تر می‌کند. پایۀ نگهداری جدید این کنسول نیز با طراحی بهینه‌شده و کم‌حجم خود، نه تنها جلوه‌ای زیبا به کنسول می‌بخشد، بلکه امکان قرار دادن آن در هر محیط و فضایی را بدون محدودیت فراهم می‌سازد. با وجودی که این محصول به لحاظ ظاهری پیشرفت قابل توجهی داشته است، اما قیمت پی اس فایو اسلیم دیجیتال رقم قابل قبولی دارد که امکان خرید آن برای کاربران مختلف فراهم شده است..
                        </p>
                    </div>
                </section>
                {/* نظرات */}
                <section id="a3" className="">
                    <h3 className="font-semibold text-[20px] dark:text-gray-300 mb-2">
                        نظرات کاربران
                    </h3>
                    <div className="flex md:flex-row flex-col-reverse justify-between items-start">
                        {/* نظرات */}
                        <section className="md:w-1/2 w-full">
                            <CartOpinion></CartOpinion>
                            <CartOpinion></CartOpinion>
                            <CartOpinion></CartOpinion>
                            <CartOpinion></CartOpinion>
                            <CartOpinion></CartOpinion>
                            <CartOpinion></CartOpinion>
                        </section>
                        {/* ثبت نظر */}
                        <section className="md:w-1/2 w-full md:sticky md:top-25">
                            <RatingBars
                            average={product.rating}
                            distribution={[70, 20, 5, 3, 2]}
                            />
                        </section>
                    </div>
                </section>
            </div>
        </div>
    


    </React.Fragment>
    )
}

export default Product