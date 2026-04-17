import { hero_bg } from "../imgContainer";

function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${hero_bg})` }}
      className="bg-cover bg-center bg-no-repeat h-[80vh] mt-10 text-white rounded-[30px] flex justify-center items-center relative"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-[30px]"></div>

      <div className="w-2/4 text-center relative z-10">
        <h1 className="text-[72px] font-black leading-22 mb-5">
          Freshly Baked <span className="text-[#D46211]">Happiness</span> Every
          Day
        </h1>
        <p>
          Indulge in the finest handcrafted pastries and artisan breads, made
          with traditional recipes and a dash of local love.
        </p>
        <div className="mt-5 flex justify-center items-center gap-10">
          <button className="bg-[#D46211] py-2.5 px-7 cursor-pointer rounded-2xl font-bold">
            Shop Now
          </button>
          <button className="bg-white/10 backdrop-blur-md py-2.5 px-7 cursor-pointer rounded-2xl font-bold">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
