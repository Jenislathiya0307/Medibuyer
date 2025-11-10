import { Icon } from "@iconify/react";
import comp1 from "/src/assets/images/front-pages/componies/1aah_logo.jpg";
import comp2 from "/src/assets/images/front-pages/componies/2alliance_logo.jpg";
import comp3 from "/src/assets/images/front-pages/componies/3phoenix_logo.jpg";
import comp4 from "/src/assets/images/front-pages/componies/4bns_logo.jpg";
import comp5 from "/src/assets/images/front-pages/componies/5bestway_logo.jpg";
import comp6 from "/src/assets/images/front-pages/componies/6sigma_logo.jpg";
import comp7 from "/src/assets/images/front-pages/componies/7trident_logo.jpg";
import comp8 from "/src/assets/images/front-pages/componies/8otc_logo.jpg";
import comp9 from "/src/assets/images/front-pages/componies/9medihealth_logo.jpg";
import comp10 from "/src/assets/images/front-pages/componies/10clarity_logo.jpg";
import comp11 from "/src/assets/images/front-pages/componies/11lexon_logo.jpg";
import comp12 from "/src/assets/images/front-pages/componies/12daylewis_logo.jpg";
import comp13 from "/src/assets/images/front-pages/componies/13cavendish_logo.jpg";
import comp14 from "/src/assets/images/front-pages/componies/14smartway_logo.jpg";
import comp15 from "/src/assets/images/front-pages/componies/15aver_logo.jpg";

export const Logos = [
  { img: comp1, link: "/" },
  { img: comp2, link: "/" },
  { img: comp3, link: "/" },
  { img: comp4, link: "/" },
  { img: comp5, link: "/" },
  { img: comp6, link: "/" },
  { img: comp7, link: "/" },
  { img: comp8, link: "/" },
  { img: comp9, link: "/" },
  { img: comp10, link: "/" },
  { img: comp11, link: "/" },
  { img: comp12, link: "/" },
  { img: comp13, link: "/" },
  { img: comp14, link: "/" },
  { img: comp15, link: "/" },
];

export const Highlights = () => {
  const ThemeFeature1 = [
    {
      key: "feature1",
      icon: "tabler:wand",
      title: "6 Theme Colors",
      bg: "bg-lightprimary",
      text: "text-primary",
    },
    {
      key: "feature3",
      icon: "tabler:brand-firebase",
      title: "Firebase",
      bg: "bg-lighterror",
      text: "text-error",
    },
    {
      key: "feature4",
      icon: "tabler:archive",
      title: "90+ Page Templates",
      bg: "bg-lightsuccess",
      text: "text-success",
    },
    {
      key: "feature5",
      icon: "tabler:adjustments",
      title: "45+ UI Components",
      bg: "bg-lightinfo",
      text: "text-info",
    },
    {
      key: "feature6",
      icon: "tabler:brand-tailwind",
      title: "Tailwind",
      bg: "bg-lightprimary",
      text: "text-primary",
    },
    {
      key: "feature7",
      icon: "tabler:diamond",
      title: "3400+ Font Icons",
      bg: "bg-lightwarning",
      text: "text-warning",
    },
  ];

  return (
    <>
      <div className="bg-lightprimary/40 py-[50px]">
        <div className="container mx-auto">
          <div className="flex w-full justify-center mb-12">
            <div className="text-center">
              <h2 className="sm:text-44 text-3xl font-bold leading-[48px]! text-dark dark:text-white text-center">Wholesale Partners</h2>
              <p className="text-17 leading-[32px] pt-4 text-darklink">Competitive Prices, Maximum Savings, Less Hassle</p>
            </div>
          </div>

          <div className="rounded-md overflow-hidden">
            
            {/* First Marquee Section */}
            <div className="marquee1-group flex gap-6">
              {[0, 1, 2, 3].map((_item, index) => (
                <div key={index} className="flex gap-6 marquee1-group">
                  {ThemeFeature1.map((item) => (
                    <div
                      key={item.key}
                      className={`py-5 px-8 rounded-[16px] flex flex-col items-center ${item.bg}`}
                    >

                      {/* ✅ Fixed Logo Marquee */}
                      <div className="marquee1-group logo-marquee flex gap-10 animate-marquee">
                      
                        {[0, 1].map((_set, idx) => (
                          <div key={idx} className="flex gap-6 items-center w-max">
                            {Logos.map((logo, i) => (
                              <img
                                key={i}
                                src={logo.img}
                                alt={
                                  logo.img.split("/").pop()?.replace(".jpg", "") ||
                                  "company-logo"
                                }
                                className="h-14 w-[120px] object-cover transition duration-300 rounded-[10px]"
                              />
                            ))}
                          </div>
                        ))}
                      </div>

                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Second Marquee Section */}
            {/* <div className="marquee2-group flex gap-6">
              {[0, 1, 2, 3, 4, 5].map((_feature, index) => (
                <div key={index} className="flex gap-6 mb-6">
                  {ThemeFeature2.map((item) => (
                    <div
                      key={item.key}
                      className={`py-5 px-8 rounded-[16px] flex gap-3 items-center ${item.bg}`}
                    >
                      <Icon
                        icon={item.icon}
                        className={`text-2xl shrink-0 ${item.text}`}
                      />
                      <p
                        className={`text-15 font-semibold whitespace-nowrap ${item.text}`}
                      >
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div> */}

            {/* Third Marquee Section */}
            {/* <div className="marquee1-group flex gap-6">
              {[0, 1, 2, 3].map((_item, index) => (
                <div key={index} className="flex gap-6 mb-6">
                  {ThemeFeature3.map((item) => (
                    <div
                      key={item.key}
                      className={`py-5 px-8 rounded-[16px] flex gap-3 items-center ${item.bg}`}
                    >
                      <Icon
                        icon={item.icon}
                        className={`text-2xl shrink-0 ${item.text}`}
                      />
                      <p
                        className={`text-15 font-semibold whitespace-nowrap ${item.text}`}
                      >
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div> */}

          </div>
        </div>
      </div>
    </>
  );
};
