import "../../App.css";
import React, { useState } from 'react';
import Header from "../../components/Header";
import Navbar from "../../components/Navbar/Navbar";
import Signal from "../../components/Signal";

export function Dashboard(){
    return (
        <div className="Dashboard">
        <div className="grid grid-cols-12 grid-rows-12">
        
          <div className="col-span-10">
            <Header />
{/*le code de la partie signalement ici */}
            <Signal/>
    
          </div>
          
          <div className="col-span-2">
            <Navbar /> 
          </div>
          
         
        </div>
        
        
        </div>
    
      );
}
export default Dashboard;
