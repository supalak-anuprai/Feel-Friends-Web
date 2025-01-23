import { HeroSection } from "../Components/HeroSection/hero-section";
import { Carousel } from "../Components/Corousel/corousel-Component";

function Hero() {
  return (
    <div className="relative w-full h-screen">
      <Carousel />
      <div className="absolute top-20 left-10 mr-10 flex justify-center items-center bg-black bg-opacity-5">
        <HeroSection />
      </div>
    </div>
  );
}

export default Hero;
