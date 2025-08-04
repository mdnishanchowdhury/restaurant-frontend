import { useEffect, useState } from 'react'
import SectionTitle from '../../components/SectionTile/SectionTitle'
import MenuItem from '../../Shared/MenuItem';

function PropularMenu() {
    const [menu, setMenu] = useState([]);
    console.log(menu)
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular')
                setMenu(popularItem)
            })
    }, [])
    return (
        <section className='mb-16'>
            <SectionTitle
                subHeding='---Check it out---'
                heading='FROM OUR MENU'
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-4 mt-10'>
                {
                    menu.map(item =>
                        <MenuItem key={item._id} item={item}></MenuItem>
                    )
                }
            </div>
            <div className='text-center mt-10'>
                <button className="btn btn-outline btn-secondary border-0 border-b-4 text-xl font-medium ">View Full  Menu</button>
            </div>
        </section>
    )
}

export default PropularMenu