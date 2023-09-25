import { useEffect, useState } from "react";
import SelectedDonations from "./SelectedDonations";



const Donation = () => {

    const [addDonation, setAddDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);

    useEffect(() => {
        const donation = JSON.parse(localStorage.getItem("donations"));

        if (donation) {
            setAddDonation(donation)
        }
        else {

            setNoFound("No Data Found");
        }
    }, [])
    console.log(addDonation)
    return (
        <div>

            {
                noFound ? <h1 className="text-center text-5xl font-semibold mt-48">{noFound}</h1> :
                    <div>

                        <div className="lg:grid lg:grid-cols-2 lg:ml-8 lg:mr-16 gap-x-8">
                            {
                                addDonation.map(donationData => <SelectedDonations key={donationData.id} donationData={donationData}></SelectedDonations>)
                            }
                        </div>

                    </div>
            }

        </div>
    );
};

export default Donation;