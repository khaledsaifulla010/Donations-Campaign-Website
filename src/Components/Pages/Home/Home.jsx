import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Navbar/Banner/Banner";
import Main from "../../Main/Main";
import { useEffect, useState } from "react";


const Home = () => {

    const [search, setSearch] = useState('')
    const [AllDonationData, setAllDonationData] = useState([]);
    const d = useLoaderData();
    console.log(d)
    useEffect(() => {

        setAllDonationData(d);
        if (search.toLowerCase() === 'food') {
            const foodDonation = d.filter(donation => donation.category.toLowerCase() === 'food');
            setAllDonationData(foodDonation);

        }
       else if (search.toLowerCase() === 'health') {
            const healthDonation = d.filter(donation => donation.category.toLowerCase() === 'health');
            setAllDonationData(healthDonation);

        }
       else if (search.toLowerCase() === 'clothing') {
            const clothingDonation = d.filter(donation => donation.category.toLowerCase() === 'clothing');
            setAllDonationData(clothingDonation);

        }
       else if (search.toLowerCase() === 'education') {
            const educationDonation = d.filter(donation => donation.category.toLowerCase() === 'education');
            setAllDonationData(educationDonation);

        }
        else{
            setAllDonationData(d)
        }
    }, [search, d])
    return (
        <div>
            <Banner setSearch={setSearch}></Banner>
            <Main AllDonationData={AllDonationData}></Main>
        </div>
    );
};

export default Home;