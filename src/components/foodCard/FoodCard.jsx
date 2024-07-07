import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";


const FoodCard = ({ item }) => {
  const { name, image, price, recipe , _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const {user} = useAuth();
  const [,refetch] = useCarts();

  const axiosSecure = useAxiosSecure();

  const handleOrder =()=>{
    if(user && user?.email){
      const cartItem = {
        menuId : _id,
        email : user?.email,
        name,
        image, 
        price
      }

      axiosSecure.post('/carts', cartItem)
      .then(res=>{
        console.log(res.data.insertedId);
        if(res.data){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your carts`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
        }
      })

      


    }else{
      Swal.fire({
        title: "You are not login!",
        text: "Please login then add to card",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state : { from : location}})
        }
      });
    }
  }

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body flex flex-col items-center">
        <p className="font-bold">Price : $ {price}</p>
        <h2 className="">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={handleOrder} className="btn btn-outline border-0 bg-slate-200 border-yellow-500 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
