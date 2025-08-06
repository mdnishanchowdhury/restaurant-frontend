function FoodCard({ items = [] }) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center place-items-center px-4 md:px-0">
            {items.map(({ _id, name, image, price, recipe }) => (
                <div
                    key={_id}
                    className="card bg-base-100 w-full sm:w-[300px] md:w-96 shadow-sm rounded-none"
                >
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
                            <button className="btn btn-outline bg-[#E8E8E8] border-0 border-b-4 uppercase">
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default FoodCard;
