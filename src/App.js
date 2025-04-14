import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Tech from "./pages/Tech/Tech.jsx";
import HeaderBlockProvider from "./contexts/HeaderBlockContext.js";
import Block from "./components/Block/Block.jsx";
import { ApiProvider } from "./contexts/ApiContext.js";
import { endPoint } from "../src/services/apiEndPoints.js";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route  path="/home" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
