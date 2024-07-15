import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/Cover";
import orderImg from "../../../../public/assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import OrderTab from "../orderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ['salad', 'pizza','dessert', 'soup', 'drinks' ]
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);


  return (
    <div>
      <Helmet>
        <title>bistro boss | Order</title>
      </Helmet>
      <Cover img={orderImg} title={"order"}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>dessert</Tab>
          <Tab>soup</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>{<OrderTab item={'salad'}></OrderTab>}</TabPanel>
        <TabPanel>{<OrderTab item={'pizza'}></OrderTab>}</TabPanel>
        <TabPanel>{<OrderTab item={'dessert'}></OrderTab>}</TabPanel>
        <TabPanel>{<OrderTab item={'soup'}></OrderTab>}</TabPanel>
        <TabPanel>{<OrderTab item={'drinks'}></OrderTab>}</TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
