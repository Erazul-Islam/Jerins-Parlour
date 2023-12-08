const Book = () => {
    return (
        <div className="mt-28 w-[1000px] h-[500px] bg-[#F4F7FC]">
            <div className="pl-16 pt-16">
                <div >
                    <p className="w-[450px] bg-[#fff] h-8 rounded-lg"></p>
                </div>
                <div className="bg-[#F4F7FC] mt-4">
                    <p className="w-[450px] bg-[#fff] h-8 rounded-lg"></p>
                </div>
                <div className="bg-[#F4F7FC] mt-4">
                    <p className="w-[450px] bg-[#fff] h-8 rounded-lg"></p>
                </div>
                <p className="mt-4">Pay With</p>
                <div className="bg-[#F4F7FC] mt-4">
                    <p className="w-[450px] bg-[#fff] h-8 rounded-lg"></p>
                </div>
                <div className="flex mt-4 gap-2">
                    <p className="w-[220px] bg-[#fff] h-8 rounded-lg"></p>
                    <p className="w-[220px] bg-[#fff] h-8 rounded-lg"></p>
                </div>
                <div className="mt-12 flex">
                    <p>Your Service  charged will be </p>
                    <div className="ml-28">
                        <button className="btn w-[120px] hover:bg-pink-400 bg-[#F63E7B] text-white rounded-md">Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;