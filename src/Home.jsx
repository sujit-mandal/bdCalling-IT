import Navbar from "./components/Navbar";
import { BiRadioCircle } from "react-icons/bi";
import { BiRadioCircleMarked } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { VscCircleFilled } from "react-icons/vsc";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import deal1 from "./assets/discount1.png";
import deal2 from "./assets/discount2.png";
import deal3 from "./assets/discount3.png";
import airline1 from "./assets/american.png";
import emirates from "./assets/Emirates.png";
import bba from "./assets/BBA.png";
import malaysia from "./assets/Malaysia.png";
import turkish from "./assets/Turkish Airlines.png";
import blogImage1 from "./assets/image4.png";
import blogImage2 from "./assets/image5.png";
import blogImage3 from "./assets/image6.png";
import user1 from "./assets/userIcon1.png";
import user2 from "./assets/userIcon2.png";
import user3 from "./assets/userIcon3.png";
import FeatureCard from "./components/FeatureCard";
import DealsCard from "./components/DealsCard";
import AirlineCard from "./components/AirlineCard";
import BlogCard from "./components/BlogCard";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
const Home = () => {
  return (
    <div className="bg-[#E5E5E5]">
      <div className="bg-hero bg-no-repeat bg-cover bg-center pb-24">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <h3 className="text-white text-[40px] font-semibold ml-[52px] mt-12 mb-6">
            Welcome To <span className="text-[#006CE4]">AirBook</span>
          </h3>
          <div className="bg-white rounded-[10px]">
            <div className="p-12">
              <div className="flex items-center justify-between">
                <div className="flex gap-5">
                  <span className="inline-flex items-center bg-gray-200 gap-2 px-2 py-1 rounded-[4px]">
                    <BiRadioCircle className="text-2xl" /> One Way
                  </span>
                  <span className="inline-flex items-center bg-[#006CE4] text-white gap-2 px-2 py-1 rounded-[4px]">
                    <BiRadioCircleMarked className="text-2xl" /> Round Trip
                  </span>
                </div>
                <div className="flex gap-5 text-[#006CE4]">
                  <span className="inline-flex items-center bg-gray-200 gap-2 px-2 py-1 rounded-[4px]">
                    1 Traveller <MdKeyboardArrowDown className="text-2xl" />{" "}
                  </span>
                  <span className="inline-flex items-center bg-gray-200 gap-2 px-2 py-1 rounded-[4px]">
                    Economy <MdKeyboardArrowDown className="text-2xl" />{" "}
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between gap-1">
                <div className="flex items-center gap-2 border-[1px] border-gray-200 rounded-lg p-3">
                  <h1 className="font-semibold">DAC</h1>
                  <div className="border-l-[2px] pl-2">
                    <h3 className="font-semibold">Dhaka</h3>
                    <p>Hazrat Shahjalal International</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-[1px] border-gray-200 rounded-lg p-3">
                  <h1 className="font-semibold">CXB</h1>
                  <div className="border-l-[2px] pl-2">
                    <h3 className="font-semibold">Cox's Bazar </h3>
                    <p>Cox's Bazar International</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-[1px] border-gray-200 rounded-lg py-3 pl-3 pr-16">
                  <h1 className="font-semibold">03</h1>
                  <div className="border-l-[2px] pl-2">
                    <h3 className="font-semibold">October</h3>
                    <p>Tuesday, 2023</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-[1px] border-gray-200 rounded-lg py-3 pl-3 pr-16">
                  <h1 className="font-semibold">05</h1>
                  <div className="border-l-[2px] pl-2">
                    <h3 className="font-semibold">October</h3>
                    <p>Thursday, 2023</p>
                  </div>
                </div>
                <div className="bg-[#FFB700] py-[22px] px-7 rounded-lg text-white text-3xl">
                  <IoSearchSharp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <h2 className="pt-14 pb-10 text-3xl font-semibold">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-3 gap-5">
          <FeatureCard
            image={image1}
            text={"Stopover opportunity in İstanbul with Turkish Airlines"}
          ></FeatureCard>
          <FeatureCard
            image={image2}
            text={
              "Discover the timeless city with Touristanbul of Turkish Airlines"
            }
          ></FeatureCard>
          <FeatureCard
            image={image3}
            text={"the best of Abu Dhabi with exclusive Etihad Airways!"}
          ></FeatureCard>
        </div>
      </div>
      <div className="">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="pt-14 pb-10 text-3xl font-semibold">Deals & Offers</h2>
          <div className="grid grid-cols-3 gap-5">
            <DealsCard image={deal1}></DealsCard>
            <DealsCard image={deal2}></DealsCard>
            <DealsCard image={deal3}></DealsCard>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <span className="text-gray-300">
            <VscCircleFilled />
          </span>
          <span className="text-[#FFB700]">
            <VscCircleFilled />
          </span>
          <span className="text-gray-300">
            <VscCircleFilled />
          </span>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <h2 className="pt-14 pb-10 text-3xl font-semibold">Popular Airlines</h2>
        <div className="grid grid-cols-4 gap-x-5 gap-y-10">
          <AirlineCard
            logo={airline1}
            airline={"American Airlines"}
            rating={"5"}
            reviews={"753"}
          />
          <AirlineCard
            logo={emirates}
            airline={"Emirates"}
            rating={"5"}
            reviews={"753"}
          />
          <AirlineCard
            logo={bba}
            airline={"Biman Bangladesh Airlines"}
            rating={"4"}
            reviews={"783"}
          />
          <AirlineCard
            logo={malaysia}
            airline={"Malaysia Airlines"}
            rating={"3 "}
            reviews={"723"}
          />
          <AirlineCard
            logo={turkish}
            airline={"Turkish Airlines"}
            rating={"5"}
            reviews={"830"}
          />
          <AirlineCard
            logo={airline1}
            airline={"American Airlines"}
            rating={"5"}
            reviews={"753"}
          />
          <AirlineCard
            logo={emirates}
            airline={"Emirates"}
            rating={"5"}
            reviews={"753"}
          />
          <AirlineCard
            logo={bba}
            airline={"Biman Bangladesh Airlines"}
            rating={"4"}
            reviews={"783"}
          />
          <AirlineCard
            logo={malaysia}
            airline={"Malaysia Airlines"}
            rating={"3 "}
            reviews={"723"}
          />
          <AirlineCard
            logo={turkish}
            airline={"Turkish Airlines"}
            rating={"5"}
            reviews={"830"}
          />
          <AirlineCard
            logo={airline1}
            airline={"American Airlines"}
            rating={"5"}
            reviews={"753"}
          />
          <AirlineCard
            logo={emirates}
            airline={"Emirates"}
            rating={"5"}
            reviews={"753"}
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto relative">
        <h2 className="pt-14 pb-10 text-3xl font-semibold">Travel Blog</h2>
        <div className="grid grid-cols-3 gap-x-5 gap-y-10">
          <BlogCard
            blogImage={blogImage1}
            userIcon={user1}
            userName={"Ys Stafen"}
            category={"Work And Travel"}
            title={"Embracing The Digital Nomad Lifestyle The Digital Nomad"}
            date={"16 Septembar 23"}
          />
          <BlogCard
            blogImage={blogImage2}
            userIcon={user2}
            userName={"Aria Montague"}
            category={"Historical"}
            title={"Historical Journeys: Stepping Back in Time Through Travel"}
            date={"14  Septembar 23"}
          />
          <BlogCard
            blogImage={blogImage3}
            userIcon={user3}
            userName={"Elara Thorne"}
            category={"Sustainable Tourism"}
            title={
              "Sustainable Tourism:Preserving The Planet While Seeing It All"
            }
            date={"10 Septembar 23"}
          />
        </div>
        <div className="bg-[#FFB700] p-2 rounded-full absolute left-5 top-[40%]">
          <MdKeyboardArrowLeft />
        </div>
        <div className="bg-[#FFB700] p-2 rounded-full absolute right-5 top-[40%]">
          <MdKeyboardArrowRight />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
