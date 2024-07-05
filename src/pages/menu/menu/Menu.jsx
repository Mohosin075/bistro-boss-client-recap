import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/Cover";
import menuImg from '../../../../public/assets/menu/banner3.jpg'
import dessertImg from '../../../../public/assets/menu/dessert-bg.jpeg'
import saladImg from '../../../../public/assets/menu/salad-bg.jpg'
import pizzaImg from '../../../../public/assets/menu/pizza-bg.jpg'
import soupImg from '../../../../public/assets/menu/soup-bg.jpg'
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import CategoryMenuItem from "../categoryMenuItem/CategoryMenuItem";


const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter((item) => item.category === "offered");
    const salad = menu.filter((item) => item.category === "salad");
    // const drinks = menu.filter((item) => item.category === "drinks");
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>bistro boss | menu</title>
      </Helmet>
      <Cover img={menuImg} title={'our menu'}></Cover>
      <SectionTitle subHeading={'Dont miss'} heading={'TODAYS OFFER'}></SectionTitle>
      <CategoryMenuItem items={offered}></CategoryMenuItem>
      <CategoryMenuItem items={dessert} title={'dessert'} coverImg={dessertImg}></CategoryMenuItem>
      <CategoryMenuItem items={pizza} title={'pizza'} coverImg={pizzaImg}></CategoryMenuItem>
      <CategoryMenuItem items={salad} title={'salad'} coverImg={saladImg}></CategoryMenuItem>
      <CategoryMenuItem items={soup} title={'soup'} coverImg={soupImg}></CategoryMenuItem>
    </div>
  );
};

export default Menu;
