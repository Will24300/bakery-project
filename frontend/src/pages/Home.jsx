import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import OurStory from "../components/OurStory";

function Home() {
  return (
    <section className="py-5 lg:px-20 px-5 ">
      <NavBar />
      <Hero />
      <OurStory />
    </section>
  );
}

export default Home;
