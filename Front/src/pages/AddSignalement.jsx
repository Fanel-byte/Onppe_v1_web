import React,{useEffect,useState} from 'react';
import { Icon } from '@iconify/react';
import Axios from 'axios';
export default function AddSignalement() {
    return (
        
        <>
          <center>
          <p class="font-bold text-3xl mt-16  mx-">هنا يمكنك الابلاغ عن اي خطر يمس بالاطفال</p>
          <p class="font-bold text-3xl  mt-2 mb-6 mx-">
          عن طريق ملء بطاقة الاخطار او الاتصال على الرقم الاخضر 
        1111</p> 
        
        <center>
        <button type="button" class="flex justify-center focus:outline-none text-white focus:ring-green-300 font-normal rounded-lg text-3xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600">
        <Icon icon="fluent:call-16-regular" color="white" width="40" height="40" class='mr-3 pb-1'/>
            اتصل الان
        </button>
        </center>
  <h1 class="font-bold text-2xl mt-14 mb-10">بطاقة تلقي الاخطارات</h1> </center>
        


<form dir='rtl' class="mx-10 " >

    <div class="mb-10 mx-10">
        <label for="date" class="block mb-7 text-xl font-medium text-gray-300 dark:text-gray-950 "> تاريخ الإخطار</label>
        <input dir='rtl' type="Date" id="date" class="bg-gray-50 border border-gray-300 text-white-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500  flex justify-end " required/>
    </div> 
    
    <div class="mx-10 mb-10 flex justify-center items-center">
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-black mx-4">معلومات الشخص المخطر</h2>
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    </div>

    <div class="mb-10 mx-10">
        <label for="relation" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> علاقة الشخص المخطر (القائم بالاخطار)</label>
        <input dir='rtl' type="text" id="relation" class="bg-gray-50 border border-yellow-300 text-white-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 " required/>       
    </div>   


    <div class="mx-10 mb-10 flex justify-center items-center">
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-black mx-4">معلومات الطفل في خطر</h2>
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    </div>

    <div class="grid gap-10 mb-6 md:grid-cols-2 mx-10">
        <div>
        <label for="prenom" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> الإسم</label>
        <input dir='rtl' type="text" class="bg-gray-50 border border-yellow-300 text-white-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 " required/>       
    
         </div>
         <div>
        <label for="prenom" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> اللقب</label>
        <input dir='rtl' type="text" class="bg-gray-50 border border-yellow-300 text-white-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 " required/>       
         </div>
         <div>
        <label for="sexe" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> الجنس</label>
        <select id="sexe" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>ذكر</option>
        <option>أنثى</option>
        
        </select>
         </div>
         <div>
        <label for="prenom" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> السن</label>
        <input dir='rtl' type="text" class="bg-gray-50 border border-yellow-300 text-white-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 " required/>       
         </div>
       
    </div>
    
    <div class="mb-10 mx-10">
        <label for="relation" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">الحالة العائلية للوالدين</label>
        <input dir='rtl' type="text" id="relation" class="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 " required/>       
    </div>   

        
    <div class="mx-10 mb-10 flex justify-center items-center">
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-black mx-4">مكان تواجد الطفل في خطر </h2>
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    </div>

    <div class="mb-10 mx-10">
        <label for="wilaya" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> الولاية</label>
        <select id="sexe" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                
        <option value="Adrar">أدرار</option>
        <option value="Chlef">الشلف</option>
        <option value="Laghouat">الأغواط</option>
        <option value="Oum El Bouaghi">أم البواقي</option>
        <option value="Batna">باتنة</option>
        <option value="Béjaïa">بجاية</option>
        <option value="Biskra">بسكرة</option>
        <option value="Béchar">بشار</option>
        <option value="Blida">البليدة</option>
        <option value="Bouira">البويرة</option>
        <option value="Tamanrasset">تمنراست</option>
        <option value="Tébessa">تبسة</option>
        <option value="Tlemcen">تلمسان</option>
        <option value="Tiaret">تيارت</option>
        <option value="Tizi Ouzou">تيزي وزو</option>
        <option value="Alger">الجزائر</option>
        <option value="Djelfa">الجلفة</option>
        <option value="Jijel">جيجل</option>
        <option value="Sétif">سطيف</option>
        <option value="Saïda">سعيدة</option>
        <option value="Skikda">سكيكدة</option>
        <option value="Sidi Bel Abbès">سيدي بلعباس</option>
        <option value="Annaba">عنابة</option>
        <option value="Guelma">قالمة</option>
        <option value="Constantine">قسنطينة</option>
        <option value="Médéa">المدية</option>
        <option value="Mostaganem">مستغانم</option>
        <option value="M'Sila">المسيلة</option>
        <option value="El M'ghair">المغير</option>
        <option value="El Menia">المنيعة</option>
        <option value="Naâma">النعامة</option>
        <option value="Ouargla">ورقلة</option>
        <option value="Oran">وهران</option>
        <option value="El Bayadh">البيض</option>
        <option value="Illizi">اليزي</option>
        <option value="Bordj Bou Arreridj">برج بوعريريج</option>
        <option value="Boumerdès">بومرداس</option>
        <option value="El Tarf">الطارف</option>
        <option value="Tindouf">تيندوف</option>
        <option value="Tissemsilt">تسمسيلت</option>
        <option value="El Oued">الوادي</option>
        <option value="Khenchela">خنشلة</option>
        <option value="Souk Ahras">سوق أهراس</option>
        <option value="Tipaza">تيبازة</option>
        <option value="Mila">ميلة</option>
        <option value="Aïn Defla">عين الدفلى</option>
        <option value="El Naâma">النعيمة</option>
        <option value="Aïn Témouchent">عين تيموشنت</option>
        </select>
         </div>

         <div class="mb-10 mx-10">
        <label for="adress" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> العنوان</label>
        <input dir='rtl' type="text" id="adress" class="bg-gray-50 border border-yellow-300 text-white-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 " required/>       
    </div>   

    <div class="mx-10 mb-10 flex justify-center items-center">
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-black mx-4">سبب الاخطار</h2>
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    </div>

    <div class="mb-10 mx-10">
        <label for="adress" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> السبب الرئيسي للاخطار</label>
        <input dir='rtl' type="text" id="adress" class="bg-gray-50 border border-yellow-300 text-white-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 " required/>       
    </div>   
    <div class="mb-10 mx-10">
        <label for="adress" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> محتوى الإخطار مع شرح موجز</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
         </div>   


         <div class="flex items-center justify-center  mb-10 mx-10">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-100/80 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-transparent">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <span class="mb-2 text-sm text-gray-500 dark:text-gray-400 text-2xl">تحميل ملف</span>
            <p class="text-xs text-gray-500 dark:text-gray-400">the maximum file size is 5mb (jpg. jpeg. png. pdf. doc)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
<center>
<button type="button" class="flex justify-center focus:outline-none text-white focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 ">إرسال</button>
</center>
</form>
        
        </>
    )
}

