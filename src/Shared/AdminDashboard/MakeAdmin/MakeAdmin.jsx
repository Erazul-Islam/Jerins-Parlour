import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const MakeAdmin = () => {


    const axiosPublic = useAxiosPublic();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users')
            return res.data
        }
    })

    console.log(users)

    const handleAdmin = user => {
        axiosPublic.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
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
                <div className="bg-[#fff] overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin' ? 'Admin' : <button onClick={ ()=> handleAdmin(user)} className="btn hover:bg-pink-400 bg-[#F63E7B] text-white rounded-md">Make Admin</button>}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;