import Navbar from './Navbar';
import Header from './Header';
import React from 'react';

const Template = ({ children }) => {
  return (
    <div className="flex h-screen flex-row-reverse">
      {/* Side Menu */}
      <div className="w-1/5"> <Navbar/></div>
      
      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white shadow-sm"><Header/></div>
        
        {/* Main Content */}
        <main className="p-2">{children}</main>
      </div>
    </div>
  );
};

export default Template;
