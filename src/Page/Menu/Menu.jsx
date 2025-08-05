import { useEffect } from 'react';
import img1 from '../../assets/menu/banner3.jpg'
import img2 from '../../assets/home/chef-service.jpg'
import SectionCover from '../../components/SectionCover/SectionCover';
import PropularMenu from '../Home/PropularMenu';
function Menu() {
    useEffect(() => {
        document.title = 'Restaurant | Menu';
    }, []);
    return (
        <div>
            {/*  1 */}
            <section className='mb-5'>
                < SectionCover
                    bgImage={img1}
                    heading={'OUR MENU'}
                    subHeading={'Would you like to try a dish?'}
                ></ SectionCover>
            </section>
            <PropularMenu></PropularMenu>
            {/*  2 */}
            <section className='mb-5'>
                < SectionCover
                    bgImage={img2}
                    heading={'DESSERTS'}
                    subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></ SectionCover>
            </section>
            <PropularMenu></PropularMenu>
            {/* 3 */}
            <section className='mb-5'>
                < SectionCover
                    bgImage={img2}
                    heading={'PIZZA'}
                    subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></ SectionCover>
            </section>
            <PropularMenu></PropularMenu>
            {/* 4 */}
            <section className='mb-5'>
                < SectionCover
                    bgImage={img2}
                    heading={'SALADS'}
                    subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></ SectionCover>
            </section>
            <PropularMenu></PropularMenu>
            {/*  5 */}
            <section className='mb-5'>
                < SectionCover
                    bgImage={img2}
                    heading={'SOUPS'}
                    subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></ SectionCover>
            </section>
            <PropularMenu></PropularMenu>

        </div>
    )
}

export default Menu