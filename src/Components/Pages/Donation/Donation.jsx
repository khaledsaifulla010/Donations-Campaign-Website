import { useEffect, useState } from "react";
import SelectedDonations from "./SelectedDonations";



const Donation = () => {

    const [addDonation, setAddDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isSee, setIsSee] = useState(false)

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



                        <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:ml-8 lg:mr-16 lg:gap-x-8 md:gap-x-2">
                            {
                                 isSee ?addDonation.map(donationData => <SelectedDonations key={donationData.id} donationData={donationData}></SelectedDonations>)
                                 : 
                                 addDonation.slice(0, 4).map(donationData => <SelectedDonations key={donationData.id} donationData={donationData}></SelectedDonations>)
                            }
                        </div>
                        

                     {
                       addDonation.length> 4 && <button onClick={() => setIsSee(!isSee)} className="p-2 bg-green-400 lg:ml-[600px] md:ml-[350px] ml-[200px] mb-8 text-white font-semibold rounded-xl">  {isSee ? "See Less" : "See All"}</button>
                     }
                       
                      
                        
                    </div>
            }

        </div>
    );
};

export default Donation;