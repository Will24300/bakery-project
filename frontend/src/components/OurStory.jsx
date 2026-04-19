import React from "react";
import { chief, four } from "../imgContainer";

function OurStory() {
  return (
    <section className="flex justify-between py-10 gap-10">
      <div className="w-[50%]">
        <p className="text-[#D46211] font-bold text-[14px] bg-[rgba(212,98,17,0.1)] w-25 px-3 py-1 rounded-2xl">
          SINCE 1995
        </p>

        <h2 className="text-[48px] font-black mt-3">Our Story</h2>
        <p className="text-[#475569] text-[17px] my-7 ">
          From a small family kitchen to your neighborhood favorite, Sweet
          Delights has been crafting memories with flour, sugar, and a lot of
          love for over two decades.
        </p>
        <p className="text-[#475569] text-[17px] mb-10 w-[90%]">
          We believe in the magic of waking up to the smell of fresh dough.
          Every loaf of bread and every delicate cupcake is made by hand using
          only the finest locally sourced ingredients. Our goal is simple: to
          bring a little extra sweetness to your daily routine.
        </p>
        <div className="flex justify-start gap-5">
          <div className="border-r pr-5">
            <p className="text-[#D46211] font-black text-[30px]">100%</p>
            <p className="text-[12px] text-[#64748B] font-bold">
              NATURAL INGREDIENTS
            </p>
          </div>
          <div>
            <p className="text-[#D46211] font-black text-[30px]">28+</p>
            <p className="text-[12px] text-[#64748B] font-bold">
              YEARS EXPERIENCE
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-8 w-[50%]">
        <div>
          <img src={chief} alt="chief" />
        </div>
        <div className="mt-20">
          <img src={four} alt="chief" />
        </div>
      </div>
    </section>
  );
}

export default OurStory;
