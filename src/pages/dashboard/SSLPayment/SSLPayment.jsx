import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useCarts from "../../../hooks/useCarts";

const SSLPayment = () => {
    const { register, handleSubmit} = useForm();
    const {user} = useAuth()
    const [cart] = useCarts()
    console.log(cart);
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const onSubmit = async() => {
        const paymentInfo = {
            email: user?.email,
            price: totalPrice,
            data: new Date(),
            cartIds: cart.map((item) => item._id),
            menuItemIds: cart.map((item) => item.menuId),
            status: "pending",
          };


          fetch('https://bistro-boss-recap-server-lake.vercel.app/sslPayment',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(paymentInfo)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            if(data?.url){
                window.location.replace(data?.url)
            }
          })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col w-full max-w-xl text-center">
                <div className="">
                    <h1 className="text-3xl font-bold">Provide your information!</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="flex justify-between gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName}  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email}  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        </div>
                        <div className="form-control mt-6 inline-block text-left">
                            <input className="btn btn-primary inline-block" type="submit" value="submit for pay" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SSLPayment;