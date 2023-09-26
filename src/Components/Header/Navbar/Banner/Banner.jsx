

const Banner = () => {
    return (
        <div className="m-8">
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/mJ47R5J/Rectangle.png)' }}>
                    <div className="hero-overlay -bg-opacity-20"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <div>
                                <div>
                                    <h2 className="font-bold text-center lg:text-4xl md:text-2xl text-l">I Grow By Helping People In Need</h2>
                                </div>
                                <div className="flex items-center justify-center lg:mt-8 md:mt-4 mt-2">
                                    <input type="text" className="border-2 lg:w-[420px] lg:h-[40px] md:w-[300px] md:h-[40px] [50px] h-[40px] p-2 rounded-xl" placeholder="Search here...." />
                                    <button className="bg-[#FF444A] p-2 rounded-r-xl text-white font-semibold absolute lg:ml-96 md:ml-64 ml-36">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;