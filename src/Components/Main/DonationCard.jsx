import PropTypes from 'prop-types';
const DonationCard = ({donationData}) => {

    const {image, title, category, category_bg, card_bg, text} = donationData || {};


    return (
        <div>
           <div className="card card-compact lg:w-[312px] lg:h-[283px] lg:ml-4 lg:mr-8 md:w-[350px] md:h-[283px] md:ml-4 md:mr-8 m-8">
                <div style={{backgroundColor: card_bg}}>
                <figure><img className="lg:mt-0  mt-4" src= {image} /></figure>
                <div className="card-body">
                    <p className="p-2 w-24 mb-2 text-center font-semibold rounded-xl" style={{background: category_bg , color: text}}> {category} </p>
                    <h2 style={{color: text}} className="card-title"> {title} </h2>
                    
                </div>
                </div>
           </div>
        </div>
    );
};

DonationCard.propTypes = {
    donationData:PropTypes.object.isRequired
}

export default DonationCard;