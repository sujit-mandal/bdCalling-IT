import blogImage1 from "../assets/image4.png";
import user1 from "../assets/userIcon1.png";

const BlogCard = ({blogImage, userIcon, userName, date, category, title}) => {
  return (
    <div className="bg-white rounded-3xl xl:rounded-[13px]">
      <img
        src={blogImage}
        alt="Blog Image"
        className="rounded-t-[13px] w-full"
      />
      <div className="p-5">
        <p className="text-[#FFB700] text-sm font-medium pb-2">
          {category}
          <span className="text-black font-normal  pl-3">{date}</span>
        </p>
        <h3 className="text-xl font-bold pb-5 border-b-[2px] border-[#1E1E1E 15%]">
          {title}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <div className=" flex items-center gap-2">
            <img src={userIcon} alt="user icon" />
            <p className="text-sm font-medium">{userName}</p>
          </div>
          <button className="pr-3 text-[#FFB700] font-bold cursor-pointer">
            Read More >>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
