import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../style/auth.css';

function Login() {
  return (
    <div className="Login">
      <div className='login'>
        <div className='login_box'>
          {/* 로고 */}
          <h1 className='login_logo'>:P Calender</h1>

          {/* 입력 */}
          <div className='id_input'>
            <label htmlFor='input_id'>Id</label>
            <input type='text' name="input_id" placeholder="id" />
          </div>
          <div className='password_input'>
            <label htmlFor='input_pw'>password</label>
            <input type='password' name="input_pw" placeholder='password' />
          </div>

          {/* 로그인 버튼 */}
          <button onClick={
            axios.get('http://localhost:3000/Calender')
            .then((result)=>{})
            .catch(()=>{})
          }>LogIn</button>
        </div>
      </div>
    </div>
  );
}

export default Login;