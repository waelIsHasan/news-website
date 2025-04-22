import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Tech from "./pages/Tech/Tech.jsx";
import Footer from '../src/components/Footer/Footer.jsx'
import Error from "./pages/Error/Error.jsx";
import Entertainment from "./pages/Entertainment/Entertainment.jsx";
import US from "./pages/US/US.jsx";
import Science from "./pages/Science/Science.jsx";
import Contact from './pages/Contact/Contact.jsx'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/us" element={<US />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/science" element={<Science />} />
          <Route path="*" element={<Error message={'404 Page Not Found !!!'}/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
