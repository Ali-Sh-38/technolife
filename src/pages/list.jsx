import React from "react";
import AccordionFilter from "../component/accordionFilter";
import ProductCart from "../component/productCart";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const List = ()=>{

    const { category } = useParams(); // مثلاً "electronics"
    
    const [activeFilter , setActiveFilter] = useState()
    const filters = [
        'پرفروش ترین',
        'بیشترین قیمت',
        'کمترین قیمت',
        'جدیدترین',
        'بیشترین تخفیف'
    ];
    
    const [products , setProducts] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            const formatProduct = response.data.map((props)=>({
                category: props.category,
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
    // فیتلر محصولات
    const filteredProducts = products.filter(i => i.category === category);
    // ارایه جدید که بجای ارایه پروداکتس استفاده میشه

    if (products.length === 0) return <div>در حال بارگذاری...</div>;
    
    return(
    <React.Fragment>
        <div className="flex md:flex-row flex-col justify-start gap-5 p-5 md:m-0 mt-25">
            {/* filter */}
            <div className="md:w-60 w-full text-[14px] dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md">
                <section className="flex items-center justify-start gap-2 border-b border-gray-300 dark:border-gray-700 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-4" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                    </svg>
                    <span>
                        فیلترها
                    </span>
                </section>
                <section className="p-2">
                    <ul className="flex flex-col">
                        <li>
                            <AccordionFilter filterName="فیلتر بر اساس قیمت">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        زیر ۵۰۰ هزار تومان
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        ۵۰۰ هزار تا ۱ میلیون
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        ۱ میلیون تا ۲ میلیون
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        ۲ میلیون تا ۳ میلیون
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        ۳ میلیون تا ۴ میلیون
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        ۴ میلیون تا ۵ میلیون
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        بیشتر از ۵ میلیون تومان
                                    </span>
                                </label>
                            </AccordionFilter>
                        </li>
                        <li>
                            <AccordionFilter filterName="برند ها">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        سامسونگ
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        اپل
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        شیایومی
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        سونی
                                    </span>
                                </label>
                            </AccordionFilter>
                            <AccordionFilter filterName="رنگ ها">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        سفید
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        مشکی
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        طوسی
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        آبی
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded"/>
                                    <span>
                                        قرمز
                                    </span>
                                </label>
                            </AccordionFilter>
                        </li>
                    </ul>
                </section>
            </div>
            {/* product */}
            <div className="w-full">
                {/* filter nav */}
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-md md:px-5 px-2 py-2">
                    <ul className="flex flex-wrap md:justify-start justify-center gap-5 items-center text-[14px]">
                        {filters.map((filter) => (
                        <li
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`cursor-pointer transition-colors duration-200 ${
                            activeFilter === filter
                                ? 'text-blue-500 border-b border-blue-500'
                                : 'text-gray-600 dark:text-gray-400 hover:text-blue-500'
                            }`}
                        >
                            {filter}
                        </li>
                        ))}
                    </ul>
                </div>

                {/* product */}
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 mt-5">
                    {filteredProducts.map((props)=>(
                        <div key={props.id} className="p-2 shadow-[0_0_10px_0_var(--tw-shadow-color)] shadow-gray-300 dark:shadow-gray-700 rounded-md">
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
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    </React.Fragment>
    )
}

export default List