import React from "react"

const ProductCart = ({
    timeOffer,
    image,
    title,
    hasDiscount,
    originalPrice,
    currentPrice,
    discountNumber,
})=>{
    return(
        <React.Fragment>
            <div className="min-h-10">
                {hasDiscount ?
                <section className="h-5 mb-2 flex justify-between text-[16px] border-b-2 border-red-800 dark:border-red-400 text-red-800 dark:text-red-400 ">
                    <span>تکنوآف</span>
                    <span>
                        {timeOffer}
                    </span>
                </section>
                :
                <div className="h-5 mb-2"></div>
                }
                {/* img */}
                <section className="aspect-square">
                    <img src={image} alt="" className="w-full h-full object-cover"/>
                </section>
                {/* title */}
                <h3 className="text-[14px] h-12 overflow-scroll dark:text-gray-200 my-2">
                    {title}
                </h3>
                {/* cost */}
                <section className="flex justify-between items-center">
                    {/* تخفیف */}
                    {hasDiscount && 
                    <span className="text-[14px] text-white bg-red-800  px-1 rounded-md"> 
                        {discountNumber?.toLocaleString('fa-IR')}٪
                    </span>
                    }
                    {/* قیمت */}
                    <div className="font-bold flex flex-col mr-auto">
                        <span className="text-[18px] dark:text-gray-200">
                            {currentPrice?.toLocaleString('fa-IR')}
                            <small> تومان</small>
                        </span>
                        {hasDiscount &&
                        <span className="text-[16px] text-gray-500 line-through">
                            {originalPrice?.toLocaleString('fa-IR')}    
                            <small> تومان</small>
                        </span>
                        }
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}

export default ProductCart