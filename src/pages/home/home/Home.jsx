import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import PopularMenu from "../popularMenu/PopularMenu";
import Featured from "./featured/Featured";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>bistro boss | home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
