import React, { useState, useEffect } from 'react';
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
            <label>Id</label>
            <input id="id" name="id" placeholder="아이디를 입력해주세요" />
          </div>
          <div className='password_input'>
            <label>password</label>
            <input id="password" name="password" type="password" placeholder='비밀번호를 입력해주세요' />
          </div>

          {/* 로그인 버튼 */}
          <button>LogIn</button>
        </div>
      </div>
    </div>
  );
}

export default Login;