const OrderList = () => {
    return (
        <div>
            <div className="mt-28 w-[1000px] h-[500px] bg-[#F4F7FC]">
                <div className="pt-8 pl-8 pr-8 pb-8">
                    <table className="table bg-[#fff]">
                        {/* head */}
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
                            {/* row 1 */}
                            <tr className="">                              
                                <td>Anika Ahmed</td>
                                <td>abc@gmail.com</td>
                                <td>Skin Care Treatment</td>
                                <td>Bkash</td>
                                <td>Pending</td>
                            </tr>
                            <tr className="">                              
                                <td>Anika Ahmed</td>
                                <td>abc@gmail.com</td>
                                <td>Skin Care Treatment</td>
                                <td>Bkash</td>
                                <td>Pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;