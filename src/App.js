import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import Grid from "./components/Grid/Grid.jsx";
import { ApiProvider } from "./contexts/ApiContext.js";
import Article from "./components/Article/Article.jsx";

function App() {
  return (
    <BrowserRouter>
      <ApiProvider>
        <div className="App">
          <Navbar />
          <Grid />
          <Article />
        </div>
      </ApiProvider>
    </BrowserRouter>
  );
}
export default App;
