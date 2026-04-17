import { Search, ShoppingCart } from "lucide-react";
import { logo, profile } from "../imgContainer";

function NavBar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex justify-between items-center gap-7">
        <div className="flex justify-start items-center gap-2">
          <img src={logo} alt="logo" />
          <h2 className="text-[#0F172A] font-bold text-xl">Sweet Delights</h2>
        </div>
        <div className="flex justify-between items-center gap-10">
          <p className="text-[#334155] text-[14px] ">
            <a href="#">Home</a>
          </p>
          <p className="text-[#334155] text-[14px] ">
            <a href="#">Shop</a>
          </p>
          <p className="text-[#334155] text-[14px] ">
            <a href="#">Our Story</a>
          </p>
          <p className="text-[#334155] text-[14px] ">
            <a href="#">Reviews</a>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-5">
        <div className="flex justify-baseline items-center gap-2 bg-[rgba(212,98,17,0.1)] py-2 px-5 rounded-3xl">
          <Search size={16} className="text-[#D46211] cursor-pointer" />
          <input
            type="text"
            placeholder="Search pastries..."
            className="text-[#D46211] outline-none bg-transparent text-[12px]"
          />
        </div>
        <div className="text-[#D46211] bg-[rgba(212,98,17,0.1)] rounded-3xl p-2 cursor-pointer">
          <ShoppingCart size={20} />
        </div>
        <img src={profile} alt="user profile" className="w-7.5" />
      </div>
    </nav>
  );
}

export default NavBar;
