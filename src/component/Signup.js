import '../style/auth.css';

function Signup() {
  return (
    <div className="Signup">
      <div className='signup'>
        <div className='signup_box'>
          {/* 로고 */}
          <h1 className='signup_logo'>:P Calender</h1>

          {/* 입력 */}
          <div className='id_input'>
            <label>Id</label>
            <input id="id" name="id" placeholder="아이디를 입력해주세요" />
          </div>
          <div className='password_input'>
            <label>password</label>
            <input id="password" name="password" type="password" placeholder='비밀번호를 입력해주세요' />
          </div>
          <div className='password2_input'>
            <label>password</label>
            <input id="password2" name="password2" type="password" placeholder='뭐라적어야 하냐' />
          </div>

          {/* 로그인 버튼 */}
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;