import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/style.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bots from "./pages/ads/Bots";
import Sites from "./pages/ads/Sites";
import Servers from "./pages/ads/Servers";
import Banners from "./pages/ads/Banners";
import NotFound from "./pages/404";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path={"*"} element={<NotFound />} />
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/reklamy/bots"} element={<Bots />} />
          <Route path={"/reklamy/sites"} element={<Sites />} />
          <Route path={"/reklamy/servers"} element={<Servers />} />
          <Route path={"/reklamy/banners"} element={<Banners />} />
        </Routes>
      </Router>
    </div>
  );
}
