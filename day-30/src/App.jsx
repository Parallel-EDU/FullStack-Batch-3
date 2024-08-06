import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import {ThemeProvider} from "./contexts/ThemeContext";
import About from "./pages/About";
import Innerpage from "./pages/innerPage";
import Navbar from "./components/homePage/navBar";
import Footer from "./components/homePage/footer";
import Contact from "./components/homePage/contact";
import Service from "./pages/Service";
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/about/inner-page" element={<Innerpage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/services" element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
