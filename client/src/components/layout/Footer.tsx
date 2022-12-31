const Footer = () => {

  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer-wrapper">
          <div className="Footer-socials flex-row">
            <nav className="Footer-menu">
              <a className="footer-link" href="#">home</a>
              <a className="footer-link" href="#">about us</a>
              <a className="footer-link" href="#">contact</a>
              <a className="footer-link" href="#">partners</a>
            </nav>
            <div className="socials flex-row">
              <a href="https://github.com/Makinloot" title="github" target="_blank">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="https://www.facebook.com/Meta1head/" title="github" target="_blank">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer