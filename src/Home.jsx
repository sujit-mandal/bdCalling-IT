import Navbar from "./components/Navbar";
import { BiRadioCircle } from "react-icons/bi";
import { BiRadioCircleMarked } from "react-icons/bi";
const Home = () => {
  return (
    <div className="">
      <div className="bg-hero bg-no-repeat bg-cover bg-center">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <h3 className="text-white text-[40px] font-semibold ml-[52px] mt-12">
            Welcome To <span className="text-[#006CE4]">AirBook</span>
          </h3>
          <div>
            <div>
              <div className="">
                <span className="inline-flex items-center ">
                  <BiRadioCircle /> One Way
                </span>
                <span>
                  <BiRadioCircleMarked /> Round Trip
                </span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
