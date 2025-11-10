import staffControl from "/src/assets/images/front-pages/features-overview/Staff Control and Safeguards.png";
import ordering from "/src/assets/images/front-pages/features-overview/ordering.png";
import reporting from "/src/assets/images/front-pages/features-overview/reporting.png";
import mobileIntegration from "/src/assets/images/front-pages/features-overview/Mobile and Integration.png";

const FeatureOverview = () => {
  const features = [
    {
      id: 1,
      img: ordering,
      title: "Ordering and Price Management",
      points: [
        "Price Comparison Across All Major Wholesalers.",
        "Pack Size and Brand Optimisation.",
        "Automatically Block Lines Above Drug Tariff.",
      ],
    },
    {
      id: 2,
      img: staffControl,
      title: "Staff Control and Safeguards",
      points: [
        "Staff-Level Order Review Tools (20+ Configurable Checks).",
        "Clear Audit Trail of Staff Orders.",
      ],
    },
    {
      id: 3,
      img: mobileIntegration,
      title: "Mobile and Integration",
      points: [
        "Barcode Scanning and Ordering via the DC Mobile App.",
        "Integration with All Major PMR Systems.",
        "Integrates Into Your Existing Workflow.",
      ],
    },
  ];

  return (
    <div className="bg-lightprimary/40 lg:py-24 py-12">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="w-full mb-12 text-center">
          <h2 className="sm:text-44 text-3xl font-bold leading-[48px]! text-dark dark:text-white">
            Features Overview
          </h2>
          <p className="text-17 leading-[32px] pt-4 text-darklink">
            Explore the capabilities tailored to your pharmacy’s needs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-12 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="lg:col-span-4 md:col-span-6 col-span-12"
            >
              <div
                className="flex flex-col rounded-2xl overflow-hidden shadow-md bg-white dark:bg-dark border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="object-top w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-dark dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <ul className="list-disc pl-5 text-darklink text-[15px] leading-relaxed space-y-2">
                    {feature.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureOverview;
