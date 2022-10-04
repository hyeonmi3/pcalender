import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/login.css';

function Login() {
  return (
    <div className="Calender">
      <div className='Header'>
        <img className='Logo' src='Img/PCalender_Logo.png'/>
      </div>
      <div className='Login_body'>
        <div className='box'></div>
      </div>
    </div>
  );
}

export default Login;