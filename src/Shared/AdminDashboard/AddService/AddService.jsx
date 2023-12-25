import Swal from "sweetalert2";


const AddService = () => {
   
    const handleAdd = e => {

        e.preventDefault()



        const service_name = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const image = e.target.image.value;

        const info = { service_name, description, price,image }


        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                }
            })
    }


    return (
        <div>
            <div className="mt-28 w-[1000px] h-[500px] bg-[#F4F7FC]">
                <form onSubmit={handleAdd}>
                    <div className="pt-8 pl-8">
                        <div className="lg:flex gap-9">
                            <div>
                                <p className="font-bold">Service Title</p>
                                <input name="name" type="text" placeholder="Service Name" className="input w-[400px] rounded bg-[#fff] input-secondary" />
                            </div>
                            <div className="pr-12">
                                <p className="font-bold">Image</p>
                                <input name="image" className="input w-[400px] rounded bg-[#fff] input-secondary" placeholder="Image Link" type="text" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div>
                                <p className="font-bold">Price</p>
                                <input name="price" type="text" placeholder="Price" className="input w-[400px] rounded bg-[#fff] input-secondary" />
                            </div>
                            <p className="font-bold mt-4">Description</p>
                            <textarea name="description" className="textarea rounded textarea-success w-[400px]" placeholder="Enter Description"></textarea>
                        </div>
                        <div className="mt-5 lg:text-right lg:mr-60 pb-8">
                            <button className="btn hover:bg-pink-400 bg-[#F63E7B] text-white rounded-md">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;