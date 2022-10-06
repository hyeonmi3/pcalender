import '../style/header.css';

function Header() {
  return (
    // 1100 이상이면 헤더 이상
    <div className="Header">
      <header className='header'>
        <h2 className='logo'>:P Calender</h2>
        <nav>
          <span>LogIn</span>
          <span>SignUp</span>
        </nav>
        <img className='menu' src='Img/menu.png'/>
      </header>
    </div>
  );
}

export default Header;