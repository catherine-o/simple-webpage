import { ClientCarouselSm } from "@/components";

import Hero from "./sections/Hero";
import Products from "./sections/Products";
import Testimonials from "./sections/Testimonials";
import Models from "./sections/Models";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ClientCarouselSm />
      <Products />
      <Testimonials />
      <Models />
    </>
  )
};

export default HomePage;
