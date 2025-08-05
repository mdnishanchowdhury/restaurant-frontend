import MenuItem from '../../Shared/MenuItem'

function MenuCategory({ item }) {

    return (
        <section>
            <div className='grid md:grid-cols-2 gap-4 mt-10'>
                {
                    item.map(item =>
                        <MenuItem key={item._id} item={item}></MenuItem>
                    )
                }
            </div>
            <div className='text-center mt-10'>
                <button className="btn btn-outline btn-secondary border-0 border-b-4 text-xl font-medium ">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </section>

    )
}

export default MenuCategory