// Components
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="hero h-[700px] bg-mistralGreyMedium relative">
      <div className="hero-content h-[400px] p-5 w-full md:w-2/4 flex flex-col gap-4 sm:gap-7 absolute translate-y-1/3 md:translate-y-2/4 sm:translate-x-10 lg:translate-x-1/4">
        <div className="hero-heading text-4xl sm:text-5xl md:text-7xl font-heading font-semibold">
          <h1 className="text-white text-nowrap">Frontier AI in</h1>
          <h1 className="text-mistralOrange text-nowrap">your hands</h1>
        </div>
        <h2 className="subheading text:lg md:text-xl text-white">
          Open and portable generative AI for devs and businesses.
        </h2>
        <div className="button-container flex flex-col w-full sm:flex-row gap-4 mx-auto">
          <Button text="Learn More" />
          <Button text="Contact Us" />
        </div>
      </div>
    </div>
  )
};

export default Hero;
