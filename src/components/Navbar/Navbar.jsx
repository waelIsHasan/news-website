import logo from '../../assets/logo.png'
import freePalestine from '../../assets/ads.png'
import {Link} from 'react-router-dom'

import './Navbar.css'
export default function Navbar(){
    return(
        <div className="navbar">
            <div className="logo-post">
                <img className="logo" src={logo} alt="" />
                <div className="free-palestine"
                >
                    <img src={freePalestine} alt="" />
                </div>
            </div>
            <div className='nav-links'>
                    <ul className='links'>
                        <li className='active'>
                            <Link className='link' to=''>News</Link>
                        </li>
                        <li>
                        <Link className='link' to=''>United State</Link>
                        </li>
                        <li>
                        <Link className='link' to=''>Entertainment</Link>
                        </li>
                        <li>
                        <Link className='link' to=''>Science</Link>
                        </li>
                        <li>
                        <Link className='link' to=''>Technology</Link>
                        </li>
                    </ul>
                    <div className='nav-search'>
                        search
                    </div>
            </div>        
        </div>
        
    )
}