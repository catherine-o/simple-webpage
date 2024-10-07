// Components
import Hero from "../components/Hero/Hero";
import { ClientCarouselSm } from "../components/ClientCarousel/ClientCarousel";
import Products from "../components/Products/Products";
import Testimonials from "../components/Testimonials/Testimonials";
import Models from "../components/Models/Models";

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
