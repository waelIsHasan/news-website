import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Banner from "../../components/Banner/Banner.jsx";
import img from "../../assets/ads.png";
import { useRef } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Tech() {
  const swiperRef = useRef(null);
  return (
    <div className="tech">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        effect="fade"
        spaceBetween={10}
        slidesPerView={3}
        navigation
        autoplay={{
          delay: 3000,
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log(swiperRef)}
      >
        <SwiperSlide>
          <Banner src={"hello"} img={img} title={"hello world!"} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Banner src={"hello"} img={img} title={"hello world!"} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Banner src={"hello"} img={img} title={"hello world!"} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Banner src={"hello"} img={img} title={"hello world!"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
