
import ErrorImg from "/src/assets/images/backgrounds/bg-coming-soon.png";
import { Button } from "flowbite-react";
import { Link } from "react-router";

const Error = () => (
  <>
  <div className="h-screen flex items-center justify-center bg-lightprimary/40">
    <div className="text-center w-full relative">
      <img src={ErrorImg} alt="error" className="mb-4 max-w-[800px] mx-auto w-full relative z-1"/>
      {/* <h1 className="text-dark dark:text-white text-[40px] font-bold uppercase mb-6">Coming Soon!</h1> */}
      {/* <h6 className="text-xl text-dark dark:text-white">
        This page you are looking for could not be found.
      </h6> */}
      <Button
        color={"primary"}
        as={Link}
        to="/frontend-pages/homepage"
        className="w-fit mt-6 mx-auto uppercase"
      >
        Go Back to Home
      </Button>
    </div>
  </div>
</>
);

export default Error;
