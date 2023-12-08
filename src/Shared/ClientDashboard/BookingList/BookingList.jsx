const BookingList = () => {
    return (
        <div>
            <div className="mt-28 w-[1000px] grid grid-cols-2 pl-8 pt-8 pb-8 h-[500px] bg-[#F4F7FC]">
                <div className="w-[450px] h-[250px] bg-[#FFF]">
                    <p className="flex justify-between pl-8 pr-8 pt-8">
                        <img className="w-16 h-16" src="https://i.ibb.co/ypLKCVL/Group-1372.png" alt="" />
                        <button className="btn hover:bg-pink-400 bg-[#FFE3E3] border-none text-[#FF4545] rounded-md">Pending</button>
                    </p>
                    <p className="text-xl pt-4 pl-8 font-bold text-[#111430]">Anti Age Face Treatment</p>
                    <p className="pl-8 pr-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className="w-[450px] h-[250px] bg-[#FFF]">
                    <p className="flex justify-between pl-8 pr-8 pt-8">
                        <img className="w-16 h-16" src="https://i.ibb.co/ypLKCVL/Group-1372.png" alt="" />
                        <button className="btn hover:bg-pink-400 bg-[#FFE3E3] border-none text-[#FF4545] rounded-md">Pending</button>
                    </p>
                    <p className="text-xl pt-4 pl-8 font-bold text-[#111430]">Anti Age Face Treatment</p>
                    <p className="pl-8 pr-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
        </div>
    );
};

export default BookingList;