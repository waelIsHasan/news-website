import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import './CustomSwiper.css'
import Banner from "../../components/Banner/Banner.jsx";
import { useRef } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ApiContext from "../../contexts/ApiContext.js";
import Skeleton from "@mui/material/Skeleton";

import { useContext } from "react";

export default function CustomSwiper() {
  const swiperRef = useRef(null);
  const { data, loading, error } = useContext(ApiContext);
  if (error) {
    return <div>Error.,,</div>;
  }
  if (loading) {
    return (
      <div className="group-banner" style={{ height: "300px" }}>
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
  return (
    <div className="custom-swiper not-active">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        effect="fade"
        spaceBetween={30}
        slidesPerView={5}
        navigation
        autoplay={{
          delay: 3000,
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log(swiperRef)}
      >
        {data &&
          data.map((post, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{ height: "200px", width: "300px" }}
              >
                <Banner
                  img={post.urlToImage}
                  src={post.source.name}
                  title={post.title}
                />{" "}
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
