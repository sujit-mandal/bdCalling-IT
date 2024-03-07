

const AirlineCard = ({logo, airline, rating, reviews}) => {
  return (
    <div className="flex items-center gap-8">
      <img src={logo} alt="airline logo" />
      <div>
        <h5 className="text-[#006CE4] font-semibold">{airline}</h5>
        <div className="flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.0004 12.0817L3.71895 13.8821C3.01188 14.2703 2.18588 13.6436 2.32063 12.8216L2.9472 9.00692L0.292313 6.30493C-0.280076 5.72306 0.0358334 4.70911 0.825992 4.58854L4.49511 4.03224L6.13583 0.561085C6.48933 -0.187028 7.51056 -0.187028 7.86406 0.561085L9.50479 4.03224L13.174 4.58854C13.9641 4.70823 14.28 5.72211 13.7078 6.30493L11.0528 9.00692L11.6794 12.8216C11.8142 13.6437 10.9881 14.2703 10.2811 13.8821L7.0004 12.0817Z"
              fill="#FFB700"
            />
          </svg>
          <span className="text-[14px] font-medium">{rating} ( {reviews} Reviews )</span>
        </div>
      </div>
    </div>
  );
};

export default AirlineCard;
