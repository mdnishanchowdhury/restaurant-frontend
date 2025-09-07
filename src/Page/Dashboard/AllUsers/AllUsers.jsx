import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

function AllUsers() {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    // handle make admin

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                refetch();
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // delete handle function
    const handleDeleted = (user) => {
        // delete alert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                        }
                    })
                    .catch(err => {
                        console.error('Delete failed:', err);
                    });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
        // end

    }

    return (
        <div className="mt-3 ">
            <h2 className="text-[16px] md:text-3xl font-bold uppercase">Total Users: {users.length}</h2>
            {/* table */}
            <div className="overflow-x-auto mt-4">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white">
                        <tr>
                            <th></th>
                            <th>USER NAME</th>
                            <th>USER EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    {/* row 1 */}
                    {
                        users.map((user, inx) =>
                            <tr>
                                <th>
                                    <h2>{inx + 1}</h2>
                                </th>
                                <td>
                                    <h2>{user.name}</h2>
                                </td>
                                <td>
                                    <h2>{user.email}</h2>
                                </td>
                                <th>
                                    {
                                        user.role === 'admin' ? 'Admin' :
                                            <Link >
                                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs uppercase">
                                                    <FaUsers className="w-6 h-6" />
                                                </button>
                                            </Link>
                                    }
                                </th>

                                <th>
                                    <Link >
                                        <button onClick={() => handleDeleted(user)} className="btn btn-ghost btn-xs uppercase">
                                            <MdDelete className="w-6 h-6" />
                                        </button>
                                    </Link>
                                </th>
                            </tr>
                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default AllUsers