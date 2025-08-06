import { useEffect } from 'react';
import img1 from '../../assets/menu/banner3.jpg'
import pizza2 from '../../assets/menu/pizza-bg.jpg'
import salad2 from '../../assets/menu/salad-bg.jpg'
import soup2 from '../../assets/menu/soup-bg.jpg'
import dessert2 from '../../assets/menu/dessert-bg.jpeg'
import SectionCover from '../../components/SectionCover/SectionCover';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../components/SectionTile/SectionTitle';
import MenuCategory from './MenuCategory';

function Menu() {
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')

    useEffect(() => {
        document.title = 'Restaurant | Menu';
    }, []);

    return (
        <section>
            {/*  1 */}
            <section>
                {/* banner */}
                <section className='mb-5'>
                    < SectionCover bgImage={img1} heading={'OUR MENU'} subHeading={'Would you like to try a dish?'}></ SectionCover>
                </section>
                //offered
                <section className='mb-16'>
                    <SectionTitle subHeding='---Dont miss---' heading='TODAYS OFFER'></SectionTitle>
                    <MenuCategory item={offered}></MenuCategory>
                </section>
            </section>
            {/* dessert */}
            <section className='mb-5'>
                < SectionCover bgImage={dessert2} heading={'DESSERTS'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></ SectionCover>
                <MenuCategory item={dessert} title={"dessert"}></MenuCategory>
            </section>
            {/* pizza */}
            <section className='mb-5'>
                < SectionCover bgImage={pizza2} heading={'PIZZA'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></ SectionCover>
                <MenuCategory item={pizza} title={"pizza"}></MenuCategory>
            </section>
            {/* SALADS*/}
            <section className='mb-5'>
                < SectionCover bgImage={salad2} heading={'SALADS'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} ></ SectionCover>
                <MenuCategory item={salad} title={"salad"}></MenuCategory>
            </section>
            {/* soup*/}
            <section className='mb-5'>
                < SectionCover bgImage={soup2} heading={'SOUPS'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></ SectionCover>
                <MenuCategory item={soup} title={"soup"}></MenuCategory>
            </section>
        </section>
    )
}

export default Menu