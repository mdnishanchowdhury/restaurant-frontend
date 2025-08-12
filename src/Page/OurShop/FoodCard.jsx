import { replace, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

function FoodCard({ item }) {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();
    const [refetch]=useCart();

    const handleAddCart = (item) => {
        console.log(item)

        if (user && user.email) {
            console.log('Users', user.email)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                })
        }

        else {
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location }, replace });
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 w-full sm:w-[300px] md:w-96 shadow-sm rounded-none">
            <figure>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-[300px] object-cover"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-xs text-[#151515]">{recipe}</p>
                <p className="font-bold text-[#BB8506]">${price}</p>
                <div className="card-actions text-[#BB8506]">
                    <button onClick={() => handleAddCart(item)} className="btn btn-outline bg-[#E8E8E8] border-0 border-b-4 uppercase">
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard;
