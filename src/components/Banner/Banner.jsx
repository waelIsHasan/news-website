import Skeleton from '@mui/material/Skeleton';
import "./Banner.css";
import { useContext } from "react";
import ApiContext from "../../contexts/ApiContext.js";
export default function Banner({ isGlassEffect = false, src, title, img }) {
  let className = "";
  if (isGlassEffect) {
    className = "glass-effect";
  }
  return (
    <div className="banner">
      <div className={className}></div>
      <img src={img} alt="" />
      <div className="banner-info">
        <h3>{src}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}

export function GroupBanner() {
  const { data, loading, error } = useContext(ApiContext);
  if (error) {
    return <div>Error.,,</div>;
  }
  if (loading) {
    return (
    <div className="group-banner" style={{height:"300px"}}>
            <Skeleton  width="30%" sx={{ bgcolor: 'grey.600', height: '100%' , padding :'0' , width : '30%'}} />
            <Skeleton width="30%" sx={{ bgcolor: 'grey.600', height: '100%' , padding :'0' , width : '30%'}}/>
            <Skeleton width="30%" sx={{ bgcolor: 'grey.600', height: '100%' , padding :'0' , width : '30%'}}/>
    </div>);
  }

  const subData = data?.slice(1, 4);

  return (
    <div className="group-banner">
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
