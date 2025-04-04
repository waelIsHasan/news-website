import cr7 from '../../assets/cr7.jpg'
import './Banner.css'
export default function Banner({ src , title , img}){
    return (
        <div className="banner">
            <img src={img} alt="" />
            <div className='banner-info'>
                <h3>
                    {src}
                </h3>
                <p>
                {title}
                </p>
            </div>
        </div>
    )
}