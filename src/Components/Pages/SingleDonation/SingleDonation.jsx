import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleDonationCard from "./SingleDonationCard";


const SingleDonation = () => {

    const [donationData, setDonationData] = useState({})
    const { id } = useParams()

    const AllDonationData = useLoaderData();

    useEffect(() => {
        const findDonationData = AllDonationData.find((donationData) => donationData.id == id);
        setDonationData(findDonationData);

    }, [id, AllDonationData]);

    return (
        <div>
            <SingleDonationCard donationData= {donationData}></SingleDonationCard>
           
        </div>
    );
};

export default SingleDonation;