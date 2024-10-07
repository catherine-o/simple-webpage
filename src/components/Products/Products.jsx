// Components
import Button from "../Button/Button";

const Products = () => {
  return (
    <div className="section-products bg-mistralGreyLight p-4 sm:p-8 md:p-16">
      <div className="products-content max-w-[1150px] mx-auto">
        <h1 className="heading font-heading font-bold text-mistralGreyText text-xl mt-4 sm:mt-0">
          Cutting edge technology for any size project
        </h1>
        <div className="card-container flex flex-col lg:flex-row gap-7 my-7">
          <div className="card-product bg-mistralGreyMedium h-[400px] rounded p-8 grow relative">
            <h2 className="card-heading font-heading font-bold text-mistralGreyText text-lg">
              Le Chat_
            </h2>
            <Button text="Try It Out!" classProps="absolute bottom-10 right-14" />
          </div>
          <div className="card-product bg-mistralGreyMedium h-[400px] rounded p-8 grow relative">
            <h2 className="card-heading font-heading font-bold text-mistralGreyText text-lg">
              La Plateforme_
            </h2>
            <Button text="Start Today" classProps="absolute bottom-10 right-14" />
          </div>
        </div>
      </div>
    </div >
  )
};

export default Products;
