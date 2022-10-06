import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/login.css';

function Login() {
  return (
    <div className="Calender">
      <div className='Header'>
        <img className='Logo' src='Img/PCalender_Logo.png'/>
      </div>
      {/* 나중에 class 이름들 다 소문자로 하자잉... 다른것도 살려보기 */}
      <div className='Login_body'>
        <div className='Login_box'></div>
      </div>
    </div>
  );
}

export default Login;