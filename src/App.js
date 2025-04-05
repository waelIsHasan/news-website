import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import { ApiProvider } from "./contexts/ApiContext.js";
import{ApiTechProvider} from './contexts/ApiTechContext.js'
import Home from './pages/Home/Home.jsx'
import Tech from './pages/Tech/Tech.jsx'

function App() {
  return (
    <BrowserRouter>
      <ApiProvider>
      <ApiTechProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route index path="/home" element={ <Home/> }/>
            <Route path="/tech" element={ <Tech/> }/>
          </Routes>
        </div>
        </ApiTechProvider>
      </ApiProvider>
    </BrowserRouter>
  );
}
export default App;
