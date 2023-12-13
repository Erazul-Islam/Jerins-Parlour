import axios from "axios";
import Swal from "sweetalert2";


const Project = () => {

    const handleAdd = e => {
        e.preventDefault()

        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;

        const info = { fname, lname, email, phone, message }

        axios.post('http://localhost:5000/projects', info)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Your message has been sent!",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className="mt-8">
            <div className="bg-[#FFF8F5] pt-10 rounded">
                <p className="text-3xl font-extrabold text-center text-[#2D2D2D]">Let us handle your <br />
                    project, professionally.</p>
                <form onSubmit={handleAdd} >
                    <div className="pt-8 lg:pl-[450px]">
                        <div className="flex gap-4">
                            <input name="fname" type="text" placeholder="Full Name" className="input rounded bg-[#fff] input-secondary w-full max-w-xs" />
                            <input name="lname" type="text" placeholder="Last Name" className="input rounded bg-[#fff] input-secondary w-full max-w-xs" />
                        </div>
                        <div className="flex mt-4 gap-4">
                            <input name="email" type="text" placeholder="Email Address" className="input rounded bg-[#fff] input-secondary w-full max-w-xs" />
                            <input name="phone" type="text" placeholder="Phone Number" className="input rounded bg-[#fff] input-secondary w-full max-w-xs" />
                        </div>
                        <div className="mt-4">
                            <textarea name="message" className="textarea rounded textarea-success w-[660px]" placeholder="Your Message"></textarea>
                        </div>
                        <div className="lg:ml-64 mt-5 pb-8">
                            <button className="btn hover:bg-pink-400 bg-[#F63E7B] text-white rounded-md">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Project;