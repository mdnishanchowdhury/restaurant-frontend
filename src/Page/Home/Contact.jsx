import React, { useEffect } from 'react'
import img from '../../assets/contact/banner.jpg'
import SectionCover from '../../components/SectionCover/SectionCover';
import SectionTitle from '../../components/SectionTile/SectionTitle';

function Contact() {
    useEffect(() => {
        document.title = 'Restaurant | Contact';
    }, []);
    return (
        <div>
            <section className='mb-16'>
                <SectionCover
                    bgImage={img}
                    heading={'CONTACT US'}
                    subHeading={'Would you like to try a dish?'}
                ></SectionCover>
            </section>

            <section className='mb-10'>
                <SectionTitle
                    subHeding={'---Visit Us---'}
                    heading={'OUR LOCATION'}
                ></SectionTitle>
            </section>

            <section className='mb-16 grid grid-cols-1 md:grid-cols-3 gap-4'>

                <div className='border-[#E8E8E8] border-1 h-[300px]'>
                    <div className='bg-[#D1A054] h-[88px]'></div>
                    <div className='bg-[#F3F3F3] text-center m-8 h-[160px] flex flex-col items-center justify-center'>
                        <h2 className='text-2xl font-medium'>PHONE</h2>
                        <p className='text-[16px] font-normal'>+38 (012) 34 56 789</p>
                    </div>


                </div>
                <div className='border-[#E8E8E8] border-1 '>
                    <div className='bg-[#F3F3F3] text-center m-8 h-[240px] flex flex-col items-center justify-center'>
                        <h2 className='text-2xl font-medium'>PHONE</h2>
                        <p className='text-[16px] font-normal'>+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className='border-[#E8E8E8] border-1 '>
                    <div className='bg-[#F3F3F3] text-center m-8 h-[240px] flex flex-col items-center justify-center'>
                        <h2 className='text-2xl font-medium'>PHONE</h2>
                        <p className='text-[16px] font-normal'>+38 (012) 34 56 789</p>
                    </div>
                </div>
            </section>

            <section className='mb-10'>
                <SectionTitle
                    subHeding={'---Send Us a Message---'}
                    heading={'CONTACT FORM'}
                ></SectionTitle>
            </section>

            <section>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact