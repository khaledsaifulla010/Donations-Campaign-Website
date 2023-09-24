
const Home = () => {
    return (
        <div>
            <h2 className="font-bold text-center lg:text-4xl md:text-2xl text-l lg:mt-16 md:mt-16 m-6">I Grow By Helping People In Need</h2>
            <div className="flex items-center justify-center">
                <input type="text" className="border-2 lg:w-[420px] lg:h-[40px] md:w-[300px] md:h-[40px] [50px] h-[40px] p-2 rounded-xl" placeholder="Search here...." />
                <button className="bg-[#FF444A] p-2 rounded-r-xl text-white font-semibold absolute lg:ml-96 md:ml-64 ml-36">Search</button>
            </div>
        </div>
    );
};

export default Home;