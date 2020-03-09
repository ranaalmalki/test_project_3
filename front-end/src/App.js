import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './component/Register';
import HomePage from './component/home_page/HomePage';
import './App.css';
import './component/home_page/HomePage.css';

function App() {
  return (
    <div>
      {/* <Register/> */}
      <HomePage/>
    </div>
  );
}

export default App;
