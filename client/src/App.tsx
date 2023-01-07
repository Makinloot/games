import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import Game from "./components/Game/Game";
import List from "./components/List/List";
import Error from "./components/404";
import Browse from "./components/Browse/Browse";
import BrowseByGenres from "./components/Browse/BrowseByGenres";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/game/:id`} element={<Game />} />
          <Route path={`/search/:name/:page`} element={<List />} />
          <Route path={`/browse/:page`} element={<Browse />} />
          <Route path={`/browse/:genre/:page`} element={<BrowseByGenres />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
