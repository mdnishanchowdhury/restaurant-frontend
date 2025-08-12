import React, { useEffect } from 'react';
import img from '../../assets/contact/banner.jpg';
import SectionCover from '../../components/SectionCover/SectionCover';
import SectionTitle from '../../components/SectionTile/SectionTitle';

function Contact() {
    useEffect(() => {
        document.title = 'Restaurant | Contact';
    }, []);

    return (
        <div>
            {/* Banner */}
            <section className='mb-16'>
                <SectionCover
                    bgImage={img}
                    heading="CONTACT US"
                    subHeading="Would you like to try a dish?"
                />
            </section>

            {/* Our Location */}
            <section className='mb-10'>
                <SectionTitle
                    subHeading="---Visit Us---"
                    heading="OUR LOCATION"
                />
            </section>

            {/* Contact Info */}
            <section className='mb-16 grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='border border-[#E8E8E8]'>
                   
                    <div className='bg-[#F3F3F3] text-center m-8 h-[160px] flex flex-col items-center justify-center'>
                        <h2 className='text-2xl font-medium'>PHONE</h2>
                        <p className='text-[16px] font-normal'>+38 (012) 34 56 789</p>
                    </div>
                </div>

                <div className='border border-[#E8E8E8]'>
                    <div className='bg-[#F3F3F3] text-center m-8 h-[160px] flex flex-col items-center justify-center'>
                        <h2 className='text-2xl font-medium'>ADDRESS</h2>
                        <p className='text-[16px] font-normal'>123 Main Street, City, Country</p>
                    </div>
                </div>

                <div className='border border-[#E8E8E8]'>
                    <div className='bg-[#F3F3F3] text-center m-8 h-[160px] flex flex-col items-center justify-center'>
                        <h2 className='text-2xl font-medium'>WORKING HOURS</h2>
                        <p className='text-[16px] font-normal'>Mon - Fri: 08:00 - 22:00</p>
                        <p className='text-[16px] font-normal'>Sat - Sun: 10:00 - 20:00</p>
                    </div>
                </div>
            </section>

            {/* Message Section */}
            <section className='mb-10'>
                <SectionTitle
                    subHeading="---Send Us a Message---"
                    heading="MESSAGE"
                />
            </section>

            <section className="flex justify-center mb-16">
                <div className="bg-base-100 shadow-xl rounded-lg p-8 max-w-xl text-center">
                    <p className="text-lg text-gray-700">
                        Have any questions or feedback?  
                        We'd love to hear from you!  
                        Please contact us via phone or email and our team will respond as soon as possible.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Contact;
