const ClientReview = () => {
    return (
        <div>
            <div className="mt-28 w-[1000px] pl-8 pt-8 h-[500px] bg-[#F4F7FC]">
                <div className="pt-8">
                    <input type="text" placeholder="Your Name" className="input w-[500px] rounded bg-[#fff] input-secondary" /><br />
                    <input type="text" placeholder="Company’s name, Designation" className="input mt-4 rounded bg-[#fff] input-secondary w-[500px]" />
                    <div className="mt-4">
                        <textarea className="textarea rounded textarea-success w-[500px]" placeholder="Description"></textarea>
                    </div>
                    <div className="mt-5 pb-8">
                        <button className="btn hover:bg-pink-400 bg-[#F63E7B] text-white rounded-md">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;