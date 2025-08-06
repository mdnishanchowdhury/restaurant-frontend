import { useEffect, useState } from 'react'
import SectionTitle from '../../components/SectionTile/SectionTitle'
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import { RiDoubleQuotesL } from "react-icons/ri";

function Testimonials() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section>
            <section>
                <SectionTitle
                    subHeding={'---What Our Clients Say---'}
                    heading={'TESTIMONIALS'}
                ></SectionTitle>

                <div className='my-20'>
                    <Swiper navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            reviews.map(review =>
                                <SwiperSlide key={review._id}>
                                    <div className=' text-center flex flex-col items-center space-y-1 px-24'>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                        />
                                        <RiDoubleQuotesL className='w-[100px] h-[100px]' />
                                        <p className='text-xl font-normal'>{review.details}</p>
                                        <h2 className='text-3xl text-[#CD9003] font-mediums '>{review.name}</h2>
                                    </div>
                                </SwiperSlide>

                            )
                        }
                    </Swiper>
                </div>
            </section>
        </section>
    )
}

export default Testimonials