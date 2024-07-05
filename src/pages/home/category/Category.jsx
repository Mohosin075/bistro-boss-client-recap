import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import img1 from "../../../../public/assets/home/slide1.jpg";
import img2 from "../../../../public/assets/home/slide2.jpg";
import img3 from "../../../../public/assets/home/slide3.jpg";
import img4 from "../../../../public/assets/home/slide4.jpg";
import img5 from "../../../../public/assets/home/slide5.jpg";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
const Category = () => {
  return (
    <section>
        <SectionTitle heading={'ORDER ONLINE'} subHeading={'From 11:00am to 10:00pm'}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" className="" />
          <h3 className="uppercase text-center text-white text-sm lg:text-5xl -mt-16 ">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="" />
          <h3 className="uppercase text-center text-white text-sm lg:text-5xl -mt-16 ">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="" />
          <h3 className="uppercase text-center text-white text-sm lg:text-5xl -mt-16 ">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="" />
          <h3 className="uppercase text-center text-white text-sm lg:text-5xl -mt-16 ">
            deserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" className="" />
          <h3 className="uppercase text-center text-white text-sm lg:text-5xl -mt-16 ">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
