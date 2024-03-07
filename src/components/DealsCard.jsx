

const DealsCard = ({image}) => {
    return (
        <div className='flex items-center gap-5 bg-white rounded-[8px]'>
            <img src={image} alt="discount price image" />
            <div>
                <p className="text-sm mb-1">With bKash Payment only</p>
                <p className="text-[#006CE4] font-bold">Up to 14% discount on the base fare of domestic flights</p>
            </div>
        </div>
    );
};

export default DealsCard;