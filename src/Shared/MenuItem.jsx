
function MenuItem({ item }) {
    const { name, recipe, image, price } = item;
    return (
        <div className='flex space-x-4'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} src={image} alt="" className='w-[118px] h-[104px]' />
            <div>
                <h2 className='text-xl font-normal'>{name}   -----  ---</h2>
                <p className='text-[16px] font-normal'>{recipe}</p>
            </div>
            <h2 className='text-[#BB8506] text-xl font-normal'>${price}</h2>
        </div>

    )
}

export default MenuItem