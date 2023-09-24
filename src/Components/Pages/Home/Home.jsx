import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Navbar/Banner/Banner";
import Main from "../../Main/Main";


const Home = () => {

    const AllDonationData = useLoaderData()
    return (
        <div>
           <Banner></Banner>
           <Main AllDonationData = {AllDonationData}></Main>
        </div>
    );
};

export default Home;