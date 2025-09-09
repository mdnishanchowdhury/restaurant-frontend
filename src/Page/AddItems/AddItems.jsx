import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
export default function AddItems() {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();


    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        // console.log(res.data)
        // console.log(res.data.data.display_url)
        if (res.data.success) {
            const itemInfo = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', itemInfo);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Product Successfully Added",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }

    };

    return (
        <div className="bg-gray-100 p-6 rounded-md shadow-sm max-w-2xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Recipe name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Recipe name*
                    </label>
                    <input
                        type="text"
                        placeholder="Recipe name"
                        {...register("name")}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>

                {/* Category & Price */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Category*
                        </label>
                        <select
                            {...register("category")}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            <option value="">Select category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soups">Soups</option>
                            <option value="desserts">Desserts</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Price*
                        </label>
                        <input
                            type="number"
                            placeholder="Price"
                            {...register("price")}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                </div>

                {/* Recipe */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Recipe recipe*
                    </label>
                    <textarea
                        rows="4"
                        placeholder="Recipe Datails"
                        {...register("recipe")}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    ></textarea>
                </div>

                {/* File upload */}
                <div className="mb-4">
                    <input
                        type="file"
                        {...register("image")}
                        className="text-sm text-gray-600"
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="bg-yellow-700 text-white px-4 py-2 rounded-md shadow hover:bg-yellow-800 transition"
                >
                    Add Item 🍴
                </button>
            </form>
        </div>
    );
}