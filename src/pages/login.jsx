import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ()=>{
    let location = useLocation()

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

    
    return(
    <React.Fragment>
        <div className="w-1/3 mx-auto mt-15 flex flex-col items-center dark:text-gray-300">
            <Link to="/technolife/"><img className="w-40" src={mod ? "images/logo.svg" : "images/white_logo.svg"} alt="logo" /></Link>
            <p className="flex whitespace-nowrap gap-5 text-[22px] mt-10">
                <span>ورود</span>
                <span>|</span>
                <span>ثبت نام</span>
            </p>
            <p className="mt-10 animate-bounce">
                خوش اومدی :)
            </p>
            <form action="#" className="flex flex-col gap-5 mt-10">
                <div className="md:w-70 w-60 h-12 relative flex rounded-xl">
                    <input required className="peer w-full bg-transparent outline-none px-4 text-base text-blue-500 rounded-xl border border-blue-950 dark:border-gray-300 focus:shadow-md" id="address" type="text" />
                    <label className="absolute top-1/2 translate-y-[-50%] bg-white text-blue-500 dark:bg-gray-900 right-4 px-2 peer-focus:top-0 peer-focus:right-3 font-light text-base peer-focus:text-sm peer-focus:text-blue-950 dark:peer-focus:text-gray-300 peer-valid:-top-0 peer-valid:right-3 peer-valid:text-sm peer-valid:text-green-500 duration-150" htmlFor="address">
                    نام کاربری</label>
                </div>
                <div className="md:w-70 w-60 h-12 relative flex rounded-xl">
                    <input required className="peer w-full bg-transparent outline-none px-4 text-base text-blue-500 rounded-xl border border-blue-950 dark:border-gray-300 focus:shadow-md" id="address" type="text" />
                    <label className="absolute top-1/2 translate-y-[-50%] bg-white text-blue-500 dark:bg-gray-900 right-4 px-2 peer-focus:top-0 peer-focus:right-3 font-light text-base peer-focus:text-sm peer-focus:text-blue-950 dark:peer-focus:text-gray-300 peer-valid:-top-0 peer-valid:right-3 peer-valid:text-sm peer-valid:text-green-500 duration-150" htmlFor="address">
                    شماره همراه</label>
                </div>
                <button type="submit" className="md:w-70 w-60 h-12 bg-blue-950 dark:bg-gray-300 text-white dark:text-gray-900 rounded-xl cursor-pointer">
                    ورود
                </button>
            </form>
        </div>    
    </React.Fragment>
    )
}

export default Login