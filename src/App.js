import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Tech from "./pages/Tech/Tech.jsx";
import Footer from '../src/components/Footer/Footer.jsx'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route  path="/home" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
