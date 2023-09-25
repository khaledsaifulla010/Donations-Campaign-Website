import PropTypes from 'prop-types';
const SingleDonationCard = ({donationData}) => {

    const { image, category,description, price,text_button_bg  } = donationData ;
    return (
        <div>
            <div className="hero lg:w-[1200px] lg:h-[600px] lg:ml-32 lg:mb-12 rounded-xl ">
                <div className="hero-content ">
                    <div className="">
                        <img className="lg:w-[1000px] lg:h-[500px] lg:mb-4" src= {image} />
                        <button style={{backgroundColor: text_button_bg}} className="p-2 text-white font-semibold rounded-xl absolute -mt-24 ml-4">Donate $ {price}</button>
                        <h1 className="text-5xl font-bold text-left"> {category} </h1>
                        <p className="py-6 text-lg"> {description} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleDonationCard.propTypes = {
    donationData:PropTypes.object.isRequired
}
export default SingleDonationCard;