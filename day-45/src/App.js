import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/about-us"} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
