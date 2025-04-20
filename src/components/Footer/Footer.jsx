import logo from "../../assets/logo.png";
import c4 from "../../assets/cr7.jpg";
import "./Footer.css";
import { Link } from "react-router-dom";
import { ApiProvider } from "../../contexts/ApiContext";
import { HeaderBlockProvider } from "../../contexts/HeaderBlockContext";
import Block from "../Block/Block";
import { endPoint } from "../../services/apiEndPoints";
export default function Footer() {
  return (
    <div className="footer">
      <div className="filter-cover">
        <img src={c4} alt="" />
      </div>
      
      <div className="info-website">
        <div className="sup-logo">
          <img className="logo" src={logo} alt="" />
          <p>
            Hello I am{" "}
            <strong>
              <i>Wael Hasan</i>
            </strong>{" "}
            who develop this website with React js ,feel free to watch the
            latest news
          </p>
        </div>
        <div className="get-touch">
          <h1>Help Section</h1>
          <ul>
            <li>
              <Link to="">About us </Link>
            </li>
            <li>
              <Link to="">Contact us</Link>
            </li>
            <li>
              <Link to="">F&Q</Link>
            </li>
          </ul>
        </div>

        <div className="get-touch">
          <h1>Category</h1>
          <ul>
          <li>
              <Link to="/tech">Tech</Link>
            </li>
            <li>
              <Link to="/health">Health</Link>
            </li>
            <li>
              <Link to="/entertainment">Entertainment</Link>
            </li>
            <li>
              <Link to="/science">Science</Link>
            </li>
            <li>
              <Link to="/us">United state</Link>
            </li>
          </ul>
        </div>

        <div className="get-touch">
          <h1>stay in Touch</h1>
          <ul>
            <li>
              <Link to="">Syria Damascus</Link>
            </li>
            <li>
              <Link to="">waelhasan12342@gmail.com</Link>
            </li>
            <li>
              <Link to="">+963 937 866 905</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
