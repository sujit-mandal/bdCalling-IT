

const FeatureCard = ({image, text}) => {
    return (
        <div className='p-5 bg-[#fff] space-y-5 flex flex-col items-center rounded-2xl'>
            <img src={image} alt="card image" className="w-full"/>
            <h3 className='text-lg font-semibold'>{text}</h3>
            <button className='bg-[#FFB700] text-[15px] py-2 px-12 rounded-lg font-medium'>View More</button>
        </div>
    );
};

export default FeatureCard;
