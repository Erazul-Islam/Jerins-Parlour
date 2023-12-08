const Project = () => {
    return (
        <div className="mt-8">
            <div className="bg-[#FFF8F5] pt-10 rounded">
                <p className="text-3xl font-extrabold text-center text-[#2D2D2D]">Let us handle your <br />
                    project, professionally.</p>
                <div className="pt-8 lg:pl-[450px]">
                    <div className="flex gap-4">
                        <input type="text" placeholder="Full Name" className="input rounded bg-[#fff] input-secondary w-full max-w-xs" />
                        <input type="text" placeholder="Last Name" className="input rounded bg-[#fff] input-secondary w-full max-w-xs" />
                    </div>
                    <div className="flex mt-4 gap-4">
                        <input type="text" placeholder="Email Address" className="input rounded bg-[#fff] input-secondary w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" className="input rounded bg-[#fff] input-secondary w-full max-w-xs" />
                    </div>
                    <div className="mt-4">
                        <textarea className="textarea rounded textarea-success w-[660px]" placeholder="Your Message"></textarea>
                    </div>
                    <div className="lg:ml-64 mt-5 pb-8">
                        <button className="btn hover:bg-pink-400 bg-[#F63E7B] text-white rounded-md">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;