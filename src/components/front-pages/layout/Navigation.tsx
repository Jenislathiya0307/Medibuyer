import { Badge } from "flowbite-react";
import { Link, useLocation } from "react-router";

const FrontNav = [
  {
    menu: "Home",
    link: "/",
    badge: false,
  },
  {
    menu: "Problem",
    link: "/frontend-pages/problem",
    badge: false,
  },
  {
    menu: "Solution",
    link: "/frontend-pages/solution",
    badge: false,
  },
  {
    menu: "How It Works",
    link: "/frontend-pages/how-it-works",
    badge: false,
  },
  {
    menu: "Features",
    link: "/frontend-pages/features",
    badge: false,
  },
  {
    menu: "Wholesalers",
    link: "/frontend-pages/wholesalers",
    badge: false,
  },
  {
    menu: "Forms",
    link: "/frontend-pages/forms",
    badge: false,
  },
  {
    menu: "Pricing",
    link: "/frontend-pages/pricing",
    badge: false,
  },
  {
    menu: "About",
    link: "/frontend-pages/about",
    badge: false,
  },
  {
    menu: "Contact Us",
    link: "/frontend-pages/contact-us",
    badge: false,
  },
];

const Navigation = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      <ul className="flex xl:flex-row flex-col xl:items-center">
        {FrontNav.map((item, index) => (
          <li
            key={index}
            className={`rounded-full font-semibold text-base px-4 py-1 text-ld ${
              pathname == item.link
                ? "lg:bg-lightprimary text-primary"
                : "text-sky dark:text-white"
            }`}
            data-discover="true"
          >
            <Link
              to={item.link}
              className="flex gap-3 items-center text-[14px] relative group"
            >
              {item.menu}
              {item.badge == true ? <Badge color={"lightprimary"}>New</Badge> : null}

              {/* Underline */}
              <span
                className={`absolute left-0 bottom-[-10px] h-[2px] w-full origin-left bg-blue-500 transition-transform duration-300 ease-out 
                ${
                  pathname == item.link
                    ? "scale-x-100" // show underline by default for active link
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigation;
