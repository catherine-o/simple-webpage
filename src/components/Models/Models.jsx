const Models = () => {
  return (
    <div className="section-models bg-mistralGreyMedium p-4 sm:p-8 md:p-16">
      <div className="models-content bg-white max-w-[1150px] flex flex-col gap-6 mx-auto rounded p-10">
        <h1 className="heading font-heading font-bold text-mistralGreyText text-xl mt-4 sm:mt-0">
          Build with open-weight models
        </h1>
        <div className="models-text font-body text-mistralGreyText text-md text-center">
          <a
            className="text-mistralOrange underline"
            href="https://docs.mistral.ai/getting-started/models/models_overview/">
            Download them
          </a>&nbsp;for deployment in your own environment or use them on&nbsp;
          <a
            className="text-mistralOrange underline"
            href="https://console.mistral.ai/">
            La Plateform
          </a>&nbsp;at market-leading availability, speed, and quality control
        </div>
        <div className="card-container flex flex-col md:flex-row gap-7 w-full mx-auto">
          <div className="card-model bg-mistralGreyLight h-[120px] rounded p-5 grow">
            <h4 className="card-heading font-heading font-bold text-mistralGreyText text-lg">
              Mistral Nemo
            </h4>
          </div>
          <div className="card-model bg-mistralGreyLight h-[120px] rounded p-5 grow">
            <h4 className="card-heading font-heading font-bold text-mistralGreyText text-lg">
              Mistral Large 2
            </h4>
          </div>
        </div>
      </div>
    </div >
  )
};

export default Models;
