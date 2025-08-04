import img1 from '../../assets/home/chef-service.jpg'

function BistroBanner() {
    return (
        <div className='mb-16'>
            <div
                className="hero lg:min-h-[572px]"
                style={{
                    backgroundImage:
                        `url(${img1})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-center lg:w-[1096px] lg:h-[333px] bg-white text-black">
                    <div className="max-w-[762px]">
                        <h1 className="mb-5 text-5xl font-normal">Bistro Boss</h1>
                        <p className=" text-[16px] font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BistroBanner