import ArticleCard from "../ArticleCard/ArticleCard";
import { Link } from "react-router-dom";
import ApiTechContext from '../../contexts/ApiTechContext.js';
import { useContext } from "react";

import "./Block.css";
export default function Block() {
  const {data , loading , error} = useContext(ApiTechContext);
  if(error){
    return <h1>error...</h1>
  }
  if(loading){
    return <h1>loading..</h1>
  }
  const dataset = data?.slice(0 , 4);
  const posts = [];
      for (let i = 0; i < 4; i++) {
       if(i === 0){
        posts.push(
          <div key={`${i}`} className={`vl-post`}>
           <ArticleCard isVertical={true}  date={dataset[i].publishedAt} author={dataset[i].author} title={dataset[i].title} img={dataset[i].urlToImage} />
          </div>
        );}
        else {
          posts.push(
          <div key={`${i}`} className={`hz-post`}>
           <ArticleCard  date={dataset[i].publishedAt}author={dataset[i].author} title={dataset[i].title} img={dataset[i].urlToImage}/>
           <ArticleCard date={dataset[i + 1].publishedAt}author={dataset[i + 1].author} title={dataset[i + 1].title} img={dataset[i + 1].urlToImage}/>
           <ArticleCard  date={dataset[i + 2].publishedAt} author={dataset[i + 2].author} title={dataset[i + 2].title} img={dataset[i + 2].urlToImage}/>
          </div>
          )
          break;
        }
      }

  return (
    <div className="big-block">
      <HeaderBlock />
      <div className="posts-block">
        {dataset && posts}
        {/* <div className="vl-post">
          <ArticleCard isVertical={true} />
        </div>
        <div className="hz-post">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div> */}
      </div>
    </div>
  );
}

function HeaderBlock() {
  return (
    <div className="header-block">
      <span>Do not Miss</span>
      <ul>
        <li>
          <Link className="link" to="">1</Link>
        </li>
        <li>
          <Link className="link" to="">2</Link>
        </li>
        <li>
          <Link  className="link" to="">3</Link>
        </li>
      </ul>
      <select name="" id="">
        <option value="">More</option>
      </select>
    </div>
  );
}
