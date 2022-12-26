import logo from '../logo.png';

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="Header-wrapper flex-row">
          <a href="/" className="Header-logo">
            <img src={logo} alt="logo" />
          </a>
          <nav className="Header-menu">
            <a href="/">Home</a>
            <a href="#">Browse</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header