import img1 from '../../assets/home/chef-service.jpg'
import img2 from '../../assets/home/featured.jpg'
import SectionTitle from '../../components/SectionTile/SectionTitle'

function Featured() {
    return (
        <div className='mb-16 text-white '>
            <div
                className="hero lg:min-h-[572px] bg-fixed"
                style={{
                    backgroundImage:
                        `url(${img1})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-start lg:h-[848px]  ">

                    <div className="max-w-[762px ">
                        <section >
                            <SectionTitle
                                subHeding={'---Check it out---'}
                                heading={'FROM OUR MENU'}
                            ></SectionTitle>
                        </section>

                        <div className='md:flex gap-16 mt-12 px-16 items-center'>
                            <img src={img2} alt="" className='w-[548px] h-[350px] object-cover' />
                            <div>
                                <h2 className="mb-2 text-4xl font-normal">March 20, 2023</h2>
                                <h1 className="mb-2 text-4xl font-normal">WHERE CAN I GET SOME?</h1>
                                <p className=" text-2xl font-normal text-justify ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                                </p>
                               <div className='mt-6' >
                                 <button className="btn btn-outline uppercase border-0 border-b-4 ">Read More</button>
                               </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured