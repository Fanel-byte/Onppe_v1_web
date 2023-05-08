import React from 'react';
import { signalement } from "./TabDB";




function Table({f1, f2 , f3}) {

  return(
    
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

          <table className="min-w-full divide-y divide-gray-200 text-right">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">معالجة</span>
                </th>
                <th
                  scope="col"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
                >
                  حالة
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
                >
                  تاريخ
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
                >
                  نوع
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
                >
                  اسم
                </th>
                
                
                
                
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {console.log("f1 ."+f1+". f1")}
            {signalement.map((signal)=>((f1!=='الكل'?signal.state===f1:true)&&(f2!=='الكل'?signal.type===f2:true)&&(f3!==undefined?signal.date===f3:true)&&
              <tr>
                
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                {signal.state !== 'معالج'&&(
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    معالجة      
                  </a>)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {signal.state === 'معالج'&&(
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold text-[#59C55E]">
                    {signal.state}       
                  </span>)}
                {signal.state === 'قيد المعالجة'&&(
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold text-[#F28123]">
                  {signal.state}       
                  </span>)}
                {signal.state ===  'غير معالج' &&(
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold text-[#F50032]">
                  {signal.state}       
                  </span>)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{signal.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{signal.type}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                
                  <div className="text-sm font-medium text-gray-900">
                    {signal.name}
                  </div>
                </td>
              </tr>
            ))} 
            </tbody>
          </table>
        </div>
      
  );
}
export default Table;