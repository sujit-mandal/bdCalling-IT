import email from "../assets/mail.png";

const Newsletter = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-between py-14">
      <img src={email} alt="Mailbox Logo" />
      <div className="space-y-3">
        <h1 className="text-[40px] font-bold w-[70%]">Subscribe to our Newsletter!</h1>
        <p className="text-[#006CE4] font-medium text-xl w-[70%]">Subscribe to our newsletter and stay updated.</p>
        <input type="email" placeholder="Your Email" className="py-2 placeholder:pl-3 placeholder:text-sm placeholder:text-[#006CE4] placeholder:opacity-45 rounded-[13px] border-[1px] border-[#006CE4] w-full"/>
        <button className="block w-full py-2 bg-[#FFB700] rounded-[13px] font-medium text-lg">Subscribe </button>
      </div>
    </div>
  );
};

export default Newsletter;
