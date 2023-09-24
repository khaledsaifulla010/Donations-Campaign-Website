import DonationCard from "./DonationCard";
import PropTypes from 'prop-types';
const Main = ({AllDonationData}) => {
    console.log(AllDonationData);
    return (
        <div>
            <div className="lg:grid lg:grid-cols-4 lg:gap-y-4 md:grid md:grid-cols-2">
                {
                    AllDonationData. map(donationData => <DonationCard key={donationData.id} donationData={donationData}></DonationCard>)
                }
            </div>
        </div>
    );
};

Main.propTypes = {
    AllDonationData:PropTypes.object.isRequired
}
export default Main;