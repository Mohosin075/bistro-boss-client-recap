import { useParams } from "react-router-dom";

const SuccessFull = () => {
    const {tranId} = useParams()
    return (
        <div className="py-36">
            <h2 className="text-4xl text-green-500">payment succesfull</h2>
            <h3 className="text-3xl text-green-500">Transaction Id : {tranId}</h3>
        </div>
    );
};

export default SuccessFull;