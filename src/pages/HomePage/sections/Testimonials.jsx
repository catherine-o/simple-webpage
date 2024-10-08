import { ClientCarouselLg } from "@/components";

const Testimonials = () => {
  return (
    <div className="section-testimonials bg-white p-4 sm:p-8 md:p-16">
      <div className="testimonials-content max-w-[1150px] flex flex-col gap-6 mx-auto">
        <h1 className="heading font-heading font-bold text-mistralGreyText text-xl text-center mt-4 sm:mt-0">
          Our AI solutions can transform your core operations and products
        </h1>
        <h3 className="subheading font-body text-mistralGreyText text-md text-center">
          Discover how other companies are already integrating our services
        </h3>
        <ClientCarouselLg />
      </div>
    </div >
  )
};

export default Testimonials;
