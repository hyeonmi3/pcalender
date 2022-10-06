import '../style/header.css';

function Header() {
  return (
    <div className="Header">
      <header className='header'>
        <h2 className='logo'>:P Calender</h2>
        <nav>
          <span>LogIn</span>
          <span>SignUp</span>
        </nav>
      </header>
    </div>
  );
}

export default Header;