import React, { useState } from "react";

const AccordionFilter = ({ filterName, children }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
        {/* عنوان + کلیک برای باز/بسته */}
        <div onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-2  cursor-pointer transition-colors select-none">
            <span className="font-semibold">{filterName}</span>
            {/* SVG فلش با چرخش شرطی */}
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 duration-200 ${isOpen ? 'rotate-180' : '' }`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
            </svg>
        </div>

        {/* محتوا با انیمیشن ارتفاع */}
        <div className={`overflow-hidden ${isOpen ? 'h-max' : 'h-0'}`}>
            <div className="p-2 space-y-2 text-gray-600 dark:text-gray-400">
                {children}
            </div>
        </div>
    </div>
  );
};

export default AccordionFilter;