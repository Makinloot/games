import Search from "./Search";
import Burger from "./Burger";

const Header = () => {

  return (
    <div className="Header">
      <div className="container">
        <div className="Header-wrapper flex-row">
          <nav className="Header-menu">
            <a href="/">Home</a>
            <a href="/browse">Browse</a>
            <a href="#">Contact</a>
          </nav>
          <Search />
          <Burger />
        </div>
      </div>
    </div>
  );
};

export default Header;
