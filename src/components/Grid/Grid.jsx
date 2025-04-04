import "./Grid.css";
import Banner from "../Banner/Banner";

import { useContext, useEffect } from "react";
import ApiContext from "../../contexts/ApiContext.js";

export default function Grid() {
  const { data, loading, error } = useContext(ApiContext);

  if (loading) {
    const banners = [];
    for (let i = 0; i < 4; i++) {
      banners.push(
        <div className={`item-${i}`}>
          <Banner />
        </div>
      );
    }
    return <div className="custom-grid">{banners}</div>;
  }
  const dataGrid = data.slice(0, 4);
  return (
    <div className="custom-grid">
      {dataGrid &&
        dataGrid.map((post, index) => (
          <div className={`item-${index}`}>
            <Banner img={post.urlToImage} src={post.source.name} title={post.title}/>
          </div>
        ))}
    </div>
  );
}
