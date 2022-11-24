import React from 'react';
import ReactDOM from 'react-dom/client';

import './style/all.css';

import Calender from './component/Calender';
import Login from './component/Login';
import Signup from './component/Signup';
import Header from './component/Header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Login />
  </React.StrictMode>
);

reportWebVitals();