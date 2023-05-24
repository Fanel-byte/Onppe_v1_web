import React, {useState} from 'react';
import Table from './Table/Table';
import Filter from "./Filtre/Filter";
import {Icon} from '@iconify/react';
import searchIcon from '@iconify-icons/ic/search';
import DatePicker from "react-datepicker";
import ar from 'date-fns/locale/ar';
import "react-datepicker/dist/react-datepicker.css";

import {stateoption} from "./Filtre/FilterDB";
import {typeoption} from "./Filtre/FilterDB";
import {adressoption} from "./Filtre/FilterDB";

function Signal() {
    const [state,
        setState] = useState('');
    const [type,
        setType] = useState('');
    const [adress,
        setAdress] = useState('');
    const [source,
        setSource] = useState('');
    const [selectedDateFrom,
        setSelectedDateFrom] = useState(null);
    const [selectedDateTo,
        setSelectedDateTo] = useState(null);
    const [nameSearch,
        setNameSearch] = useState('');
    const [isPopupVisible,
        setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };
    return (
        <div className="flex flex-col touch-action-none overflow-y-hidden overflow-x-hidden overflow-hidden" >
            <div className="text-right">
                <h1 className="text-2xl font-bold">تحليل التبليغات</h1>
                <h2 className="text-lg font-bold">التبليغات</h2>
            </div>

            {/* Buttons added at the top */}
            <div className="flex justify-start space-x-4 mt-4 ml-4">
                <button
                    className="bg-red-500 text-white py-2 px-4 rounded"
                    onClick={togglePopup}>
                    مسح الاخطار
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded">
                    اخطار جديد
                </button>

            </div>

            <div className="flex items-center space-x-4">
                <div className="w-full">
                    <Filter options={stateoption} selected={state} setSelected={setState}/>
                </div>
                <div className="w-full">
                    <Filter options={adressoption} selected={source} setSelected={setSource}/>
                </div>
                <div className="w-full">
                    <Filter options={adressoption} selected={adress} setSelected={setAdress}/>
                </div>
                <div className="w-full">
                    <DatePicker
                        placeholderText={'اختر التاريخ--الى'}
                        selected={selectedDateTo}
                        onChange={(date) => setSelectedDateTo(date)}
                        locale={ar}
                        dateFormat="dd/MM/yyyy"
                        className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md text-right"/>
                </div>
                <div className="w-full">
                    <DatePicker
                        placeholderText={'اختر التاريخ--من'}
                        selected={selectedDateFrom}
                        onChange={(date) => setSelectedDateFrom(date)}
                        locale={ar}
                        dateFormat="dd/MM/yyyy"
                        className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md text-right"/>
                </div>
                <div className="w-full">
                    <Filter options={typeoption} selected={type} setSelected={setType}/>
                </div>
                <div className="w-full relative">
                    <input
                        type="text"
                        placeholder="الاسم و اللقب"
                        value={nameSearch}
                        onChange={(e) => setNameSearch(e.target.value)}
                        className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md text-right"/>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Icon icon={searchIcon} className="text-gray-400"/>
                    </div>
                </div>
            </div>

            <button
                className="flex flex-row justify-center items-center px-8 py-2 gap-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-md"
                style={{
                width: '148px',
                height: '44px',
                left: 'calc(50% - 148px/2 - 682.5px)',
                top: 'calc(50% - 44px/2 - 397px)'
            }}>
                اخطار جديد
            </button>
            <Table
                fstate={state || 'الكل'}
                ftype={type || 'الكل'}
                fadress={adress || 'الكل'}
                fsource={source || 'الكل'}
                fdatefrom={selectedDateFrom}
                fdateto={selectedDateTo}
                nameSearch={nameSearch}/> {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white text-right p-8 rounded shadow">
                        <h3 className="text-lg font-bold mb-4">تأكيد</h3>
                        <p>هل أنت متأكد من مسح الاخطار
                        </p>
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-green-500 text-white py-2 px-4 rounded mr-2"
                                onClick={togglePopup}>
                                إلغاء
                            </button>
                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded"
                                onClick={togglePopup}>
                                مسح الاخطار
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Signal;
