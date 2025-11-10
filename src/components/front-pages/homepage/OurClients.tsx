
import { Icon } from "@iconify/react";
import { Link } from "react-router";
const Feature = [
  {
    icon: "tabler:chart-bubble",
    title: "Time & Productivity Issues",
    subtitle: "Too much time wasted switching between supplier websites or making calls to compare prices. Inability to see the real net cost when supplier rebates and discounts are unclear.",
    bgcolor: "bg-lighterror",
    color: "text-error",
  },
  {
    icon: "tabler:building-store",
    title: "Purchase Mistakes & Losses",
    subtitle: "Incorrect purchases leading to unnecessary costs by ordering above the Drug Tariff. Emergency orders placed with costly suppliers without checking for better options.",
    bgcolor: "bg-lightprimary",
    color: "text-primary",
  },
  {
    icon: "material-symbols:category-outline",
    title: "Stock Control & Transparency",
    subtitle: "Lack of visibility across branches results in overstocking or reordering existing items. Difficulty tracking inventory levels, causing waste and inefficiency.",
    bgcolor: "bg-lightsuccess",
    color: "text-success",
  },
  {
    icon: "material-symbols:earthquake",
    title: "Accountability & Tracking",
    subtitle: "No easy way to see who placed which order or identify where errors occurred. Limited audit trails make it hard to maintain control and oversight.",
    bgcolor: "bg-lightgray dark:bg-darkgray",
    color: "text-dark dark:text-white",
  },
];

const OurClients = () => {
  return (
    <>
      <div className="lg:py-24 py-12 bg-lightprimary/40">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-5 col-span-12">
              <h2 className="sm:text-44 text-3xl font-bold leading-[48px]! text-dark dark:text-white">
                Why Pharmacy Ordering Needs a Smarter Solution
              </h2>
              <p className="text-17 text-darklink py-6">
                Pharmacy teams spend valuable time managing complex ordering processes that slow operations and increase costs. Traditional methods make it difficult to compare true prices, track stock accurately, and maintain accountability. A smarter, streamlined solution is needed to eliminate inefficiencies, reduce costly mistakes, and bring full visibility to every order.
              </p>
              {/* <Link
                 to={"/"}
                className="text-dark dark:text-white text-15 font-bold underline decoration-2 underline-offset-[6px] text-primary-ld"
              >
                Request a Callback
              </Link> */}
            </div>
            <div className="lg:col-span-7 col-span-12 lg:ps-5 ">
              <div className="grid grid-cols-12 md:gap-12 gap-6">
                {Feature.map((item, index) => (
                  <div className="md:col-span-6 col-span-12" key={index}>
                    <div
                      className={`h-12 w-12 shrink-0 flex items-center justify-center rounded-lg ${item.bgcolor}`}
                    >
                      <Icon
                    icon={item.icon}
                    className={`${item.color}`}
                    height={24}
                  />
                    </div>
                    <h4 className="font-bold text-dark dark:text-white py-5 text-22">
                      {item.title}
                    </h4>
                    <p className="text-15 text-darklink  leading-6 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
           
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
