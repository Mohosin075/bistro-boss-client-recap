import { useEffect, useState } from "react";
import FoodCard from "../../../components/foodCard/FoodCard";

const OrderTab = ({ item }) => {
  const [items, setItems] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(4);

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(
      `http://localhost:5000/menuPagination/${item}?page=${currentPage}&size=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        console.log(data);
        setItems(data.category);
        setTotalItem(data.totalItem);
      });
  }, [currentPage, itemPerPage, item]);

  const numberOfPage = Math.ceil(totalItem / itemPerPage);
  const pages = [...Array(numberOfPage).keys()];
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    console.log(currentPage, pages.length - 1);
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleItemPerPage = (e) => {
    setItemPerPage(e.target.value);
    setCurrentPage(0);
  };

  return (
    <div>
      {
          loading && <h3 className="text-3xl text-center my-5">Data Loading.....</h3>
        }
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        
        {items?.map((item) => {
          console.log(item.category);
          return <FoodCard key={item._id} item={item}></FoodCard>;
        })}
      </div>
      <div className="text-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="btn mr-3 my-5"
        >
          prev
        </button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page ? "btn-primary btn mr-3" : "btn mr-3"
            }
            key={page}
          >
            {page}
          </button>
        ))}
        <select
          className="select select-bordered mr-3"
          value={itemPerPage}
          onChange={handleItemPerPage}
          name=""
          id=""
        >
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="10">10</option>
        </select>
        <button
          onClick={handleNextPage}
          disabled={currentPage === pages.length - 1}
          className="btn mr-3 my-5"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default OrderTab;
