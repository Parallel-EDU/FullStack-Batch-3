import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import HomePage from './pages/homepage';
import AboutPage from "./pages/aboutpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path={"/"}
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          exact
          path={"/about"}
          element={
            <>
              <AboutPage />
            </>
          }
        />
      </Routes>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
