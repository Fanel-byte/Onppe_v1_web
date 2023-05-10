import React from "react";
import '../Style/Navbar.css';
import { Link } from "react-router-dom";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import logo from '../assets/images/logo.png';
import { ReactComponent as Setting } from '../assets/vectors/setting.svg';


import { GlobeAltIcon } from '@heroicons/react/outline';

function Navbar() {
  return (
   
 
  <div className="relative bg-gray-100 h-full shadow-sm ">
     
       <div class="flex justify-center py-4">

       


        <img class="w-10 h-10 mr-2" src={logo} alt="logo" />
      </div>

      <div >
         <p className="text-center  font-bold text-xs text-orange-400 ">الهيئة الوطنية لحماية وترقية الطفولة</p>
      </div>
    
      <div className="flex-1">
         <ul className="mt-4 space-y-4">
          <li className="flex justify-end items-center px-4 py-2">
          <Link to="/" className="flex items-center text-gray-400 text-xs hover:text-gray-600">

            القائمة الرئيسية
          </Link>
          </li>
          
          <li className="flex justify-end items-center px-4 py-2 group">
          <Link to="/" className="flex items-center text-gray-600 group-hover:text-CustomGreen">
            لوحة القيادة
            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
</svg>

          </Link>
          </li>
        
          <li className="flex justify-end items-center px-4 py-2 group">
          <Link to="/" className="flex items-center text-gray-600 group-hover:text-CustomGreen">
            الاخطارات
            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
</svg>

          </Link>
          </li>

          <li className="flex justify-end items-center px-4 py-2 group">
          <Link to="/" className="flex items-center text-gray-600 group-hover:text-CustomGreen">
            المهام
            <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />  
            </svg>

          </Link>
          
          </li>
          <li className="flex justify-end items-center px-4 py-2 group">
          <Link to="/" className="flex items-center text-gray-600 group-hover:text-CustomGreen">
            الاعدادات
            <svg className="w-5 h-5 ml-2 text-gray-800  " fill="none"  stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>

          </Link>
          </li>
      
        </ul>
    </div>
    

{/* Bottom Divs */}
<div className="absolute bottom-0 left-0 right-0 flex justify-center">
  <div className="flex flex-col items-center text-gray-400">
    <GlobeAltIcon class="h-4 w-4" />
    <div className="text-center py-2">
      <p className="text-xs">العربية</p>
    </div>
  </div>
</div>


      
      
      </div>
   
  );
}
export default Navbar;