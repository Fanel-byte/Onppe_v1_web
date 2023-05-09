import React from 'react';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

export const App = () => {
  return (
    <div>
      <h1>تحليل التبليغات</h1>
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
};

export default App;
