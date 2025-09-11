import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useMenu from "../../../Hooks/useMenu";
import { BiEdit } from "react-icons/bi";
function ManageItems() {
    const [menu, refetch] = useMenu();
    const useAxios = useAxiosSecure();

    const handleDeleted = (item) => {
        // delete alert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await useAxios.delete(`/menu/${item._id}`)

                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
        // end
    }
    return (
        <div className="mt-3 ">
            <div>
                <h2 className="text-[16px] md:text-3xl font-bold uppercase">Total orders: {menu.length}</h2>
            </div>
            {/* table */}
            <div className="overflow-x-auto mt-4">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white">
                        <tr>
                            <th></th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    {/* row 1 */}
                    {
                        menu.map((item, inx,) =>
                            <tr key={item._id}>
                                <th>
                                    <h2>{inx + 1}</h2>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="menu image" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2>{item.name}</h2>
                                </td>
                                <td>
                                    <h2>{item.price}</h2>
                                </td>
                                <th>
                                    <Link >
                                        <button onClick={() => handleEdit(item._id)} className="btn btn-ghost btn-xs uppercase">
                                            <BiEdit className="w-6 h-6" />
                                        </button>
                                    </Link>
                                </th>
                                <th>
                                    <Link >
                                        <button onClick={() => handleDeleted(item)} className="btn btn-ghost btn-xs uppercase">
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

export default ManageItems;