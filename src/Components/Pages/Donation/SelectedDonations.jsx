import PropTypes from 'prop-types';
const SelectedDonations = ({ donationData }) => {
    const { image, category, title, price, text, text_button_bg, category_bg, card_bg, } = donationData;
    return (
        <div>
            <div className="card card-compact lg:w-[620px] lg:h-[283px] lg:ml-4 lg:mr-8 md:w-[350px] md:h-[283px] md:ml-4 md:mr-8 m-8 ">
                <div style={{ backgroundColor: card_bg }} className='flex rounded-xl'>
                    <div>
                    <figure><img className="lg:mt-0  h-[223px] mt-4" src={image} /></figure>
                    </div>
                    <div className="card-body">
                        <p className="p-3  mb-2 text-center font-semibold rounded-xl mt-4" style={{ background: category_bg, color: text, width: "89px" }}> {category} </p>
                        <h2 style={{ color: text }} className="card-title"> {title} </h2>
                        <h5 style={{ color: text }} className='font-semibold text-lg'> <span>$</span>{price} </h5>
                        <button style={{ backgroundColor: text_button_bg }} className="p-2 text-white font-semibold rounded-xl w-40">View Details</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

SelectedDonations.propTypes = {
    donationData: PropTypes.object.isRequired
}
export default SelectedDonations;