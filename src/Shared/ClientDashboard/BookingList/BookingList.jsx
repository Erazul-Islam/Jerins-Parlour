import useCart from "../../../Hooks/useCart";

const BookingList = () => {

    const [cart] = useCart();

    return (
        <div>
            <div className="mt-28 w-[1000px] grid md:grid-cols-2 grid-cols-1 gap-4 pl-8 pt-8 pb-8 h-[500px] bg-[#F4F7FC]">
                {
                    cart.map(one => <div key={one._id} className="w-[450px] h-[250px] bg-[#FFF]">
                        <p className="flex justify-between pl-8 pr-8 pt-8">
                            <img className="w-16 h-16" src={one.image} alt="" />
                            <button className="btn hover:bg-pink-400 bg-[#FFE3E3] border-none text-[#FF4545] rounded-md">Pending</button>
                        </p>
                        <p className="text-xl pt-4 pl-8 font-bold text-[#111430]">{one.service_name}</p>
                        <p className="pl-8 pr-8">{one.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BookingList;