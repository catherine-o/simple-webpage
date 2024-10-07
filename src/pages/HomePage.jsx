// Components
import Hero from "../components/Hero/Hero";
import { ClientCarouselSm } from "../components/ClientCarousel/ClientCarousel";
import Products from "../components/Products/Products";
import Testimonials from "../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ClientCarouselSm />
      <Products />
      <Testimonials />
    </>
  )
};

export default HomePage;
