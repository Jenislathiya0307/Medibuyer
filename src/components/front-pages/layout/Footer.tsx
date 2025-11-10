
import { Tooltip } from "flowbite-react";
import logo from "/src/assets/images/logos/logo-icon.svg";
import LightLogo from '/src/assets/images/logos/new-logo.png';
import { Link } from "react-router";
import facebook from "/src/assets/images/front-pages/background/facebook.svg"
import twitter from "/src/assets/images/front-pages/background/twitter.svg"
import instagram from "/src/assets/images/front-pages/background/instagram.svg"

export const Footer = () => {
  const navLinks1 = [
    {
      key: "link1",
      title: "Cards",
      link: "/widgets/cards",
    },
    {
      key: "link2",
      title: "Pricing",
      link: "/theme-pages/pricing",
    },
    {
      key: "link3",
      title: "Account Settings",
      link: "/theme-pages/account-settings",
    },
    {
      key: "link4",
      title: "FAQ",
      link: "/theme-pages/faq",
    },
    {
      key: "link5",
      title: "Casl",
      link: "/theme-pages/casl",
    },
  ];
  const navLinks2 = [
    {
      key: "home",
      title: "Home",
      link: "/",
    },
    {
      key: "problem",
      title: "Problem",
      link: "/#problem",
    },
    {
      key: "solution",
      title: "Solution",
      link: "/#solution",
    },
    {
      key: "how-it-works",
      title: "How It Works",
      link: "/#how-it-works",
    },
    {
      key: "features",
      title: "Features",
      link: "/#features",
    },
    {
      key: "wholesalers",
      title: "Wholesalers",
      link: "/#wholesalers",
    },
    {
      key: "pricing",
      title: "Pricing",
      link: "/#pricing",
    },
    {
      key: "about",
      title: "About",
      link: "/#about",
    },
  ];
  const navLinks3 = [
    {
      key: "link1",
      title: "Contact Us",
      link: "/frontend-pages/contact",
    },
    {
      key: "link2",
      title: "Forms",
      link: "/frontend-pages/forms",
    },
    {
      key: "link3",
      title: "Remote Support",
      link: "/frontend-pages/remote-support",
    },
    {
      key: "link4",
      title: "Android App",
      link: "/frontend-pages/android-app",
    },
    {
      key: "link5",
      title: "iOS App",
      link: "/frontend-pages/ios-app",
    },
  ];
  const navLinks4 = [
    {
      key: "link1",
      title: "Terms",
      link: "/frontend-pages/terms",
    },
    {
      key: "link2",
      title: "Privacy",
      link: "/frontend-pages/privacy",
    },
  ];


  return (
    <>
      <div className="bg-dark">
        <div className="container mx-auto ">
          <div className="border-b border-darkborder lg:py-24 py-12">
            <div className="grid grid-cols-12 gap-6 ">
              <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                <h4 className="text-17 text-white font-semibold mb-8">
                  About Us
                </h4>
                <div className="flex flex-col gap-4">
                  {navLinks2.map((item) => {
                    return (
                      <Link
                        key={item.key}
                        to={item.link}
                        className="text-sm text-white hover:text-primary block"
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                <h4 className="text-17 text-white font-semibold mb-8">
                  Help
                </h4>
                <div className="flex flex-col gap-4">
                  {navLinks3.map((item) => {
                    return (
                      <Link
                        key={item.key}
                        to={item.link}
                        className="text-sm text-white hover:text-primary block"
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                <h4 className="text-17 text-white font-semibold mb-8">
                  Legal
                </h4>
                <div className="flex flex-col gap-4">
                  {navLinks4.map((item) => {
                    return (
                      <Link
                        key={item.key}
                        to={item.link}
                        className="text-sm text-white hover:text-primary block"
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                <img src={LightLogo} alt="logo" className="mb-6 max-w-[180px]" />
                {/* <div className="flex flex-col gap-4">
                  {navLinks1.map((item) => {
                    return (
                      <Link
                        key={item.key}
                        to={item.link}
                        className="text-sm text-white hover:text-primary block"
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </div> */}
                <p className="text-[#fff]">Time is an intangible cost factor in any pharmacy and every little of it that you save can be used to accomplish something else. One of the best features of this software is that it brings all the suppliers together on one order screen. No more hassle of opening 4 different windows.</p>
              </div>
              {/* <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                <h4 className="text-17 text-white font-semibold mb-8">
                  Follow us
                </h4>
                <div className="flex items-center gap-5">
                  <Tooltip
                    content="Facebook"
                    placement="bottom"
                    className="shrink-0"
                  >
                    <Link to="/">
                      <img
                        src={facebook}
                        height={22}
                        width={22}
                        alt="icon"
                      />
                    </Link>
                  </Tooltip>
                  <Tooltip
                    content="Twitter"
                    placement="bottom"
                    className="shrink-0"
                  >
                    <Link to="/">
                      <img
                        src={twitter}
                        height={22}
                        width={22}
                        alt="icon"
                      />
                    </Link>
                  </Tooltip>
                  <Tooltip
                    content="Instagram"
                    placement="bottom"
                    className="shrink-0"
                  >
                    <Link to="/">
                      <img
                        src={instagram}
                        height={22}
                        width={22}
                        alt="icon"
                      />
                    </Link>
                  </Tooltip>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container mx-auto ">
          <div className="flex justify-center items-center flex-wrap py-6">
            <div className="">
              {/* <img src={logo} alt="logo" className="h-6 w-6" /> */}
              <p className="text-15 text-white ">
                © 2025 Medibuyer Ltd. All Rights Reserved.
              </p>
            </div>
            {/* <p className="text-15 text-white  flex items-center gap-1 md:pt-0 pt-3">
              Produced by
              <Link
                className="text-white text-primary-ld"
                to="https://www.wrappixel.com/"
              >
                Wrappixel.
              </Link>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};
