import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import {useState , useEffect} from 'react'
import './Navbar.css'

export default function Navbar(){
    const images = [
        require('../../assets/ads.png'),
        require('../../assets/pal1.png'),
        require('../../assets/pal2.png'),
        require('../../assets/pal3.png'),
        require('../../assets/pal4.png'),
      ];
      const [curIndexImage , setCurIndexImage] = useState(0);
      useEffect(() => {
        const interval = setInterval(() => {
            setCurIndexImage( (prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        },2000);
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
      }, [curIndexImage, images.length]);

    return(
        <div className="navbar">
            <div className="logo-post">
                <img className="logo" src={logo} alt="" />
                <div className="free-palestine">
                    <img  src={images[curIndexImage]} alt="" />
                </div>
            </div>
            <div className='nav-links'>
                    <ul className='links'>
                        <li className='active'>
                            <Link to="/home" className='link' >News</Link>
                        </li>
                        <li>
                        <Link className='link' to='us'>United State</Link>
                        </li>
                        <li>
                        <Link className='link' to='entertainment'>Entertainment</Link>
                        </li>
                        <li>
                        <Link className='link' to='science'>Science</Link>
                        </li>
                        <li>
                        <Link className='link' to='tech'>Technology</Link>
                        </li>
                    </ul>
                    <div className='nav-search'>
                        search
                    </div>
            </div>        
        </div>
        
    )
}