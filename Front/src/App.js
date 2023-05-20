import React from 'react';
import Template from './components/Template';
import Details from './pages/details';
import "./App.css";
import AddSignalement from './pages/AddSignalement';
function App () {
  return (
    <Template>
    <AddSignalement/>
     {/* <Details/> */}
    </Template>
  );
};

export default App;
