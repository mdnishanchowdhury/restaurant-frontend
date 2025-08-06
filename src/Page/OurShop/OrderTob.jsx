import FoodCard from './FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
function OrderTob({ items }) {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <section className='mb-16'>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center place-items-center px-4 md:px-0">
                        {
                            items.map(item =>
                                <FoodCard key={item._id} item={item}></FoodCard>
                            )
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default OrderTob;