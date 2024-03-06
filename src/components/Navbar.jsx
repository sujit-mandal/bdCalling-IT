import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8">
      <div className="flex items-center gap-5">
        <img src={logo} alt="logo" />
        <h3 className="text-[#FFB700] text-3xl font-bold">
          Air<span className="text-[#006CE4] font-medium">Book</span>
        </h3>
      </div>
      <div>
        <ul className="flex items-center gap-10 text-xl font-semibold">
          <li>Blog</li>
          <li>Offer</li>
          <li>Airlines</li>
          <li>About</li>
        </ul>
      </div>
      <button
        className="bg-gradient-to-r from-blue-start from-80% to-blue-end to-100%
 py-2 px-8 text-white text-xl font-medium rounded-[10px]"
      >
        Sign in
      </button>
    </div>
  );
};

export default Navbar;
