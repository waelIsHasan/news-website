import Skeleton from '@mui/material/Skeleton';
import "./Banner.css";
import { useContext } from "react";
import ApiContext from "../../contexts/ApiContext.js";
import Error from '../../pages/Error/Error.jsx'
export default function Banner({isFromList =false, isGlassEffect = false, src, title, img }) {
  let className = "";
  let classNameFromList = ''
  if (isGlassEffect) {
    className = "glass-effect";
  }
  if(isFromList){
    classNameFromList += ' list-banner';
  }
  return (
    <div className={`banner ${classNameFromList}`} >
      <div className={className}></div>
      <img src={img} alt="" />
      <div className="banner-info">
        <h3>{src}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}

export function GroupBanner({isVertical = false}) {
  let className = 'group-banner';
  if(isVertical){
    className = 'vertical'
  }
  const { data, loading, error } = useContext(ApiContext);

  if (error) {
    return <Error message={error}/>;
  }
  if (loading) {
    return (
    <div className={className} style={{height:"300px"}}>
            <Skeleton  width="30%" sx={{ bgcolor: 'grey.600', height: '100%' , padding :'0' , width : '30%'}} />
            <Skeleton width="30%" sx={{ bgcolor: 'grey.600', height: '100%' , padding :'0' , width : '30%'}}/>
            <Skeleton width="30%" sx={{ bgcolor: 'grey.600', height: '100%' , padding :'0' , width : '30%'}}/>
    </div>);
  }

  const subData = data?.slice(1, 4);

  return (
    <div className={`${className}`}>
      {subData &&
        subData.map((post, index) => (
          <div key={`${index}`}>
            <Banner
              isGlassEffect={true}
              img={post.urlToImage}
              src={post.source.name}
              title={post.title}
            />
          </div>
        ))}
    </div>
  );
}
