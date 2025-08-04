import image5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../components/SectionTile/SectionTitle'

function ChefCard() {
    return (
        <section>
            <SectionTitle
                subHeding={'---Should Try---'}
                heading={'CHEF RECOMMENDS'}
            />

            {/* Grid Container */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center place-items-center px-4 md:px-0">
                {[1, 2, 3].map((_, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 w-full sm:w-[300px] md:w-96 shadow-sm rounded-none"
                    >
                        <figure>
                            <img
                                src={image5}
                                alt="Shoes"
                                className="w-full h-[300px] object-cover"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p className="text-xs text-[#151515]">
                                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                            </p>
                            <div className="card-actions">
                                <button className="btn btn-outline bg-[#E8E8E8] border-0 border-b-4 uppercase">
                                    add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}

export default ChefCard
