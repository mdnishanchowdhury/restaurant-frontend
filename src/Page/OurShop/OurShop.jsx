import { useEffect, useState } from 'react'
import img from '../../assets/shop/banner2.jpg'
import SectionCover from '../../components/SectionCover/SectionCover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from './FoodCard';
import useMenu from '../../Hooks/useMenu';
import { useParams } from 'react-router-dom';

function OurShop() {
    const categories =["salad","pizza","soup","dessert","drinks"]
     const { catagory } = useParams();
    console.log('catagory', catagory)

    const initialIndex =categories.indexOf(catagory);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
   

    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');


        useEffect(() => {
            document.title = 'Restaurant | Order Food';
        }, []);
    
    return (
        <div>
            {/* Cover */}
            <section className='mb-16'>
                <SectionCover
                    bgImage={img}
                    heading='OUR SHOP'
                    subHeading='Would you like to try a dish?'
                />
            </section>

            {/* Tabs */}
            <section>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel><FoodCard items={salad} /></TabPanel>
                    <TabPanel><FoodCard items={pizza} /></TabPanel>
                    <TabPanel><FoodCard items={soup} /></TabPanel>
                    <TabPanel><FoodCard items={dessert} /></TabPanel>
                    <TabPanel><FoodCard items={drinks} /></TabPanel>
                </Tabs>
            </section>
        </div>
    );
}

export default OurShop;
