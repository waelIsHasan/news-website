import ArticleCard from "../ArticleCard/ArticleCard";
import { Link } from "react-router-dom";
import { endPoint } from "../../services/apiEndPoints.js";
import ApiContext from "../../contexts/ApiContext.js";
import HeaderBlockContext from "../../contexts/HeaderBlockContext.js";
import { useContext, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./Block.css";
export default function Block() {
  const { data, loading, error, refresh } = useContext(ApiContext);
  if (error) {
    return <h1>error...</h1>;
  }
  if (loading) {
    return (
      <div className="big-block">
        <HeaderBlock onClick={refresh} />
        <div className="loading-block">
          <CircularProgress />
        </div>
      </div>
    );
  }
  const dataset = data?.slice(4, 8);
  const posts = [];
  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      posts.push(
        <div key={`${i}`} className={`vl-post`}>
          <ArticleCard
            isVertical={true}
            date={dataset[i].publishedAt}
            author={dataset[i].author}
            title={dataset[i].title}
            img={dataset[i].urlToImage}
          />
        </div>
      );
    } else {
      posts.push(
        <div key={`${i}`} className={`hz-post`}>
          <ArticleCard
            date={dataset[i].publishedAt}
            author={dataset[i].author}
            title={dataset[i].title}
            img={dataset[i].urlToImage}
          />
          <ArticleCard
            date={dataset[i + 1].publishedAt}
            author={dataset[i + 1].author}
            title={dataset[i + 1].title}
            img={dataset[i + 1].urlToImage}
          />
          <ArticleCard
            date={dataset[i + 2].publishedAt}
            author={dataset[i + 2].author}
            title={dataset[i + 2].title}
            img={dataset[i + 2].urlToImage}
          />
        </div>
      );
      break;
    }
  }

  return (
    <div className="big-block">
      <HeaderBlock onClick={refresh} />
      <div className="posts-block">{posts}</div>
    </div>
  );
}

// Header Block component
function HeaderBlock({ onClick }) {
  const {value , themeColor}  = useContext(HeaderBlockContext);
  const { updateCurUrl, curUrl } = useContext(ApiContext);
  let className = value.name;
  console.log(curUrl);
  return (
    <div className={`header-block ${className}`} style={themeColor}>
      <span style={themeColor.x === 'blue' ? {backgroundColor : 'blue' , color : 'white'} : {backgroundColor : 'black' , color : 'white'}}>{value.name}</span>
      <ul>
        {value.links.map((link) => {
          return (
            <li key={link.name}>
              <Link
                onClick={() => {
                  updateCurUrl(endPoint[link.name]);
                  onClick();
                }}
                className="link"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <select name="" id="">
        <option value="">More</option>
      </select>
    </div>
  );
}
