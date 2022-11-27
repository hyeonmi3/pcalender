import '../style/header.css';

function Header() {
  return (
    // 1100 이상이면 헤더 이상
    <div className="Header">
      <header className='header'>
        {/* 로고 */}
        <h2 className='logo'>:P Calender</h2>
      </header>
    </div>
  );
}

export default Header;