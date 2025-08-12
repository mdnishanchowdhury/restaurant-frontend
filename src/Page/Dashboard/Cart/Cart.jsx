import useCart from "../../../Hooks/useCart"
import { MdDelete } from "react-icons/md";
function Cart() {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    console.log('cartss', cart)
    return (
        <div className="mt-3 ">
            <div className="flex justify-evenly items-center">
                <h2 className="text-[16px] md:text-3xl font-bold uppercase">Total orders: {cart.length}</h2>
                <h2 className="text-[16px] md:text-3xl font-bold uppercase">total price: ${totalPrice}</h2>
                <button className="btn btn-primary uppercase">Pay</button>
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
                        </tr>
                    </thead>
                    {/* row 1 */}
                    {
                        cart.map((item, inx) =>
                            <tr>
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
                                    <button className="btn btn-ghost btn-xs uppercase">
                                        <MdDelete className="w-6 h-6" />
                                    </button>
                                </th>
                            </tr>
                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default Cart