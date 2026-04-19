import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { logo, profile } from "../imgContainer";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-5 lg:py-0 relative md:px-5 lg:px-0">
      {/* Mobile Menu Toggle */}
      <div
        className="lg:hidden text-[#D46211] cursor-pointer z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </div>

      <div className="flex justify-between items-center gap-7 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
        <div className="flex justify-start items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="hidden lg:block w-10 h-10 object-contain"
          />
          <h2 className="text-[#D46211] lg:text-[#0F172A] font-bold text-2xl lg:text-xl whitespace-nowrap tracking-tight">
            Sweet Delights
          </h2>
        </div>
        <div className="hidden lg:flex justify-between items-center gap-10">
          <p className="text-[#334155] text-[14px] hover:text-[#D46211] transition-colors cursor-pointer">
            <a href="#">Home</a>
          </p>
          <p className="text-[#334155] text-[14px] hover:text-[#D46211] transition-colors cursor-pointer">
            <a href="#">Shop</a>
          </p>
          <p className="text-[#334155] text-[14px] hover:text-[#D46211] transition-colors cursor-pointer">
            <a href="#">Our Story</a>
          </p>
          <p className="text-[#334155] text-[14px] hover:text-[#D46211] transition-colors cursor-pointer">
            <a href="#">Reviews</a>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-5">
        <div className="hidden lg:flex justify-baseline items-center gap-2 bg-[rgba(212,98,17,0.1)] py-2 px-5 rounded-3xl">
          <Search size={16} className="text-[#D46211] cursor-pointer" />
          <input
            type="text"
            placeholder="Search pastries..."
            className="text-[#D46211] outline-none bg-transparent text-[12px]"
          />
        </div>
        <div className="text-[#D46211] lg:bg-[rgba(212,98,17,0.1)] rounded-full lg:p-2 cursor-pointer z-50">
          <ShoppingCart size={24} className="w-6 h-6 lg:w-5 lg:h-5" />
        </div>
        <img
          src={profile}
          alt="user profile"
          className="hidden lg:block w-9 h-9 rounded-full object-cover"
        />
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-b py-6 px-8 flex flex-col gap-6 z-50 lg:hidden border-t border-gray-100 ">
          <a
            href="#"
            className="text-[#0F172A] font-semibold text-lg hover:text-[#D46211] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#0F172A] font-semibold text-lg hover:text-[#D46211] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </a>
          <a
            href="#"
            className="text-[#0F172A] font-semibold text-lg hover:text-[#D46211] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Story
          </a>
          <a
            href="#"
            className="text-[#0F172A] font-semibold text-lg hover:text-[#D46211] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Reviews
          </a>

          <div className="w-full h-px bg-gray-200 my-2"></div>

          <div className="flex items-center gap-4 cursor-pointer">
            <img
              src={profile}
              alt="user profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-[#0F172A] font-semibold text-lg">
              My Account
            </span>
          </div>

          {/* Mobile Search inside Menu */}
          <div className="flex items-center gap-3 bg-[rgba(212,98,17,0.1)] py-3 px-5 rounded-2xl mt-2">
            <Search size={18} className="text-[#D46211]" />
            <input
              type="text"
              placeholder="Search pastries..."
              className="text-[#D46211] outline-none bg-transparent w-full text-[14px]"
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
