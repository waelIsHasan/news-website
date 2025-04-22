import { useContext } from "react";
import ApiContext from "../../contexts/ApiContext.js";
import Skeleton from "@mui/material/Skeleton";
import Banner from "../Banner/Banner.jsx";
import './GroupCard.css'
import Error from '../../pages/Error/Error.jsx'
export default function GroupCard() {
  const { data, loading, error } = useContext(ApiContext);
  if (error) {
    return (
      <Error message={error}/>
    );
  }
  if (loading) {
    return (
      <div className={"group-card"} style={{ height: "300px" }}>
        <Skeleton
          width="30%"
          sx={{
            bgcolor: "grey.600",
            height: "100%",
            padding: "0",
            width: "30%",
          }}
        />
        <Skeleton
          width="30%"
          sx={{
            bgcolor: "grey.600",
            height: "100%",
            padding: "0",
            width: "30%",
          }}
        />
        <Skeleton
          width="30%"
          sx={{
            bgcolor: "grey.600",
            height: "100%",
            padding: "0",
            width: "30%",
          }}
        />
      </div>
    );
  }
  const odd = 'odd'
  const even = 'even'
  return (
    <div className="group-card" >
      {data &&
        data.map((post, index) => {
          return (
            <div className={`group-card-item ${(index % 2) ? odd : even}`}
            key={index}
            >
            <Banner
              isGlassEffect={true}
              img={post.urlToImage}
              src={post.source.name}
              title={post.title}
            />
            </div>
          );
        })}
    </div>
  );
}
