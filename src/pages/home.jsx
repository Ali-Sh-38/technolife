import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider  from "../component/slider";
import { SwiperSlide , Swiper } from "swiper/react";
import ProductCart from "../component/productCart";
import axios from "axios";
import SearchBoxMoble from "../component/searchBoxMobile";
import useShow from "../custom hook/useShow"


const Home = ()=>{

    const [products , setProducts] = useState([])
    const [showText , setShowText] = useShow()
    const [showText2 , setShowText2] = useShow()

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            const formatProduct = response.data.map((props)=>({
                id : props.id ,
                title : props.title ,
                image : props.image ,
                hasDiscount: Math.random() > 0.5,
                discountNumber : Math.floor(Math.random() * 20) + 10 ,
                originalPrice : (props.price * 100000) ,
                currentPrice : (props.price * 120000),
                timeOffer : `${Math.floor(Math.random()*24).toLocaleString("fa-IR")}:${Math.floor(Math.random()*60).toLocaleString("fa-IR")}:${Math.floor(Math.random()*60).toLocaleString("fa-IR")}`
            }))
            setProducts(formatProduct)
        })
    },[])
    
    return(
    <React.Fragment>
        {/* big slider */}
        <Slider className="mainSlider md:m-0 mt-25" slidesPerView={1} spaceBetween={0} pagination={false} navigation={false} loop={true} autoplay={{ delay: 4000 }} speed={1000} FreeMode={false} breakpoints={{1500 : {pagination : true, navigation : true}} }>
            <SwiperSlide>
                <img src="/images/big-slider.webp" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/big-slider.webp" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/big-slider.webp" alt="..." />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/big-slider.webp" alt="..." />
            </SwiperSlide>
        </Slider>
        {/* slider list */}
        <div className="my-15 md:mx-10 mx-2">
            <Slider className="productList" slidesPerView={3.5} spaceBetween={20} breakpoints={{1280 : {slidesPerView : 7 , spaceBetween : 50} , 768 : {slidesPerView : 5 , spaceBetween : 50}}} pagination={false} navigation={false} loop={false} autoplay={false} speed={800} freeMode={true}>
                {[...Array(10)].map((x,i)=>(
                <SwiperSlide>
                    <Link to="/list" key={i} className="group">
                        <div className="aspect-square rounded-full overflow-hidden border-4 border-blue-500 group-hover:border-green-500">
                            <img src="/images/tablet list.webp" alt="" className="w-full h-full object-cover p-1"/>
                        </div>
                        <p className="md:p-5 p-2 md:text-[20px] text-[16px] font-semibold text-blue-500 group-hover:text-green-500">تبلت و آیپد</p>
                    </Link>
                </SwiperSlide>
                ))}
                
            </Slider>
        </div>
        {/* slider 1 offer */}
        <div className="my-15 md:mx-10 mx-2 md:p-4 p-2 border border-gray-300 dark:border-gray-700 rounded-xl">
            {/* تکنواف */}
            <section className="flex justify-between items-center bg-red-800 text-white rounded-md p-2">
                    <h2 className="font-semibold md:text-[20px] text-[18px]">
                        تکنو آف
                    </h2>
                    <Link to="/list" className="flex items-center md:text-[18px] text-[14px]">
                        <span>نمایش همه</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="md:size-5 size-4" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </Link>
            </section>
            {/* اسلایدر */}
            <section className="mt-5">
                <Slider className="offerSlider" navigation={true} pagination={false} slidesPerView={2.5} spaceBetween={30} breakpoints={{1280 : {slidesPerView : 5 , spaceBetween : 60} , 768 : {slidesPerView : 4 , spaceBetween : 50}}} autoplay={{delay : 3000}} speed={800} loop={false} freeMode={false}>
                    {products.map((props)=>(
                        <SwiperSlide>
                            <Link to={`/product/${props.id}`}>
                                <ProductCart
                                title={props.title}
                                hasDiscount={props.hasDiscount}
                                image={props.image}
                                originalPrice={props.originalPrice}
                                currentPrice={props.currentPrice}
                                discountNumber={props.discountNumber}
                                timeOffer={props.timeOffer}
                                />  
                            </Link>
                        </SwiperSlide>
                    ))}
                    
                </Slider>
            </section>
        </div>
        {/* simple img 1*/}
        <div className="my-15 md:mx-10 mx-2 flex md:flex-row flex-col justify-around text-black dark:text-white md:gap-10 gap-5">
            <Link to="/list/jewelery" className="rounded-xl overflow-hidden border p-5">
                <span className="hover:scale-110 duration-500"> جواهرات - لیست واقعی</span>
            </Link>
            <Link to="/list/men's clothing" className="rounded-xl overflow-hidden border p-5">
                <span className="hover:scale-110 duration-500"> لباس های مردانه - لیست واقعی</span>
            </Link>
            <Link to="/list/women's clothing" className="rounded-xl overflow-hidden border p-5">
                <span className="hover:scale-110 duration-500"> لباس های زنانه - لیست واقعی</span>
            </Link>
        </div>
        {/* slider 2 */}
        <div className="my-15 md:mx-10 mx-2 md:p-4 p-2 border border-gray-300 dark:border-gray-700 rounded-xl">
            {/* head */}
            <section className="flex justify-between items-center text-blue-950 dark:text-gray-300 rounded-md">
                    <h2 className="font-semibold md:text-[20px] text-[18px]">
                        پرچمداران هوشمند
                    </h2>
                    <Link to="/list" className="flex items-center md:text-[18px] text-[14px]">
                        <span>نمایش همه</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="md:size-5 size-4" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </Link>
            </section>
            {/* slider */}
            <section className="mt-5">
                <Slider className="offerSlider" navigation={true} pagination={false} slidesPerView={2.5} spaceBetween={30} breakpoints={{1280 : {slidesPerView : 5 , spaceBetween : 60} , 768 : {slidesPerView : 4 , spaceBetween : 50}}} autoplay={{delay : 3000}} speed={800} loop={false} freeMode={false}>
                    {products.map((product)=>(
                        <SwiperSlide>
                            <Link to={`/product/${product.id}`}>
                                <ProductCart
                                title={product.title}
                                hasDiscount={product.hasDiscount}
                                image={product.image}
                                originalPrice={product.originalPrice}
                                currentPrice={product.currentPrice}
                                discountNumber={product.discountNumber}
                                timeOffer={product.timeOffer}
                                />  
                            </Link>
                        </SwiperSlide>
                    ))}
                </Slider>
            </section>
        </div>
        {/* simple img 2*/}
        <div className="my-15 md:mx-10 mx-2 flex md:flex-row flex-col md:gap-10 gap-5">
            <Link to="/list" className="rounded-xl overflow-hidden">
                <img className="hover:scale-110 duration-500" src="/images/iphone 17.webp" alt="..." />
            </Link>
            <Link to="/list" className="rounded-xl overflow-hidden">
                <img className="hover:scale-110 duration-500" src="/images/iphone 17.webp" alt="..." />
            </Link>
            <Link to="/list" className="rounded-xl overflow-hidden">
                <img className="hover:scale-110 duration-500" src="/images/iphone 17.webp" alt="..." />
            </Link>
        </div>
        {/* list mobile */}
        <div className="text-center my-15 md:mx-10 mx-2">
            <h2 className="md:text-[22px] text-[20px] font-bold text-blue-950 dark:text-gray-300">
                برترین های موبایل
            </h2>
            <section className="flex flex-wrap justify-center items-center gap-10 mt-5 dark:text-gray-300">
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/samsung.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        سامسونگ
                    </p>
                </Link>
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/samsung.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        سامسونگ
                    </p>
                </Link>
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/samsung.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        سامسونگ
                    </p>
                </Link>
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/samsung.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        سامسونگ
                    </p>
                </Link>
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/samsung.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        سامسونگ
                    </p>
                </Link>
            </section>
        </div>
        {/* big img */}
        <div className="my-15 md:mx-10 mx-2 md:rounded-t-full overflow-hidden">
            <Link to="/list">
                <img className="w-full" src="/images/digital clock.webp" alt="" />
            </Link>
        </div>
        {/* slider 3 */}
        <div className="my-15 md:mx-10 mx-2 md:p-4 p-2 border border-gray-300 dark:border-gray-700 rounded-xl">
            {/* head */}
            <section className="flex justify-between items-center text-blue-950 dark:text-gray-300 rounded-md">
                    <h2 className="font-semibold md:text-[20px] text-[18px]">
                        لپ‌تاپ‌ها در تکنولایف
                    </h2>
                    <Link to="/list" className="flex items-center md:text-[18px] text-[14px]">
                        <span>نمایش همه</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="md:size-5 size-4" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </Link>
            </section>
            {/* slider */}
            <section className="mt-5">
                <Slider className="offerSlider" navigation={true} pagination={false} slidesPerView={2.5} spaceBetween={30} breakpoints={{1280 : {slidesPerView : 5 , spaceBetween : 60} , 768 : {slidesPerView : 4 , spaceBetween : 50}}} autoplay={{delay : 3000}} speed={800} loop={false} freeMode={false}>
                    {products.map((product)=>(
                        <SwiperSlide>
                            <Link to={`/product/${product.id}`}>
                                <ProductCart
                                title={product.title}
                                hasDiscount={product.hasDiscount}
                                image={product.image}
                                originalPrice={product.originalPrice}
                                currentPrice={product.currentPrice}
                                discountNumber={product.discountNumber}
                                timeOffer={product.timeOffer}
                                />  
                            </Link>
                        </SwiperSlide>
                    ))}
                </Slider>
            </section>
        </div>
        {/* list laptop */}
        <div className="text-center my-15 md:mx-10 mx-2">
            <h2 className="md:text-[22px] text-[20px] font-bold text-blue-950 dark:text-gray-300">
                برترین های لپ‌تاپ
            </h2>
            <section className="flex flex-wrap justify-center items-center gap-10 mt-5 dark:text-gray-300">
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/hp.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        اچ پی
                    </p>
                </Link>
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/hp.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        اچ پی
                    </p>
                </Link>
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/hp.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        اچ پی
                    </p>
                </Link>
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/hp.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        اچ پی
                    </p>
                </Link>
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/hp.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        اچ پی
                    </p>
                </Link>
            </section>
        </div>
        {/* simple img 3*/}
        <div className="my-15 md:mx-10 mx-2 flex md:flex-row flex-col md:gap-10 gap-5">
            <Link to="/list" className="rounded-xl overflow-hidden">
                <img className="hover:scale-110 duration-500" src="/images/salamat.webp" alt="..." />
            </Link>
            <Link to="/list" className="rounded-xl overflow-hidden">
                <img className="hover:scale-110 duration-500" src="/images/salamat.webp" alt="..." />
            </Link>
        </div>
        {/* slider 4 */}
        <div className="my-15 md:mx-10 mx-2 md:p-4 p-2 border border-gray-300 dark:border-gray-700 rounded-xl">
            {/* head */}
            <section className="flex justify-between items-center text-blue-950 dark:text-gray-300 rounded-md">
                    <h2 className="font-semibold md:text-[20px] text-[18px]">
                        کامپیوتر و تجهیزات
                    </h2>
                    <Link to="/list" className="flex items-center md:text-[18px] text-[14px]">
                        <span>نمایش همه</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="md:size-5 size-4" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </Link>
            </section>
            {/* slider */}
            <section className="mt-5">
                <Slider className="offerSlider" navigation={true} pagination={false} slidesPerView={2.5} spaceBetween={30} breakpoints={{1280 : {slidesPerView : 5 , spaceBetween : 60} , 768 : {slidesPerView : 4 , spaceBetween : 50}}} autoplay={{delay : 3000}} speed={800} loop={false} freeMode={false}>
                    {products.map((product)=>(
                        <SwiperSlide>
                            <Link to={`/product/${product.id}`}>
                                <ProductCart
                                title={product.title}
                                hasDiscount={product.hasDiscount}
                                image={product.image}
                                originalPrice={product.originalPrice}
                                currentPrice={product.currentPrice}
                                discountNumber={product.discountNumber}
                                timeOffer={product.timeOffer}
                                />  
                            </Link>
                        </SwiperSlide>
                    ))}
                </Slider>
            </section>
        </div>
        {/* list airpod */}
        <div className="text-center my-15 md:mx-10 mx-2">
            <h2 className="md:text-[22px] text-[20px] font-bold text-blue-950 dark:text-gray-300">
                برترین های هندزفری
            </h2>
            <section className="flex flex-wrap justify-center items-center md:gap-10 gap-5 mt-5 dark:text-gray-300">
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/qcy.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        کیوسی وای
                    </p>
                </Link>
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/qcy.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        کیوسی وای
                    </p>
                </Link>
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/qcy.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        کیوسی وای
                    </p>
                </Link>
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/qcy.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        کیوسی وای
                    </p>
                </Link>
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/qcy.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        کیوسی وای
                    </p>
                </Link>
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/qcy.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        کیوسی وای
                    </p>
                </Link>
                <Link to="/list" className="group w-3/7 md:w-1/6 flex flex-col items-center">
                    <img src="/images/qcy.webp" alt="" className="group-hover:-translate-y-2 duration-300"/>
                    <p className="mt-2">
                        کیوسی وای
                    </p>
                </Link>
            </section>
        </div>
        {/* simple img 4*/}
        <div className="my-15 md:mx-10 mx-2 flex md:flex-row flex-col md:gap-10 gap-5">
            <Link to="/list" className="rounded-xl overflow-hidden">
                <img className="hover:scale-110 duration-500" src="/images/flashmemory.webp" alt="..." />
            </Link>
            <Link to="/list" className="rounded-xl overflow-hidden">
                <img className="hover:scale-110 duration-500" src="/images/flashmemory.webp" alt="..." />
            </Link>
        </div>
        {/* grid product*/}
        <div className="my-15 md:mx-10 mx-2">
            <h2 className="md:text-[22px] text-[20px] font-bold text-blue-950 dark:text-gray-300">
                لوازم خانگی خانه و آشپزخانه
            </h2>
            <div className="grid lg:grid-cols-6 lg:grid-rows-2 md:grid-cols-4 grid-cols-3 md:gap-10 gap-5 mt-5">
                
                {[...Array(12)].map((i)=>(
                <Link key={i} to="/list" className="relative group rounded-xl overflow-hidden">
                    <img className="w-full mx-auto hover:scale-110 duration-300" src="/images/machinwash.webp" alt="" />
                    <p className="absolute right-0 w-full md:translate-y-5 group-hover:-translate-y-10 -translate-y-10 duration-300 p-2 text-white bg-black/50 z-20">
                        لباسشویی
                    </p>
                </Link>
                ))}
            </div>
        </div>
        {/* simple img 5*/}
        <div className="my-15 md:mx-10 mx-2 flex md:flex-row flex-col md:gap-10 gap-5">
            <Link to="/list" className="rounded-xl overflow-hidden">
                <img className="hover:scale-110 duration-500" src="/images/powerbank.webp" alt="..." />
            </Link>
            <Link to="/list" className="rounded-xl overflow-hidden">
                <img className="hover:scale-110 duration-500" src="/images/powerbank.webp" alt="..." />
            </Link>
        </div>
        {/* slider 5 */}
        <div className="my-15 md:mx-10 mx-2 md:p-4 p-2 border border-gray-300 dark:border-gray-700 rounded-xl">
            {/* head */}
            <section className="flex justify-between items-center text-blue-950 dark:text-gray-300 rounded-md">
                    <h2 className="font-semibold md:text-[20px] text-[18px]">
                        لوازم جانبی منتخب   
                    </h2>
                    <Link to="/list" className="flex items-center md:text-[18px] text-[14px]">
                        <span>نمایش همه</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="md:size-5 size-4" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </Link>
            </section>
            {/* slider */}
            <section className="mt-5">
                <Slider className="offerSlider" navigation={true} pagination={false} slidesPerView={2.5} spaceBetween={30} breakpoints={{1280 : {slidesPerView : 5 , spaceBetween : 60} , 768 : {slidesPerView : 4 , spaceBetween : 50}}} autoplay={{delay : 3000}} speed={800} loop={false} freeMode={false}>
                    {products.map((product)=>(
                        <SwiperSlide>
                            <Link to={`/product/${product.id}`}>
                                <ProductCart
                                title={product.title}
                                hasDiscount={product.hasDiscount}
                                image={product.image}
                                originalPrice={product.originalPrice}
                                currentPrice={product.currentPrice}
                                discountNumber={product.discountNumber}
                                timeOffer={product.timeOffer}
                                />  
                            </Link>
                        </SwiperSlide>
                    ))}
                </Slider>
            </section>
        </div>

        
        <footer>
        <hr className="text-gray-300"/>
        <div className="md:mx-10 mx-2 my-10">
        <h3 className="text-gray-600 dark:text-gray-400 text-[18px] mb-3">
            فروشگاه اینترنتی تکنولایف
        </h3>
        <p className={`text-gray-500 text-[14px] ${showText ? "" : "line-clamp-3"} `}>
            فروشگاه اینترنتی تکنولایف سال‌ها است که به‌عنوان بزرگترین فروشگاه کالای دیجیتال مشغول فعالیت است. از آن‌جا که خرید اینترنتی همواره موجی از بی‌اعتمادی و شک را با خود به‌همراه داشته، نماد الکترونیکی می‌تواند خیال خیلی از افراد را راحت کند. تکنولایف با داشتن نماد اعتماد الکترونیکی و عضویت در سازمان صنفی رایانه‌ای کشور، همچنین عضویت در انجمن صنفی فروشگاه‌های اینترنتی، فضای ایمن برای خرید آنلاین را برای مشتریان خود ایجاد کرده است.
            شما می‌توانید خرید کالای دیجیتال مانند خرید لپ تاپ ، گوشی موبایل در مدل‌ها و برندهای مختلف، لوازم جانبی موبایل ، هدفون، و کلیه لوازم دیجیتال مدنظر خود را با بهترین قیمت، در فروشگاه تکنولایف به ثبت برسانید.
        </p>
        <button onClick={setShowText} className="bg-gray-200 dark:bg-gray-800 text-[16px] text-gray-500 px-1 rounded-sm">
            {showText ? "بستن" : " ادامه"}
        </button>
        </div>
        <div className="md:mx-10 mx-2 my-10">
        <h3 className="text-gray-600 dark:text-gray-400 text-[18px] mb-3">
            فروشگاه اینترنتی تکنولایف
        </h3>
        <p className={`text-gray-500 text-[14px] ${showText2 ? "" : "line-clamp-3"} `}>
            فروشگاه اینترنتی تکنولایف سال‌ها است که به‌عنوان بزرگترین فروشگاه کالای دیجیتال مشغول فعالیت است. از آن‌جا که خرید اینترنتی همواره موجی از بی‌اعتمادی و شک را با خود به‌همراه داشته، نماد الکترونیکی می‌تواند خیال خیلی از افراد را راحت کند. تکنولایف با داشتن نماد اعتماد الکترونیکی و عضویت در سازمان صنفی رایانه‌ای کشور، همچنین عضویت در انجمن صنفی فروشگاه‌های اینترنتی، فضای ایمن برای خرید آنلاین را برای مشتریان خود ایجاد کرده است.
            فروشگاه اینترنتی تکنولایف سال‌ها است که به‌عنوان بزرگترین فروشگاه کالای دیجیتال مشغول فعالیت است. از آن‌جا که خرید اینترنتی همواره موجی از بی‌اعتمادی و شک را با خود به‌همراه داشته، نماد الکترونیکی می‌تواند خیال خیلی از افراد را راحت کند. تکنولایف با داشتن نماد اعتماد الکترونیکی و عضویت در سازمان صنفی رایانه‌ای کشور، همچنین عضویت در انجمن صنفی فروشگاه‌های اینترنتی، فضای ایمن برای خرید آنلاین را برای مشتریان خود ایجاد کرده است.
            شما می‌توانید خرید کالای دیجیتال مانند خرید لپ تاپ ، گوشی موبایل در مدل‌ها و برندهای مختلف، لوازم جانبی موبایل ، هدفون، و کلیه لوازم دیجیتال مدنظر خود را با بهترین قیمت، در فروشگاه تکنولایف به ثبت برسانید.
        </p>
        <button onClick={setShowText2} className="bg-gray-200 dark:bg-gray-800 text-[16px] text-gray-500 px-1 rounded-sm">
            {showText2 ? "بستن" : " ادامه"}
        </button>
        </div>
        </footer>
        <SearchBoxMoble/>
    </React.Fragment>
    )
}

export default Home