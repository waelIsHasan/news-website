
import logo from '../../assets/logo.png'
import c4 from '../../assets/cr7.jpg'
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className='filter-cover'>
        <img src={c4} alt="" />

      </div>
      <div className="sup-logo">
        <img className="logo" src={logo} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veniam rem numquam iure et quisquam.</p>
      </div>
      <div className="page">
        <h1>Page</h1>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Order Online</a>
          </li>
          <li>
            <a href="">Reservation</a>
          </li>
        </ul>
      </div>
      <div className="info">
        <h1>Information</h1>
        <ul>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Testimonial</a>
          </li>
          <li>
            <a href="">Event</a>
          </li>
        </ul>
      </div>
      <div className="get-touch">
        <h1>Get in Touch</h1>
        <ul>
          <li>
            <a href="">Syria Damascus jaraman roda street</a>
          </li>
          <li>
            <a href="">waelhasan12342@gmail.com</a>
          </li>
          <li>
            <a href="">+963 937 866 905</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
