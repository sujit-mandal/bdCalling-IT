import tesimonialImage1 from "../assets/user.png";
import tesimonialImage2 from "../assets/user2.png";
import tesimonialImage3 from "../assets/user3.png";
import quation from "../assets/quation.png";
import arrowLeft from "../assets/Arrow 2.png";
import arrowRight from "../assets/Arrow 1.png";

const Testimonial = () => {
  return (
    <>
      <h2 className="pt-24 pb-10 text-3xl max-w-screen-xl mx-auto font-semibold">
        Deals & Offers
      </h2>
      <div className="bg-[#006CE4]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-6 gap-5 py-14">
          <div className="relative">
            <img src={tesimonialImage3} alt="" className="w-48 h-full" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#006CE4] opacity-50"></div>{" "}
            <img
              src={arrowLeft}
              alt="left arrow"
              className="absolute top-[50%] left-[30%]"
            />
          </div>
          <div className="flex items-center gap-10 bg-white rounded-[15px] col-span-4">
            <img src={tesimonialImage1} alt="" className="w-48 h-full" />
            <div className="p-10">
              <p className="w-[80%]">
                "Unforgettable journeys with John and Sarah! Their travel
                expertise turned our dreams into reality. Can't wait to explore
                with them again!"
              </p>
              <h3 className="text-lg font-medium mt-5">Emily</h3>
              <p>Adventure Enthusiast</p>
              <div className="flex items-center gap-[6px]">
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
              </div>
              <div className="flex justify-end">
                <img src={quation} alt="quatation image" />
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={tesimonialImage2} alt="" className="w-48 h-full" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#006CE4] opacity-50"></div>{" "}
            <img
              src={arrowRight}
              alt="right arrow"
              className="absolute top-[50%] right-[30%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
