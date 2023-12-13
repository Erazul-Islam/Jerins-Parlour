
import { useEffect } from "react";
import { useState } from "react";

const OrderList = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/mybook')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    })

    

    return (
        <div>
            <div className="mt-28 w-[1000px] h-[500px] bg-[#F4F7FC]">
                <div className="pt-8 pl-8 pr-8 pb-8">
                    <table className="table bg-[#fff]">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email id</th>
                                <th>Service</th>
                                <th>Pay With</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(single => <tr key={single._id} className="">
                                    <td>{single.name}</td>
                                    <td>{single.email}</td>
                                    <td>{single.service_name}</td>
                                    <td>Bkash</td>
                                   
                                        <select className="">
                                            <option disabled selected>{single.status}</option>
                                            <option className="text-[#FFBD3E]">On going</option>
                                            <option className="text-[#009444]">done</option>
                                        </select>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;