import React, { useState } from 'react';
import Table from './Table/Table';
import Filter from "./Filtre/Filter";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



import { stateoption } from "./Filtre/FilterDB";
import { typeoption } from "./Filtre/FilterDB";
function Signal() {
  const [state, setState] = useState('');
  const [type, setType] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
 
  return(
    
  <div className="flex flex-col">
    <div className="flex items-center space-x-4">
      <div className="w-full">
        <Filter options={stateoption} selected={state} setSelected={setState} />
      </div>
      <div className="w-full">
        <DatePicker placeholderText={'choisir'} selected={selectedDate} onChange={(date) => setSelectedDate(date)}/>
      </div>
      <div className="w-full">
        <Filter options={typeoption} selected={type} setSelected={setType} />
      </div>
      <div className="w-full">
      </div>
    </div>
    <Table f1={state||'الكل'} f2={type||'الكل'} f3={selectedDate?.toLocaleDateString()}/>
      
  </div>
  );
}
export default Signal;