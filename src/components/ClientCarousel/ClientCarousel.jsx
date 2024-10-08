import arrowLeft from "@/assets/icons/arrowLeft.svg";
import arrowRight from "@/assets/icons/arrowRight.svg";
import arrowLeftCircle from "@/assets/icons/arrowLeftCircle.png";
import arrowRightCircle from "@/assets/icons/arrowRightCircle.png";
import carouselDots from "@/assets/icons/carouselDots.png";

export const ClientCarouselSm = () => {
  return (
    <div className="client-carousel-sm h-[100px] bg-white flex items-center justify-between px-10">
      <img
        className="icon-arrow h-5 cursor-pointer fill-mistralGreyLight"
        src={arrowLeft}
        alt="Scroll left"
      />
      <img
        className="icon-arrow h-5 cursor-pointer fill-mistralGreyLight"
        src={arrowRight}
        alt="Scroll right"
      />
    </div>
  )
};

export const ClientCarouselLg = () => {
  return (
    <div className="client-carousel-lg w-full lg:w-[95%] max-w-[1050px] md:mt-6 mx-auto">
      <div className="with-arrows flex items-center gap-10">
        <img
          className="icon-arrow h-10 hidden lg:block cursor-pointer fill-mistralGreyLight"
          src={arrowLeftCircle}
          alt="Navigate to previous testimonial"
        />
        <div className="card-carousel h-[400px] border rounded grow" />
        <img
          className="icon-arrow h-10 hidden lg:block cursor-pointer fill-mistralGreyLight"
          src={arrowRightCircle}
          alt="Navigate to next testimonial"
        />
      </div>
      <img
        className="icon-dots w-[55px] cursor-pointer mx-auto lg:hidden"
        src={carouselDots}
        alt="Carousel navigation"
      />
    </div>
  )
};
