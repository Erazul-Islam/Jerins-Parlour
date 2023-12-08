const AddService = () => {
    return (
        <div>
            <div className="mt-28 w-[1000px] h-[500px] bg-[#F4F7FC]">
                <div className="pt-8 pl-8">
                    <div className="flex gap-9">
                        <div>
                            <p className="font-bold">Service Title</p>
                            <input type="text" placeholder="Your Name" className="input w-[400px] rounded bg-[#fff] input-secondary" />
                        </div>
                        <div className="pr-12">
                            <p className="font-bold">Image</p>
                            <input className="bg-[#F63E7B]" placeholder="upload Image" type="file" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="font-bold">Description</p>
                        <textarea className="textarea rounded textarea-success w-[400px]" placeholder="Enter Description"></textarea>
                    </div>
                    <div className="mt-5 text-right mr-60 pb-8">
                        <button className="btn hover:bg-pink-400 bg-[#F63E7B] text-white rounded-md">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;