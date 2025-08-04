import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import image1 from '../../assets/home/slide1.jpg';
import image2 from '../../assets/home/slide2.jpg';
import image3 from '../../assets/home/slide3.jpg';
import image4 from '../../assets/home/slide4.jpg';
import image5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../../components/SectionTile/SectionTitle';

function Category() {
    const categories = [
        { img: image1, title: 'Salads' },
        { img: image2, title: 'Soups' },
        { img: image3, title: 'Pizzas' },
        { img: image4, title: 'Desserts' },
        { img: image5, title: 'Salads' },
    ];

    return (
        <div className="mb-8 mmax-w-7xl mx-auto space-y-16 mt-16">
            <section>
                <SectionTitle
                    subHeding={"---From 11:00am to 10:00pm---"}
                    heading={"ORDER ONLINE"}
                >
                </SectionTitle>
            </section>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {categories.map((item, index) => (
                    <SwiperSlide key={index} className="relative group ">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-[450px] object-cover "
                        />
                        <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-4xl uppercase font-normal text-white">
                            {item.title}
                        </h2>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Category;
