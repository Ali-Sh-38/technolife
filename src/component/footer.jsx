import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.svg";
import whiteLogo from "/images/white_logo.svg";

const Footer =()=>{
    
    const [mod, setMod] = useState(()=>{
            return JSON.parse(localStorage.getItem("darkmod")) || false;  //از لوکال مقدار اولیه میگیریم
        });
        
        useEffect(() => {
            localStorage.setItem("darkmod", JSON.stringify(mod));
            
          if (mod) {
            document.body.classList.remove("dark");
          } else {
            document.body.classList.add("dark");
          }
        }, [mod]);
    
    return(
    <React.Fragment>
        <div className="bg-gradient-to-t from-blue-700 to-white dark:to-gray-900 mt-20">
            <div className="md:mx-10 mx-5 pt-20 flex flex-col gap-10">
                {/* logo */}
                <section className="dark:text-gray-300 border-b border-blue-950 dark:border-white py-5">
                    {mod ? 
                    <Link to="/technolife/"><img className="w-30" src={logo} alt="technoLife" /></Link>
                    :
                    <Link to="/technolife/"><img className="w-30" src={whiteLogo} alt="technoLife" /></Link>
                    }
                </section>
                {/* list */}
                <section className="dark:text-gray-300 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-10 p-1">
                    {/* 1 */}
                    <section>
                        <h4 className="md:text-[20px] text-[16px] font-semibold mb-5">
                            دسترسی سریع
                        </h4>
                        <ul className="flex flex-col gap-2 md:text-[16px] text-[12px]">
                            {[...Array(5)].map((x,i)=>(
                                <li key={i}>
                                <Link to="/list">
                                    گوشی سامسونگ
                                </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                    {/* 2 */}
                    <section>
                        <h4 className="md:text-[20px] text-[16px] font-semibold mb-5">
                            پرفروش ترین محصولات
                        </h4>
                        <ul className="flex flex-col gap-2 md:text-[16px] text-[12px]">
                            {[...Array(5)].map((x,i)=>(
                                <li key={i}>
                                <Link to="/list">
                                    آیفون ۱۷
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </section>
                    {/* 3 */}
                    <section>
                        <h4 className="md:text-[20px] text-[16px] font-semibold mb-5">
                            درباره ما
                        </h4>
                        <ul className="flex flex-col gap-2 md:text-[16px] text-[12px]">
                            {[...Array(5)].map((x,i)=>(
                                <li key={i}>
                                <Link to="/list">
                                   سوالات متداول
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </section>
                    {/* 4 */}
                    <section>
                        <h4 className="md:text-[20px] text-[16px] font-semibold mb-5">
                            قوانین و مقررات
                        </h4>
                        <ul className="flex flex-col gap-2 md:text-[16px] text-[12px]">
                            {[...Array(5)].map((x,i)=>(
                                <li key={i}>
                                <Link to="/list">
                                   حریم خصوصی کاربران
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </section>
                </section>
                {/* other */}
                <section className="flex flex-col md:flex-row justify-between items-center md:border-t border-blue-950 dark:border-white w-full">
                    <section className="flex justify-center gap-5 md:border-0 border-t border-blue-950 dark:border-white py-10 p-1">
                        <a href="#"><img className="md:w-50 w-30" src="images/techno gold.webp" alt="" /></a>
                        <a href="#"><img className="md:w-50 w-30" src="images/techno gold.webp" alt="" /></a>
                        <a href="#"><img className="md:w-50 w-30" src="images/techno gold.webp" alt="" /></a>
                    </section>
                    <section className="flex md:justify-end justify-center gap-5 md:border-0 border-t border-blue-950 dark:border-white py-10 p-1 w-full">
                        <a href="#"><img className="w-15 bg-white rounded-md" src="images/namad.png" alt="" /></a>
                        <a href="#"><img className="w-15 bg-white rounded-md" src="images/namad.png" alt="" /></a>
                        <a href="#"><img className="w-15 bg-white rounded-md" src="images/namad.png" alt="" /></a>
                        <a href="#"><img className="w-15 bg-white rounded-md" src="images/namad.png" alt="" /></a>
                        <a href="#"><img className="w-15 bg-white rounded-md" src="images/namad.png" alt="" /></a>
                    </section>
                </section>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Footer