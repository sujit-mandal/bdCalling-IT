import { CiLocationOn } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/LOGO white.png";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-start from-80% to-blue-end to-100%">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between text-white py-10 border-b-[2px] border-[#FFFFFF 30%]">
          <div>
            <h5 className="text-lg font-medium">Address</h5>
            <p className="w-[80%] pt-3">House- 75 Ka, Main Rd, Dhaka 1216</p>
            <span className="inline-flex items-center gap-2 cursor-pointer mt-2">
              <CiLocationOn /> View On Maps
            </span>
          </div>
          <div className="text-lg font-medium px-5">
            <h5>About Us</h5>
            <ul className="space-y-3 pt-3">
              <li className="cursor-pointer">Stories</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Airlines</li>
              <li className="cursor-pointer">Testimonials </li>
            </ul>
          </div>
          <div className="text-lg font-medium px-5">
            <h5>Join Us</h5>
            <ul className="space-y-3  pt-3">
              <li className="cursor-pointer">Terms Of Service</li>
              <li className="cursor-pointer">Primary Policy</li>
              <li className="cursor-pointer">Support</li>
            </ul>
          </div>
          <div className="px-5">
            <h5 className="text-lg font-medium  pt-3">Contact</h5>
            <p>
              +880 1234562890 <br /> +880 1345628980 <br /> +880 1234562890
            </p>
            <p>info@airbook.com</p>
          </div>
        </div>
        <div className="py-5 flex items-baseline justify-between">
          <img src={logo} alt="" />
          <p className="text-white font-bold">© Copyright AIRBOOK</p>
          <div className="flex items-center gap-3 text-white text-3xl pr-5">
            <FaFacebookF />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
