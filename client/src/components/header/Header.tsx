const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="Header-wrapper flex-row">
          <a href="/" className="Header-logo">
            <h1>Karma</h1>
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