import "./Grid.css";
import Banner from "../Banner/Banner";

import { useContext } from "react";
import ApiContext from "../../contexts/ApiContext.js";

export default function Grid() {
  const { data, loading, error } = useContext(ApiContext);
  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  if (loading) {
    const banners = [];
    for (let i = 0; i < 4; i++) {
      banners.push(
        <div key={`${i}`} className={`item-${i}`}>
          <Banner />
        </div>
      );
    }
    return <div className="custom-grid">{banners}</div>;
  }

  const dataGrid = data.slice(4, 8);
  return (
    <div className="custom-grid">
      {dataGrid &&
        dataGrid.map((post, index) => (
          <div key={`${index}`} className={`item-${index}`}>
            <Banner
              img={post.urlToImage}
              src={post.source.name}
              title={post.title}
            />
          </div>
        ))}
    </div>
  );
}
