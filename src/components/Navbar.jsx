import logo from "../assets/LOGO.png";
const Navbar = () => {
  return (
    <div className="bg-nav-bg py-4 mx-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <img src={logo} alt="logo" />
        <div>
          <ul className="flex items-center gap-10 text-xl font-semibold list-none">
            <li>Blog</li>
            <li>Offer</li>
            <li>Airlines</li>
            <li>About</li>
          </ul>
        </div>
        <button
          className="bg-gradient-to-r from-blue-start from-80% to-blue-end to-100%
 py-2 px-8 text-white text-xl font-medium rounded-[10px] border-none"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
